import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/layoutes/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Books from "../Pages/Books/Books";
import BookNow from "../Pages/BookNow/BookNow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/booking/:id",
        element: <BookNow />,
        loader: ({ params }) => fetch(`booking/${params.id}`),
      },
    ],
  },
]);

export default router;
