import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../loader/Loader'
// import { Blogs } from '../offline/blogs'
import './Blog.scss'

function Blog() {
  let [blogs, setBlogs] = useState([]);
  let [loader, setLoader] = useState(false);
  useEffect(()=>{
    axios.get('http://localhost:8000/Blogs')
    .then(res=>{
      setTimeout(() => {
        setBlogs(res.data);
        setLoader(true);
      }, 500);
    })
    .catch(err=>{
      console.log(err.message);
    })
  }, [])
  return (
    <div className='blogs-page'>
      <h1>Latest Blog</h1>
      {
       loader && blogs.map(blog => (
          <div className='blogs-page-latest' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.content.slice(0, 30)}...</p>
          <h5>{blog.author}</h5>
          <Link to={`/details/${blog.id}`} className='more-read'>Read More...</Link>
          </div>
        ))
      }
      {
        !loader && <Loader/>
      }
    </div>
  )
}

export default Blog