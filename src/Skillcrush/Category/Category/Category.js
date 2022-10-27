import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const Category = ({ ch }) => {
    const { id } = ch;

    return (
        <div>
            <Link id={id} to={`/courseDetails/${id}`}>
                <p className='flex border-info-2 rounded p-2 bg-red-500 text-white m-2'>
                    <FaCheckCircle className='items-center mr-2'></FaCheckCircle>{ch.title}
                </p></Link>

        </div>
    );
};

export default Category;