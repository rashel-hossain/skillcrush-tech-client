import React from 'react';

const GetPremium = () => {
    return (
        <div>
            <h2>Welcome To  Premium Access</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-1/2">
                    <div className="text-center mb-5">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                    </div>

                    <form>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="your name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="your email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input name='password' type="password" placeholder="your password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type='submit'>Register</button>
                                </div>


                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    );
};

export default GetPremium;