import { createBrowserRouter } from "react-router"; // or 'react-router-dom'
import App from "./App";
import Home from "./components/Home";
import WishList from "./components/WishList";
import AddToCard from "./components/AddToCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path:"/add-to-cart" , element:<AddToCard/>},
      {path:"/wishlist" , element:<WishList/>}
    ]
  },
]);
