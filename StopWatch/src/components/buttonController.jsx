import React from 'react'

function buttonController(props) {
  
    const StartButton = (
        <button onClick={props.handleStart} className='h-7 w-16 bg-red-600 rounded-2xl'>Start</button>
    ); // assign a start button to the StartButton expresssion

    const ActiveButtons = (
    <div className=' grid grid-cols-2 gap-3'>
     <div>
        <button onClick={props.handleReset} className='h-7 w-16 bg-red-600 rounded-2xl hover:border hover:border-r-zinc-300'>Reset</button>
     </div>
     <div><button onClick={props.handlePauseResume} className='h-7 w-16 bg-red-600 rounded-2xl hover:border hover:border-r-zinc-300'>{props.isPaused ? "Resume" : "Pause"}</button>
     </div>
    </div>
    );//assign two buttons to ActiveButtons
  
    return (
    <div>{props.isActive ? ActiveButtons : StartButton }</div>
  )
};

export default buttonController