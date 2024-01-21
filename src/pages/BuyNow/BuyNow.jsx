import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyNowCard from './BuyNowCard';

const BuyNow = () => {
	const buyNowProducts = useLoaderData()
	const BuyProducts = Object.values(buyNowProducts)
	const [byNowToyProducts,setByNowToyProducts] = useState(BuyProducts)
	return (
		<div className='my-5 border-t-4 border'>
			{
				byNowToyProducts.map(BuyProduct => <BuyNowCard key={BuyProduct._id} BuyProduct={BuyProduct} byNowToyProducts={byNowToyProducts} setByNowToyProducts={setByNowToyProducts}></BuyNowCard>)
			}
		</div>
	);
};

export default BuyNow;