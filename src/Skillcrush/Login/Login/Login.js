import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const [user, setUser] = useState();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const { providerLogin, providerLoginGtitHub, signIn } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();


    // handle Google Sign In
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error));
    }


    // handle GitHub Sign In
    const handleGitHubSignIn = () => {
        providerLoginGtitHub(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error('error: ', error);
            })
    }

    // logIn/signIn with eamil and password
    const handleSignIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
                toast.success('You have login Successfully!');

            })
            .catch(error => {
                setError(error.message);
                toast.error('Please enter your email and password!');
            })
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-1/2">
                    <div className="text-center mb-5">
                        <h1 className="text-4xl font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handleSignIn}>
                        <div style={{ width: '450px' }} className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type='submit'>Login</button>
                                </div>
                                <div className="text-red-400">
                                    {error}
                                </div>
                                <p>Don't have an account?
                                    <Link to='/register' className="label-text-alt link link-hover underline"> Register now</Link>
                                </p>
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
        </div >
    );
};

export default Login;