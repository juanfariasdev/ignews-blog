import styles from './styles.module.scss'

function SubscribeButton(){
    return(
        <button
        className={styles.subscribeButton}
        type="button"
        >
            Subscribe now
        </button>
    )
}

export { SubscribeButton }