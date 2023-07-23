import Mainroot from "../Pages/user/Mainroot";
import Home from "../Pages/user/Home"
import Detail from "../Pages/user/Detail"
import Detailpop from "../Pages/user/Detailpop"
import Contact from "../Pages/user/Contact"
import About from "../Pages/user/About";
import Countries from "../Pages/user/Countries";
import Tours from "../Pages/user/Tours";
import Adminroot from "../Pages/admin/Adminroot";
import Contactadmin from "../Pages/admin/Contactadmin";
import Main from "../Pages/admin/Main";
import Emaill from "../Pages/admin/Emaill";
import Bought from "../Pages/user/Bought";
import Useinfo from "../Pages/admin/Useinfo";

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
               },
               {
                    path:'detailpop/:id',
                    element:<Detailpop/>
               },
               {
                    path:'bought',
                    element:<Bought/>
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
              },
              {
               path:'useinfo',
               element:<Useinfo/>
           }
          ] 
      }
]