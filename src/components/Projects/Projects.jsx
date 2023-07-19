import "./Projects.css"
import { useEffect, useState } from "react"
import {  mistery, misterySmall, } from "../../assets"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import ShowProject from "../ShowProject/ShowProject"
//data
import  data  from "../../assets/projData.json"

const Projects = () => {
const [proj1, setProj1] = useState([])
const [proj2, setProj2] = useState([])
const [proj3, setProj3] = useState([])

useEffect(()=> {
  setProj3(data.thirdProject)
  setProj2(data.secondProject)
 setProj1(data.firstProject)
}, [])

  return (
    <div className="projects__main-container" id="first-project">
        <div className="projects__sub_container">
          
        <ShowProject props={proj3}/>
        <ShowProject props={proj2}/>
        <ShowProject props={proj1}/>

          <div className="projects__second_projects">
            
            <div className="second_project_text">
             <h2>Coming Soon...</h2>
             
              <div>
              <i className="fa-solid fa-shirt fa-2xl" style={{color: "#f1f44e"}}></i>
                <p>Introducing AR Wardrobe - Your Virtual Fitting Room. Try on clothing and accessories virtually in real-time. A revolutionary way to shop fashion online. Coming Soon. Stay tuned!</p>
              </div>
             </div>
                <div className="second_project_img">
               <LazyLoadImage
                src={ mistery }
                placeholderSrc={misterySmall}
                effect="blur"
                alt="mistery?"
               />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Projects