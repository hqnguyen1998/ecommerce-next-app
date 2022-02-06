import React from 'react';
import { useRouter } from 'next/router';
import { useSession, signIn } from 'next-auth/react';
import { Button } from 'react-bootstrap';
import LayoutComponent from '../../components/layout/layout';

const LoginAndRegisterPage = () => {
  const router = useRouter();
  const { status } = useSession();

  React.useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  return (
    <LayoutComponent pageTitle='Account - Uniqlo'>
      <Button onClick={() => signIn()}>Sign in</Button>
    </LayoutComponent>
  );
};

LoginAndRegisterPage.auth = true;

export default LoginAndRegisterPage;
