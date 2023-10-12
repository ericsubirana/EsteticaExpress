import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Routers from './routers/Routers.js';
import "./App.css";

function App() {

  return (
    <>
      <div className='app'>
        <Routers/>
      </div>
    </>
  )
}

export default App
