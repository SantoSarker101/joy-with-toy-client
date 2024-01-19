import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentications/Login/Login";
import SignUp from "../pages/Authentications/SignUp/SignUp";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/AllToys/AllToys";

const router = createBrowserRouter([
	{
	path: "/",
	element: <Main></Main>,
	children: [
		{
			path: '/',
			element: <Home></Home>,
		},
		{
			path: 'login',
			element: <Login></Login>,
		},
		{
			path: 'signup',
			element: <SignUp></SignUp>
		},
		{
			path: 'AddAToy',
			element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
		},
		{
			path: 'MyToys',
			element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
		},
		{
			path: 'AllToys',
			element: <AllToys></AllToys>
		}
	]
	},
  ]);

  export default router;