import React from 'react'
 import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-pink-200 shadow-[4px_2px_8px_0.1px_violet] hover:shadow-[4px_3px_8px_0.1px_black] ">
      <div className="flex flex-row justify-between items-center max-w-6xl mx-auto  p-3">
       
        <Link to='/' className="font-bold text-sm sm:text-lg hover:shadow-[1px_1px_6px_black] p-3 rounded-md">
          <span className="text-blue-600  ">sesha</span>
          <span className="text-slate-700">Realestate</span>
        </Link>

        <form className=" bg-pink-300 p-2 rounded-lg flex items-center ">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent px-15 focus:outline-none w-24 sm:w-64 "
          />
          <FaSearch className=" text-pink-500 " />
        </form>
        
        <ul className=' flex gap-9'>
          <Link to="/about" className='hidden sm:inline  font-bold  hover:bg-slate-500 hover:text-yellow-400 p-2 rounded  ease-in-out hover:animate-bounce '>ABOUT</Link>
          <Link to="/profile" className='hidden sm:inline  font-bold  hover:bg-slate-500 hover:text-yellow-400 p-2 rounded-xl hover:animate-bounce hover:duration-700 '>PROFILE</Link>
          <Link to='/signin' className=' sm:inline  font-bold  hover:bg-slate-500 hover:text-yellow-400 p-2 rounded hover:animate-bounce '>SIGNIN</Link>
          <Link  to='/signup' className='hidden sm:inline  font-bold  hover:bg-slate-500 hover:text-yellow-400 p-2 rounded hover:animate-bounce '>SIGNUP</Link>
        
        </ul>

      </div>
    </header>
  );
}
 
export default Header
