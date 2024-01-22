import React from 'react';

const LoadingSpinner = () => {
	return (
		<div>
			<div className='flex justify-center items-center min-h-screen'>

			<p className='text-5xl md:text-9xl font-thin'>L</p>

			<div className='w-10 h-10  md:w-20 md:h-20 border-8 border-dashed rounded-full animate-spin mt-5 border-orange-600'></div>

			<p className='text-5xl md:text-9xl font-thin'>ading....</p>

			</div>
		</div>
	);
};

export default LoadingSpinner;