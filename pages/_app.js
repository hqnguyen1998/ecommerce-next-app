import { SessionProvider, useSession } from 'next-auth/react';
import { AppWrapper } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AppWrapper>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </AppWrapper>
    </SessionProvider>
  );
}

const Auth = ({ children }) => {
  const { data: session } = useSession({ required: true });

  const isUser = !!session?.user;

  if (isUser) {
    return children;
  }

  return <div>Loading...</div>;
};

export default MyApp;
