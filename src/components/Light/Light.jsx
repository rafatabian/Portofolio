
import "./Light.css"


const Light = ({toggleTheme, toggleMove, move}) => {


  const toggleFunctions = () => {
    toggleTheme()
    toggleMove()
  }
  return (
    <>
        <div className="button_frame" onClick={toggleFunctions}>
        <div className={`button_dot button_${move ? "" : "right"}`}>
          {move 
          ? 
          <i className="fa-solid fa-moon fa-lg" style={{color: "#FFFFFF"}}></i>
          :
          <i className="fa-solid fa-sun fa-lg" style={{color: "#FEE715"}}></i>
           }
        </div>
        </div>
    </>
  )
}

export default Light