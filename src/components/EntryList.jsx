import EntryCard from './EntryCard.jsx';

export default function EntryList({ entries }) {
  if (!entries.length) {
    return (
      <section className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white/40 px-6 py-16 text-center">
        <div className="max-w-md space-y-3">
          <h2 className="text-xl font-semibold text-slate-800">No entries yet</h2>
          <p className="text-sm text-slate-500">
            Start your journaling journey by adding your first diary entry. One moment a day builds a
            meaningful story over time.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {entries.map((entry) => (
        <EntryCard key={`${entry.date}-${entry.title}`} entry={entry} />
      ))}
    </section>
  );
}
