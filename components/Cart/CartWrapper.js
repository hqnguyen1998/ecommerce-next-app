import React from 'react';
import { Button, CloseButton, Offcanvas } from 'react-bootstrap';
import { useAppContext } from '../../context/AppContext';

const CartWrapper = ({ show, onClose }) => {
  const { state } = useAppContext();

  return (
    <Offcanvas show={show} onHide={onClose} placement='end'>
      <div
        style={{ position: 'absolute', right: 0, zIndex: 2 }}
        className='p-3'
      >
        <CloseButton onClick={onClose} />
      </div>
      <div className='p-5'>
        {state.products.carts.map((cart) => (
          <div key={cart._id}>{cart.product_title}</div>
        ))}

        <span>
          <hr />
        </span>
        <p className='d-flex justify-content-between'>
          Total: <span className='text-danger'>$215</span>
        </p>
        <div className='d-grid gap-2'>
          <Button variant='outline-dark'>View Cart</Button>
          <Button variant='dark'>Checkout</Button>
        </div>
      </div>
    </Offcanvas>
  );
};

export default CartWrapper;
