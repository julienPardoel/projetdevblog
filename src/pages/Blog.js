import React, {useState, useEffect} from 'react';
import Navigation from '../components/Navigation';
import Formulaire from '../components/Formulaire';
import Articles from '../components/Articles';


const url = 'http://localhost:5000/api/v1/posts';

const Blog = () => {

    const [posts, setPosts] = useState([])
    const fetchPosts = async() => {
        try{
          const response = await fetch (url)
          const posts = await response.json()
          console.log(posts)
          setPosts(posts)
        } catch(error) {
          console.log(error)
        }
      }
      useEffect(()=>{
          fetchPosts();
      },[])
    return (
        <div className="blog">
            <Navigation />
            <Formulaire />
            <Articles posts={posts} />
        </div>
    )
}

export default Blog
