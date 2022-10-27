import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">This Blog About questions</h2>

                <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">

                    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div className="relative">
                            <img
                                style={{ height: '300px' }}
                                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                src="https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/hero.png"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                        </div>
                        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                What is cors?
                            </h5>
                            <p className="mb-5 text-gray-700">
                                CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
                                CORS used for Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                            </p>
                        </div>
                    </div>

                    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div className="relative">
                            <img
                                style={{ height: '300px' }}
                                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                src="https://miro.medium.com/max/1400/1*p0nD8ImMzd3lEn00YhjPVg.png"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                        </div>
                        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                Why are you using firebase?  What other options do you have to implement authentication?
                            </h5>
                            <p className="mb-5 text-gray-700">
                                <strong>The Firebase</strong> Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                            </p>
                        </div>
                    </div>

                    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div className="relative">
                            <img
                                style={{ height: '300px' }}
                                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                src="https://miro.medium.com/max/880/1*kjZAT2HyYLv5gKT9SMBAHA.png"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                        </div>
                        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                How does the private route work?
                            </h5>
                            <p className="mb-5 text-gray-700">
                                he private route component is used to protect selected pages in a React app from unauthenticated users. Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page.
                            </p>

                        </div>
                    </div>


                    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div className="relative">
                            <img
                                style={{ height: '300px' }}
                                className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                                src="https://moralis.io/wp-content/uploads/2021/08/07-30-2021-moralis-blogpost-node.js-V10.png"
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                        </div>
                        <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                What is Node? How does Node work?
                            </h5>
                            <p className="mb-5 text-gray-700">
                                Node (or more formally Node. js) is an open-source, cross-platform runtime environment that allows developers to create all kinds of server-side tools and applications in JavaScript. The runtime is intended for use outside of a browser context. <strong>And it works</strong>
                                Node JS Web Server internally maintains a Limited Thread pool to provide services to the Client Requests. Node JS Web Server receives those requests and places them into a Queue. It is known as “Event Queue”. Node JS Web Server internally has a Component, known as “Event Loop”.
                            </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;