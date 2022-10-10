import React from 'react'
import "../assets/css/sidebar.css"
import Yoyum from '../assets/images/yoyum2.png'
import { stanObject, menuObject } from '../data/stanObject.ts'

const SideBar = () => {
  return (
    <div className='sidebar d-flex flex-column'>
      <div className='title'>
        <img src={Yoyum} rounded />
      </div>
      <span className='line' />
      <div className='stan-container'>
        {stanObject.map((stan) => (
          <div className='stan mt-2'>
            <img src={stan.image} /> <span className='m-3'>{stan.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar