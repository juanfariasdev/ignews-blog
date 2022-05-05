import styles from './styles.module.scss'

interface ISubscribeButtonProps {
    priceId: string;
}

function SubscribeButton({priceId}: ISubscribeButtonProps){
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