import { useEffect, useReducer, useMemo, useCallback } from 'react';
import { DiaryContext } from './DiaryContext.js';
import { addDiaryEntry, getDiaryEntries } from '../utils/storage.js';

const initialState = {
  entries: [],
  isAddModalOpen: false,
  isViewModalOpen: false,
  selectedEntry: null
};

function diaryReducer(state, action) {
  switch (action.type) {
    case 'LOAD_ENTRIES': {
      return {
        ...state,
        entries: action.payload
      };
    }
    case 'OPEN_ADD_MODAL': {
      return {
        ...state,
        isAddModalOpen: true
      };
    }
    case 'CLOSE_ADD_MODAL': {
      return {
        ...state,
        isAddModalOpen: false
      };
    }
    case 'ADD_ENTRY': {
      return {
        ...state,
        entries: action.payload,
        isAddModalOpen: false
      };
    }
    case 'OPEN_VIEW_MODAL': {
      return {
        ...state,
        selectedEntry: action.payload,
        isViewModalOpen: true
      };
    }
    case 'CLOSE_VIEW_MODAL': {
      return {
        ...state,
        selectedEntry: null,
        isViewModalOpen: false
      };
    }
    default:
      return state;
  }
}

export function DiaryProvider({ children }) {
  const [state, dispatch] = useReducer(diaryReducer, initialState);

  useEffect(() => {
    const storedEntries = getDiaryEntries();
    dispatch({ type: 'LOAD_ENTRIES', payload: storedEntries });
  }, []);

  const openAddModal = useCallback(() => {
    dispatch({ type: 'OPEN_ADD_MODAL' });
  }, []);

  const closeAddModal = useCallback(() => {
    dispatch({ type: 'CLOSE_ADD_MODAL' });
  }, []);

  const openViewModal = useCallback((entry) => {
    dispatch({ type: 'OPEN_VIEW_MODAL', payload: entry });
  }, []);

  const closeViewModal = useCallback(() => {
    dispatch({ type: 'CLOSE_VIEW_MODAL' });
  }, []);

  const hasEntryForDate = useCallback(
    (date) => state.entries.some((entry) => entry.date === date),
    [state.entries]
  );

  const addEntry = useCallback(
    (entry) => {
      const updatedEntries = addDiaryEntry(entry);
      dispatch({ type: 'ADD_ENTRY', payload: updatedEntries });
    },
    []
  );

  const value = useMemo(
    () => ({
      entries: state.entries,
      isAddModalOpen: state.isAddModalOpen,
      isViewModalOpen: state.isViewModalOpen,
      selectedEntry: state.selectedEntry,
      openAddModal,
      closeAddModal,
      addEntry,
      hasEntryForDate,
      openViewModal,
      closeViewModal
    }),
    [state, openAddModal, closeAddModal, addEntry, hasEntryForDate, openViewModal, closeViewModal]
  );

  return <DiaryContext.Provider value={value}>{children}</DiaryContext.Provider>;
}
