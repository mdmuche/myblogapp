import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AiFillStepBackward, AiOutlineDelete } from 'react-icons/ai'
import {RiEditLine} from 'react-icons/ri'
import './Details.scss'
import Update from '../update/Update';
import Loader from '../loader/Loader';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dialog from '../dialog/Dialog';

function Details() {
  let [blog, setBlog] = useState('');
  let {id} = useParams();
  let [show, setShow] = useState(false);
  let [loader, setLoader] = useState(false);
  let [dialog, setDialog] = useState(false);
  let [answer, setAnswer] = useState(true);
  let redirect = useNavigate();

  const notify = () => toast.success("blog deleted successfully!",
  {
    theme: 'dark',
    position: 'top-center',
    duration: 5000
  }
  );

  useEffect(()=>{
    axios.get(`http://localhost:8000/Blogs/${id}`)
    .then(res=>{
      setTimeout(() => {
        setBlog(res.data);
        setLoader(true);
      }, 500);
    })
    .catch(err=>{
      console.log(err.message);
    })
  }, [show])
  
  function yes(){
    setAnswer(true);
    setDialog(false);
    if(answer === true){
      handleDelete();
    }
  }
  function no(){
    setAnswer(false);
    setDialog(false);
  }
  function handleDelete(){
    axios.delete(`http://localhost:8000/Blogs/${id}`)
    .then(res=>{
      // console.log(`Blog with id of ${id} was deleted succesfully!`);
      notify();
      setTimeout(() => {
        redirect('/blog');
      }, 2000);
    })
    .catch(err=>{
      console.log(err.message);
    })
  }

  return (
    <div>
      {
        !show && loader &&
      <div className='details-page'>
        <h1>Blog details for blog no. {id}</h1>
        <div className='blog-details'>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <h5>{blog.author}</h5>
      <div className='details-btn'>
           <button className='btn1' title='back' onClick={()=> redirect('/blog')}><AiFillStepBackward className='details-back'/></button>
           <button className='btn2' title='delete' onClick={()=>setDialog(true)}><AiOutlineDelete className='details-delete' /></button>
           <button className='btn3' title='edit' onClick={()=>setShow(true)}><RiEditLine className='details-edit' /></button>
        </div>
        </div>
    </div>
      }
      {
        dialog &&
          <Dialog setAnswer = {setAnswer} setDialog = {setDialog} yes = {yes} no = {no}/>
      }
      { show &&
        <Update cancel={setShow} blog={blog} id = {id}/>
      }
      {
        !loader && <Loader/>
      }
      <ToastContainer />
    </div>
  )
}

export default Details