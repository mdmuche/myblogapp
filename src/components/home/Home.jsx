import React from 'react'
import { useRecoilState } from 'recoil'
import { likes } from '../global/likes'
import Hooks from '../hooks/Hooks'

function Home() {
  let [love, setLove] = useRecoilState(likes);
    function sum(a,b){
        return `${a} + ${b} = ${a + b}`
    }
  return (
    <div className='home'>
        <h1>Homepage {sum(5,6)}</h1>
        <h2>love: {love}</h2>
        <button onClick={() => setLove(love = love + 1)}>Add love</button>
        <Hooks clause="i love God" plus={sum}/>
    </div>
  )
}

export default Home