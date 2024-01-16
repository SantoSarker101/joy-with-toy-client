import React, { useContext } from 'react';
import Lottie from "lottie-react";
import signup from '../../../assets/animation/signup.json'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {

	const {createUser} = useContext(AuthContext)

	const handleSignUp = event => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const photo = form.photo.value;
		console.log(name,email,password,photo);

		createUser(email, password)
		.then(result => {
			const user = result.user;
			console.log(user);
			updateUserData(user,name,photo)
		})
		.catch(error => console.log(error))
	}

	const updateUserData = (user,name,photo) => {
		updateProfile(user,{
			displayName: name,
			photoURL: photo
		})
		.then(() => {
			console.log('User name Updated');
		})
		.catch(error => {
			console.log(error);
		})
	}

	return (
		<div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-20% via-sky-500 via-40% to-emerald-500 to-90%">

		<div className="hero-content flex-col lg:flex-row-reverse lg:justify-between">

			<div className="w-1/2 md:ml-16">
			<Lottie className='md:w-96 w-56' animationData={signup} loop={true} />
			</div>



		<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

			<form onSubmit={handleSignUp} className="card-body">

			<h1 className="text-3xl font-bold">Create Your Account</h1>

				<div className="form-control">

				<label className="label">
					<span className="label-text">Your Name</span>
				</label>

				<input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />

				</div>


				<div className="form-control">

				<label className="label">
					<span className="label-text">Email</span>
				</label>

				<input type="email" name='email' placeholder="email" className="input input-bordered" required />

				</div>


				<div className="form-control">

				<label className="label">
					<span className="label-text">Password</span>
				</label>

				<input type="password" name='password' placeholder="password" className="input input-bordered" required />

				<label className="label">
					<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
				</label>

				</div>


				<div className="form-control">

				<label className="label">
					<span className="label-text">Photo URL</span>
				</label>

				<input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />

				</div>


				<div className="form-control mt-6">
					<input type="submit" className="btn btn-primary text-2xl" value='Sign Up' />
				</div>

			</form>

			<p className='mb-6 text-center'>Already Have an Account? Please <Link className='text-orange-600 font-extrabold' to='/login'>Login</Link></p>

			</div>

		</div>

		</div>
	);
};

export default SignUp;