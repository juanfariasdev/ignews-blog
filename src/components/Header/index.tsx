import Image from "next/image"
import Link from "next/link"

import { ActiveLink } from "../ActiveLink"
import { SignInButton } from "../SignInButton"

import styles from './styles.module.scss'

function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href={"/"}><a><Image src="/images/logo.svg" alt= "Logo IG.News" width='100%' height='100%'/></a></Link>
                <nav>
                    <ActiveLink activeClassName={styles.active} href={"/"} prefetch><a>Home</a></ActiveLink>
                    <ActiveLink activeClassName={styles.active}  href={"/posts"} prefetch><a>Posts</a></ActiveLink>
                </nav>

            <SignInButton />
            </div>
            
        </header>
    )
}

export { Header }