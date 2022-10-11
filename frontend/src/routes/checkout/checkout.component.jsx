import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../Components/checkout-item/checkout-item.component';

import PaymentForm from '../../Components/payment-form/payment-form.component';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems , cartTotal } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span></span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
          <div className='total'>TOTAL: ${cartTotal}</div>
          <PaymentForm />
    </div>
  );
};

export default Checkout;
