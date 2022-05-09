import Head from 'next/head';
import styles from './styles.module.scss';

function Posts(){
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


export default Posts