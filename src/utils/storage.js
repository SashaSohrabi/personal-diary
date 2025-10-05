const STORAGE_KEY = 'personal-diary-entries';

const isBrowser = () => typeof window !== 'undefined' && !!window.localStorage;

export function getDiaryEntries() {
  if (!isBrowser()) {
    return [];
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .map((entry) => ({ ...entry, date: entry.date }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Failed to parse diary entries from storage', error);
    return [];
  }
}

export function saveDiaryEntries(entries) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function addDiaryEntry(entry) {
  const entries = getDiaryEntries();
  const nextEntries = [entry, ...entries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  saveDiaryEntries(nextEntries);
  return nextEntries;
}

export function hasEntryForDate(date) {
  const entries = getDiaryEntries();
  return entries.some((entry) => entry.date === date);
}
