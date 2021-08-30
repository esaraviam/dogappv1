import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
         <nav className="bg-red-500 h-16 w-100 flex items-center px-5 text-gray-50 shadow-xl rounded-b-lg">
      <span className="flex-none w-24">
        <Link to="/">
         DOGAPP
        </Link>
      </span>
      <span className="flex-grow px-5 "></span>
      <span className="flex-none">
        <div className="">
          
        </div>
      </span>
    </nav>
    )
}
