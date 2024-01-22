import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Swal from 'sweetalert2';

const BuyNowCard = ({BuyProduct,byNowToyProducts,setByNowToyProducts}) => {
	const {toyPhoto,toyName,price,rating,_id} = BuyProduct

	const handleDeleteBuyProduct = _id => {
		console.log(_id);

		Swal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, delete it!"
		}).then((result) => {
		if (result.isConfirmed) {

			fetch(`http://localhost:5000/BuyToysInfo/${_id}`,{
			method: 'DELETE'
			})
			.then(res => res.json())
			.then(data => {
			console.log(data);
			if(data.deletedCount > 0){
				Swal.fire({
				title: "Deleted!",
				text: "Your Toys has been deleted.",
				icon: "success"
				});

				const remaining = byNowToyProducts.filter(toys => toys._id != _id)
				setByNowToyProducts(remaining);
			}
			})

		}
		});
	}

	return (
		<div className="border-2 border-dashed m-5">
			<div className="card lg:card-side bg-base-100 shadow-xl p-5">

			<figure><img className="w-5/12 rounded" src={toyPhoto} alt="Album"/></figure>

			<div className="card-body font-extrabold">
				<h2 className="card-title font-extrabold">Toy Name: {toyName}</h2>
				<div className='flex items-center space-x-3 py-4'>
						<span>Rating: </span>
						<span>{rating}</span>
						<Rating style={{ maxWidth: 150 }} value={rating} readOnly />
				</div>
				<p>${price}.</p>


				<div className='flex justify-between mt-6'>
				<div className="card-actions justify-start">
				<button className="btn btn-outline btn-primary font-extrabold">Buy Now</button>
				</div>


				<div className="card-actions justify-end">
				<button onClick={() => handleDeleteBuyProduct(_id)} className="btn btn-outline btn-error font-extrabold">Cancel Order</button>
				</div>
				</div>

			</div>

			</div>

		</div>
	);
};

export default BuyNowCard;