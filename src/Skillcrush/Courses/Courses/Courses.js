import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Category from '../../Category/Category/Category';
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
            <div className="grid lg:grid-cols-2 mx-auto rigthSide-Nav">
                {
                    course.map(ch => <SingleCourse
                        key={ch.id}
                        ch={ch}
                    ></SingleCourse>)
                }
            </div>

            <div className="border-2 rounded border-red-500 mx-auto mb-4">
                <h2 className='text-2xl p-2'> Available Courses: {course.length}</h2>

                <div className='text-1xl mx-auto '>
                    {
                        course.map(ch => <Category
                            key={ch.id}
                            ch={ch}
                        ></Category>)

                    }
                </div>
            </div>


        </div >
    );
};

export default Courses;