import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import Header from "./components/Header";
import Main, { loader as mainLoader } from "./components/Main";
import ErrorPage from "./pages/error-page";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ErrorLayout from "./pages/ErrorLayout";
import BlogPost from "./components/BlogPost";
import Post, { loader as postLoader } from "./components/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "posts",
        element: <Main />,
        loader: mainLoader,
      },
      {
        path: "posts/:postId",
        element: <Post />,
        loader: postLoader,
      },
      {
        path: "about",
        element: <About />
      },
    ]
  },
  // {
  //   path:"/blogpost",
  //   element: <><Header/><Main /></>,
  // },
  {
    path: "contact",
    element: <Contact />
  },

])
export default function App() {
  return (
    <div>
       <RouterProvider router={ router } />
    </div>
   
  )
}
