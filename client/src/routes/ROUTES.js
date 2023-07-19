import Mainroot from "../Pages/user/Mainroot";
import Home from "../Pages/user/Home"
import Detail from "../Pages/user/Detail"
import Contact from "../Pages/user/Contact"

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
                    path:'contact',
                    element:<Contact/>
               },
               {
                    path:'detail/:id',
                    element:<Detail/>
               }
          ]
     }
]