import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    const course = useLoaderData();

    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                    <div className="relative lg:w-1/2">
                        <img
                            src={course.image}
                            className="object-cover w-full lg:absolute h-80 lg:h-full"
                        />
                        <svg
                            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                            viewBox="0 0 20 104"
                            fill="currentColor"
                        >
                            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">

                                <div className="badge badge-secondary">Premium course</div>
                            </p>
                        </div>
                        <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                            {course.title}
                        </h5>

                        <h4 className='text-xl'>Price: {course.price} TK</h4>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star text-warning" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>

                        <p className="mb-5 text-gray-800">
                            {course.description}
                        </p>

                        <div className="flex items-center">
                            <Link to='/getpremium'>
                                <button className="btn btn-primary btn-block">Get Premium Access</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default CourseDetails;