import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";
import { loader as productLoader } from "./pages/Products";
import { loader as productDetailsLoader } from "./pages/ProductDetails";
import Test from "./Test";
const Home = React.lazy(() => import("./pages/Home/index"));
const About = React.lazy(() => import("./pages/About"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products/:category1",
        loader: productLoader,
        element: <Products />,
      },
      {
        path: "products/:category1/:category2",
        loader: productLoader,
        element: <Products />,
      },
      {
        path: "products/:category1/:category2/:productId",
        loader: productDetailsLoader,
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
