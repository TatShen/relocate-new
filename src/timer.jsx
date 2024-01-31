import React, { useEffect, useState } from "react";

export default function Timer(){ 
    const [time, setTime] = useState(3936390)
    
    useEffect(()=>{
        const timer = setInterval(()=> {
            setTime(time => --time)
        }, 1000)

        return () => clearInterval(timer)
    })
    return (
        <section className="timer-conteiner">
        <section className="block">
            <p>{Math.floor(time/(60*60*24))}</p>
            <small className="text">Days</small>
        </section>
        <section className="block">
            <p>{Math.floor(time%(60*60*24)/(60*60))}</p>
            <small  className="text">Hours</small>
        </section >
        <section className="block">
            <p>{Math.floor(time%(60*60)/(60))}</p>
            <small  className="text">Minutes</small>
        </section> 
        <section className="block">
            <p>{Math.floor(time%(60))}</p>
            <small  className="text">Seconds</small>
        </section> 
     </section>
    )
}
