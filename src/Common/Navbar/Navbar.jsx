import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navlink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addBook'>Add Book</NavLink></li>
        <li><NavLink>All Books</NavLink></li>
        <li><NavLink>Borrowed Books</NavLink></li>
    </>

    const handleLogOut = async () => {
        await logOut()
      
    }
    return (
        <div className="navbar bg-base-100 p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlink}
                    </ul>
                </div>
                <div className='bg-primary p-5 pr-10 rounded-tr-full'>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="space-x-10 menu-horizontal  px-1">

                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <>
                        <div className="avatar mr-5" title={user?.displayName}>
                            <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <button onClick={handleLogOut} className='btn bg-primary text-neutral-50'>Log Out</button>
                    </> : <Link to="/logIn">                <button className='btn bg-primary text-neutral-50'>LogIn</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;