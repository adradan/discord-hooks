import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.Discord({
            clientId: process.env.NEXT_SERVER_CLIENT_ID || '',
            clientSecret: process.env.NEXT_SERVER_CLIENT_SECRET || '',
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },
    database: process.env.NEXT_SERVER_MONGO_URI,
    secret: process.env.NEXT_SERVER_SECRET,
    session: {
        maxAge: 604800, // 7 Days
        updateAge: 24 * 60 * 60, // 24 Hours
    },
});
