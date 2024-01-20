import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ShopBySubCategoryCard = ({toysInfo}) => {

	const {toyPhoto,toyName,sellerName,email,subCategory,price,rating,availableQuantity,detailsDescription} = toysInfo;
	return (
		<div>
			<div className="card w-full bg-base-100 shadow-xl">

				<figure><img src={toyPhoto} alt="Toys Picture" /></figure>

				<div className="card-body">

					<h2 className="card-title">{toyName}</h2>

					<p><span>Price:</span> ${price}</p>

					<div className='flex items-center space-x-3'>
						<span>Rating: </span>
						<span>{rating}</span>
						<Rating style={{ maxWidth: 150 }} value={rating} readOnly />
					</div>

					<div className="card-actions justify-end mt-5">
						<button className="btn btn-primary font-extrabold">Please View Details</button>
					</div>

				</div>

				</div>
		</div>
	);
};

export default ShopBySubCategoryCard;