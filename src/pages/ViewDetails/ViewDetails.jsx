import { useEffect, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import ViewDetailsCard from "./ViewDetailsCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import useTitle from "../../hooks/useTitle";

const ViewDetails = () => {

	const navigation = useNavigation();
	console.log(navigation.state);
	useTitle('ViewToyDetails')

	if(navigation.state === 'loading'){
		return <LoadingSpinner></LoadingSpinner>
	}

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