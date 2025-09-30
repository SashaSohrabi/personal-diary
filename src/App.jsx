import { Route, Routes } from 'react-router';
import { MainLayout } from './layouts';
import { Home, Category, Cart } from '@/pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="category/:name" element={<Category />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
