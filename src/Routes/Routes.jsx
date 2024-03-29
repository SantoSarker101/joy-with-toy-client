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
import LoadingSpinner from "../pages/LoadingSpinner/LoadingSpinner";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "signup",
				element: <SignUp></SignUp>,
			},
			{
				path: "AddAToy",
				element: (
					<PrivateRoute>
						<AddAToy></AddAToy>
					</PrivateRoute>
				),
			},
			{
				path: "MyToys",
				element: (
					<PrivateRoute>
						<MyToys></MyToys>
					</PrivateRoute>
				),
			},
			{
				path: "AllToys",
				element: <AllToys></AllToys>,
			},
			{
				path: "/Blogs",
				element: <Blogs></Blogs>,
			},
			{
				path: "UpdateToysInfo/:id",
				element: <UpdateToysInfo></UpdateToysInfo>,
				loader: ({ params }) =>
					fetch(
						`https://joy-with-toy-server.vercel.app/toysInfos/${params.id}`
					),
			},
			{
				path: "ShopBySubCategory",
				element: <ShopBySubCategory></ShopBySubCategory>,
			},
			{
				path: "ViewDetails/:id",
				element: (
					<PrivateRoute>
						<ViewDetails></ViewDetails>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://joy-with-toy-server.vercel.app/toysInfos/${params.id}`
					),
			},
			{
				path: "BuyNow",
				element: <BuyNow></BuyNow>,
			},
			{
				path: "LoadingSpinner",
				element: <LoadingSpinner></LoadingSpinner>,
			},
		],
	},
]);

export default router;
