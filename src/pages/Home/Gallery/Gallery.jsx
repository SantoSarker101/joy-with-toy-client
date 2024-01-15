import img1 from '../../../assets/images/gallery/1.png'
import img2 from '../../../assets/images/gallery/2.png'
import img3 from '../../../assets/images/gallery/3.png'
import img4 from '../../../assets/images/gallery/4.png'
import img5 from '../../../assets/images/gallery/5.png'
import img6 from '../../../assets/images/gallery/6.png'
import img7 from '../../../assets/images/gallery/7.png'
import img8 from '../../../assets/images/gallery/8.png'
import img9 from '../../../assets/images/gallery/9.png'
import img10 from '../../../assets/images/gallery/10.png'
import img11 from '../../../assets/images/gallery/11.png'
import img12 from '../../../assets/images/gallery/12.png'
import img13 from '../../../assets/images/gallery/13.png'
import img14 from '../../../assets/images/gallery/14.png'
import img15 from '../../../assets/images/gallery/15.png'
import img16 from '../../../assets/images/gallery/16.png'


const Gallery = () => {
	return (

		<>
			<h1 className='mt-12 mb-6 text-3xl text-center text-red-500 font-extrabold'>Toy Gallery</h1>

			<div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>

				<img src={img1} alt="" />
				<img src={img2} alt="" />
				<img src={img3} alt="" />
				<img src={img4} alt="" />
				<img src={img5} alt="" />
				<img src={img6} alt="" />
				<img src={img7} alt="" />
				<img src={img8} alt="" />
				<img src={img9} alt="" />
				<img src={img10} alt="" />
				<img src={img11} alt="" />
				<img src={img12} alt="" />
				<img src={img13} alt="" />
				<img src={img14} alt="" />
				<img src={img15} alt="" />
				<img src={img16} alt="" />

			</div>
		</>
	);
};

export default Gallery;