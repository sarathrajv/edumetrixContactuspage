import React from 'react'
import carticon from './image/shopping-cart.png'
const Navbar = () => {
  return (
    <div>

        <div className="navbar">
            <h1 className='head'>SHOPPING GOAL</h1>
            <div className='cartcomp'>
            <h4 className='head'>Cart</h4>
            <img src={carticon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar