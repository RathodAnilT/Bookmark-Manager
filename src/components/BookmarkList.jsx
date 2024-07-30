import React from 'react';

function BookmarkList({ bookmarks, onDelete }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4">Your Bookmarks</h2>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark.url} className="flex justify-between items-center mb-2 text-gray-300">
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              {bookmark.title}
            </a>
            <button
              onClick={() => onDelete(bookmark.url)}
              className="text-red-400 hover:text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookmarkList;
