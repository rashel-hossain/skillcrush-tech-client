import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const SingleCourse = ({ ch }) => {
    const { image, title, price, description } = ch;

    const toastShow = () => {
        toast.success('Successfully Enrolled!');
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-4">
                <figure><img style={{ height: '250px', width: '100%' }} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h4 className='text-xl'>Price: {price} TK</h4>
                    <p>{description.slice(0, 100) + '....'} <Link to='/coursedetails' className='text-info'>Read More</Link> </p>

                    <button onClick={toastShow} className="btn btn-primary btn-block">Enrolle Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;