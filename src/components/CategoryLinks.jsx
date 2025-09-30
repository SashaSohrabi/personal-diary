import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Alert, CategoriesSkeleton } from '.';

const CategoryLinks = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products/categories');
        if (!res.ok) throw new Error('Failed to fetch categories');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <CategoriesSkeleton />;

  if (!categories.length) return <Alert message='No categories found' type='warning' />;

  return categories.map(category => {
    const label = category.replace(/-/g, ' ');

    return (
      <Link
        key={category}
        to={`/category/${category}`}
        className='btn btn-outline btn-secondary border-white/10 bg-base-200/50 text-slate-200 backdrop-blur-sm transition-colors duration-200 hover:border-primary hover:bg-primary/15 hover:text-slate-100 capitalize whitespace-nowrap'
      >
        {label}
      </Link>
    );
  });
};

export default CategoryLinks;
