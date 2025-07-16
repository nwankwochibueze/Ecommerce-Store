import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy } from "react";
import Cart from "./pages/Cart";
const CustomerCare = lazy(() => import("./pages/CustomerCare"));
const Sale = lazy(() => import("./pages/Sale"));
const Shop = lazy(() => import("./pages/Shop"));
const Store = lazy(() => import("./pages/Store"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const PlxBag = lazy(() => import("./productsPage/PlxBag"));
const AlxBag = lazy(() => import("./productsPage/AlxBag"));
const SluBag = lazy(() => import("./productsPage/SluBag"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/customercare", element: <CustomerCare /> },
      { path: "/sale", element: <Sale /> },
      { path: "/shop", element: <Shop /> },
      { path: "/store", element: <Store /> },
      { path: "/cart", element: <Cart /> },
      { path: "/products/plx-bag-1", element: <PlxBag /> },
      { path: "/products/alx-bag-1", element: <AlxBag /> },
      { path: "/products/slu-bag-1", element: <SluBag /> },
      { path: "/page404", element: <PageNotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
