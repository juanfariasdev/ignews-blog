import { GetStaticPaths, GetStaticProps } from "next"
import { useSession } from "next-auth/react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { RichText } from "prismic-dom"
import { useEffect } from "react"

import { IoIosArrowBack } from "react-icons/io";

import { getPrismicClient } from "../../../services/prismic"

import styles from '../post.module.scss';

type Post = {
    slug?: string,
    title?: string,
    image?: any,
    image_alt?: string,
    excerpt?: string,
    updateAt?: string,
    content?: any

}
interface IResponse {
    uid?: string,
    last_publication_date?: string,
    data: Post
}
interface IPostsPreviewProps {
    post: Post
}

export default function PostPreview({post}: IPostsPreviewProps){
    const {data:session} = useSession()
    const router = useRouter()

    useEffect(()=>{
        if(session?.ActiveSubscription){
            router.push(`/posts/${post.slug}`)
        }
    },[session])

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
                        priority={true}
                    />
                </div>
        </section>

        <main>
            <article className={`${styles.postContent} ${styles.previewContent}`}>
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
                <div className={styles.continueReading}>
                    Gostaria de continuar Lendo?
                    <Link href="/"><a>Inscreva-se agora 🤗</a></Link> 
                </div>
        </main>
            
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () =>  {
    return {
        paths: [],
        fallback: 'blocking'
    }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug;

    const prismic = getPrismicClient()

    const response: IResponse = await prismic.getByUID('posts-blog',String(slug), {})

    const post = {
            slug,
            title: response.data.title?? "",
            image: response.data.image.url?? "",
            image_alt: RichText.asText(response.data.content),
            content: RichText.asHtml(response.data.content.splice(0,5)),
            updateAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
    }

    return {
        props: {
            post
        },
        revalidate: 60 * 30
    }

} 