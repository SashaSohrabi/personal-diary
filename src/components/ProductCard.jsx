import { Link } from 'react-router';
import { addToCart, removeFromCart } from '@/utils/cartUtils';

const ProductCard = ({ cart, product, setCart }) => {
  const productInCart = cart.find(p => p.id === product.id);
  const formattedPrice = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
  }).format(product.price);

  return (
    <article className='card-elevated group flex h-full flex-col gap-6'>
      <div className='relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-800/40 p-6'>
        <img
          src={product.image}
          alt={product.title}
          className='mx-auto h-40 w-full object-contain transition-transform duration-500 group-hover:scale-105'
        />
        <div className='absolute right-6 top-6 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-900 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.9)]'>
          {formattedPrice}
        </div>
      </div>
      <div className='flex flex-1 flex-col justify-between gap-5'>
        <div className='space-y-3'>
          <h3 className='text-lg font-semibold text-slate-100'>{product.title}</h3>
          {product.description && (
            <p
              className='text-sm text-slate-400'
              style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
            >
              {product.description}
            </p>
          )}
        </div>
        <div className='flex flex-wrap items-center justify-between gap-3 text-sm text-slate-300'>
          <Link
            to={`/category/${product.category}`}
            className='inline-flex items-center gap-2 rounded-full bg-base-200/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300 transition-colors duration-200 hover:bg-primary/20 hover:text-primary'
          >
            <span className='h-1.5 w-1.5 rounded-full bg-primary'></span>
            {product.category.replace(/-/g, ' ')}
          </Link>
          {productInCart ? (
            <div className='flex items-center gap-2'>
              <button
                className='btn btn-sm btn-ghost border border-white/10 text-slate-200 hover:border-primary hover:text-primary'
                onClick={() => setCart(prev => removeFromCart(prev, product))}
              >
                -
              </button>
              <span className='min-w-[2ch] text-center text-base font-semibold text-slate-100'>
                {productInCart.quantity}
              </span>
              <button
                className='btn btn-sm btn-primary shadow-md shadow-primary/40'
                onClick={() => setCart(prev => addToCart(prev, product))}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className='btn btn-sm btn-primary shadow-md shadow-primary/40'
              onClick={() => setCart(prev => addToCart(prev, product))}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
