import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className="max-w-xs rounded-lg" src="https://the7eagles.com/wp-content/uploads/2022/02/web-development-image-01.png" alt='' />
                <div className='text-start'>
                    <h1 className='text-3xl font-bold uppercase'>
                        "Career begin with <br /> The confidence of competence"
                    </h1>
                    <p className="py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus repellat, perspiciatis voluptates <br /> reiciendis qui optio enim tenetur ab error aliquam dolor sunt, esse animi numquam! Voluptate quas beatae est fuga?</p>
                    <Link to='/courses'><button className="btn btn-primary">Continue course</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;