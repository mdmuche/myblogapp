import React from 'react'
import {MdCancel} from 'react-icons/md'
import './Dialog.scss'

function Dialog({yes, no}) {
  return (
    <div className='dialog-box'>
        <div className='head'>
        <h2>notification</h2>
        <button className='cancel' onClick={()=>no()}><MdCancel/></button>
        </div>
        <p>do you really want to delete this blog?</p>
        <div className='dialog-btn'>
            <button onClick={()=>yes()} className='btn1'>yes</button>
            <button className='btn2' onClick={()=>no()}>no</button>
        </div>
    </div>
  )
}

export default Dialog