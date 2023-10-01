import './ProductCard.css'
import Button from '../Button/Button'
import { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(0); 
  
    return (
      <>
      <div className='Increment-decrement'>
        <button onClick={() => setCount(count - 1)}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </>
    );
  }
export default function ProductCard({heading , ImgUrl}){
    return(
    <>
    <div className='ProductCard'>
        <img src={ImgUrl} alt=''/>
        <div>
            <h1>{heading}</h1>
            <Counter />
           <center><Button text={'Add to Card'} /></center>
        </div>
    </div>
    </>
    )
}