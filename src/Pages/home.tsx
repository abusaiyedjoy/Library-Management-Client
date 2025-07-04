import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import BookTable from "../components/BookTable";
import { Link } from "react-router";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [status, setStatus] = useState("All Status");

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-serif">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Books Library</h1>
          <p className="text-gray-600">
            Manage your library collection and track borrowing activity
          </p>
        </div>
        <Link to="/add-book" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-sm">
          <FaPlus size={14} />
          Add New Book
        </Link>
      </div>

      <div className="flex justify-between items-center bg-white p-4 rounded-md shadow-sm flex-wrap gap-4">
        <div className="flex items-center border border-gray-200 rounded-md px-3 py-2 flex-1 max-w-md bg-gray-50">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search books by title, author, or ISBN..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none w-full"
          />
        </div>
        <div className="flex items-center gap-5">
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="border border-gray-200 px-3 py-2 rounded-md bg-white text-gray-700"
          >
            <option>All Genres</option>
            <option>Fiction</option>
            <option>Non-fiction</option>
            <option>Science</option>
            <option>Biography</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-200 px-3 py-2 rounded-md bg-white text-gray-700"
          >
            <option>All Status</option>
            <option>Available</option>
            <option>Borrowed</option>
          </select>
        </div>
      </div>

      {/* Book Table */}
      <BookTable />
    </div>
  );
};
export default Home;
