import React, { useState } from 'react';

function AddBookmarkForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !url) return;
    onAdd({ title, url });
    setTitle('');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-300 mb-2">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Bookmark title"
          className="w-full p-2 bg-gray-900 text-white placeholder-gray-500 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="url" className="block text-gray-300 mb-2">URL:</label>
        <input
          id="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="http://example.com"
          className="w-full p-2 bg-gray-900 text-white placeholder-gray-500 rounded-md"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Add Bookmark
      </button>
    </form>
  );
}

export default AddBookmarkForm;
