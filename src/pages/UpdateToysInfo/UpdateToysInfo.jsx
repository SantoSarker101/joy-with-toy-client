import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UpdatedToysFullInfos from './UpdatedToysFullInfos';

const UpdateToysInfo = () => {
  const updateToys = useLoaderData();

  // Check if updateToys is an object, and convert it to an array if needed
//   const toysArray = Array.isArray(updateToys) ? updateToys : [updateToys];
	const myToysArray = Object.values(updateToys)

  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-12 lg:p-20'>
      {myToysArray.map(updateToy => (
        <UpdatedToysFullInfos key={updateToy._id} updateToy={updateToy}>{updateToy.email}</UpdatedToysFullInfos>
      ))}

    </div>
  );
};

export default UpdateToysInfo;
