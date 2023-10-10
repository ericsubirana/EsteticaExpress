import React from 'react'
import Sidebar from '../sidebar/Sidebar';
import Searchbar from '../searchbar/Searchbar';
import LogInLogOut from '../logInLogOut/LogInLogOut';

import "./header.css";

function Header() {
  return (
    <div className='header'>
        <Sidebar />
        <Searchbar />
        <LogInLogOut />
    </div>
  )
}

export default Header