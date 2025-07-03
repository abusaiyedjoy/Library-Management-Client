import { FaBookOpen } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white font-serif text-gray-600 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center text-xl gap-2 mb-2 md:mb-0">
          <FaBookOpen className="text-blue-500" />
          <span>Library Master</span>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline hover:text-blue-500">Privacy Policy</a>
          <a href="#" className="hover:underline hover:text-blue-500">Terms of Service</a>
          <a href="#" className="hover:underline hover:text-blue-500">Contact</a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 pb-4 border-t border-gray-100 pt-2">
        © 2024 Library Management System. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;