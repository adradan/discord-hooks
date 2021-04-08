import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
    const [session, loading] = useSession();
    let message;

    if (!session) {
        message = (
            <div>
                Not Signed In
                <br />
                <button onClick={() => signIn()}>Sign in</button>
            </div>
        );
    } else {
        message = (
            <div>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    }

    return <div>{message}</div>;
}
