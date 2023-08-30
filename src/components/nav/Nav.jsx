import React from 'react'
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { likes } from '../global/likes'
import './Nav.scss'

function Nav() {
  let love = useRecoilValue(likes);
  return (
    <div>
        <div className="links">
            <ol>
                <li><Link to={'/'}>Logo</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <h5>Goal: {love}</h5>
                <li><Link to={'/create'}>Create</Link></li>
                <li><Link to={' '}>&#9776;</Link></li>
            </ol>
        </div>
    </div>
  )
}

export default Nav