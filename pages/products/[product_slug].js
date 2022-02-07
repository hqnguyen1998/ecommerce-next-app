import React from 'react';
import fetch from 'isomorphic-unfetch';
import apiUrl from '../../libs/getApiUrl';
import LayoutComponent from '../../components/layout/layout';

const SingleProductPage = ({ product: { data } }) => {
  return (
    <LayoutComponent pageTitle='Product page'>
      {data.product_title}
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
  };
};

export default SingleProductPage;
