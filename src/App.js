/* eslint-disable no-unused-vars */
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Image from './components/Image';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

function App() {
    const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
    return (
        <>
        {/* {<Navbar title='TextUtils' aboutText='About Us' />}
        {<Navbar/>} */}
        <Navbar title='TextUtils' mode={mode} />
        <div className="container my-2">
            {<TextForm heading="Enter the text to analyze below: "/>}
            {/* <About/> */}
            <Image/>
        </div>

        </>
    );

}

export default App;