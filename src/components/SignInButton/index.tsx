
import { useState } from 'react';
import {FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

function SignInButton(){
    const [isUserLoggedIn, setLoggedIn] = useState(false);

    return isUserLoggedIn? 
    (
        <button 
        className={styles.signInButton}
        type="button"
        onClick={()=>{
            setLoggedIn(!isUserLoggedIn)
        }}
        >
            <FaGithub color="#04d361"/>
            Juan Pablo
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
        className={styles.signInButton}
        type="button"
        onClick={()=>{
            setLoggedIn(!isUserLoggedIn)
        }}
        >
            <FaGithub color="#eba417"/>
            Sign in with Github
        </button>
    )
}


export { SignInButton }