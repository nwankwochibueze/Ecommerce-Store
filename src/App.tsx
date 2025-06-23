import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy } from "react";

const CustomerCare = lazy(() => import("./pages/CustomerCare"));
const Sale = lazy(() => import("./pages/Sale"));
const Shop = lazy(() => import("./pages/shop"));
const Store = lazy(() => import("./pages/Store"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/customercare", element: <CustomerCare /> },
      { path: "/sale", element: <Sale /> },
      { path: "/shop", element: <Shop /> },
      { path: "/store", element: <Store /> },
      { path: "/page404", element: <PageNotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
