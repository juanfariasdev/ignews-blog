import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { RichText } from "prismic-dom"

import { IoIosArrowBack } from "react-icons/io";

import { getPrismicClient } from "../../services/prismic"

import styles from './post.module.scss';

type Post = {
    slug?: string,
    title?: string,
    image?: any,
    image_alt?: string,
    excerpt?: string,
    updateAt?: string,
    content?: string

}
interface IResponse {
    uid?: string,
    last_publication_date?: string,
    data: Post
}
interface IPostsProps {
    post: Post
}

export default function Post({post}: IPostsProps){
    const router = useRouter()


    return(
        <>
        <Head>
            <title>{post.title} | Ig.News</title>
        </Head>
        <section>
                <div style={{width: '100%', height: '450px', position: 'relative'}}>
                    <Image
                        src={post.image} alt={post.image_alt}
                        layout='fill'
                        objectFit='cover' 
                    />
                </div>
        </section>

        <main>
            <article className={styles.post}>
                <button className={styles.back} type="button" onClick={() => router.back()}> 
                <span><IoIosArrowBack/></span>
                
                Voltar
                </button>

                <div className={styles.heading}>
                    <h1>{post.title}</h1>
                    <time>{post.updateAt}</time>
                </div>

                <div 
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: post.content}}/>
            </article>
        </main>
            
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
    const session = await getSession({ req })
    const slug = params?.slug;

    const prismic = getPrismicClient(req)

    const response: IResponse = await prismic.getByUID('posts-blog',String(slug), {})

    const post = {
            slug,
            title: response.data.title?? "",
            image: response.data.image.url?? "",
            image_alt: RichText.asText(response.data.content),
            content: RichText.asHtml(response.data.content),
            updateAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
    }

    return {
        props: {
            post
        }
    }

}