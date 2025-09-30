import { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router';
import { Alert, CategoryLinks, ProductCard, ProductCardSkeleton } from '@/components';

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
      <section className="glass-panel relative overflow-hidden rounded-[32px] px-8 py-12">
        <div className="absolute inset-y-0 right-0 w-1/2 translate-x-28 bg-gradient-to-r from-primary/40 via-secondary/30 to-transparent blur-3xl"></div>
        <div className="relative z-10 max-w-xl space-y-6">
          <span className="badge badge-secondary badge-outline w-fit bg-secondary/10 px-4 py-3 text-xs uppercase tracking-[0.2em]">
            Fresh arrivals
          </span>
          <h1 className="text-3xl font-semibold text-slate-100 sm:text-4xl lg:text-5xl">
            Elevate your everyday essentials.
          </h1>
          <p className="text-sm text-slate-300 sm:text-base">
            Discover thoughtfully designed pieces that balance craftsmanship
            with modern aesthetics. Shop by category or explore curated picks
            hand-selected for you.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/category/electronics"
              className="btn btn-primary btn-wide sm:btn-md"
            >
              Shop electronics
            </Link>
            <Link
              to="/cart"
              className="btn btn-outline btn-secondary border-white/20 text-slate-200"
            >
              View your cart
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 text-slate-300">
          <h2 className="text-lg font-semibold text-slate-100">
            Browse by category
          </h2>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
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
