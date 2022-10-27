import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Register = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState('');
    const { providerLogin, providerLoginGtitHub, createUser, updateUserProfile } = useContext(AuthContext);


    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    // handle Google Sign In
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }


    // handle GitHub Sign In
    const handleGitHubSignIn = () => {
        providerLoginGtitHub(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error('error: ', error);
            })
    }



    const handleOnSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError();
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    // update user
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }


    // for toast show
    const toastShow = () => {
        toast.success('Registration Successfully Done!');
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center mb-5">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                    </div>

                    <form onSubmit={handleOnSubmit}>
                        <div style={{ width: '450px' }} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="your name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Photo</span>
                                    </label>
                                    <input name='photoURL' type="text" placeholder="your photo url" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="your email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="your password" className="input input-bordered" required />
                                </div>

                                <div className="form-control mt-6">
                                    <button onClick={toastShow} className="btn btn-primary" type='submit'>Register</button>
                                </div>

                                <div className="text-red-400">
                                    {error}
                                </div>
                                <p><small>Already have an account?
                                    <Link to='/login' className="label-text-alt link link-hover underline"> Login now</Link>
                                </small></p>
                            </div>
                        </div>
                    </form>

                    <div className="divider">OR</div>

                    <div>
                        {
                            user?.uid ?
                                <button className="mb-2 btn btn-outline btn-primary w-full">Sign Out</button>

                                :
                                <>
                                    <button onClick={handleGoogleSignIn} className="mb-2 btn btn-outline btn-primary w-full">
                                        <FcGoogle className='m-2'></FcGoogle>Continue Google</button>
                                    <button onClick={handleGitHubSignIn} className="btn btn-outline btn-primary w-full">
                                        <FaGithub className='m-2'></FaGithub> Continue GitHub</button>
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;