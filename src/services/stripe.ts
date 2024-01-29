import Stripe from 'stripe';

import packageInfo from '../../package.json'

const { version, name } = packageInfo

export const stripe = new Stripe(
    process.env.STRIPE_API_KEY,
    {
        apiVersion: '2023-10-16',

        appInfo: {
            name,
            version
        }
    }
);