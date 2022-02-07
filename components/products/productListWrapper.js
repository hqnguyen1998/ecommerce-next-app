import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import styles from './Product.module.css';

import ProductCard from './productCard';

const ProductListWrapper = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.product_collections}>
        <Link href='#furniture'>FURNITURE</Link>
        <Link href='#bag'>BAG</Link>
        <Link href='#decoration'>DECORATION</Link>
        <Link href='#accessories'>ACCESSORIES</Link>
      </div>

      <div id='furniture'>
        <Row className='mt-5'>
          {props.products &&
            props.products.map((product) => (
              <Col xs={12} sm={12} md={6} lg={3} key={product._id}>
                <ProductCard product={product} />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default React.memo(ProductListWrapper);
