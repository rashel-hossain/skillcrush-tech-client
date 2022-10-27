import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const toastShow = () => {

    toast.success('Successfully enrolled!');
}

const GetPremium = ({ id }) => {
    const { title, price } = useState()
    return (
        <div>
            <Link id={id} to={`/courseDetails/${id}`}>
                <h2>Welcome To  Premium Access</h2>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center mb-5">
                            <h1 className="text-4xl font-bold">CheckOut</h1>
                        </div>
                        <h2 className="card-title">
                            {title}
                        </h2>
                        <h4 className='text-xl'>Price: {price} TK</h4>

                        <button onClick={toastShow} className="btn btn-primary btn-block">Get Confirm</button>

                    </div>
                </div>
            </Link>
        </div >
    );
};

export default GetPremium;