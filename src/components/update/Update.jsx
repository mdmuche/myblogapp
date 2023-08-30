import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import './Update.scss'
import {FcCancel} from 'react-icons/fc'
import {RxUpdate} from 'react-icons/rx'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Update({id, blog, cancel}) {
  let [title, setTitle] = useState(blog.title);
  let [content, setContent] = useState(blog.content);
  let [author, setAuthor] = useState(blog.author);

  const notify = () => toast.success("blog updated successfully!",
  {
    theme: 'dark',
    position: 'top-center',
    duration: 2000
  }
  );

  let toUpdate = {
    title,
    content,
    author
  }

   
  function handleClick(e){
    e.currentTarget.disabled = true;
    axios.patch(`http://localhost:8000/Blogs/${id}`, toUpdate)
    .then(res=>{
      notify();
      setTimeout(() => {
        cancel(false);
      }, 2000);
    })
    .catch(err=>{
      console.log(err.message);
    })
  }

  function handleSubmit(e){
    e.currentTarget.disabled = true;
      axios.patch(`http://localhost:8000/Blogs/${id}`, toUpdate)
      .then(ans=>{
        notify();
        setTimeout(() => {
          cancel(false);
        }, 2000);
      })
      .catch(err=>{
        console.log(err.message);
      })
  }

  return (
    <div className='blog-create'>
      <h1>updating blog no. {id}</h1>
      <div className="form">
         <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="">Title:</label>
            <div></div>
            <input 
            className='titlefield'
            type="text"
            name='title'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            reguired
            />
            <div></div>
            <label htmlFor="">Content:</label>
            <div></div>
            <textarea 
            className='contentfield'
            name='content'
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            rows={10}
            cols={60}
            reguired
            />
            <div></div>
            <label htmlFor="" className='redlabel'>Author: </label>
            <div></div>
            <select 
            name="Author"
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            >
              <option value="Abula Martins">Abula Martins</option>
              <option value="Abula Experience">Abula Experience</option>
              <option value="Abula Awusa">Abula Awusa</option>
              <option value="Abula Ebere">Abula Ebere</option>
            </select>
            <div className="update-btn">
              <button className='update-btn1' title='cancel' onClick={()=>cancel(false)}><FcCancel/></button>
              <button className='update-btn2' title='update' onClick={handleClick}><RxUpdate/></button>
            </div>
         </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Update