import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentications/Login/Login";
import SignUp from "../pages/Authentications/SignUp/SignUp";
import AddAToy from "../pages/AddAToy/AddAToy";

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
			element: <AddAToy></AddAToy>
		}
	]
	},
  ]);

  export default router;