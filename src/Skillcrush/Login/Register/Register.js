import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const [error, setError] = useState('');

    const handleOnSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError();
                form.reset();
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }


    // for toast show
    const toastShow = () => {
        toast.success('Registration Successfully Done!');
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-1/2">
                    <div className="text-center mb-5">
                        <h1 className="text-4xl font-bold">Register now!</h1>
                    </div>

                    <form onSubmit={handleOnSubmit}>
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

                    <div className="m-2">
                        <button className="mb-2 btn btn-outline btn-primary w-full">Continue with Google</button>
                        <button className="btn btn-outline btn-primary w-full">Continue with GitHub</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;