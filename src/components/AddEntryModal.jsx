import { useEffect, useMemo, useState } from 'react';
import { useDiary } from '../context/useDiary.js';
import { formatDisplayDate } from '../utils/format.js';

const initialForm = {
  title: '',
  date: '',
  imageUrl: '',
  content: ''
};

export default function AddEntryModal() {
  const { isAddModalOpen, closeAddModal, addEntry, hasEntryForDate } = useDiary();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (isAddModalOpen) {
      setForm({ ...initialForm, date: new Date().toISOString().split('T')[0] });
      setErrors({});
      setSubmitError('');
    }
  }, [isAddModalOpen]);

  const isOpen = isAddModalOpen;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setSubmitError('');
  };

  const validationErrors = useMemo(() => {
    const nextErrors = {};

    if (!form.title.trim()) {
      nextErrors.title = 'Title is required';
    }

    if (!form.date) {
      nextErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(form.date);
      const today = new Date();
      selectedDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      if (Number.isNaN(selectedDate.getTime())) {
        nextErrors.date = 'Choose a valid date';
      } else if (selectedDate > today) {
        nextErrors.date = 'Future dates are not allowed for diary entries';
      }
    }

    if (!form.imageUrl.trim()) {
      nextErrors.imageUrl = 'Image URL is required';
    } else {
      try {
        const url = new URL(form.imageUrl);
        if (!['http:', 'https:'].includes(url.protocol)) {
          nextErrors.imageUrl = 'Use a valid HTTP or HTTPS URL';
        }
      } catch {
        nextErrors.imageUrl = 'Enter a valid image URL';
      }
    }

    if (!form.content.trim()) {
      nextErrors.content = 'Content is required';
    }

    return nextErrors;
  }, [form]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const finalErrors = { ...validationErrors };

    if (form.date && hasEntryForDate(form.date)) {
      finalErrors.date = 'You already logged this day. Come back tomorrow!';
    }

    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      return;
    }

    try {
      addEntry({
        id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `${form.date}-${Date.now()}`,
        title: form.title.trim(),
        date: form.date,
        imageUrl: form.imageUrl.trim(),
        content: form.content.trim(),
        createdAt: new Date().toISOString()
      });
      setForm(initialForm);
    } catch (error) {
      console.error('Failed to add entry', error);
      setSubmitError('Unable to save entry. Please try again.');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-entry-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closeAddModal();
        }
      }}
    >
      <div className="relative w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">
        <button
          type="button"
          onClick={closeAddModal}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          aria-label="Close add entry modal"
        >
          ×
        </button>
        <div className="space-y-6">
          <div>
            <h2 id="add-entry-title" className="text-2xl font-semibold text-slate-900">
              Add Diary Entry
            </h2>
            <p className="text-sm text-slate-500">
              One entry per day keeps your memories organized. {form.date ? formatDisplayDate(form.date) : ''}
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label htmlFor="entry-title" className="text-sm font-medium text-slate-700">
                Title
              </label>
              <input
                id="entry-title"
                name="title"
                type="text"
                value={form.title}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="A short summary"
              />
              {errors.title ? <p className="text-xs text-red-500">{errors.title}</p> : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <label htmlFor="entry-date" className="text-sm font-medium text-slate-700">
                  Date
                </label>
                <input
                  id="entry-date"
                  name="date"
                  type="date"
                  max={new Date().toISOString().split('T')[0]}
                  value={form.date}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
                {errors.date ? <p className="text-xs text-red-500">{errors.date}</p> : null}
              </div>

              <div className="space-y-1">
                <label htmlFor="entry-image" className="text-sm font-medium text-slate-700">
                  Image URL
                </label>
                <input
                  id="entry-image"
                  name="imageUrl"
                  type="url"
                  value={form.imageUrl}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="https://example.com/your-photo.jpg"
                />
                {errors.imageUrl ? <p className="text-xs text-red-500">{errors.imageUrl}</p> : null}
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="entry-content" className="text-sm font-medium text-slate-700">
                Content
              </label>
              <textarea
                id="entry-content"
                name="content"
                rows={5}
                value={form.content}
                onChange={handleChange}
                className="w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="Share what made today special..."
              />
              {errors.content ? <p className="text-xs text-red-500">{errors.content}</p> : null}
            </div>

            {submitError ? <p className="text-sm text-red-500">{submitError}</p> : null}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={closeAddModal}
                className="rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Save Entry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
