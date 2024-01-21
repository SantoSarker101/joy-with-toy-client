import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentications/Login/Login";
import SignUp from "../pages/Authentications/SignUp/SignUp";
import AddAToy from "../pages/AddAToy/AddAToy";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import UpdateToysInfo from "../pages/UpdateToysInfo/UpdateToysInfo";
import ShopBySubCategory from "../pages/Home/ShopBySubCategory/ShopBySubCategory";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import BuyNow from "../pages/BuyNow/BuyNow";

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
		},
		{
			path: '/Blogs',
			element: <Blogs></Blogs>
		},
		{
			path: 'UpdateToysInfo/:id',
			element: <UpdateToysInfo></UpdateToysInfo>,
			loader: ({params}) => fetch(`http://localhost:5000/toysInfos/${params.id}`)
		},
		{
			path: 'ShopBySubCategory',
			element: <ShopBySubCategory></ShopBySubCategory>
		},
		{
			path: 'ViewDetails/:id',
			element: <ViewDetails></ViewDetails>,
			loader: ({params}) => fetch(`http://localhost:5000/toysInfos/${params.id}`)
		},
		{
			path: 'BuyNow',
			element: <BuyNow></BuyNow>,
			loader: () => fetch('http://localhost:5000/BuyToysInfo')
		}

	]
	},
  ]);

  export default router;