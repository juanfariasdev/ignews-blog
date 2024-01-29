import { cloneElement, ReactElement } from "react"

import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"

interface IProps extends LinkProps {
    children: ReactElement,
    activeClassName?: string
}

function ActiveLink({children, activeClassName, href, ...rest}: IProps){

    const { asPath } = useRouter();

    const className = asPath === href? activeClassName : '';
    
    return(
        <Link {...rest} href={String(href)} className={className}>
            {cloneElement(children, {
                className
            })}
        </Link>
        
    )
}



export {ActiveLink}