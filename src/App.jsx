import { Route, Routes } from 'react-router';
import { MainLayout } from './layouts';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}></Route>
      </Routes>
    </>
  );
}

export default App;
