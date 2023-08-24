import React from 'react'
import AboutBackgroundImage from "../Assets/about-background.png"
import AboutBannerImage from '../Assets/about-background-image.png'
import {BsFillPlayCircleFill} from 'react-icons/bs'
export default function About() {
  return (
   
      <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
     
      <div className="about-section-image-container">
            <img src={AboutBannerImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
            About Food is An Important Part of & Balancded Diet 
        </h1>

        <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aliquid voluptate molestias animi! Quam itaque provident.
        </p>
        <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic, totam veritatis voluptatibus vel necessitatibus?
        </p>
        <div className="about-buttons-container">
            <button className='secondary-button'>Learn More</button>
            <button className='watch-video-button'> <BsFillPlayCircleFill />
                Watch videos</button>
        </div>
      </div>
    </div>
  )
}

