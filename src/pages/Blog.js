import React from 'react';
import Navigation from '../components/Navigation';
import Formulaire from '../components/Formulaire';

const Blog = () => {
    return (
        <div className="blog">
            <Navigation />
            <h1>Blog</h1>
            <Formulaire />
            <article>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus molestiae alias cum. Dicta, nihil eum temporibus voluptate consequatur illum. Cum illum voluptatem perferendis aliquam tempora enim molestiae, sapiente maiores? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus consequatur iusto mollitia. Amet excepturi commodi nemo dicta omnis ipsum nulla accusantium fuga dignissimos ratione! Odit nam obcaecati expedita harum.
                    <br/>
                    <a>#Hashtag</a>
                </p>
            </article>
        </div>
    )
}

export default Blog
