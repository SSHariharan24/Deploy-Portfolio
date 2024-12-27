import React from 'react'
// import { ThemeToggleButton } from '../App'
import { ThemeProvider, useTheme } from "./ThemeContext";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
 
  return (
    <nav className={`navbar fixed top-0 left-0 w-full bg-white text-black dark:bg-black dark:text-white px-8 md:px-16 lg:px-24 z-50 shadow-md`}>
    <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline '>Hariharan</div>
        <div className='space-x-6'>
            <a href='#Hero' className='hover:text-gray-400'>Home</a>
            <a href='#About' className='hover:text-gray-400'>About</a>
            <a href='#Service' className='hover:text-gray-400'>Services</a>
            <a href='#Projects' className='hover:text-gray-400'>Projects</a>
            <a href='#Contacts' className='hover:text-gray-400'>Contacts</a>
            <button className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-105 transition-transform" onClick={toggleTheme}>
      {isDarkMode ? <FaMoon className="text-gray-400" /> : <FaSun className="text-yellow-400"/>}
    </button>
        </div>
        <a href="https://github.com/SSHariharan24" className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full '>Connect Me</a>
    </div>
    {/* <ThemeToggleButton></ThemeToggleButton> */}
    </nav> 
  )
}
