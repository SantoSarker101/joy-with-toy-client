import { Link, useRouteError } from "react-router-dom";
import { BsEmojiTear } from "react-icons/bs";

const ErrorPage = () => {
	const {error,status} = useRouteError();
	console.log(error.message,status);
	return (
		<section className="flex justify-center items-center min-h-screen text-center md:p-10 p-5">

			<div className="card w-3/4 bg-base-100 shadow-xl justify-center items-center md:p-10 space-y-8 font-bold">
			<div className="card-body">
				<Link to='/' className="btn btn-outline btn-secondary md:w-60 w-40 mx-auto font-extrabold">Go To Home</Link>
				<h2 className="text-red-500 text-9xl text-center my-7">{status}</h2>
				<p className="text-3xl"><span className="text-purple-500">Welcome To Error</span> <span className="text-red-400">{error?.message}</span> </p>
			</div>
			<figure> <BsEmojiTear className="w-40 h-40 text-yellow-700" /> </figure>
			</div>
		</section>
	);
};

export default ErrorPage;