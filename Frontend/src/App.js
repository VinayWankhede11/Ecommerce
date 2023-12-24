import React from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/Loginpage';
import SignupPage from './pages/Signuppage';
import CartPage from './pages/Cartpage';
import CheckoutPage from './pages/Checkoutpage';
import Productdetailpage from './pages/Productdetailpage';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage></CheckoutPage>,
  },
  {
    path: "/product-detail",
    element: <Productdetailpage></Productdetailpage>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
