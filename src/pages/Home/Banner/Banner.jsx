import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/banner/1.png'
import img2 from '../../../assets/images/banner/2.png'
import img3 from '../../../assets/images/banner/3.png'
import img4 from '../../../assets/images/banner/4.png'

const Banner = () => {
	return (
		<div className="carousel w-full h-screen">

		<div id="slide1" className="carousel-item relative w-full">

			<img src={img1} className="w-full rounded-lg" />

			<div className="absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">

				<div className='space-y-4 text-white pl-4'>

					<h2 className='text-2xl'>Shop Curated Used Toys & Baby Gear</h2>
					<p>New • Open Box • Quality Used</p>
					<Link to='/AllToys'><button className="btn bg-white mt-4">Start Shopping</button></Link>

				</div>
			</div>


			<div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">

			<a href="#slide4" className="btn btn-circle mr-6">❮</a>
			<a href="#slide2" className="btn btn-circle">❯</a>
			</div>

		</div>


		<div id="slide2" className="carousel-item relative w-full">

			<img src={img2} className="w-full" />

			<div className="absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">

				<div className='space-y-4 text-white pl-4'>

					<h2 className='text-2xl'>Shop Curated Used Toys & Baby Gear</h2>
					<p>New • Open Box • Quality Used</p>
					<Link to='/AllToys'><button className="btn bg-white mt-4">Start Shopping</button></Link>

				</div>
			</div>

			<div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">

			<a href="#slide1" className="btn btn-circle mr-6">❮</a>
			<a href="#slide3" className="btn btn-circle">❯</a>
			</div>
		</div>


		<div id="slide3" className="carousel-item relative w-full">

			<img src={img3} className="w-full" />

			<div className="absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">

				<div className='space-y-4 text-white pl-4'>

					<h2 className='text-2xl'>Shop Curated Used Toys & Baby Gear</h2>
					<p>New • Open Box • Quality Used</p>
					<Link to='/AllToys'><button className="btn bg-white mt-4">Start Shopping</button></Link>

				</div>
			</div>

			<div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">

			<a href="#slide2" className="btn btn-circle mr-6">❮</a>
			<a href="#slide4" className="btn btn-circle">❯</a>
			</div>
		</div>


		<div id="slide4" className="carousel-item relative w-full">

			<img src={img4} className="w-full" />

			<div className="absolute flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">

				<div className='space-y-4 text-white pl-4'>

					<h2 className='text-2xl'>Shop Curated Used Toys & Baby Gear</h2>
					<p>New • Open Box • Quality Used</p>
					<Link to='/AllToys'><button className="btn bg-white mt-4">Start Shopping</button></Link>

				</div>
			</div>

			<div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">

			<a href="#slide3" className="btn btn-circle mr-6">❮</a>
			<a href="#slide1" className="btn btn-circle">❯</a>

			</div>
		</div>


		</div>
	);
};

export default Banner;