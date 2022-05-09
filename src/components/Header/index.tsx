import Image from "next/image"
import Link from "next/link"
import { SignInButton } from "../SignInButton"

import styles from './styles.module.scss'

function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href={"/"}><a><Image src="/images/logo.svg" alt= "Logo IG.News" width='100%' height='100%'/></a></Link>
                <nav>
                <a className={styles.active}>Home</a>
                <a>Posts</a>
            </nav>

            <SignInButton />
            </div>
            
        </header>
    )
}

export { Header }