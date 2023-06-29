import React from 'react'
import "./Info.css"
import AboutMe from '../../components/AboutMe/AboutMe'
import { keyboard, trafalete, harvard, chess, gym, keyboardSmall, trafaleteSmall, harvardSmall, chessSmall, gymSmall } from '../../assets'

const Info = () => {
  return (
    <div className='info_main-container' id="info">

      <div className='info_blur-div'>

        <h1 className='info__title'>About me</h1>

        <AboutMe
          Htext={"Front-End Development"}
          Ptext={"Proficient in JavaScript and experienced in building interactive web applications using React. Familiar with HTML, CSS, and responsive design principles. Constantly expanding my skill set to stay ahead in this rapidly evolving field"}
          imgsrc={keyboard}
          loadd={keyboardSmall}
          num={1}
        />
        <AboutMe
          Htext={"Design"}
          Ptext={"Skilled at creating visually appealing web pages with a focus on user experience. Able to blend aesthetics and functionality seamlessly to deliver captivating designs"}
          imgsrc={trafalete}
          loadd={trafaleteSmall}
          num={2}
        />
        <AboutMe
          Htext={"CS50 Harvard Course"}
          Ptext={"Successfully completed the renowned CS50 course from Harvard, further enhancing my knowledge and problem-solving abilities in the field of computer science"}
          imgsrc={harvard}
          loadd={harvardSmall}
          num={3}
        />
        <AboutMe
          Htext={"Chess"}
          Ptext={"An avid chess player who thrives on strategic thinking and problem-solving. Regularly engages in online tournaments and enjoys the intellectual challenges the game offers"}
          imgsrc={chess}
          loadd={chessSmall}
          num={4}
        />
        <AboutMe
          Htext={"Gym"}
          Ptext={"Passionate about maintaining a healthy lifestyle. Frequent visits to the gym and engaging in physical activities help me stay focused and energized."}
          imgsrc={gym}
          loadd={gymSmall}
          num={5}
        />

      </div>
    </div>
  )
}

export default Info