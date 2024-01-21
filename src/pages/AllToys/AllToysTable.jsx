import { Link } from "react-router-dom";
import ViewDetails from "../ViewDetails/ViewDetails";

const AllToysTable = ({AllToy}) => {

	const {toyName,sellerName,subCategory,price,availableQuantity,_id} = AllToy;

	return (
		<tr>
			<th>{sellerName}</th>
			<td>{toyName}</td>
			<td>{subCategory}</td>
			<td>${price}</td>
			<td>{availableQuantity}</td>
			<td>
				<Link to={`/ViewDetails/${_id}`}>
					<button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-extrabold">
					View Details
					</button>
				</Link>
			</td>
		</tr>

	);
};

export default AllToysTable;