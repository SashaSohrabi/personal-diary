import { Link } from 'react-router';
import Logo from './Logo';

const NavBar = ({ cart }) => {
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const renderCartIcon = (badgeClassName) => (
    <div className="indicator flex h-full w-full items-center justify-center">
      <span
        className={`indicator-item badge -translate-y-2 h-5 w-5 badge-xs border-0 rounded-full font-medium ${badgeClassName}`}
      >
        {cartCount}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    </div>
  );

  return (
    <header className="relative z-40">
      <div className="mx-auto w-full max-w-6xl px-4 pt-6">
        <div className="glass-panel flex items-center justify-between gap-4 rounded-[28px] px-6 py-4">
          <Logo />
          <p className="hidden text-sm font-medium text-slate-300 lg:block">
            Discover essential pieces for a smarter everyday.
          </p>
          <nav className="flex items-center gap-2">
            <Link
              to="/"
              className="relative flex h-11 w-11 items-center justify-center rounded-full text-slate-200 transition-colors duration-200 hover:bg-primary/15 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 10.5l7.5-6 7.5 6M5.25 9.75v9a.75.75 0 00.75.75h3v-4.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v4.5h3a.75.75 0 00.75-.75v-9"
                />
              </svg>
              <span className="sr-only">Home</span>
            </Link>
            <Link
              to="cart"
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-content shadow-md shadow-primary/40 transition-shadow duration-200 hover:shadow-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="View cart"
            >
              {renderCartIcon(
                'badge-secondary text-primary-content shadow-sm shadow-primary/80'
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
