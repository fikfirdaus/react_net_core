import React, { useState } from 'react'
import Navbar from '../../components/Navbar/navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <h2 style={{ textAlign: 'center', padding: '2rem' }}>Welcome to Home Page</h2>
        </div>
    )
}

export default Home