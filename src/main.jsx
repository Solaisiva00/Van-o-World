import ReactDOM from "react-dom/client";
import Home from "./component/Home.jsx";
import App from "./App.jsx";
import About from "./component/About.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Vans from "./component/Vans.jsx";
import "./server";
import Vandetail from "./component/vandetail.jsx";
import Footer from "./component/footer.jsx";
import Host from "./component/host.jsx";
import Dash from "./component/Dashboard.jsx";
import Income from "./component/Income.jsx";
import Vanlist from "./component/Vanlist.jsx";
import Review from "./component/Review.jsx";
import Vanlistdetail from "./component/vanlistdeatil.jsx";
import Detail from "./component/Detail.jsx";
import Price from "./component/pricing.jsx";
import Photo from "./component/photo.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, //render default child
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "vans",
        element: <Vans />,
      },
      {
        path: "/host",
        element: <Host />,
        children: [
          //nested routes
          // use relative path
          {
            index: true, // index routes render content with child
            element: <Dash />,
          },
          {
            path: "dashboard",
            element: <Dash />,
          },
          {
            path: "income",
            element: <Income />,
          },
          {
            path: "vanlist",
            element: <Vanlist />,
          },
          {
            path: "vanlist/:id",
            element: <Vanlistdetail />,
            children: [
              {
                index: true,
                element: <Detail />,
              },
              {
                path: "vanlist/:id/detail",
                element: <Detail />,
              },
              {
                path: "vanlist/:id/pricing",
                element: <Price />,
              },
              {
                path: "vanlist/:id/photo",
                element: <Photo />,
              },
            ],
          },
          {
            path: "review",
            element: <Review />,
          },
        ],
      },
    ],
  },
  {
    path: "/vans/:id",
    element: (
      <>
        <Vandetail />
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
