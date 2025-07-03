import { FaEye, FaBookmark, FaEdit, FaTrash } from 'react-icons/fa'; 
import { IBook } from '../types/types';

const books: IBook[] = [
  {
    title: 'The Great Gatsby',
    subtitle: 'classic American novel about the Jazz Age and t...',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    isbn: '978-0-7432-7356-5',
    copies: 3,
    status: 'Available',
  },
  {
    title: 'To Kill a Mockingbird',
    subtitle: 'gripping tale of racial injustice and childhood in...',
    author: 'Harper Lee',
    genre: 'Fiction',
    isbn: '978-0-06-112008-4',
    copies: 2,
    status: 'Available',
  },
  {
    title: '1984',
    subtitle: 'dystopian novel about totalitarianism and surve...',
    author: 'George Orwell',
    genre: 'Science Fiction',
    isbn: '978-0-452-28423-4',
    copies: 1,
    status: 'Available',
  },
  {
    title: 'The Catcher in the Rye',
    subtitle: 'coming-of-age story following Holden Caulfield',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    isbn: '978-0-316-76948-0',
    copies: 2,
    status: 'Available',
  },
];

const BookTable = () => {
  return (
    <div className="p-5 mt-5 border border-gray-200 bg-gray-50 rounded-lg shadow-md overflow-x-auto font-sans">
      <table className="min-w-full border-collapse bg-white rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider">
              TITLE
            </th>
            <th className="px-4 py-3 text-left bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider">
              AUTHOR
            </th>
            <th className="px-4 py-3 text-left bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider">
              GENRE
            </th>
            <th className="px-4 py-3 text-left bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider">
              ISBN
            </th>
            <th className="px-4 py-3 text-left bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider">
              COPIES
            </th>
            <th className="px-4 py-3 text-left bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider">
              STATUS
            </th>
            <th className="px-4 py-3 text-left bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book, index) => (
            <tr key={index} className="border-b border-gray-200 last:border-b-0">
              <td className="px-4 py-3 align-middle">
                <div className="text-gray-800 font-medium text-sm">{book.title}</div>
                <div className="text-gray-500 text-xs mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis max-w-[250px]">
                  {book.subtitle}
                </div>
              </td>
              <td className="px-4 py-3 text-gray-700 text-sm">{book.author}</td>
              <td className="px-4 py-3 align-middle">
                <span className="inline-flex items-center justify-center px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium whitespace-nowrap">
                  {book.genre}
                </span>
              </td>
              <td className="px-4 py-3 text-gray-700 text-sm">{book.isbn}</td>
              <td className="px-4 py-3 text-gray-700 text-sm">{book.copies}</td>
              <td className="px-4 py-3 align-middle">
                <span
                  className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap
                    ${book.status === 'Available' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}
                  `}
                >
                  {book.status}
                </span>
              </td>
              <td className="px-4 py-3 align-middle">
                <div className="flex space-x-2"> 
                  <button
                    className="p-2 rounded text-gray-500 hover:text-blue-600 hover:bg-gray-100 transition duration-200"
                    aria-label="View book"
                  >
                    <FaEye className="text-lg" /> 
                  </button>
                  <button
                    className="p-2 rounded text-gray-500 hover:text-blue-600 hover:bg-gray-100 transition duration-200"
                    aria-label="Bookmark book"
                  >
                    <FaBookmark className="text-lg" />
                  </button>
                  <button
                    className="p-2 rounded text-gray-500 hover:text-blue-600 hover:bg-gray-100 transition duration-200"
                    aria-label="Edit book"
                  >
                    <FaEdit className="text-lg" />
                  </button>
                  <button
                    className="p-2 rounded text-gray-500 hover:text-blue-600 hover:bg-gray-100 transition duration-200"
                    aria-label="Delete book"
                  >
                    <FaTrash className="text-lg" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;