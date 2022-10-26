import React, { useEffect, useState } from 'react';
import Home from '../../Home/Home';

const Category = () => {
    // const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     fetch('https://skillcrush-tech-server.vercel.app/courses/')
    //         .then(res => res.json())
    //         .then(data => setCategories(data));
    // }, [])


    return (
        <div>
            <h2>Category</h2>
            {
                // categories.map(category => <Home
                //     key={category.id}
                //     category={category}
                // ></Home>
                // )
            }
        </div>
    );
};

export default Category;