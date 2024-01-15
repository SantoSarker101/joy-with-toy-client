import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/NavBar/NavBar';

const Main = () => {
	return (
		<div>

		<div>
			<div className='mx-auto'>
				<div className="bg-red-500 flex mx-auto w-full text-center text-white font-bold py-1 px-3">
					<p>Get $5 to Spend </p>
					<span className='ml-3'><FaArrowRight/></span>
				</div>

				<div className='flex bg-slate-100 text-dark font-bold p-3 border-y-2'>
					<p>20% OFF FestivalSALE </p>
					<span className='ml-3'><FaArrowRight/></span>
				</div>
			</div>
		</div>

			<NavBar></NavBar>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;