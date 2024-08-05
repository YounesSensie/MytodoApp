import React from 'react'
import CreateButton from './_component/createtask-button'
import Filter from './Filter'
import ListTaskPage from './ListTask'


const Homepage = async() => {
  
  return (
    <div className=''>
      <div className=' flex items-center justify-between '>
        <h1 className=' text-3xl font-bold text-colortext'> MY TASKS </h1>
        <CreateButton/>
      </div>
      <Filter/>
      <ListTaskPage/>
    </div>
  )
}

export default Homepage
