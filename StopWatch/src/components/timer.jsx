import React from 'react'

function timer(props) {//define props into parameters to use from parents component
  return (
    <div className=' my-5 h-16 align-middle  text-3xl bg-slate-700 text-fuchsia-50 w-full rounded-3xl'>
        <span className=' align-middle'>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span>
        <span className=' align-middle'>{("0" + Math.floor((props.time / 1000)% 60)).slice(-2)}.</span>
        <span className=' align-middle'>{("0" + Math.floor(props.time / 10)% 100).slice(-2)}</span>
    </div>
  )
}

export default timer