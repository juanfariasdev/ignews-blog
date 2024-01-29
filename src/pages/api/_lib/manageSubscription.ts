import {query as q} from 'faunadb';

import { fauna } from '../../../services/fauna';
import { stripe } from '../../../services/stripe';

export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
    createAction = false
    ){

    const userRef = await fauna.query(
        q.Select(
            "ref", 
            q.Get(
                q.Match(
                    q.Index('user_by_stripe_customer_id'),
                    customerId
                )
            )
        )
    )

    const subscription = await stripe.subscriptions.retrieve(subscriptionId)

    const subscriptionData = {
        id: subscription.id,
        userId: userRef,
        status: subscription.status,
        price_id: subscription.items.data[0].price.id
    }
    console.log(createAction);
    if(createAction){
        await fauna.query(
            q.If(
                q.Not(
                  q.Exists(
                    q.Match(
                      q.Index('subscription_by_user'),
                      q.Casefold(userRef)
                    )
                  )
                ),
                q.Create(
                    q.Collection('subscription'),
                    { data: subscriptionData}
                ),
                q.Replace(
                    q.Select(
                        "ref",
                        q.Get(
                  q.Match(
                    q.Index('subscription_by_user'),
                    q.Casefold(userRef)
                  ),
                        )
                ),
                { data: subscriptionData }
              ),
            )
        )
    } else{
        await fauna.query(
            q.Replace(
                q.Select(
                    "ref",
                    q.Get(
                        q.Match(
                            q.Index('subscription_by_id'),
                            subscriptionId
                        )
                    )
                ),
                {data: subscriptionData}
            )
        )
    }

    
        
}
