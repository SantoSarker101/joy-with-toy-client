
import avronil from '../../../assets/images/gallery/Abhronil.png'

const StayConnected = () => {
	return (
		<div className='bg-gradient-to-r from-sky-700 from-10% via-indigo-500 via-40% to-emerald-900 to-90% lg:p-40 p-2 md:p-16'>
			<h1 className='text-3xl text-white font-extrabold text-center mb-5'>Stay Connected</h1>

			<div className="card card-side bg-base-100 shadow-xl p-10 md:p-20 flex-col items-center justify-center md:flex-row mx-auto">

			<div className='md:w-5/12'>
			<figure><img className='md:h-1/4 max-h-96 rounded' src={avronil} alt="Movie"/></figure>
			</div>

			<div className="card-body md:justify-start md:max-w-96 font-bold text-justify">


				<p className='md:mb-8 mb-3'>Sign up for the Joy with Toy Times Digital Monthly and receive updates on upcoming events, educational programs, industry news, and more !.</p>

				<div className="join flex justify-center mb-10">

				<input type="text" className="input input-bordered join-item text-black font-extrabold" placeholder="Enter Your business Email"/>

				<button className="btn join-item rounded-r-full font-extrabold">Sign Up</button>

				</div>

			</div>

			</div>


		</div>
	);
};

export default StayConnected;