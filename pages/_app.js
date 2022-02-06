import { SessionProvider, useSession } from 'next-auth/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

const Auth = ({ children }) => {
  const { data: session, status } = useSession({ required: true });
  console.log(status);
  const isUser = !!session?.user;

  if (isUser) {
    return children;
  }

  return <div>Loading...</div>;
};

export default MyApp;
