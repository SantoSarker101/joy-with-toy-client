import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ViewDetailsCard from "./ViewDetailsCard";

const ViewDetails = () => {
	const [viewToyDetailsDatas,setViewToyDetailsDatas] = useState([]);
	const ViewDetail = useLoaderData();

	const ViewDetailsDatas = Object.values(ViewDetail)

	return (
		<div>

			{
				ViewDetailsDatas.map(ViewDetailsData => <ViewDetailsCard key={ViewDetailsData._id} ViewDetailsData={ViewDetailsData} ></ViewDetailsCard>)
			}

		</div>
	);
};

export default ViewDetails;