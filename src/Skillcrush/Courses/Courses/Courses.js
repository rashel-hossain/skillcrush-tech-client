import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import Category from '../../Category/Category';

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
            <div className=" mx-auto mb-4">
                <h2 className='text-2xl p-2'>Available Courses: {course.length}</h2>
                <div className='text-1xl border-2 border-purple-600 rounded'>
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