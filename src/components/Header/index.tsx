import Image from "next/image"
import Link from "next/link"

import { ActiveLink } from "../ActiveLink"
import { SignInButton } from "../SignInButton"

import styles from './styles.module.scss'

function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href={"/"}><a><Image src="/images/logo.svg" alt= "Logo IG.News" width='150px' height='50px' layout="raw"/></a></Link>
                <nav>
                    <ul className={styles.nav_menu}>
                        <li>
                            <ActiveLink activeClassName={styles.active} href={"/"} prefetch={true}><a>Home</a></ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName={styles.active}  href={"/posts"} prefetch={true}><a>Posts</a></ActiveLink>
                        </li>
                    </ul>
                </nav>

            <SignInButton />
            </div>
            
        </header>
    )
}

export { Header }