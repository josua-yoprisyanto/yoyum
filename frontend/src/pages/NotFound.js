import React from 'react'
import NotFoundImage from '../assets/images/notFound.svg'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <img src={NotFoundImage} width="80%" height="400" />
            <h1 style={{ color: "#1f3159" }} className="mt-4"><strong>Page Not Found</strong></h1>
            <h3 style={{ color: "#1f3159" }} className="mt-4">Oops!! The page you are looking for doesn't exist or an other error occurred</h3>
            <Link to="/" className='btn mt-4 btn-lg' style={{ backgroundColor: "#1f3159", color: "white" }}>Back to Home</Link>
        </div>
    )
}

export default NotFound