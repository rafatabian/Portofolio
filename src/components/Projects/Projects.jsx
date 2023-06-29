import "./Projects.css"
import { firstProject, firstProjectSmall, mistery, misterySmall, } from "../../assets"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const Projects = () => {
  
  return (
    <div className="projects__main-container" id="first-project">
        <div className="projects__sub_container">
          <div className="projects__first_projects">
           <h1>Presenting my latest project</h1>

            <div className="first_project_text">
            <h2>Key Features</h2>

            <div>
              <i className="fa-solid fa-gauge-high fa-2xl" style={{color: "#E74C3C"}}></i>
              <p><span>Context-driven Architecture:</span> Employing React's Context API to efficiently manage and share data across components, eliminating the need for prop drilling.</p>
              </div>

            <div>
              <i className="fa-solid fa-ruler-horizontal fa-2xl" style={{color: "#16A085 "}}></i>
              <p><span>Responsive Design:</span> Delivering a seamless user experience on any device, ensuring optimal usability and visual appeal.</p>
              </div>

            <div>
              <i className="fa-regular fa-image fa-2xl" style={{color: "#2980B9"}}></i>
              <p><span>Efficient Image Loading:</span> Implementing lazy loading techniques to enhance performance and minimize loading times.</p>
              </div>

            <div>
              <i className="fa-sharp fa-solid fa-bolt fa-2xl" style={{color: "#F1C40F"}}></i>
              <p><span>Streamlined Navigation:</span> Utilizing React Router for smooth and intuitive page transitions, ensuring a fluid browsing experience.</p>
              </div>

            </div>
            <div className="first_project_img">
              <a href="https://rafatabian.github.io/shop/">
              <LazyLoadImage
                    src={firstProject}
                    placeholderSrc={firstProjectSmall}
                    effect="blur"
                    alt="project" 
                />
                </a>
            </div>
            <div className="github_icon">
              <a href="https://github.com/rafatabian/shop">
              <i className="fa-brands fa-github fa-2xl" style={{color: "#ffffff"}}></i>
              </a>
               
            </div>
          </div>

          <div className="projects__second_projects">
            
            <div className="second_project_text">
             <h2>Coming Soon...</h2>
             
              <div>
                <i className="fa-brands fa-spotify fa-2xl" style={{color: " #1ED760"}}></i>
                <p>Utilizing the powerful features of the Spotify API, my primary objective is to develop a cutting-edge music application that not only harnesses the vast musical library of Spotify but also offers a seamlessly intuitive and captivating user experience</p>
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