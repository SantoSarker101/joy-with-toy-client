import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysTable = ({ myToy, myToys, setMyToys }) => {
	const {
		toyPhoto,
		toyName,
		sellerName,
		email,
		subCategory,
		price,
		rating,
		availableQuantity,
		detailsDescription,
		_id,
	} = myToy;

	const handleDelete = (_id) => {
		// console.log(_id);

		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(
					`https://joy-with-toy-server.vercel.app/toysInfos/${_id}`,
					{
						method: "DELETE",
					}
				)
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire({
								title: "Deleted!",
								text: "Your Toys has been deleted.",
								icon: "success",
							});

							const remaining = myToys.filter(
								(toys) => toys._id != _id
							);
							setMyToys(remaining);
						}
					});
			}
		});
	};
	return (
		<tr>
			{/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}

			<td>
				<div className="avatar">
					<div className="mask mask-squircle w-20 h-20">
						<img
							src={toyPhoto}
							alt="Avatar Tailwind CSS Component"
						/>
					</div>
				</div>
			</td>

			<td>{toyName}</td>

			<td>{sellerName}</td>
			<td>{email}</td>
			<td>{subCategory}</td>
			<td>${price}</td>
			<td>{rating}</td>
			<td>{availableQuantity}</td>
			<td>{detailsDescription}</td>

			<td>
				<Link to={`/UpdateToysInfo/${_id}`}>
					<button className="btn btn-outline border-gray-50 border-dashed text-white border-2">
						Update
					</button>
				</Link>
			</td>

			<td>
				<button
					onClick={() => handleDelete(_id)}
					className="btn btn-circle btn-outline border-rose-200 border-dashed text-white border-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</td>
		</tr>
	);
};

export default MyToysTable;
