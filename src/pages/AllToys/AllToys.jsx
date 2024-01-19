import { useEffect, useState } from "react";
import AllToysTable from "./AllToysTable";

const AllToys = () => {
	const [AllToys, setAllToys] = useState([]);

	const url = `http://localhost:5000/toysInfos`;

	useEffect(() => {
		fetch(url)
		.then(res => res.json())
		.then(data => setAllToys(data))
	},[])

	return (
		<div className="bg-gradient-to-r from-fuchsia-800 from-10% to-cyan-900 to-90% text-white font-bold">


		<h1 className="text-center pt-12 mb-8 text-3xl">All Toys</h1>

		<div className="overflow-x-auto">
			<table className="table">
				{/* head */}
				<thead className="text-white font-extrabold">
				<tr>
					<th>Seler Name</th>
					<th>Toy Name</th>
					<th>Sub-Category</th>
					<th>Price</th>
					<th>Available Quantity</th>
				</tr>
				</thead>


				<tbody>

				{
					AllToys.map(AllToy => <AllToysTable key={AllToy._id} AllToy={AllToy}></AllToysTable>)
				}

				</tbody>

			</table>
		</div>


		</div>
	);
};

export default AllToys;