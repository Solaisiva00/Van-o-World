import ReactDOM from "react-dom/client";
import Home from "./component/Home.jsx";
import App from "./App.jsx";
import About from "./component/About.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Vans from "./component/Vans.jsx";
// import "./server";
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
import Errorpage from "./component/404.jsx";
import { loader as vanloader } from "./component/Vans.jsx";
import { loader as vandetailloader } from "./component/vandetail.jsx";
import { loader as hostvanlist } from "./component/Vanlist.jsx";
import { loader as hostvandetail } from "./component/vanlistdeatil.jsx";
import { loader as dashboard } from "./component/Dashboard.jsx";
import Error from "./component/error.jsx";
import Login, { action as loginAction } from "./component/login.jsx";
import User from "./component/userpage.jsx";
import Signup from "./component/signup.jsx";
import { action as signupAction } from "./component/signup.jsx";
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
        loader: vanloader,
        errorElement: <Error />,
      },
      {
        path: "user",
        element: <User />,
        children: [
          {
            index: true,
            element: <Login />,
            action: loginAction,
          },
          {
            path: "login",
            element: <Login />,
            action: loginAction,
          },
          {
            path: "signup",
            element: <Signup />,
            action: signupAction,
          },
          {
            path: "login/signup",
            element: <Signup />,
            action: signupAction,
          },
        ],
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
            loader: dashboard,
          },
          {
            path: "dashboard",
            element: <Dash />,
            loader: dashboard,
          },
          {
            path: "income",
            element: <Income />,
          },
          {
            path: "vanlist",
            element: <Vanlist />,
            loader: hostvanlist,
            errorElement: <Error />,
          },
          {
            path: "vanlist/:id",
            element: <Vanlistdetail />,
            loader: hostvandetail,
            errorElement: <Error />,
            children: [
              {
                index: true,
                element: <Detail />,
              },
              {
                path: "vanlist/:id/detail",
                element: <Detail />,
                errorElement: <Error />,
              },
              {
                path: "vanlist/:id/pricing",
                element: <Price />,
                errorElement: <Error />,
              },
              {
                path: "vanlist/:id/photo",
                element: <Photo />,
                errorElement: <Error />,
              },
            ],
          },
          {
            path: "review",
            element: <Review />,
          },
        ],
      },
      {
        path: "*",
        element: <Errorpage />,
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
    loader: vandetailloader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
