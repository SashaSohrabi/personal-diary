import { Outlet } from 'react-router';
import { NavBar } from '@/components';

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 pt-6 sm:pt-8 lg:px-6">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
