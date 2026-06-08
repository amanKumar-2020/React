import { createBrowserRouter } from "react-router"; // or 'react-router-dom'
import App from "./App";
import Home from "./components/Home";
import WishList from "./components/WishList";
import AddToCard from "./components/AddToCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Acts as the master frame for the Header
    children: [
      { index: true, element: <Home /> },
      { path: "wishlist", element: <WishList /> },
      { path: "add-to-cart", element: <AddToCard /> },
    ],
  },
]);