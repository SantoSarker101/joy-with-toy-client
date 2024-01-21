import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import PlanToysPartnership from "../PlanToysPartnership/PlanToysPartnership";
import ShopBySubCategory from "../ShopBySubCategory/ShopBySubCategory";
import StayConnected from "../StayConnected/StayConnected";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<Gallery></Gallery>
			<ShopBySubCategory></ShopBySubCategory>
			<PlanToysPartnership></PlanToysPartnership>
			<StayConnected></StayConnected>
		</div>
	);
};

export default Home;