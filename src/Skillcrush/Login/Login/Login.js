import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const Login = () => {
    const [user, setUser] = useState();
    const { providerLogin, providerLoginGtitHub } = useContext(AuthContext);

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
    //handleGoogleSignOut
    const handleGoogleSignOut = () => {
        signOut()
            .then(() => {
                setUser({});
            })
            .catch(() => {
                setUser({})
            })
    }
    //       signOut(auth) to L-26

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



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-1/2">
                    <div className="text-center mb-5">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p><small>Don't have an account?
                                <Link to='/register' className="label-text-alt link link-hover underline"> Register now</Link>
                            </small></p>
                        </div>
                    </div>
                    <span>----------------------or----------------------</span>
                    <div>
                        {
                            user?.uid ?
                                <button onClick={handleGoogleSignOut} className="mb-2 btn btn-outline btn-primary w-full">Sign Out</button>

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
        </div >
    );
};

export default Login;