import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysTable from "./MyToysTable";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
	const { user } = useContext(AuthContext);
	const [myToys, setMyToys] = useState([]);
	useTitle('MyToys');

	const url = `https://joy-with-toy-server.vercel.app/toysInfos?email=${user?.email}`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMyToys(data));
	}, []);
	return (
		<div className="bg-gradient-to-r from-violet-700 from-10% to-green-900 to-90% text-white font-bold min-h-screen">
			<h1 className="text-3xl text-center pt-10 mb-8">My Toys</h1>

			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr className="text-white font-extrabold text-center">
							{/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
							<th>Toys Photo</th>
							<th>Toys Name</th>
							<th>Seller Name</th>
							<th>Email</th>
							<th>Sub Category</th>
							<th>Price</th>
							<th>Rating</th>
							<th>Available Quantity</th>
							<th>Details Description</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}

						{myToys.map((myToy) => (
							<MyToysTable
								key={myToy._id}
								myToy={myToy}
								myToys={myToys}
								setMyToys={setMyToys}
							></MyToysTable>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyToys;
