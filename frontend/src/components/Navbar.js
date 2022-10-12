import React from 'react'
import "../assets/css/navbar.css"

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className='action'>
                <span>Foods</span>
                <span>Drinks</span>
                <span>Others</span>
            </div>
            <div className='search'>
                <input type="text" placeHolder="Foods, Drinks, Others" />
                <span className='search-button'>
                    <img src="https://img.icons8.com/material-outlined/24/000000/search--v1.png" />
                </span>
            </div>
        </div>
    )
}

export default Navbar