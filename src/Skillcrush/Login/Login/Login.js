import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
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
                        <button className="mb-2 btn btn-outline btn-primary w-full"><FcGoogle className='text-2xl m-1'></FcGoogle> Continue Google</button>
                        <button className="btn btn-outline btn-primary w-full"><FaGithub className='text-2xl m-1'></FaGithub> Continue GitHub</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;