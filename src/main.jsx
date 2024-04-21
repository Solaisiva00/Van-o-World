import ReactDOM from "react-dom/client";
import Home from "./component/Home.jsx";
import App from "./App.jsx";
import About from "./component/About.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Vans from "./component/Vans.jsx";
import './server'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/vans",
        element: <Vans />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
