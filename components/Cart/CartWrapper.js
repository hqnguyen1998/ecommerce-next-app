import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button, CloseButton, Offcanvas, ListGroup } from 'react-bootstrap';
import { useAppContext } from '../../context/AppContext';

const CartWrapper = ({ show, onClose }) => {
  const router = useRouter();
  const { state, dispatch } = useAppContext();

  const handleRemoveProduct = (product) => {
    dispatch({
      type: 'REMOVE_PRODUCT_CART',
      payload: product,
    });
  };

  const handleCheckOutButton = () => {
    router.push('/checkouts');
  };

  return (
    <Offcanvas show={show} onHide={onClose} placement='end'>
      <div
        style={{ position: 'absolute', right: 0, zIndex: 2 }}
        className='p-3'
      >
        <CloseButton onClick={onClose} />
      </div>
      {!state.products.carts.length ? (
        <h3 className='p-5'>Your cart is empty</h3>
      ) : (
        <div className='p-5'>
          {state.products.carts.map((cart) => (
            <ListGroup key={cart._id}>
              <ListGroup.Item className='d-flex align-items-center'>
                <div>
                  <Image
                    src={cart.product_image}
                    alt={cart.product_title}
                    width={75}
                    height={75}
                    priority
                  />
                </div>
                <div
                  className='p-2 text-capitalize'
                  style={{ width: '100%', lineHeight: '10px' }}
                >
                  <p>{cart.product_title}</p>
                  <p className='text-danger'>
                    {' '}
                    {cart.quantity} x ${cart.product_prices}
                  </p>
                </div>
                <Button
                  variant='outline-danger'
                  onClick={() => handleRemoveProduct(cart)}
                >
                  x
                </Button>
              </ListGroup.Item>
            </ListGroup>
          ))}

          <span>
            <hr />
          </span>
          <p className='d-flex justify-content-between'>
            Total:{' '}
            <span className='text-danger'>${state.products.totalPrice}</span>
          </p>
          <div className='d-grid gap-2'>
            <Button variant='outline-dark'>View Cart</Button>
            <Button variant='dark' onClick={handleCheckOutButton}>
              Checkout
            </Button>
          </div>
        </div>
      )}
    </Offcanvas>
  );
};

export default CartWrapper;
