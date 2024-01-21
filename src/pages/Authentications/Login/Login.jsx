import React, { useContext, useRef, useState } from 'react';
import Lottie from "lottie-react";
import log from '../../../assets/animation/log.json'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
	const [show,setShow] = useState(false);

	const {signIn,googlePop,passwordReset} = useContext(AuthContext)
	const emailRef = useRef();

	const navigate = useNavigate();
	const location = useLocation();
	console.log('Login Page Location', location);
	const from = location?.state?.from?.pathname || '/';

	const googleProvider = new GoogleAuthProvider()

	const handleGoogleSignIn = () => {
		googlePop(googleProvider)
		.then(result => {
			const user = result.user;
			console.log(user);
			navigate(from, {replace: true})
		})
		.catch(error => {
			console.log(error);
		})
	}

	const handleLogin = event => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email,password);

		signIn(email, password)
		.then(result => {
			const user = result.user;
			console.log(user);
			navigate(from, {replace: true})
		})
		.catch(error => console.log(error));
	}

	const handleResetPassword = () => {
		const email = (emailRef.current.value);

		if(!email){
			alert('Please Provide Your Email Address to Reset Password')
			return;
		}

		passwordReset(email)
		.then(() => {
			alert('Please Check Your Email')
		})
		.catch(error => {
			console.log(error);
		})
	}

	return (
		<div className="hero min-h-screen bg-gradient-to-r from-pink-500 to-yellow-200">

		<div className="hero-content flex-col lg:flex-row-reverse lg:justify-between">

			<div className="w-1/2 md:ml-16">
			<Lottie className='md:w-96 w-56' animationData={log} loop={true} />
			</div>



		<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">


			<form onSubmit={handleLogin} className="card-body">

			<h1 className="text-2xl font-bold">Sign in to Joy with Toy</h1>

			<button onClick={handleGoogleSignIn} className='btn btn-outline mt-7 mb-3'><FaGoogle/> Sign in with Google</button>

			<div className='flex items-center mb-6'>
				<hr className='w-3/12 border' />
				<p className='w-6/12 text-center'>or sign in with email</p>
				<hr className='w-3/12 border' />
			</div>


				<div className="form-control">

				<label className="label">
					<span className="label-text">Email</span>
				</label>

				<input type="email" name='email' ref={emailRef} placeholder="email" className="input input-bordered" required />

				</div>

				<div className="form-control">

				<label className="label">
					<span className="label-text">Password</span>
				</label>

				<input type={show ? 'text' : 'password'}  name='password' placeholder="password" className="input input-bordered" required />

				<div className='flex justify-between'>
				<p><small onClick={() => setShow(!show)} className='cursor-pointer'>
					{
						show ? <span>Hide Password</span> : <span>Show Password</span>
					}
				</small></p>

					<p><small onClick={handleResetPassword} className='cursor-pointer'>Forget Password?</small></p>
				</div>

				</div>


				<div className="form-control mt-6">
					<input type="submit" className="btn btn-primary text-2xl" value='Login' />
				</div>

			</form>

			<p className='mb-6 text-center'>New to Joy with Toy? Please <Link className='text-orange-600 font-extrabold' to='/signup'>Sign Up</Link></p>

			</div>

		</div>

		</div>
	);
};

export default Login;