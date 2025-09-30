import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router';
import { Alert, ProductCard, ProductCardSkeleton } from '@/components';

const Category = () => {
  const { name } = useParams();
  const { cart, setCart } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/category/${name}`);
        if (!res.ok) throw new Error('Failed to fetch categories');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [name]);

  const formattedName = name.replace(/-/g, ' ');
  const displayName = formattedName.replace(/\b\w/g, char => char.toUpperCase());

  const renderProductList = () => {
    if (loading) return Array.from({ length: 4 }).map((_, i) => <ProductCardSkeleton key={i} />);
    if (!products.length) return <Alert message='No products were found' type='warning' />;
    return products.map(p => <ProductCard key={p.id} cart={cart} product={p} setCart={setCart} />);
  };

  return (
    <div className='space-y-10'>
      <header className='glass-panel rounded-[32px] px-6 py-10 text-center sm:text-left'>
        <span className='text-xs uppercase tracking-[0.2em] text-slate-500'>Category</span>
        <h1 className='mt-3 text-3xl font-semibold text-slate-100 sm:text-4xl'>{displayName}</h1>
        <p className='mt-4 text-sm text-slate-300'>
          Thoughtfully selected items from our {displayName.toLowerCase()} collection. Discover pieces that marry form and
          function.
        </p>
      </header>
      <section>
        <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>{renderProductList()}</div>
      </section>
    </div>
  );
};

export default Category;
