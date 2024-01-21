import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import PlanToysPartnership from "../PlanToysPartnership/PlanToysPartnership";
import ShopBySubCategory from "../ShopBySubCategory/ShopBySubCategory";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Gallery></Gallery>
			<ShopBySubCategory></ShopBySubCategory>
			<PlanToysPartnership></PlanToysPartnership>
		</div>
	);
};

export default Home;