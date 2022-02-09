import React from 'react';
import { useAppContext } from '../../context/AppContext';
import cls from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Product.module.css';
import { Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  const { dispatch } = useAppContext();
  const [toggle, setToggle] = React.useState(false);

  const handleAddProductToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <React.Fragment>
      <div
        className={styles.product_image_wrapper}
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
      >
        <Link href={`/products/${product.slug}`}>
          <a>
            <Image
              alt='item-image'
              width={500}
              height={500}
              layout='responsive'
              src={product.product_image}
              priority
            />
          </a>
        </Link>
        <div
          className={cls(
            `${toggle ? 'd-block' : 'd-none'}`,
            styles.modal_product
          )}
        >
          <Button
            variant='primary'
            className='text-white'
            onClick={handleAddProductToCart}
          >
            Add to cart
          </Button>
        </div>
      </div>

      <div className={styles.product_text_wrapper}>
        <Link href={`/products/${product.slug}`}>
          <a>
            <p>{product.product_title}</p>
          </a>
        </Link>

        {product.product_discount_price ? (
          <p className='text-danger'>
            <span className='text-decoration-line-through text-secondary'>
              ${product.product_prices}
            </span>{' '}
            ${product.product_discount_price}
          </p>
        ) : (
          <p className='text-danger'>${product.product_prices}</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
