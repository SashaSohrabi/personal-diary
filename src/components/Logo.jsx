import { Link } from 'react-router';

const Logo = () => (
  <Link
    to="/"
    className="group flex items-center gap-3 no-underline transition-transform duration-300 hover:-translate-y-0.5"
  >
    <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-sky-400 via-indigo-500 to-blue-900 text-slate-50 shadow-[0_18px_45px_-20px_rgba(56,189,248,0.85)]">
      <span className="absolute inset-0 rounded-full border border-white/15"></span>
      <img src="/logo.svg" alt="Nova logo" className="relative h-8 w-8" />
    </span>
    <span className="flex flex-col leading-tight">
      <span className="text-lg font-semibold tracking-tight text-slate-100">Nova</span>
      <span className="text-xs font-medium text-slate-400 transition-colors duration-300 group-hover:text-slate-200">
        Modern marketplace
      </span>
    </span>
  </Link>
);

export default Logo;
