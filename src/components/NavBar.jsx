import { Link } from 'react-router';
import Logo from './Logo';

const NavBar = () => (
  <header className="relative z-40">
    <div className="mx-auto w-full max-w-6xl px-4 pt-6">
      <div className="glass-panel flex items-center justify-between gap-4 rounded-[28px] px-6 py-4">
        <Logo />
        <p className="hidden text-sm font-medium text-slate-300 lg:block">
          Thoughtfully designed finds for modern living.
        </p>
        <nav className="hidden items-center gap-2 lg:flex">
          <Link
            to="/"
            className="btn btn-ghost btn-sm text-slate-200 transition-colors duration-200 hover:bg-transparent hover:text-primary"
          >
            Home
          </Link>
        </nav>
      </div>
    </div>
  </header>
);

export default NavBar;