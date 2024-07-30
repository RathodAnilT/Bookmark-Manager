// src/components/BookmarkItem.jsx
function BookmarkItem({ bookmark, onDelete }) {
    return (
      <div className="p-4 border rounded-lg shadow-md mb-2">
        <h3 className="text-lg font-semibold">{bookmark.title}</h3>
        <p><a href={bookmark.url} target="_blank" rel="noopener noreferrer" className="text-blue-600">{bookmark.url}</a></p>
        <p className="text-gray-600">Tags: {bookmark.tags.join(', ')}</p>
        <button onClick={() => onDelete(bookmark.url)} className="bg-red-500 text-white py-1 px-2 rounded mt-2">Delete</button>
      </div>
    );
  }
  
  export default BookmarkItem;
  