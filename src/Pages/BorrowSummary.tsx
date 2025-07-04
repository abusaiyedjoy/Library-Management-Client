import { FaBook, FaCheckCircle, FaClock, FaRegBookmark } from 'react-icons/fa'; 

const BorrowSummary = () => {
  const totalBorrowed = 0;
  const activeBorrows = 0;
  const overdueBorrows = 0;
  const hasBorrowedBooks = false;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8 font-sans">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Borrowing Summary</h1>
          <p className="text-gray-600 text-lg">Overview of all borrowed books and their quantities</p>
        </div>
        <div className="mt-4 md:mt-0 text-gray-600 text-sm md:text-base">
          Total Books Borrowed: <span className="font-semibold">{totalBorrowed}</span> | Active Borrows:{' '}
          <span className="font-semibold">{activeBorrows}</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
            <FaBook className="text-blue-500 text-2xl" />
          </div>
          <div>
            <h3 className="text-gray-600 text-md font-medium">Total Borrowed</h3>
            <p className="text-3xl font-bold text-blue-600">{totalBorrowed}</p>
          </div>
        </div>

        {/* Active Borrows Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
            <FaCheckCircle className="text-green-500 text-2xl" />
          </div>
          <div>
            <h3 className="text-gray-600 text-md font-medium">Active Borrows</h3>
            <p className="text-3xl font-bold text-green-600">{activeBorrows}</p>
          </div>
        </div>

        {/* Overdue Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full">
            <FaClock className="text-yellow-600 text-2xl" />
          </div>
          <div>
            <h3 className="text-gray-600 text-md font-medium">Overdue</h3>
            <p className="text-3xl font-bold text-yellow-700">{overdueBorrows}</p>
          </div>
        </div>
      </div>

      {/* Borrowed Books Details Section */}
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Borrowed Books Details</h2>

        {hasBorrowedBooks ? (
          <div className="text-center p-10 text-gray-700">
            <p>List of borrowed books will go here.</p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <FaRegBookmark className="text-7xl mb-4 text-gray-300" /> {/* Large book icon */}
            <h3 className="text-xl font-semibold mb-2">No borrowed books</h3>
            <p className="text-md">No books have been borrowed yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BorrowSummary;