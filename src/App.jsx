import { useState } from 'react';
import AddBookmarkForm from './components/AddBookmarkForm';
import BookmarkList from './components/BookmarkList';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (bookmark) => {
    setBookmarks([...bookmarks, bookmark]);
  };

  const deleteBookmark = (url) => {
    setBookmarks(bookmarks.filter((b) => b.url !== url));
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-8">
      <h1 className="text-3xl mb-6 font-bold text-white">Bookmark Manager</h1>
      <div className="w-full max-w-2xl">
        <AddBookmarkForm onAdd={addBookmark} />
        <BookmarkList bookmarks={bookmarks} onDelete={deleteBookmark} />
      </div>
    </div>
  );
}

export default App;
