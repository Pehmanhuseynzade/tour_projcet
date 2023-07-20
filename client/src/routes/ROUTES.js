import Mainroot from "../Pages/user/Mainroot";
import Home from "../Pages/user/Home"
import Detail from "../Pages/user/Detail"
import Contact from "../Pages/user/Contact"
import About from "../Pages/user/About";
import Countries from "../Pages/user/Countries";
import Tours from "../Pages/user/Tours";
import Adminroot from "../Pages/admin/Adminroot";
import Contactadmin from "../Pages/admin/Contactadmin";
import Main from "../Pages/admin/Main";
import Emaill from "../Pages/admin/Emaill";

export const ROUTER = [
     {
          path:'/',
          element:<Mainroot/>,
          children:[
               {
                    path:'',
                    element:<Home/>
               },
               {
                    path:'about',
                    element:<About/>
               },
               {
                    path:'tours',
                    element:<Tours/>
               },
               {
                    path:'countries',
                    element:<Countries/>
               },
               {
                    path:'contact',
                    element:<Contact/>
               },
               {
                    path:'detail/:id',
                    element:<Detail/>
               }
          ]
     },
     {
          path:'/admin',
          element:<Adminroot/>,
          children:[
              {
                  path:'',
                  element:<Main/>
              },
              {
                  path:'contactus',
                  element:<Contactadmin/>
              },
              {
                  path:'sendemail',
                  element:<Emaill/>
              }
          ] 
      }
]