import React from 'react';

const GetPremium = () => {
    return (
        <div>
            <h2>Welcome To  Premium Access</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center mb-5">
                        <h1 className="text-4xl font-bold">Personal Information</h1>
                    </div>

                    <form>
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
                                        <span className="label-text">Email Address</span>
                                    </label>
                                    <input name='email' type="text" placeholder="your email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input type="text" placeholder="your phone number" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary" type='submit'>Submit To Access</button>
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