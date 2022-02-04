import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Product.module.css';

const ProductListWrapper = () => {
  return (
    <div className={styles.container}>
      <div className={styles.product_collections}>
        <Link href='#furniture'>FURNITURE</Link>
        <Link href='#bag'>BAG</Link>
        <Link href='#decoration'>DECORATION</Link>
        <Link href='#accessories'>ACCESSORIES</Link>
      </div>

      <div id='furniture'>
        <div>
          <Image
            alt='item-image'
            width={240}
            height={240}
            src='https://cdn.shopify.com/s/files/1/2300/9895/products/19_23fa6f2c-04d4-4c97-a102-80171c95556c_grande.jpg?v=1505728843'
          />

          <div>
            <p>Black digital watch</p>
            <p>$50.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListWrapper;
