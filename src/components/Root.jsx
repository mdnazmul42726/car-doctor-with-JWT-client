import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";
import { signOut } from "firebase/auth";
import { auth } from "./firebase.init";

const Root = () => {
    const { user } = useContext(AuthContext);

    const handleLogOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Log out!'

        }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth).then(() => {
                    Swal.fire(
                        'Logged Out!',
                        'Your are logged out.',
                        'success'
                    )
                })
            }
        }).catch(err => console.log(err));
    }

    return (
        <div>
            <div className="navbar bg-base-100 mx-auto shadow z-20 w-full fixed">
                {/* mobile */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-600" : ""}>Home</NavLink>
                            <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-600" : ""}>About</NavLink>
                            <NavLink to="/services" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-600" : ""}>Services</NavLink>
                            <NavLink to="/blog" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-600" : ""}>Blog</NavLink>
                            <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-600" : ""}>Contact</NavLink>
                        </ul>
                    </div>
                    <img className="w-[16%] mt-2" src={logo} alt="" />
                </div>
                {/* PC */}
                <div className="navbar-center hidden lg:flex">
                    <ul className=" font-semibold flex gap-5 px-1">
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-600" : ""}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-600" : ""}>About</NavLink>
                        <NavLink to="/services" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-600" : ""}>Services</NavLink>
                        <NavLink to="/blog" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-600" : ""}>Blog</NavLink>
                        <NavLink to="/contact" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-600" : ""}>Contact</NavLink>
                    </ul>
                </div>
                <div className="navbar-end space-x-4 font-semibold">
                    <div className="flex gap-4">
                        {user ? <div className="dropdown  dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-72">
                                <li>
                                    <a className="justify-between">{user?.displayName}</a>
                                </li>
                                <li><a>{user?.email}</a></li>
                                <Link to={'/mybook'}><li><a>My Booking</a></li></Link>
                                <li><a onClick={handleLogOut}>Logout</a></li>
                            </ul>
                        </div> :
                            <div className="flex gap-4">
                                <NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-600" : ""}>Login</NavLink>
                                <NavLink to="/register" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-sky-600" : ""}>Register</NavLink>
                            </div>}

                    </div>
                </div>
            </div>

            {/* Outlet */} <div className="pt-36 w-11/12 mx-auto min-h-screen"><Outlet /></div> {/* Outlet */}

            {/* footer */}
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <img className="w-[36%] mt-2" src={logo} alt="" />
                    <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                </aside>
                <nav>
                    <header className="footer-title">About</header>
                    <Link className="link link-hover">Home</Link>
                    <Link className="link link-hover">Services</Link>
                    <Link className="link link-hover">Contact</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link className="link link-hover">Why Car Doctor</Link>
                    <Link className="link link-hover">About</Link>
                </nav>
                <nav>
                    <header className="footer-title">Support</header>
                    <Link className="link link-hover">Support Center</Link>
                    <Link className="link link-hover">Feedback</Link>
                    <Link className="link link-hover">Accessibility</Link>
                </nav>
            </footer>

        </div>
    );
};

export default Root;