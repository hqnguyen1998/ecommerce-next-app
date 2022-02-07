import React from 'react';
import Image from 'next/image';
import fetch from 'isomorphic-unfetch';
import { Button, Col, Row } from 'react-bootstrap';

import apiUrl from '../../libs/getApiUrl';
import LayoutComponent from '../../components/layout/layout';

const SingleProductPage = ({ product: { data } }) => {
  return (
    <LayoutComponent pageTitle={data.product_title}>
      <Row className='mt-5'>
        <Col xs={12} md={6}>
          <Image
            src={data.product_image}
            alt={data.product_title}
            width={500}
            height={500}
          />
        </Col>
        <Col xs={12} md={6}>
          <h5 className='text-capitalize'>{data.product_title}</h5>
          <p className='text-secondary'>{data.product_description}</p>
          <p className='text-danger'>${data.product_prices}</p>
          <Button variant='outline-dark'>Add to cart</Button>
        </Col>
      </Row>
    </LayoutComponent>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(`${apiUrl}/api/product`, {
    method: 'GET',
  });

  const products = await res.json();

  const paths = await products.data.map((product) => ({
    params: { product_slug: product.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${apiUrl}/api/product/${params.product_slug}`, {
    method: 'GET',
  });

  const product = await res.json();

  return {
    props: {
      product: product,
    },
    revalidate: 10,
  };
};

export default SingleProductPage;
