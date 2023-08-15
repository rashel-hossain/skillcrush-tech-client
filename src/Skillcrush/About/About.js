import React from 'react';

const About = () => {
    return (
        <>
            <div className='mb-32'>
                <div className="hero h-96" style={{ backgroundImage: 'url(https://cdn.acodez.in/wp-content/uploads/2022/10/Banner-image-45.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">About Us</h1>

                        </div>
                    </div>
                </div>
                <div className="hero mt-16">
                    <div className="hero-content w-2/3 flex-col lg:flex-row-reverse">
                        <img src="https://appsmaventech.com/images/blog/The-Evolution-Of-Web-Development-Via-Machine-Learning.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-5xl font-bold">Our Mission</h1>
                            <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur odit est consectetur neque saepe nisi reiciendis, beatae iste optio amet exercitationem similique officia laboriosam dolorem delectus molestiae, obcaecati voluptatem eos quas at esse rem tempora autem! Fugit labore incidunt facilis fuga ducimus. Perferendis blanditiis architecto id iste tempore mollitia fugiat?</p>
                        </div>
                    </div>
                </div>
                <div className="relative mt-16">
                    <div className="relative bg-opacity-75">
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="flex flex-col items-center justify-between xl:flex-row">
                                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                    <h2 className="max-w-lg mb-10 font-sans text-2xl font-medium tracking-tight text-slate-700 sm:text-4xl sm:leading-none uppercase">
                                        Find Us<br className="hidden md:block uppercase" />
                                        For Teachers Professional Web Services
                                        <span className="text-teal-accent-400 uppercase">We Provide Our Best Sevices</span>
                                    </h2>
                                    <div className='text-black'>
                                        <p><i class="fa-solid fa-location-dot pr-2 pb-4"></i>Dhaka, Bangladesh, 1216</p>
                                        <p><i class="fa-solid fa-phone-volume pr-2 pb-4"></i>+88 01166999555</p>
                                        <p><i class="fa-solid fa-envelope"></i>skillcrush23@gmail.com</p>
                                    </div>
                                </div>
                                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                    <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Banglamotor+(SkillCrush)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                        <a href="https://www.maps.ie/population/">Calculate population in area</a>
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;