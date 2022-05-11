import { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';

import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';
import Link from 'next/link';


type Image = {
    url: string,
}

type Post = {
    slug?: string,
    title?: string,
    image?: any,
    image_alt?: string,
    excerpt?: string,
    updateAt?: string,
    content?: any[]

}

interface IPostsProps {
    posts: Post[]
}
interface IResponse {
    uid?: string,
    last_publication_date?: string,
    data?: Post
}

export default function Posts({posts}: IPostsProps){
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <section className={styles.blogTitle}>
                <div>
                    <h1>Blog da IG.News</h1>
                    <p>Junte-se a milhares de devs e acelere na direção dos seus objetivos. Transforme sua carreira em uma jornada de evolução contínua através das melhores tecnologias.</p>
                </div>
                
            </section>

            <main className={styles.container}>

                <div className={styles.posts}>
                    {
                        posts.map(post =>(
                            <article key={post.slug}>
                                <Link href={`/posts/${post.slug}`} prefetch={true}>
                                <a>
                                    <div className={styles.picture}>
                                        <Image loader={() => post.image} src={post.image} alt={post.image_alt} width={500} height={500} layout="raw" />
                                    </div>
                                    <div className={styles.info}>
                                        <h2>{post.title}</h2>
                                        <p>{post.excerpt}</p>
                                        <time>{post.updateAt}</time>
                                    </div>
                                </a>
                                </Link>
                            </article>
                        ))
                    }
                </div>
            </main>
        </>
    );
}


export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'posts-blog')
    ], {
        fetch: ['posts-blog.title', 'posts-blog.image', 'posts-blog.content'],
        pageSize: 100    
    })

    const posts = response.results.map((post: IResponse) => {
        return {
            slug: post.uid?? "",
            title: post.data.title?? "",
            image: post.data.image.url?? "",
            image_alt: (post.data.content.find((content, key) => content.text !== '' && key > 2)?.text) ?? (post.data.content.find(content => content.text !== '')?.text ?? ''),
            excerpt: post.data.content.find(content => content.text !== '')?.text ?? '',
            updateAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return {
        props: { posts },
        revalidate: 60 * 30
    }
}