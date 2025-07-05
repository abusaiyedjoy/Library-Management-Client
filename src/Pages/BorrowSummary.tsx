import { FaBook, FaCheckCircle, FaClock, FaRegBookmark } from "react-icons/fa";
import { useGetAllBorrowsQuery } from "../redux/app/borrowApi";
import { IBorrowedBook } from "../types/types";

const BorrowSummary = () => {
  const { data: borrowedBooks, isLoading } = useGetAllBorrowsQuery(undefined);
  console.log(borrowedBooks);
  const now = new Date();
  const overdueBorrows =
    borrowedBooks?.data?.filter((item: { dueDate: string | number | Date; }) => new Date(item.dueDate) < now)
      .length || 0;

  const activeBorrows = borrowedBooks?.data?.length - overdueBorrows || 0;

  if(isLoading){
    return <div>Loading...</div>
  }
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8 font-sans">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Borrowing Summary
          </h1>
          <p className="text-gray-600 text-lg">
            Overview of all borrowed books and their quantities
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-gray-600 text-sm md:text-base">
          Total Books Borrowed:{" "}
          <span className="font-semibold">{borrowedBooks?.data.length}</span> |
          Active Borrows: <span className="font-semibold">{activeBorrows}</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
            <FaBook className="text-blue-500 text-2xl" />
          </div>
          <div>
            <h3 className="text-gray-600 text-md font-medium">
              Total Borrowed
            </h3>
            <p className="text-3xl font-bold text-blue-600">
              {borrowedBooks?.data.length}
            </p>
          </div>
        </div>

        {/* Active Borrows Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-green-100 rounded-full">
            <FaCheckCircle className="text-green-500 text-2xl" />
          </div>
          <div>
            <h3 className="text-gray-600 text-md font-medium">
              Active Borrows
            </h3>
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
            <p className="text-3xl font-bold text-yellow-700">
              {overdueBorrows}
            </p>
          </div>
        </div>
      </div>

      {/* Borrowed Books Details Section */}
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Borrowed Books Details
        </h2>

        {borrowedBooks?.data ? (
          <div className="">
            <div className="overflow-x-auto rounded-md shadow">
              <table className="min-w-full bg-white border border-gray-200 text-sm">
                <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-semibold">
                  <tr>
                    <th className="text-left px-6 py-3">Book Title</th>
                    <th className="text-left px-6 py-3">ISBN</th>
                    <th className="text-left px-6 py-3">
                      Total Quantity Borrowed
                    </th>
                    <th className="text-left px-6 py-3">Due Date</th>
                    <th className="text-left px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {borrowedBooks?.data?.map((book: IBorrowedBook, index: number) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-800">
                          {book?.book.title}
                        </div>
                        <div className="text-gray-500 text-sm">
                          by {book?.book.author}
                        </div>
                      </td>
                      <td className="px-6 py-4">{book.book.isbn}</td>
                      <td className="px-6 py-4">{book.totalQuantity}</td>
                      <td className="px-6 py-4">{book.dueDate}</td>
                      <td className="px-6 py-4">
                        {new Date(book.dueDate) < now ? (
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs">
                            ⚠️ Overdue
                          </span>
                        ) : (
                          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
                            Active
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <FaRegBookmark className="text-7xl mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold mb-2">No borrowed books</h3>
            <p className="text-md">No books have been borrowed yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BorrowSummary;
