import NavBar from './components/NavBar.jsx';
import EntryList from './components/EntryList.jsx';
import AddEntryModal from './components/AddEntryModal.jsx';
import ViewEntryModal from './components/ViewEntryModal.jsx';
import { useDiary } from './context/useDiary.js';

export default function App() {
  const { entries } = useDiary();

  return (
    <div className="min-h-screen bg-slate-100">
      <NavBar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-16 pt-6 sm:px-6">
        <EntryList entries={entries} />
      </main>
      <AddEntryModal />
      <ViewEntryModal />
    </div>
  );
}
