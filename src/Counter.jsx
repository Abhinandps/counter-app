import React, { useState,useRef } from 'react'
import stopWatch from "./timerstart.svg"
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0);
    const timer = useRef(null);


    const onChange = (e) => {
        setCount(Number(e.target.value))
    }

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }

    const startTimer = () => {
        if(timer.current) return 
       timer.current = setInterval(() => {
            setCount(prev => {
                if (prev <= 0) {
                    clearInterval(timer.current)
                    timer.current=null;
                    return 0
                }
                return prev - 1;
            })
        }, 1000)
    }


    const stopTimer = () =>{
        clearInterval(timer.current)
        timer.current=null;
    }

    return (
        <div className="container">
            <div className="title">
                <h1>Counter</h1>
            </div>

            <main>
                <div className="top">
                    <button onClick={stopTimer}>
                        <div className="black-box"></div>
                    </button>
                </div>
                <div className="middle">
                    <button onClick={decrement}>-</button>
                    <input onChange={onChange} type="text" value={count} className="count-value" />
                    <button onClick={increment} >+</button>
                </div>
                <div className="bottom">
                    <button onClick={startTimer}><img src={stopWatch} alt="" /></button>
                </div>
            </main>
        </div>
    )
}

export default Counter