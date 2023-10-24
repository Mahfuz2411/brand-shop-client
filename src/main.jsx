import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Error from './error/Error.jsx';
import Home from './home/Home.jsx';
import SignIn from './auth/SignIn.jsx';
import SignUp from './auth/SignUp.jsx';
import PrivateRoute from './basic-compo/PrivateRoute.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Add from './private-compo/Add.jsx';
import MyCart from './private-compo/MyCart.jsx';
import Category from './category/Category.jsx';
import Update from './private-compo/Update.jsx';
import IdProvider from './Context/IdProvider.jsx';
import Details from './private-compo/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/add",
        element: (
          <PrivateRoute>
            <Add></Add>
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:brand/:id/update",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: "/category/:brand/:id/details",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`http://localhost:5000/cars/${params.id}`)
      },
      {
        path: "/category/:brand",
        element: <Category></Category>,
        loader: () => fetch('http://localhost:5000/cars')
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <IdProvider>
        <RouterProvider router={router} />
      </IdProvider>
    </AuthProvider>
  </React.StrictMode>,
)
