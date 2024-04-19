import React from 'react'
import './filter.css'
import slider from '../assets/Slider.png'
import programmes from '../assets/prog.png'
import Location from '../assets/Loc.png'
import Budget from '../assets/budg.png'
import IELTS from '../assets/IELTS.png'
import CGPA from '../assets/gpa.png'
import Scholarship from '../assets/Scholarship.png'
import favourite from '../assets/Favorite.png'
import Header from '../components/Header';
import Footer from '../components/Footer'


export default function Filter() {
  return (
    <div>
      <Header/>
           <div className='Explore'>
            <div>
              <h1>Discover Your Ideal Higher Education Program With Us.</h1>
            </div>

           </div>
      <Footer/>
    </div>
  )
}
