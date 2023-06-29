import "./AboutMe.css"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const AboutMe = ({Htext, Ptext, imgsrc, loadd, num}) => {
  return (
    <div className="info_blur__text-img">
    {num % 2 === 1
      ? (<>
          <div className='info_blur_text'>
            <h2>{Htext}</h2>
            <p className='info_first-p'>{Ptext}</p>
          </div>
          <div className='info_blur-img'>
            <LazyLoadImage 
            src={imgsrc}
            placeholderSrc={loadd}
            effect="blur"
            alt="about me"       
            />
          </div>
         </>
         )
      : (<>
          <div className='info_blur-img'>
          <LazyLoadImage 
            src={imgsrc}
            placeholderSrc={loadd}
            effect="blur"
            alt="about me"      
            />
          </div>
          <div className='info_blur_text'>
            <h2>{Htext}</h2>
            <p className='info_first-p'>{Ptext}</p>
          </div>
         </>
        )
    }
      </div>
  )
}

export default AboutMe