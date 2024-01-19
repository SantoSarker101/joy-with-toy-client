
const AllToysTable = ({AllToy}) => {

	const {toyName,sellerName,subCategory,price,availableQuantity} = AllToy;

	return (
		<tr>
			<th>{sellerName}</th>
			<td>{toyName}</td>
			<td>{subCategory}</td>
			<td>${price}</td>
			<td>{availableQuantity}</td>
			<td>
			<button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-extrabold">
			View Details
			</button>
			</td>
		</tr>

	);
};

export default AllToysTable;