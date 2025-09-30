import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router';
import {
  Alert,
  CategoryLinks,
  ProductCard,
  ProductCardSkeleton,
} from '@/components';

const Home = () => {
  const { cart, setCart } = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Failed to fetch categories');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const renderProductList = () => {
    if (loading) {
      return Array.from({ length: 20 }).map((_, i) => (
        <ProductCardSkeleton key={i} product={{}} />
      ));
    }

    if (!products.length) {
      return <Alert message="No products were found" type="warning" />;
    }

    return products.map((p) => (
      <ProductCard key={p.id} cart={cart} product={p} setCart={setCart} />
    ));
  };

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <h2 className="text-lg font-semibold text-slate-100">
            Browse by category
          </h2>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500 sm:hidden">
            Swipe to explore
          </span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-1">
          <CategoryLinks />
        </div>
      </section>

      <section>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {renderProductList()}
        </div>
      </section>
    </div>
  );
};

export default Home;
