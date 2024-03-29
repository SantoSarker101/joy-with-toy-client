import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
	return (
		<div>

			<div>
				<div className='mx-auto'>
					<div className="bg-red-500 flex mx-auto w-full text-center text-white font-bold py-1 px-3 justify-center items-center">

						<p>Get $5 to Spend </p>
						<span className='ml-3 text-center'><FaArrowRight/></span>

					</div>

					<div className='flex bg-slate-100 text-dark font-bold p-3 border-y-2 justify-center items-center'>
						<p>20% OFF Festival SALE </p>
						<span className='ml-3'><FaArrowRight/></span>
					</div>
				</div>
			</div>

			<NavBar></NavBar>
			<Outlet></Outlet>
			<Footer></Footer>
			<ToastContainer></ToastContainer>
		</div>
	);
};

export default Main;