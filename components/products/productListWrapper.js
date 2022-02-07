import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Product.module.css';
import { Col, Row } from 'react-bootstrap';

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
                <div className={styles.product_image_wrapper}>
                  <Link href={`/products/${product.slug}`}>
                    <a>
                      <Image
                        alt='item-image'
                        width={500}
                        height={500}
                        layout='responsive'
                        src={product.product_image}
                      />
                    </a>
                  </Link>
                </div>

                <div className={styles.product_text_wrapper}>
                  <Link href={`/products/${product.slug}`}>
                    <a>
                      <p>{product.product_title}</p>
                    </a>
                  </Link>

                  <p>{product.product_price}</p>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default React.memo(ProductListWrapper);
