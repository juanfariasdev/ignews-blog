import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream'
import Stripe from "stripe";
import { stripe } from "../../services/stripe";

async function buffer(readable: Readable){
    const chunks = [];

    for await (const chunk of readable){
        chunks.push(
            typeof chunk === "string" ? Buffer.from(chunk) : chunk
        );
    }

    return Buffer.concat(chunks);
}

export const config = {
    api: {
        bodyParser: false
    }
}

const relevantEvents = new Set([
    'checkout.session.completed'
])


async function WebHooks(req: NextApiRequest, resp: NextApiResponse) {

    if(req.method === 'POST'){
    const buf = await buffer(req)
    const secret = req.headers['stripe-signature']

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET)
    } catch (err){
        return resp.status(400).send(`Webhook error: ${err.message}`)
    }

    const { type } = event;

    if(relevantEvents.has(type)){
        try{
        switch(type){
            case 'checkout.session.completed':
                break;
            default:
                throw new Error('Unhandled event')
        }
    }   catch(err){
        return resp.json({ error: 'Webhook handler failed.'})
    }
        console.log('Evento recebido', event);

    }


    resp.json({ received: true })
    

    } else{
        resp.setHeader('Allow', 'POST')
        resp.status(405).end('Method not allowed')
    }
}

export default WebHooks