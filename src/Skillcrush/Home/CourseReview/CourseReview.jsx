import React from 'react';

const CourseReview = () => {
    return (
        <>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="text-center mb-5">
                    <h1 className="text-4xl font-bold">Ours Courses Reviews</h1>
                </div>
                <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src="https://res.cloudinary.com/hevo/images/f_auto,q_auto/v1648643824/hevo-learn/JAVASCRIPT-LAMBDA-FUNCTIONS-FI/JAVASCRIPT-LAMBDA-FUNCTIONS-FI.png?_i=AA"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </a>
                        <div className="py-5 px-4">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                13 Jul 2022
                            </p>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">Javascript [40 Hourse]</p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="/"
                                    aria-label="Likes"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="6 23 1 23 1 12 6 12"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">5.4K</p>
                                </a>
                                <a
                                    href="/"
                                    aria-label="Comments"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="23 5 23 18 19 18 19 22 13 18 12 18"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <polygon
                                                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">55</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </a>
                        <div className="py-5 px-4">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                4 Nov 2022
                            </p>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">React Advance [50 Hourse]</p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="/"
                                    aria-label="Likes"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="6 23 1 23 1 12 6 12"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">6.7K</p>
                                </a>
                                <a
                                    href="/"
                                    aria-label="Comments"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="23 5 23 18 19 18 19 22 13 18 12 18"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <polygon
                                                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">75</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                        <a href="/" aria-label="Article">
                            <img
                                src="https://uploads.sololearn.com/uploads/courses/1073.png"
                                className="object-cover w-full h-64 rounded"
                                alt=""
                            />
                        </a>
                        <div className="py-5 px-4">
                            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                28 Dec 2022
                            </p>
                            <a
                                href="/"
                                aria-label="Article"
                                className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                <p className="text-2xl font-bold leading-5">
                                    Python  with Django [30 Hours]
                                </p>
                            </a>
                            <p className="mb-4 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                                consequuntur magni voluptatem doloremque.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="/"
                                    aria-label="Likes"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="6 23 1 23 1 12 6 12"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <path
                                                d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">7.6K</p>
                                </a>
                                <a
                                    href="/"
                                    aria-label="Comments"
                                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                >
                                    <div className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                        >
                                            <polyline
                                                points="23 5 23 18 19 18 19 22 13 18 12 18"
                                                fill="none"
                                                strokeMiterlimit="10"
                                            />
                                            <polygon
                                                points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeMiterlimit="10"
                                            />
                                        </svg>
                                    </div>
                                    <p className="font-semibold">75</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseReview;