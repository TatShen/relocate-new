
import './App.css';
import React from 'react';
import Timer from './timer';


class App extends React.Component{
   render(){
    return(
        <div class="container">
            <img class="logo" src="/images/logo.svg" alt=""></img>
            <p class="slogan">Follow your dreams</p>
            <p class="site"> your adventure begins in</p>
            <Timer className='timer' ></Timer>
            <div class="icon">
            <a href='https://www.facebook.com/Relocate-app-104295219363871'>
                <img src='/images/fb.svg' alt='' className='button'></img>
            </a>
            <a href='https://www.instagram.com/relocateapp'>
             <img src='/images/inst.svg' alt='' className='button'></img>
            </a>
              
            </div>
        </div>
    )
   }
}



export default App;
