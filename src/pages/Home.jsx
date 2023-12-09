import React from 'react'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className='text-xl mt-24'>
        <Header/>
        <Services/>
        <Contact/>
    </div> )
}

export default Home