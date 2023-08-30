import React, { useState, useEffect } from 'react'
import './Hooks.scss'

function Hooks({plus, clause}) {
    let [count, setCount] = useState(0);
    function add(){
        setCount(count = count + 1);
        console.log(count);
    }

    function sub(){
      setCount(count = count - 1);
    }
    
    let c = 0;
   useEffect( () => {
    c++;
      setTimeout( () => {
        setCount((count) => count + 1);
      }, 2000)
      console.log("first", c);
   }, [c]);

    let [styles, setStyles] = useState('');

  return (
    <div>
        <hr/>
        <h1>Hooks page</h1>
        <p>i love coding but {clause}</p>
        <h4>Count: {count}</h4>
        <button onClick={() => add()}>click*</button>
        <button onClick={() => sub()}>click#</button>
        <div className={styles}>
            <h2>Change Theme: {styles}</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione iure, fugit ducimus odit qui dolores nisi doloremque cumque id cupiditate magnam omnis aperiam similique culpa accusantium nesciunt hic eligendi neque excepturi esse iste nihil. Pariatur placeat quod quibusdam earum reprehenderit commodi nihil beatae tenetur, aut amet autem facilis reiciendis rem.</p>
            <button onClick={()=> setStyles('')}>Default</button>
            <button onClick={()=> setStyles('red')}>RED</button>
            <button onClick={()=> setStyles('yellow')}>YELLOW</button>
            <button onClick={()=> setStyles('green')}>GREEN</button>
            <button onClick={()=> setStyles('brown')}>BROWN</button>
        </div>
        <h3>{plus(5,10)}</h3>
    </div>
  )
}

export default Hooks