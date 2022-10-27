import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';



const GetPremium = () => {
    const getpremiums = useLoaderData()
    console.log(getpremiums);


    const toastShow = () => {
        toast.success('Successfully enrolled!');
    }

    const { title, price } = useState()
    return (
        <div>
            <Link>
                <h2>Welcome To  Premium Access</h2>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col">
                        <div className="text-center mb-5">
                            <h1 className="text-4xl font-bold">CheckOut</h1>
                        </div>
                        <h2 className="card-title">
                            {getpremiums.title}
                        </h2>
                        <div className="divider"></div>
                        <h4 className='text-xl'>Price: {getpremiums.price} TK</h4>

                        <button onClick={toastShow} className="btn btn-primary btn-block">Get Confirm</button>

                    </div>
                </div>
            </Link>
        </div >
    );
};

export default GetPremium;