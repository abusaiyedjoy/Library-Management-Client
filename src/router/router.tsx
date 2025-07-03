import { createBrowserRouter } from "react-router";
import App from './../App';
import Home from './../Pages/home';
import Borrow from "../Pages/Borrow";

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
        path: "/borrow",
        element: <Borrow/>
      }
    ]
  },
]);
export default router;