import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';


type Post = {
    slug: string,
    title: string,
    image: string,
    excerpt: string,
    updateAt: string,

}

interface IPostsProps {
    posts: Post
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
                    <article>
                        <a href="#">
                            <div className={styles.picture}>
                                <img src="https://blog.rocketseat.com.br/content/images/size/w2000/2022/01/Rocketseat-jquery-historia.jpg" alt=""/>
                            </div>
                            <div className={styles.info}>
                                <h2>Creating a Monorepo with Lerna & Yarn Workspace</h2>
                                <p>In this guide, you will lear how to create a Monorepo to manage multiple packages with a share build, test and release process </p>
                                <time>9 de Maio de 2022</time>
                            </div>
                        </a>
                    </article>
                    <article>
                        <a href="#">
                            <div className={styles.picture}>
                                <img src="https://blog.rocketseat.com.br/content/images/size/w2000/2022/01/Rocketseat-jquery-historia.jpg" alt=""/>
                            </div>
                            <div className={styles.info}>
                                <h2>Creating a Monorepo with Lerna & Yarn Workspace</h2>
                                <p>In this guide, you will lear how to create a Monorepo to manage multiple packages with a share build, test and release process </p>
                                <time>9 de Maio de 2022</time>
                            </div>
                        </a>
                    </article>
                    <article>
                        <a href="#">
                            <div className={styles.picture}>
                                <img src="https://blog.rocketseat.com.br/content/images/size/w2000/2022/01/Rocketseat-jquery-historia.jpg" alt=""/>
                            </div>
                            <div className={styles.info}>
                                <h2>Creating a Monorepo with Lerna & Yarn Workspace</h2>
                                <p>In this guide, you will lear how to create a Monorepo to manage multiple packages with a share build, test and release process </p>
                                <time>9 de Maio de 2022</time>
                            </div>
                        </a>
                    </article>
                    <article>
                        <a href="#">
                            <div className={styles.picture}>
                                <img src="https://blog.rocketseat.com.br/content/images/size/w2000/2022/01/Rocketseat-jquery-historia.jpg" alt=""/>
                            </div>
                            <div className={styles.info}>
                                <h2>Creating a Monorepo with Lerna & Yarn Workspace</h2>
                                <p>In this guide, you will lear how to create a Monorepo to manage multiple packages with a share build, test and release process </p>
                                <time>9 de Maio de 2022</time>
                            </div>
                        </a>
                    </article>
                    <article>
                        <a href="#">
                            <div className={styles.picture}>
                                <img src="https://blog.rocketseat.com.br/content/images/size/w2000/2022/01/Rocketseat-jquery-historia.jpg" alt=""/>
                            </div>
                            <div className={styles.info}>
                                <h2>Creating a Monorepo with Lerna & Yarn Workspace</h2>
                                <p>In this guide, you will lear how to create a Monorepo to manage multiple packages with a share build, test and release process </p>
                                <time>9 de Maio de 2022</time>
                            </div>
                        </a>
                    </article>
                    <article>
                        <a href="#">
                            <div className={styles.picture}>
                                <img src="https://blog.rocketseat.com.br/content/images/size/w2000/2022/01/Rocketseat-jquery-historia.jpg" alt=""/>
                            </div>
                            <div className={styles.info}>
                                <h2>Creating a Monorepo with Lerna & Yarn Workspace</h2>
                                <p>In this guide, you will lear how to create a Monorepo to manage multiple packages with a share build, test and release process </p>
                                <time>9 de Maio de 2022</time>
                            </div>
                        </a>
                    </article>
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

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            image: post.data.image.url;
            excerpt: post.data.content.find(content => content.type === "paragraph")?.text ?? '',
            updateAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return {
        props: {posts}
    }
}