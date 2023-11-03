import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const Register = () => {
    const { registerUserWithEmailAndPassword, signInWithGoogle } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        registerUserWithEmailAndPassword(email, password).then(() => {
            updateProfile(auth.currentUser, { displayName: name });

        }).catch(err => console.log(err));
    };

    const handleGoogleSignIn = (media) => {
        media().then(() => {
        }).catch(err => console.log(err));
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content -mt-52 flex-col lg:flex-row">
                    <div className="mr-20 w-1/2 hidden md:flex">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <h1 className="text-3xl font-bold">Register</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </form>
                        <h3 className='text-center'>Or Sign Up with</h3>
                        <div className="flex justify-center gap-3 text-xl mt-3 mb-4">
                            <FaFacebook className='text-sky-700 cursor-pointer' />
                            <FaTwitter className='text-sky-800 cursor-pointer' />
                            <FaGoogle className='text-red-600 cursor-pointer' onClick={() => handleGoogleSignIn(signInWithGoogle)} />
                        </div>
                        <p className='mb-5 text-center'>Already have an account? <Link className='text-red-500 font-bold' to={"/login"}>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;