import { FaBookOpen } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white font-serif shadow-md px-6 py-5 flex justify-between items-center border-b border-gray-300">
      <div className="flex items-center gap-2">
        <FaBookOpen className="text-blue-500 text-xl" />
        <span className="font-semibold text-xl text-gray-900 font-serif">Library Master</span>
      </div>

      <div className="flex gap-6 text-sm font-medium text-gray-700">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600"}>
          All Books
        </NavLink>
        <NavLink to="/add-book" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600"}>
          Add Book
        </NavLink>
        <NavLink to="/borrow-summary" className={({ isActive }) => isActive ? "text-blue-600" : "hover:text-blue-600"}>
          Borrow Summary
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;