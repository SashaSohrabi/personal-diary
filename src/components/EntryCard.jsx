import { formatDisplayDate } from '../utils/format.js';
import { useDiary } from '../context/useDiary.js';

export default function EntryCard({ entry }) {
  const { openViewModal } = useDiary();
  const { title, date, imageUrl, content } = entry;

  return (
    <article
      onClick={() => openViewModal(entry)}
      className="group cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-slate-400">
            <span className="text-sm">No image</span>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 px-4 py-5">
        <time className="text-xs font-medium uppercase tracking-wide text-blue-600">
          {formatDisplayDate(date)}
        </time>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="line-clamp-3 text-sm text-slate-600">
          {content}
        </p>
      </div>
    </article>
  );
}
