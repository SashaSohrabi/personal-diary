import { useDiary } from '../context/useDiary.js';

export default function NavBar() {
  const { openAddModal } = useDiary();

  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">My Diary</h1>
          <p className="text-sm text-slate-500">
            Capture a single memory every day. Reflect, remember, repeat.
          </p>
        </div>
        <button
          type="button"
          onClick={openAddModal}
          className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          <span className="text-lg">+</span>
          Add Entry
        </button>
      </div>
    </header>
  );
}
