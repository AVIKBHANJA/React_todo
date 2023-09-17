"use client"
import React, { useState } from 'react'

const page = () => {
   const [title,settitle]=useState("");
   const [desc,setdesc]=useState("");
   const [mainTask,setMaintask]=useState([]);

  const submitHandler=(e)=>{
    e.preventDefault()
    setMaintask([...mainTask,{title,desc}]);
    
    settitle("");
    setdesc("");

  }

  const deleteHandler=(i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMaintask(copyTask)
  }

  let renderTask = <h2>No task available</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key={i} className='flex items-center justify-between'>
          <div className='flex justify-between mb-4 w-2/3'>
          <h5 className='text-2xl font-semibold' >{t.title}</h5>
          <h6 className='text-xl font-semibold'>{t.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler(i);
      }} className='bg-red-500 rounded-full active:bg-red-300 px-4 m-2 py-2'>Delete</button>
        </li>
      );
    })
  }

  return (
    <>
      <h1 className='bg-black text-white font-bold text-2xl text-center'>My Todo list</h1>
    <form onSubmit={submitHandler}>

      <input type="text" className='text-2xl border-zinc-700 text-center mx-8 my-4 p-2 border-4' placeholder='Enter title here' 
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      

      <input type="text" className='text-2xl border-zinc-700 text-center mx-8 my-4 p-2 border-4' placeholder='Enter description here'
       value={desc}
       onChange={(e)=>{
         setdesc(e.target.value)
       }}
      />

      <button className='bg-black rounded-lg text-white font-bold m-4 px-4 py-2' >Add Task</button>
    </form>
    <hr/>

    <div className='p-8 bg-slate-300'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  );
}

export default page
