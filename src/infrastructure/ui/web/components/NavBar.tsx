import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="bg-green-300 h-16 w-100 flex items-center px-5 text-gray-50 shadow-xl rounded-b-lg mb-5">
      <span className="flex-none w-24">
        <Link className="text-green-800" to="/">
          DOGAPP
        </Link>
      </span>


    </nav>
  )
}
