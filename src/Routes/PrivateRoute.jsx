import React, { Children, useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoute = ({children}) => {
	const {user,loading} = useContext(AuthContext);

	const location = useLocation();
	console.log(location);


	if(loading){
		return <progress className="progress w-56"></progress>
	}

	if(user?.email){
		return children;
	}
	return <Navigate state={{from: location}} to='/login' replace></Navigate>
	}
export default PrivateRoute;