import React from 'react'
import Navbar from './Navbar'
import BannerBackgroundImage from '../Assets/home-banner-background.png'
import {FiArrowRight} from 'react-icons/fi'
import HomeBannerImage from '../Assets/home-banner-image.png'

export default function Home() {
  return (
    <div className='home-container'>
      <Navbar />
      <div className="home-banner-container"> 
        <div className="home-bannerImage-container">
          <img src={BannerBackgroundImage} alt="" />
        </div>
    
        <div className="home-text-section">
          <h1 className="primary-heading">Your Favourite Food Delivered Hot & Fresh</h1>
          <p className='primary-text'>
            Healthy Switcher chef do all the prep work, like peeding , chopping & marinating , so you can cook a fresh food. 
          </p>
          <button className="secondary-button">Order now<FiArrowRight/> </button>
        </div>
        <div className="home-image-section">
          <img src={HomeBannerImage} alt="" />
        </div>
      </div>
    </div>
  )
}
