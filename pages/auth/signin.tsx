import { getSession, providers, signIn } from 'next-auth/client';

export default function SignIn(props: any) {
    const { foundProviders } = props;
    const providers = Object.values(foundProviders).map((provider: any) => {
        console.log(provider);
        return (
            <div key={provider.name}>
                <button onClick={() => signIn(provider.id)}>
                    Sign in with {provider.name}
                </button>
            </div>
        );
    });

    return <div>{providers}</div>;
}

export async function getServerSideProps(ctx: any) {
    const session = await getSession(ctx);
    if (session) {
        ctx.res.writeHead(302, { Location: '/' });
        ctx.res.end();
        // Kept getting error with an empty object, workaround for now, find true fix later
        // Props must be returned as a plain object from getServerSideProps
        return {
            props: {
                session: true,
            },
        };
    }

    const foundProviders = await providers();
    return {
        props: { foundProviders },
    };
}
