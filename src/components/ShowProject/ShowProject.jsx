import "./ShowProject.css"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

import carsProject from "../../assets/first-project.png"
import carsProjectSmall from "../../assets/first-project-small.png"
import musicProject from "../../assets/your_music.png"
import musicProjectTiny from "../../assets/your_music_tiny.png"
import assistantProject from "../../assets/your_assistent.png"
import assistantProjectSmall from "../../assets/your_assistent_tiny.png"



const ShowProject = ({props}) => {


  if(props && props.titles){

  return (
    <div className="projects__first_projects">
           <h1>{props.titles[0]}</h1>

            <div className="first_project_text">
            <h2>{props.titles[1]}</h2>

            <div>
            <i className={props.icons[0]} style={{color:`${props.icons[1]}`}}></i>
              <p><span>{props.spans[0]}</span>{props.paragraphs[0]}</p>
              </div>

            <div>
            <i className={props.icons[2]} style={{color:`${props.icons[3]}`}}></i>
              <p><span>{props.spans[1]}</span>{props.paragraphs[1]}</p>
              </div>

            <div>
            <i className={props.icons[4]} style={{color:`${props.icons[5]}`}}></i>              
            <p><span>{props.spans[2]}</span>{props.paragraphs[2]}</p>
              </div>

            <div>
            <i className={props.icons[6]} style={{color:`${props.icons[7]}`}}></i>              
            <p><span>{props.spans[3]}</span>{props.paragraphs[3]}</p>
              </div>

            </div>
            <div className="first_project_img">
              <a href={props.ghLinks[0]}>
              <LazyLoadImage
                    src={props.images[0] === "cars" ? carsProject : props.images[0] === "music" ? musicProject : assistantProject}
                    placeholderSrc={props[0] === "cars" ? carsProjectSmall : props[0] === "music" ? musicProjectTiny : assistantProjectSmall}
                    effect="blur"
                    alt="projects" 
                />
                </a>
            </div>
            <div className="github_icon">
              <a href={props.ghLinks[1]}>
              <i className={props.icons[8]} style={{color:`${props.icons[9]}`}}></i>
              </a>
               
            </div>
          </div>
  )
}
}

export default ShowProject
