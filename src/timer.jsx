import React, {useEffect, useRef, useState} from "react";

const Timer = () => {
    const[timerDays, setTimerDays] = useState('60');
    const[timerHours, setTimerHours] = useState('00');
    const[timerMinutes, setTimerMinutes] = useState('00');
    
  

    let interval = useRef();
   
    const stopDate = new Date(2023,9,12).getTime();

    const startTimer = () => {
        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = stopDate - now;
 
            const days = Math.floor(distance/(1000*60*60*24));
            const hours = Math.floor(distance%(1000*60*60*24)/(1000*60*60));
            const minutes = Math.floor(distance%(1000*60*60)/(1000*60));
            

if(distance<0){
    clearInterval(interval.current)
} else{
    setTimerDays(days);
    setTimerHours(hours);
    setTimerMinutes(minutes);

}},1000)
    };

    useEffect(()=>{
        startTimer();
        return()=>{
            clearInterval(interval.current)
        }

    })

    return(
        
        <section className="timer-conteiner">
            <section className="block">
                <p>{timerDays}</p>
                <small className="text">Days</small>
            </section>
            <section className="block">
                <p>{timerHours}</p>
                <small  className="text">Hours</small>
            </section >
            <section className="block">
                <p>{timerMinutes}</p>
                <small  className="text">Minutes</small>
            </section>
            
          
        </section>
    )
}


// class Timer extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             distance:60*1000*60*60*24
//         }
//     }


//     componentDidMount(){
//         setInterval(()=>{
//             this.setState((state)=>{
//                 return{
//                     distance:--state.distance
//                 }
//             })
//             },1000)
//         }

//     render(){
       
//         return(
//             <section className="timer-conteiner">
//                 <section className="block">
//                     <p>{Math.floor(this.state.distance/(1000*60*60*24))}</p>
//                     <small className="text">Days</small>
//                 </section>
//                 <section className="block">
//                     <p>{Math.floor(this.state.distance%(1000*60*60*24)/(1000*60*60))}</p>
//                     <small  className="text">Hours</small>
//                 </section >
//                 <section className="block">
//                     <p>{Math.floor(this.state.distance%(1000*60*60)/(1000*60))}</p>
//                     <small  className="text">Minutes</small>
//                 </section> 
//                 <section className="block">
//                     <p>{Math.floor(this.state.distance%(1000*60)/(1000))}</p>
//                     <small  className="text">Minutes</small>
//                 </section>        
//              </section>
//         )
//     }
//     }



export default Timer