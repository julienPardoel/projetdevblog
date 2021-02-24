import React, {useState}from 'react';
import Navigation from '../components/Navigation';
import Formulaire from '../components/Formulaire';
import Articles from '../components/Articles';
import data from '../data/data';

const Blog = () => {
    const[datas] = useState(data);
    return (
        <div className="blog">
            <Navigation />
            <h1>Blog</h1>
            <Formulaire />
            <Articles datas={datas} />
        </div>
    )
}

export default Blog
