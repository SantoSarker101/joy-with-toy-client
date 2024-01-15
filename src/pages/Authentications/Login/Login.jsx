import React from 'react';
import Lottie from "lottie-react";
import log from '../../../assets/animation/log.json'

const Login = () => {

	const handleLogin = event => {
		event.preventDefault();
	}

	return (
		<div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-40% to-emerald-500 to-90% hover:from-pink-500 hover:to-yellow-500 ...">

		<div className="hero-content flex-col lg:flex-row-reverse lg:justify-between">

			<div className="w-1/2 md:ml-16">
			<Lottie className='md:w-96 w-56' animationData={log} loop={true} />
			</div>



		<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

			<form onSubmit={handleLogin} className="card-body">

			<h1 className="text-3xl font-bold">Login now!</h1>

				<div className="form-control">

				<label className="label">
					<span className="label-text">Email</span>
				</label>

				<input type="email" placeholder="email" className="input input-bordered" required />

				</div>

				<div className="form-control">

				<label className="label">
					<span className="label-text">Password</span>
				</label>

				<input type="password" placeholder="password" className="input input-bordered" required />

				<label className="label">
					<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
				</label>

				</div>


				<div className="form-control mt-6">
					<input type="submit" className="btn btn-primary text-2xl" value='Login' />
				</div>

			</form>

			</div>

		</div>

		</div>
	);
};

export default Login;