import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const Courses = () => {
    const [course, setCourse] = useState([]);
    // console.log(course);
    useEffect(() => {
        fetch('https://skillcrush-tech-server.vercel.app/courses/')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])

    return (

        <div className='grid lg:grid-cols-[3fr_1fr]'>

            <div className="grid lg:grid-cols-2 w-4/5 mx-auto rigthSide-Nav">
                {
                    course.map(ch => <SingleCourse
                        key={ch.id}
                        ch={ch}
                    ></SingleCourse>)
                }
            </div>

            <div className="border-2 border-red-500">
                <h2>This is Courses: {course.length}</h2>

            </div>


        </div >
    );
};

export default Courses;