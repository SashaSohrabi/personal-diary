import { Link } from 'react-router';
import { addToCart, removeFromCart, resetCart } from '@/utils/cartUtils';

const CartTable = ({ cart, setCart }) => {
  const priceFormat = price =>
    new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);

  const paymentProcess = () => {
    alert('Payment process is not implemented yet. But coming soon!');
  };

  return (
    <section className='glass-panel rounded-[32px] p-6 sm:p-10 shadow-[0_30px_60px_-35px_rgba(15,23,42,0.6)]'>
      <div className='flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-6'>
        <h1 className='text-2xl font-semibold text-slate-100'>Shopping cart</h1>
        <span className='text-sm text-slate-400'>
          {cart.length} {cart.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      <div className='mt-6 overflow-x-auto'>
        <table className='table'>
          <thead className='text-xs uppercase tracking-[0.18em] text-slate-500'>
            <tr>
              <th className='bg-transparent'>Product</th>
              <th className='bg-transparent'>Description</th>
              <th className='bg-transparent text-center'>Amount</th>
              <th className='bg-transparent text-right'>Line total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id} className='border-white/5'>
                <td className='align-middle'>
                  <div className='flex items-center gap-4'>
                    <div className='relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl bg-base-200/70 p-4'>
                      <img
                        src={item.image}
                        alt={item.title}
                        className='h-full w-full object-contain'
                      />
                    </div>
                    <div className='space-y-1'>
                      <h2 className='text-base font-semibold text-slate-100'>{item.title}</h2>
                      <p className='text-sm text-slate-400'>Unit price: {priceFormat(item.price)}</p>
                    </div>
                  </div>
                </td>
                <td className='max-w-xl align-middle text-sm text-slate-300'>
                  <p className='opacity-80 line-clamp-3 sm:line-clamp-none'>{item.description}</p>
                  <Link
                    to={`/category/${item.category}`}
                    className='mt-3 inline-flex items-center gap-2 rounded-full bg-base-200/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300 transition-colors duration-200 hover:bg-primary/20 hover:text-primary'
                  >
                    <span className='h-1.5 w-1.5 rounded-full bg-primary'></span>
                    {item.category.replace(/-/g, ' ')}
                  </Link>
                </td>
                <td className='align-middle'>
                  <div className='flex items-center justify-center gap-3'>
                    <button
                      className='btn btn-sm btn-ghost border border-white/10 text-slate-200 hover:border-primary hover:text-primary'
                      onClick={() => setCart(prev => removeFromCart(prev, item))}
                    >
                      -
                    </button>
                    <span className='min-w-[2ch] text-center font-semibold text-slate-100'>
                      {item.quantity}
                    </span>
                    <button
                      className='btn btn-sm btn-primary shadow-md shadow-primary/40'
                      onClick={() => setCart(prev => addToCart(prev, item))}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className='align-middle text-right text-base font-semibold text-slate-100'>
                  {priceFormat(item.quantity * item.price)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th className='text-center'>
                <button
                  className='btn btn-outline btn-secondary border-white/20 text-slate-200 hover:border-secondary hover:text-slate-100'
                  onClick={() => setCart(resetCart())}
                >
                  Reset cart
                </button>
              </th>
              <th className='text-right'>
                <button
                  className='btn btn-primary btn-wide sm:btn-md shadow-lg shadow-primary/40'
                  onClick={paymentProcess}
                >
                  Checkout: {priceFormat(cart.reduce((acc, item) => acc + item.quantity * item.price, 0))}
                </button>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
};

export default CartTable;
