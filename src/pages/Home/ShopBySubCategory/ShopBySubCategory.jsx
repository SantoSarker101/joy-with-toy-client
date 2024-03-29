import { useEffect, useState } from "react";
import ShopBySubCategoryCard from "./ShopBySubCategoryCard";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const ShopBySubCategory = ({ AllToy }) => {
	const [toys, setToys] = useState([]);
	const [activeTab, setActiveTab] = useState("jjj");

	useEffect(() => {
		fetch(
			`https://joy-with-toy-server.vercel.app/toysDataInfos/${activeTab}`
		)
			.then((res) => res.json())
			.then((result) => {
				setToys(result);
			});
	}, [activeTab]);

	// const result = toys?.filter((toy) => toy.subCategory == activeTab);
	// console.log(result);

	const handleTabClick = (tabName) => {
		setActiveTab(tabName);
	};

	const navigation = useNavigation();
	console.log(navigation.state);

	if (navigation.state === "loading") {
		return <LoadingSpinner></LoadingSpinner>;
	}

	return (
		<div>
			<h1 className="text-3xl text-center font-extrabold">
				Shop By Category
			</h1>

			<div className="flex justify-center space-x-14 mt-10">
				<button
					onClick={() => handleTabClick("RegularCar")}
					className={`tab btn ${
						activeTab == "RegularCar"
							? "bg-orange-800 text-white font-extrabold"
							: ""
					}`}
				>
					Regular Car
				</button>

				<button
					onClick={() => handleTabClick("Truck")}
					className={`tab tab2 btn ${
						activeTab == "Truck"
							? "bg-orange-800 text-white font-extrabold"
							: ""
					}`}
				>
					Truck
				</button>

				<button
					onClick={() => handleTabClick("MiniPoliceCar")}
					className={`tab tab3 btn ${
						activeTab == "MiniPoliceCar"
							? "bg-orange-800 text-white font-extrabold"
							: ""
					}`}
				>
					Mini Police Car
				</button>
			</div>

			<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-5">
				{toys?.map((toysInfo) => (
					<ShopBySubCategoryCard
						key={toysInfo._id}
						toysInfo={toysInfo}
					></ShopBySubCategoryCard>
				))}
			</div>
		</div>
	);
};

export default ShopBySubCategory;
