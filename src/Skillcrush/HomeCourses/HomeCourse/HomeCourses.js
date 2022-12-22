import React, { useEffect, useState } from 'react';
import HomeCourse from '../HomeCourses/HomeCourse';

const HomeCourses = () => {
    const [course, setCourse] = useState([]);
    // console.log(course);
    useEffect(() => {
        fetch('http://localhost:5000/courses/')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])

    return (
        <div className='mt-16'>
            <h1 className='text-4xl font-bold text-center uppercase mb-2'>Available Courses For You</h1>
            <div className="grid gap-4 lg:grid-cols-3 mx-auto rigthSide-Nav">
                {
                    course.map(ch => <HomeCourse
                        key={ch.id}
                        ch={ch}
                    ></HomeCourse>)
                }
            </div>
        </div>
    );
};

export default HomeCourses;