import React from 'react';
import Link from 'next/link';
import { getSession, useSession } from 'next-auth/react';

import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import InformationCheckOut from '../../components/checkout/information_checkout';

const CheckOutPage = () => {
  const {
    data: { user },
    status,
  } = useSession();
  const [currentStep, setCurrentStep] = React.useState(2);
  const [checkOutSteps, setCheckOutSteps] = React.useState([
    {
      title: 'Cart',
      url: '/carts',
      step: 1,
      isActive: false,
    },
    {
      title: 'Infomation',
      url: '#',
      step: 2,
      isActive: false,
    },
    {
      title: 'Shipping',
      url: '#',
      step: 3,
      isActive: false,
    },
    {
      title: 'Payment',
      url: '#',
      step: 4,
      isActive: false,
    },
  ]);

  return (
    <React.Fragment>
      <Row className='justify-content-center'>
        <Col sm={12} md={12} lg={{ offset: 1, span: 5 }} className='p-5'>
          <Link href='/'>
            <a>
              <h2 className='text-uppercase'>Uniqlo</h2>
            </a>
          </Link>

          <Breadcrumb>
            {checkOutSteps.map((step) => (
              <Breadcrumb.Item
                key={step.step}
                href={step.url}
                active={currentStep === step.step}
                onClick={() => setCurrentStep(step.step)}
              >
                {step.title}
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
          {currentStep === 2 && <InformationCheckOut user={user} />}
        </Col>
        <Col sm={12} md={12} lg={{ offset: 1, span: 5 }}>
          <div
            style={{ backgroundColor: '#eee', height: '100vh' }}
            className='p-5'
          >
            right
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

CheckOutPage.auth = true;

export const getServerSideProps = async ({ req }) => {
  return {
    props: {
      session: await getSession({ req }),
    },
  };
};

export default CheckOutPage;
