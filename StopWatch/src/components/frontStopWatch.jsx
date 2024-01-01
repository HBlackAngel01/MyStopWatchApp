import React, { useEffect, useRef, useState } from 'react'
import Timer from './timer';
import ButtonController  from './buttonController';

function frontStopWatch() {

  const [isActive , setIsActive] = useState(false); // for click event to Start
  const [isPaused, setIsPaused] = useState(true); // for click event to pause
  const [time,setTime] = useState(0); // for set time to timer component

  useEffect(()=>{
    let interval = null;//for interval assgin null

    //for timer to startCount
    if(isActive && isPaused === false){
      console.log(isActive);
      console.log(isPaused)
      console.log(time);
      interval = setInterval(()=>{//to assign setIntervarl into interval
        setTime((time)=>time + 10);//for time to setvalue for timer component
      },10)//to repeat through at interval 10 milisec
      }else{
       clearInterval(interval);  
    }
    return ()=>{
      clearInterval(interval); ////to cleanup the interval
    }
  },[isActive,isPaused]);//work on the arguments only isActive & isPaused arguments passed


  const handleStart =() =>{
    setIsActive(true);//for start as Active
    setIsPaused(false);//for paused as inActive
  };

  const handlePauseResume =() =>{
    setIsPaused(!isPaused);//for pause to inverted value active/inactive 
  };
  const handleReset =()=>{
    setIsActive(false);//for start to inActive
    setTime(0);//for initialize timer from zero
  };

   //pass props to the child components through name:value pair
  return (
    <>
    <div className=' mx-3'><Timer time={time}/></div>
    <div className=' my-9'><ButtonController isActive={isActive} 
    isPaused={isPaused}
    handleStart={handleStart}
    handlePauseResume={handlePauseResume}
    handleReset={handleReset}/></div>     
    </>
  )
};



export default frontStopWatch