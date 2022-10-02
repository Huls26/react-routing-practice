import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import App from './App';
import Header from './components/Header';
import Welcome from './components/Welcome';
import BlogLayout from './page/BlogLayout';
import BlogPost, { loader as BlogPostLoader } from './components/BlogPost';
import ErrorPage from './page/error-page';
import Post, { loader as PostLoader } from './components/Post';

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogLayout />,
    errorElement: <ErrorPage />,
    children: [ 
      {
        path: "/",
        element: <Welcome />
      },
      {
        path: "posts",
        element: <BlogPost />,
        loader: BlogPostLoader,
      },
      {
        path: "posts/:postId",
        element: <Post />,
        loader: PostLoader,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={ router }/>
  </React.StrictMode>
)
