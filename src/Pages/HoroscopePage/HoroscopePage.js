import React from 'react'
import './HoroscopePage.css';
import Navbar from '../../components/navbar/navbar';
import HeroHoroscopePage from '../HoroscopePage/HoroscopeComponents/HeroHoroscopePage'

const HoroscopePage = () => {
    return (
        <>
        <Navbar />
        <HeroHoroscopePage />
        </>
    )
}

export default HoroscopePage