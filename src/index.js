import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import 'semantic-ui-css/semantic.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from './pages/Signin.js'
import Dashboard from './routes/Dashboard.js'
import Contact from './routes/Contact.js'

const router = createBrowserRouter([
  { path: "/", element: <App/>},
  { path: "/dashboard", element: <Dashboard/>},
  { path: "/contact", element: <Contact/>},
  { path: "/signin", element: <Signin/>},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
