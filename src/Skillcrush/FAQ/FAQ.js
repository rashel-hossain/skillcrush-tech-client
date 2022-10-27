import React from 'react';
import { Link } from 'react-router-dom';


const FAQ = () => {


    return (
        <div style={{ width: '600px' }} className='mx-auto'>
            <h2 className='text-4xl font-bold text-center mb-4'>This is Frequently ask question</h2>
            <div className="m-4 mx">
                <div tabIndex={0} className="m-4 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What react js is used for?
                    </div>
                    <div className="collapse-content">
                        <p>The React.js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.</p>
                    </div>
                </div>

                <div tabIndex={0} className="m-4 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is react router in react js?
                    </div>
                    <div className="collapse-content">
                        <p>React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native. <br /><Link>https://reactrouter.com/en/main</Link></p>
                    </div>
                </div>

                <div tabIndex={0} className="m-4 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        what is react hooks?
                    </div>
                    <div className="collapse-content">
                        <p>React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. React provides a bunch of standard in-built hooks: useState : To manage states. Returns a stateful value and an updater function to update it.</p>
                    </div>
                </div>

                <div tabIndex={0} className="m-4 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Why we use vercel? How does?
                    </div>
                    <div className="collapse-content">
                        <p>Vercel provides an easy-to-use experience for developers and makes it simple to deploy sites that are both fast and delightful for users. It also makes it easy for front-end teams to develop, preview and ship delightful user experiences where performance is the default.<br /><Link>https://andrewbaisden.medium.com/how-to-deploy-a-node-express-app-to-vercel-6fa567a041e2</Link></p>
                    </div>
                </div>

                <div tabIndex={0} className="m-4 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is context in React used for ?
                    </div>
                    <div className="collapse-content">
                        <p>What is context in React used for ?
                            Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context. <br /><Link>https://reactjs.org/docs/hooks-reference.html#usecontext</Link></p>
                    </div>
                </div>

                <div tabIndex={0} className="m-4 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is  private route in react ?
                    </div>
                    <div className="collapse-content">
                        <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. <br /> <Link>https://reactrouter.com/en/main/start/examples</Link></p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default FAQ;