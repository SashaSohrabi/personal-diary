import { formatDisplayDate } from '../utils/format.js';
import { useDiary } from '../context/useDiary.js';

export default function ViewEntryModal() {
  const { isViewModalOpen, selectedEntry, closeViewModal } = useDiary();

  if (!isViewModalOpen || !selectedEntry) {
    return null;
  }

  const { title, date, imageUrl, content } = selectedEntry;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/60 px-4 py-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="view-entry-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeViewModal();
        }
      }}
    >
      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl">
        <button
          type="button"
          onClick={closeViewModal}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-2 py-1 text-lg leading-none text-slate-500 shadow transition hover:bg-white hover:text-slate-700"
          aria-label="Close diary entry"
        >
          ×
        </button>
        {imageUrl ? (
          <div className="max-h-[320px] overflow-hidden bg-slate-100">
            <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
          </div>
        ) : null}
        <div className="space-y-4 px-6 py-6 sm:px-8 sm:py-8">
          <div className="space-y-2">
            <time className="text-xs font-medium uppercase tracking-wide text-blue-600">
              {formatDisplayDate(date)}
            </time>
            <h2 id="view-entry-title" className="text-2xl font-semibold text-slate-900">
              {title}
            </h2>
          </div>
          <p className="whitespace-pre-wrap text-base leading-relaxed text-slate-700">{content}</p>
        </div>
      </div>
    </div>
  );
}
