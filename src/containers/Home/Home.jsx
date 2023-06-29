import React from 'react'
import "./Home.css"
import Lottie from "lottie-react"
import animationData from "../../assets/home_animation.json"
import rAnimationData from '../../assets/home_react-icon.json'

const Home = () => {
   return (
      <div className='home__main-container' id='home'>

         <div className="home_text-anim">

            <div className="home_text-div">
               <h1>Welcome To My Website</h1>
               <p>I'm <span>Fabian</span> a beginner front-end developer specializing in React.js. I'm passionate about creating dynamic and interactive user interfaces. <em>Let's build amazing web experiences together!</em></p>
            </div>

            <div className="home_anim-div">
               <Lottie loading="lazy" className="home_first-anim" animationData={animationData} />
            </div>

         </div>

         <div className="home_icons-anim">
            <div className='home_icons-anim_container'>

               <div className='home_html-icon'>
                  <i className="fa-brands fa-html5 fa-2xl" style={{ color: "#E34F26" }}></i>
               </div>
               <div className='home_css-icon'>
                  <i className="fa-brands fa-css3-alt fa-2xl" style={{ color: "#1572B6" }}></i>
               </div>
               <div className='home_js-icon'>
                  <i className="fa-brands fa-square-js fa-2xl" style={{ color: "#F7DF1E" }}></i>
               </div>
               <div className='home_react-icon'>
                  <Lottie loading="lazy" className="home_second-anim" animationData={rAnimationData} />
               </div>

            </div>
         </div>

      </div>
   )
}

export default Home