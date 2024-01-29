import Image from "next/image"
import Link from "next/link"

import { ActiveLink } from "../ActiveLink"
import { SignInButton } from "../SignInButton"

import styles from './styles.module.scss'

function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href={"/"}><Image src="/images/logo.svg" alt= "Logo IG.News" width={150} height={50} layout="raw"/></Link>
                <nav>
                    <ul className={styles.nav_menu}>
                        <li>
                            <ActiveLink activeClassName={styles.active} href={"/"}><>Home</></ActiveLink>
                        </li>
                        <li>
                            <ActiveLink activeClassName={styles.active}  href={"/posts"}><>Posts</></ActiveLink>
                        </li>
                    </ul>
                </nav>

            <SignInButton />
            </div>
            
        </header>
    )
}

export { Header }