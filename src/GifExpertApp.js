import React, { useState, useEffect } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    // const categories = ['La casa de papel', 'dark', 'ozark'];
    const [categories, setCategories] = useState(['La casa de papel']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Inside Job']);

    //     // setCategories( cate => [...cate, 'Inside Job'] ); 
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map( cat => (
                        <GifGrid 
                            key={cat}
                            category = { cat }
                        />
                    ))
                }                
            </ol>
        </>
    );
}

export default GifExpertApp;


