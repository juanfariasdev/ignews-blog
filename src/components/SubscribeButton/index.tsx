import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

import styles from './styles.module.scss'

interface ISubscribeButtonProps {
    priceId: string;
}

function SubscribeButton({priceId}: ISubscribeButtonProps){
    const {data:session} = useSession();
    const router = useRouter();

   async  function handleSubscribe(){
        if (!session){
            signIn('github')
            return;
        }
        

        if(session.ActiveSubscription){
            router.push('/posts');
            return;
        }

        try {
            const response = await api.post('/subscribe')


            const { sessionId } = response.data;

            const stripe = await getStripeJs();

            stripe.redirectToCheckout({sessionId})
        }
        catch(err){
            alert(err.message)
        }
    }

    return(
        <button
        className={styles.subscribeButton}
        type="button"
        onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    )
}

export { SubscribeButton }