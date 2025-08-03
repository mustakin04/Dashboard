import React from 'react'
import Sidebar from '../component/Sidebar'
import Header from '../component/Header'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div className='flex gap-14'>
      <div>
         <Sidebar></Sidebar> 
      </div>
       <div className='w-full '>
        <Header></Header>
        <Outlet></Outlet>
       </div>
    </div>
    
  )
}

export default Home