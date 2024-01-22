import React, { useContext, useEffect, useState } from "react";
// import { useLoaderData } from 'react-router-dom';
import BuyNowCard from "./BuyNowCard";
import { AuthContext } from "../../Providers/AuthProvider";

const BuyNow = () => {
	const { user } = useContext(AuthContext);
	const [byNowToyProducts, setByNowToyProducts] = useState([]);

	const url = `https://joy-with-toy-server.vercel.app/BuyToysInfo?email=${user?.email}`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setByNowToyProducts(data));
	}, [url]);

	// const buyNowProducts = useLoaderData()
	// const BuyProducts = Object.values(buyNowProducts)
	// const [byNowToyProducts,setByNowToyProducts] = useState(BuyProducts)
	return (
		<div className="my-5 border-t-4 border min-h-svh">
			{byNowToyProducts.map((BuyProduct) => (
				<BuyNowCard
					key={BuyProduct._id}
					BuyProduct={BuyProduct}
					byNowToyProducts={byNowToyProducts}
					setByNowToyProducts={setByNowToyProducts}
				></BuyNowCard>
			))}
		</div>
	);
};

export default BuyNow;
