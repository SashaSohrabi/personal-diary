import { Link } from 'react-router';

const Logo = () => (
  <Link
    to="/"
    className="group flex items-center gap-3 no-underline transition-transform duration-300 hover:scale-[1.01]"
  >
    <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent text-base-100 shadow-[0_12px_35px_-15px_rgba(99,102,241,0.85)]">
      <img src="/logo.svg" alt="NovaMart logo mark" className="h-6 w-6" />
    </span>
    <span className="flex flex-col leading-tight">
      <span className="text-lg font-semibold tracking-tight text-slate-100">
        NovaMart
      </span>
      <span className="text-xs font-medium text-slate-400 transition-colors duration-300 group-hover:text-slate-200">
        Curated commerce
      </span>
    </span>
  </Link>
);

export default Logo;
