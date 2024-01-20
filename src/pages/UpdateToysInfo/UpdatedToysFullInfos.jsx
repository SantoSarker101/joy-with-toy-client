import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Providers/AuthProvider';

const UpdatedToysFullInfos = ({updateToy}) => {
	const {user} = useContext(AuthContext);

	const {toyPhoto,toyName,sellerName,email,subCategory,price,rating,availableQuantity,detailsDescription,_id} = updateToy


	const handleUpdateToyInformation = event => {
		event.preventDefault();
		const form = event.target;

		const toyPhoto = form.toyPhoto.value;
		const toyName = form.toyName.value;
		const sellerName = form.sellerName.value;
		const email = form.email.value;
		const subCategory = form.subCategory.value;
		const price = form.price.value;
		const rating = form.rating.value;
		const availableQuantity = form.availableQuantity.value;
		const detailsDescription = form.detailsDescription.value;

		const UpdatedToysInfo = {toyPhoto,toyName,sellerName,email,subCategory,price,rating,availableQuantity,detailsDescription}

		console.log(UpdatedToysInfo);

		// Send data to the Server
		fetch(`http://localhost:5000/toysInfos/${_id}`,{
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(UpdatedToysInfo)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
			if(data.modifiedCount > 0){
				Swal.fire({
					title: 'Success!',
					text: 'Toy Information Updated Successfully',
					icon: 'success',
					confirmButtonText: 'Cool'
				})
			}
		})

	}

	return (

		<div className=''>

			<h2 className='text-3xl font-extrabold text-white text-center mb-10'>Update a Toy: {toyName}</h2>

		<form onSubmit={handleUpdateToyInformation}>


			{/* Form toy photo url and toy name Row  */}

			<div className='md:flex mb-4'>


			<div className="form-control md:w-1/2">

				<label className='label'>
					<span className='label-text text-yellow-200 font-extrabold'>Photo URL of the toy</span>
				</label>

				<label>

					<input type='text' name='toyPhoto' className="input input-bordered join-item w-full" placeholder="Photo URL of the toy" value={toyPhoto} readOnly/>

				</label>

			</div>


			<div className="form-control md:w-1/2 md:ml-4">

				<label className='label'>
					<span className='label-text text-yellow-200 font-extrabold'>Toy Name</span>
				</label>

				<label>

					<input type='text' name='toyName' defaultValue={toyName} readOnly className="input input-bordered join-item w-full" placeholder="Toy Name"/>

				</label>

			</div>


			</div>



			{/* Form Seller Name and Seller email Row  */}

			<div className='md:flex mb-4'>


			<div className="form-control md:w-1/2">

				<label className='label'>
					<span className='label-text text-yellow-200 font-extrabold'>Seller Name</span>
				</label>

				<label>

					<input type='text' name='sellerName' value={user && user?.displayName} className="input input-bordered join-item w-full" readOnly placeholder="Seller Name"/>

				</label>

			</div>


			<div className="form-control md:w-1/2 md:ml-4">

				<label className='label'>
					<span className='label-text text-yellow-200 font-extrabold'>Seller Email</span>
				</label>

				<label>

					<input type='email' name='email' value={user && user?.email} className="input input-bordered join-item w-full" readOnly
					placeholder="Seller Email"/>

				</label>

			</div>


			</div>



			{/* Form Sub-Category and Price Row  */}

			<div className='md:flex mb-4'>


			<div className="form-control md:w-1/2">

				<label className='label'>
					<span className='label-text text-yellow-200 font-extrabold'>Sub-Category</span>
				</label>

				<label className=''>

				<select className="select w-full text-base" name='subCategory' value={subCategory} readOnly  >

					<option disabled value='select a sub-category'>select a sub-category</option>

					<option value='Regular Car'>Regular Car</option>

					<option value='Truck'>Truck</option>

					<option value='Mini Police Car'>Mini Police Car</option>

				</select>


				</label>

			</div>


			<div className="form-control md:w-1/2 md:ml-4">

				<label className='label'>
					<span className='label-text text-yellow-200 font-extrabold'>Price</span>
				</label>

				<label>

					<input type='number' name='price' className="input input-bordered join-item w-full text-red-500 font-extrabold" defaultValue={price} placeholder="Price"/>

				</label>

			</div>


			</div>



			{/* Form Rating and Available quantity Row  */}

			<div className='md:flex mb-4'>


			<div className="form-control md:w-1/2">

				<label className='label'>
					<span className='label-text text-yellow-200 font-extrabold'>Rating</span>
				</label>

				<label>

					<input type='text' name='rating' defaultValue={rating} readOnly className="input input-bordered join-item w-full" placeholder="Rating"/>

				</label>

			</div>


			<div className="form-control md:w-1/2 md:ml-4">

				<label className='label'>
					<span className='label-text text-yellow-200 font-extrabold'>Available quantity</span>
				</label>

				<label>

					<input type='number' name='availableQuantity' className="input input-bordered join-item w-full text-red-500 font-extrabold" defaultValue={availableQuantity} placeholder="Available quantity"/>

				</label>

			</div>


			</div>



			{/* Form Detail description Row  */}

			<div className='mb-16'>


			<div className="form-control  md:w-1/2 ">

				<label className='label'>
					<span className='label-text text-yellow-200 font-extrabold'>Detail description</span>
				</label>

				<label>


				<textarea type='textarea' name='detailsDescription' placeholder="Detail description" defaultValue={detailsDescription} className="textarea textarea-primary w-full text-red-500 font-extrabold">

				</textarea>

				</label>

			</div>


			</div>


			<input type="submit" className="btn btn-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-yellow-100 font-extrabold text-lg" value='Update Information' />


		</form>


		</div>
	);
};

export default UpdatedToysFullInfos;