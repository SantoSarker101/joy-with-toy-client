import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Result } from "postcss";

const NavBar = () => {
	const {user,logOut} = useContext(AuthContext);

	const handleSignOut = () => {
		logOut()
		.then(result => {
			console.log(result);
		})
		.catch(error => console.log(error))
	}

	return (
<div className="md:navbar bg-base-100">

	<div className="navbar bg-base-100">
	<div className="navbar-start">
		<div className="dropdown">

		<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
		<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
		</div>

		<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

		<li>
			<NavLink to='/' className={({isActive}) => (isActive ? 'text-fuchsia-500 font-extrabold' : '')}>
				Home
			</NavLink>
		</li>

		<li>
			<NavLink to='/AllToys' className={({isActive}) => isActive ? 'text-fuchsia-500' : ''}>
				All Toys
			</NavLink>
		</li>
		<li>
			<NavLink to='/MyToy' className={({isActive}) => isActive ? 'text-fuchsia-500' : ''}>
				My Toy
			</NavLink>
		</li>
		<li>
			<NavLink to='/AddAToy' className={({isActive}) => (isActive ? 'text-fuchsia-500' : '')}>
				Add A Toy
			</NavLink>
		</li>
		<li>
			<NavLink to='/Blogs' className={({isActive}) => isActive ? 'text-fuchsia-500' : ''}>
				Blogs
			</NavLink>
		</li>

		</ul>

		</div>

		<Link to='/'><p className="cursor-pointer text-xl text-red-500 font-bold">Joy with Toy</p></Link>

	</div>


	<div className="navbar-center hidden lg:flex">
		<ul className="menu menu-horizontal px-1">
		<li>
			<NavLink to='/' className={({isActive}) => (isActive ? 'text-fuchsia-500 font-extrabold' : '')}>
				Home
			</NavLink>
		</li>

		<li>
			<NavLink to='/AllToys' className={({isActive}) => isActive ? 'text-fuchsia-500' : ''}>
				All Toys
			</NavLink>
		</li>
		<li>
			<NavLink to='/MyToy' className={({isActive}) => isActive ? 'text-fuchsia-500' : ''}>
				My Toy
			</NavLink>
		</li>
		<li>
			<NavLink to='/AddAToy' className={({isActive}) => (isActive ? 'text-fuchsia-500' : '')}>
				Add A Toy
			</NavLink>
		</li>
		<li>
			<NavLink to='/Blogs' className={({isActive}) => isActive ? 'text-fuchsia-500' : ''}>
				Blogs
			</NavLink>
		</li>

		{/* <li>
			<details>
			<summary>Parent</summary>
			<ul className="p-2">
				<li><a>Submenu 1</a></li>
				<li><a>Submenu 2</a></li>
			</ul>
			</details>
	</li> */}
		</ul>
	</div>
	</div>


	<div className="md:navbar-end text-center mt-5 mb-6 md:mt-0 md:mb-0">
		{
			user ? <div className="flex justify-center items-center">
			<p><img className='w-12 btn-circle cursor-pointer' src={user.photoURL} alt="" /></p>
			<p className="mx-5 text-red-500 font-extrabold">{user.displayName}</p>
			<button onClick={handleSignOut} className="btn btn-outline btn-secondary">Logout</button>
			</div> :
			<>
			<Link to='/login' className="btn btn-outline btn-secondary md:mr-5 mr-2">Login</Link>
			<Link to='/signup' className="btn btn-outline btn-secondary">Sign Up</Link>
			</>
		}


	</div>

</div>
	);
};

export default NavBar;