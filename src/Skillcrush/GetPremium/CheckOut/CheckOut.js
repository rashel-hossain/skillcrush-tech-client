import React, { useEffect, useState } from 'react';
import { } from 'react-router-dom';
import GetPremium from '../GetPremium';

const CheckOut = () => {
    const [course, setCourse] = useState([]);
    // console.log(course);
    useEffect(() => {
        fetch('https://skillcrush-tech-server.vercel.app/courses/')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-4 m-4">
                <div className="card-body">
                    {
                        course.map(ch =>
                            <GetPremium
                                key={ch.id}
                                ch={ch}

                            ></GetPremium>
                        )}
                </div>
            </div>
        </div >
    );
};

export default CheckOut;