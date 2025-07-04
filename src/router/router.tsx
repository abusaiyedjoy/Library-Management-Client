import { createBrowserRouter } from "react-router";
import App from './../App';
import AddBook from "../Pages/AddBook";
import BorrowSummary from "../Pages/BorrowSummary";
import Home from './../Pages/Home';

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
    ]
  },
]);
export default router;