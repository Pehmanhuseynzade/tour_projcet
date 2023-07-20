// import * as React from 'react';
// import "./adminnav.scss"
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import Swal from 'sweetalert2';
// // import { useUserContext } from "../../context/Usercontext";
// import { useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate()
// //   const [admin, setAdmin] = useUserContext();
//   const [state, setState] = React.useState({
//     // top: false,
//     left: false
//     // bottom: false,
//     // right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List style={{ background: 'linear-gradient(#331c00, #000000)', color: 'white' }}>
//         {[
//           { text: 'Admin page', link: '/admin' },
//           { text: 'Contact Us', link: '/admin/contactus' },
//           { text: 'Emails', link: '/admin/sendemail' },
//         ].map(({ text, link }) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton component="a" href={link}>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//     </Box>
//   );

//   return (
//     <div className='navadmin'>
//       {['left'].map((anchor) => (
//         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//           <React.Fragment >
//             <Button className='hamburger' onClick={toggleDrawer(anchor, true)}><i class="fa-solid fa-bars"></i></Button>
//             <Drawer
//               anchor={anchor}
//               open={state[anchor]}
//               onClose={toggleDrawer(anchor, false)}
//             >
//               {list(anchor)}
//             </Drawer>
//           </React.Fragment>
//           <React.Fragment >
//             <Button onClick={() => {
//               localStorage.removeItem('token');
//               localStorage.removeItem('admin');
//               localStorage.removeItem("loggedIn")
//               Swal.fire({
//                 position: 'top-end',
//                 icon: 'success',
//                 title: 'Admin signed out successfully!',
//                 showConfirmButton: false,
//                 timer: 1200
//               })
//               setAdmin(null);
//               navigate('/');
//             }}

//               style={{ color: 'white', fontSize: "17px" }} className='logout'><i className="fa-solid fa-right-from-bracket"></i></Button>
//           </React.Fragment>
//         </div>
//       ))}
//     </div>
//   );
// }