import { createBrowserRouter } from "react-router";
import App from './../App';
import AddBook from "../Pages/AddBook";
import BorrowSummary from "../Pages/BorrowSummary";
import Home from './../Pages/Home';
import EditBook from "../Pages/EditBook";
import BorrowBook from './../Pages/BorrowBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary/>
      },
      {
        path: "/add-book",
        element: <AddBook/>
      },
      {
        path: "/borrow-book/:_id",
        element: <BorrowBook/>
      },
      {
        path: "/edit-book/:_id",
        element: <EditBook/>
      },
    ]
  },
]);
export default router;