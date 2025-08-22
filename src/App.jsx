import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import WishListPage from "./pages/WishListPage";
import CartPage from "./pages/CartPage";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/wish-list",
        Component: WishListPage,
      },
      {
        path: "/cart",
        Component: CartPage,
      },
    ],
  },
]);

function App() {
  console.log("App rendering");
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
