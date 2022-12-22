import React from 'react';
import { Link } from 'react-router-dom';

const HomeCourse = ({ ch }) => {
    const { id, image, title, price, description } = ch;

    return (
        <div>
            <Link id={id} to={`/courseDetails/${id}`}>
                <div className="card w-96 bg-base-100 shadow-xl mb-4 m-4">
                    <figure><img style={{ height: '250px', width: '100%' }} src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <h4 className='text-xl'>Price: {price} TK</h4>
                        <p>{description.slice(0, 100) + '....'} <span className='text-info'>Read More</span> </p>

                        <button className="btn btn-primary btn-block">See Course Module</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HomeCourse;