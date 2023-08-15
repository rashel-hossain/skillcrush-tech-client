import React from 'react';
import HomeCourses from '../../HomeCourses/HomeCourse/HomeCourses';
import ContactPage from '../../Shared/ContactPage/ContactPage';
import CourseCarosul from '../CourseCarosul/CourseCarosul';
import OurMission from '../OurMission/OurMission';
import Banner from '../Banner/Banner';
import CourseReview from '../CourseReview/CourseReview';

const Home = () => {

    return (
        <>
            <Banner />
            <HomeCourses />
            <CourseReview />
            <CourseCarosul />
            <OurMission />
            <ContactPage></ContactPage>
        </>
    );
};

export default Home;