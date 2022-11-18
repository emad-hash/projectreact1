import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
function Footer() {
  return (
    <div>
    <footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">EMHASH</a>. All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <NavLink to='/About'  class=" lo mr-4 hover:underline md:mr-6 ">About</NavLink>
            </li>
            <li>
                <NavLink to='/Contact'  class="hover:underline">Contact</NavLink>
            </li>
        </ul>
    </footer>
    </div>
  )
}

export default Footer