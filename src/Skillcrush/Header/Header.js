import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import './header.css'
const Header = () => {
    const { user, logOut, isDarkMode, toggleDarkMode } = useContext(AuthContext);

    const handleLogOut = () => {
        return logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='/courses' className="justify-between">
                                Courses
                            </Link>
                        </li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"> <img style={{ height: '50px' }} src="/skillcrush.PNG" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <Link to='/courses' className="justify-between">
                            Courses
                        </Link>
                    </li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    {/* <li><button ><input type="checkbox" className="toggle" /></button></li> */}
                    <li className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                        <button onClick={toggleDarkMode}>
                            <input
                                type="checkbox"
                                className="toggle"
                                checked={isDarkMode}
                            />
                        </button>
                    </li>
                </ul>
            </div>
            <div className="navbar-end px-2">
                <Link className='flex'>
                    {
                        user?.uid ?
                            <>
                                <div className="navbar">
                                    <span> {user?.displayName} </span>
                                    <Link className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                        {user?.photoURL ?
                                            <img className='rounded-full ml-3'
                                                style={{ width: '40px' }}
                                                src={user.photoURL} alt="" />
                                            :
                                            <FaUserCircle className='text-3xl'></FaUserCircle>
                                        }
                                    </Link>
                                </div>
                                <button onClick={handleLogOut} className="btn px-4 m-2">Log Out</button>
                            </>
                            :
                            <>
                                <div className="navbar">
                                    <button className="btn px-4 m-2 bg-purple-500"> <Link to='/login'>Login</Link></button>
                                </div>
                            </>
                    }
                </Link>
            </div>
        </div>
    );
};

export default Header;