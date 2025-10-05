# Personal Diary

Personal Diary is a single-page React application that lets users capture one memory per day. Entries are stored in the browser using localStorage, displayed as a responsive card grid, and can be reviewed in detail through a modal experience. The project was built to satisfy the Personal Diary assignment requirements, focusing on React hooks, state management, TailwindCSS styling, and client-side persistence.

## Live Demo

The deployed build is available at https://personal-diary-five.vercel.app/

## Features

- Add diary entries with title, date, image URL, and rich text content via a modal form
- Enforce one entry per day, with client-side validation for required fields and future dates
- Persist entries in localStorage and reload them on startup sorted newest first
- Browse entries as cards with preview image, title, and formatted date
- View complete entry details in a second modal without leaving the list
- Responsive layout styled with TailwindCSS and accessible focus states

## Tech Stack

- React 19 with Vite tooling
- TailwindCSS 4 for utility-first styling
- React Context and custom hooks for state management
- localStorage for persistence
- Vercel for static deployment

## Project Structure

```
src/
  components/       UI components for navigation, entry list, and modals
  context/          Diary context provider and custom hook
  utils/            Date formatting and storage helpers
  App.jsx           Application shell
  main.jsx          React entry point
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Installation

```
npm install
```

### Development

```
npm run dev
```

Visit the printed local URL to preview the app with hot reloading.

### Build

```
npm run build
```

### Preview Production Build

```
npm run preview
```

### Lint

```
npm run lint
```

## Implementation Notes

- Entries are keyed by their creation date and managed through a reducer in `DiaryContext.jsx`.
- The add entry modal validates input locally before committing to storage, showing inline messages per field.
- The view entry modal and add entry modal share context-driven state so only one can be active at a time.
- `utils/storage.js` abstracts localStorage access and ensures entries stay sorted by date.
- TailwindCSS is imported globally in `src/index.css` and utilities are applied directly in JSX.

## Future Enhancements

- Add editing and deletion controls for existing entries
- Support image uploads with storage integration beyond external URLs
- Filter or search entries by keyword or date range
- Provide export and import options for backing up diary data

## License

This project is available for educational purposes and does not include an explicit license.
