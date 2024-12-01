import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Component/AddCoffee.jsx';
import UpDateCoffee from './Component/UpDateCoffee.jsx';
import Home from './Component/Page/Home.jsx';
import SignIn from './Component/SignIn.jsx';
import SignUp from './Component/SignUp.jsx';
import MainLayout from './Component/MainLayout.jsx';
import AllCoffee from './Component/AllCoffee.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './Component/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
       
        children:[
          {
            path: "/",
            element: <AllCoffee></AllCoffee>,
            loader:()=>fetch('http://localhost:5000/coffee'),
          },
          {
            path: "addCoffee",
            element: <AddCoffee></AddCoffee>,
          },
          {
            path: "updateCoffee/:id",
            element: <UpDateCoffee></UpDateCoffee>,
            loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
          },
          {
            path: "signin",
            element: <SignIn></SignIn>,
          },
          {
            path: "signup",
            element: <SignUp></SignUp>,
          },
          {
            path: "/users",
            element: <Users></Users>,
            loader:()=>fetch('http://localhost:5000/users')
          },
    

        ]
    
      },
     
    ]
  },



 
]);






createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </StrictMode>,
)
