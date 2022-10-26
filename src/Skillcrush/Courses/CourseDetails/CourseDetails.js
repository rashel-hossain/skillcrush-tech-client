import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';



const CourseDetails = () => {
    const course = useLoaderData();


    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl mb-4 mx-auto">
                <figure><img style={{ height: '250px', width: '100%' }} src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h4 className='text-xl'>Price:  TK</h4>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <Link to='/getpremium'><button className="btn btn-primary btn-block">Add to Cart</button></Link>
                </div>
            </div>
        </div>

    );
};

export default CourseDetails;