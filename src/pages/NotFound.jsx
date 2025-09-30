import { Link } from 'react-router';

const NotFound = () => (
  <section className="glass-panel mx-auto max-w-3xl rounded-[32px] px-8 py-12 text-center shadow-[0_30px_60px_-35px_rgba(15,23,42,0.6)]">
    <div className="space-y-6">
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
        404
      </span>
      <h1 className="text-3xl font-semibold text-slate-100 sm:text-4xl">Page not found</h1>
      <p className="text-sm text-slate-300 sm:text-base">
        We looked everywhere but couldn\'t find the page you were searching for. Try heading back home or exploring our latest collections.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn btn-primary btn-wide sm:btn-md shadow-md shadow-primary/40">
          Return home
        </Link>
        <Link to="/category/electronics" className="btn btn-outline btn-secondary border-white/20 text-slate-200">
          Browse categories
        </Link>
      </div>
    </div>
  </section>
);

export default NotFound;
