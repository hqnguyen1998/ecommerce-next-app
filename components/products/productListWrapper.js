import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppContext } from '../../context/AppContext';
import { Col, Row } from 'react-bootstrap';

import styles from './Product.module.css';
import ProductCard from './productCard';

const ProductListWrapper = ({ products }) => {
  const { state } = useAppContext();
  const [data, setData] = React.useState(products);
  const [hasMore, setHasMore] = React.useState(true);

  const getMorePosts = async () => {
    const res = await fetch(
      `/api/product?limit=${data.length + state.products.increaseLimitBy}`
    );
    const newProds = await res.json();

    if (data.length < newProds.data.length) {
      setHasMore(false);
    }

    setData(() => [...newProds.data]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.product_collections}>
        <Link href='#furniture'>FURNITURE</Link>
        <Link href='#bag'>BAG</Link>
        <Link href='#decoration'>DECORATION</Link>
        <Link href='#accessories'>ACCESSORIES</Link>
      </div>

      <div id='furniture'>
        <InfiniteScroll
          dataLength={data.length}
          next={getMorePosts}
          hasMore={hasMore}
          loader={<h3>Loading...</h3>}
          scrollThreshold={1}
        >
          <Row className='mt-5'>
            {data &&
              data.map((product) => (
                <Col xs={12} sm={12} md={6} lg={3} key={product._id}>
                  <ProductCard product={product} />
                </Col>
              ))}
          </Row>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default React.memo(ProductListWrapper);
