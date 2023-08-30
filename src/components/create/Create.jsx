import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Create.scss'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Create() {
  let [title, setTitle] = useState('');
  let [content, setContent] = useState('');
  let [author, setAuthor] = useState('Abula Martins');
  let cancel = useNavigate();

  const notify = () => toast.success("blog created successfully!",
  {
    theme: 'dark',
    position: 'top-center',
    duration: 5000
  }
  );

  let toUpdate = {
    title,
    content,
    author
  }

  function handleSubmit(e){
    e.currentTarget.disabled = true;
      axios.post(`http://localhost:8000/Blogs`, toUpdate)
      .then(ans=>{
        notify();
        setTimeout(() => {
          cancel("/blog");
        }, 2000);
      })
      .catch(err=>{
        console.log(err.message);
      })
  }

  return (
    <div className='blog-create'>
      <h1>Create Page</h1>

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
            <div className="btn">
              <button className='btn1' onClick={()=>cancel("/blog")}>Cancel</button>
              <button className='btn2' disabled={!title || !content} onClick={handleSubmit}>Create Blog</button>
            </div>
         </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Create