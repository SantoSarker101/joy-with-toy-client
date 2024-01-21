import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewDetailsCard = ({ViewDetailsData}) => {
	const {toyPhoto,toyName,sellerName,email,subCategory,price,rating,availableQuantity,detailsDescription,_id} = ViewDetailsData;

	const handleBuyToysInfo = () => {
		fetch('http://localhost:5000/BuyToysInfo',{
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(ViewDetailsData)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			if(data.insertedId){
				Swal.fire({
					title: 'Success!',
					text: 'Toy Information Added Successfully',
					icon: 'success',
					confirmButtonText: 'Cool'
				})
			}
		})
	}

	return (
		<div className="hero min-h-screen bg-base-200">

			<div className="hero-content flex-col md:flex-row-reverse md:justify-between ">

				<img src={toyPhoto} className=" rounded-lg shadow-2xl md:w-3/5 w-full" />

				<div className='md:w-5/12 w-full font-extrabold'>

				<h1 className="text-3xl">Toy Name: {toyName}</h1>

				<p className="py-4"> Seller Name: {sellerName}</p>
				<p className="py-4">Email: {email}</p>
				<p className="py-4">Price: {price}</p>

				<p className="py-4">Sub Category: {subCategory}</p>

				<div className='flex items-center space-x-3 py-4'>
						<span>Rating: </span>
						<span>{rating}</span>
						<Rating style={{ maxWidth: 150 }} value={rating} readOnly />
				</div>

				<p className="py-4"> Available Quantity: {availableQuantity}</p>
				<p className="py-4">Details Description: {detailsDescription}</p>


				<Link  onClick={handleBuyToysInfo} to='/BuyNow'>
					<input type="submit" value='Select This Toy For Buy' className="btn btn-primary mt-3" />
				</Link>

				</div>

			</div>

			</div>
	);
};

export default ViewDetailsCard;