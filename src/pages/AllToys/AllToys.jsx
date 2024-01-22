import { useEffect, useState } from "react";
import AllToysTable from "./AllToysTable";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const AllToys = () => {
	const [AllToys, setAllToys] = useState([]);
	const [seachText, setSearchText] = useState("");

	const url = `https://joy-with-toy-server.vercel.app/toysInfos`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setAllToys(data));
	}, []);

	const handleSearch = () => {
		fetch(
			`https://joy-with-toy-server.vercel.app/ToySerchByName/${seachText}`
		)
			.then((res) => res.json())
			.then((data) => {
				setAllToys(data);
			});
	};

	const navigation = useNavigation();
	console.log(navigation.state);

	if (navigation.state === "loading") {
		return <LoadingSpinner></LoadingSpinner>;
	}

	return (
		<div className="bg-gradient-to-r from-fuchsia-800 from-10% to-cyan-900 to-90% text-white font-bold min-h-screen">
			<h1 className="text-center pt-12 mb-8 text-3xl">All Toys</h1>

			<div className="join flex justify-center mb-10">
				<input
					onChange={(e) => setSearchText(e.target.value)}
					type="text"
					className="input input-bordered join-item text-black"
					placeholder="Search Toy name"
				/>

				<button
					onClick={handleSearch}
					className="btn join-item rounded-r-full font-extrabold"
				>
					Search
				</button>
			</div>

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
						{AllToys.map((AllToy) => (
							<AllToysTable
								key={AllToy._id}
								AllToy={AllToy}
							></AllToysTable>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default AllToys;
