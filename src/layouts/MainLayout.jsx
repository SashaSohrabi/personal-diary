import { useState } from 'react';
import { Outlet } from 'react-router';
import { NavBar } from '@/components';

const MainLayout = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  return (
    <>
      <NavBar cart={cart}/>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-6 sm:pt-8 lg:px-6">
        <Outlet context={{ cart, setCart }} />
      </main>
    </>
  );
};

export default MainLayout;
