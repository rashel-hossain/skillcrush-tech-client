import React, { useEffect, useState } from 'react';

const Courses = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('https://skillcrush-tech-server.vercel.app/courses/')
            .then(res => res.json())
            .then(data => setCourse(data));
    }, [])

    return (
        <div>
            <h2>This is Courses: {course.length}</h2>

        </div >
    );
};

export default Courses;