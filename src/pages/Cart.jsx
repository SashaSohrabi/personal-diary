import { Link, useOutletContext } from 'react-router';
import { Alert, CartTable } from '@/components';

const Cart = () => {
  const { cart, setCart } = useOutletContext();

  if (!cart.length)
    return (
      <section className='glass-panel mx-auto max-w-3xl rounded-[32px] px-8 py-12 text-center shadow-[0_30px_60px_-35px_rgba(15,23,42,0.6)]'>
        <div className='space-y-6'>
          <Alert message='Your cart is empty for now.' type='info' />
          <p className='text-sm text-slate-300'>Keep exploring our curated selection and fill your cart with pieces you love.</p>
          <div className='flex justify-center'>
            <Link to='/' className='btn btn-primary btn-wide sm:btn-md shadow-md shadow-primary/40'>
              Browse products
            </Link>
          </div>
        </div>
      </section>
    );

  return <CartTable cart={cart} setCart={setCart} />;
};

export default Cart;
