import React, { useState } from 'react'
import "./Navbar.css"
import { Light } from "../../components"

const Navbar = ({toggleTheme, theme}) => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [move, setMove] = useState(true)

  const toggleState = () => {
    setToggleMenu(!toggleMenu)
  }
  const toggleMove = () => {
    setMove(!move)
  }
  return (
    <>
    <div className='navbar__container'>

      <div className='navbar_pc'>
      <div className='navbar__container-name'>
       <h1 className="navbar__name">Fabian</h1>
       <div/>
       <span className="navbar__name-icon"><i className="fa-solid fa-hand-peace" style={{color: "orange"}}></i></span>
      </div>

      <div className='navbar__container-content'>
          <a href="#home">Home</a>
          <a href="#info">About</a>
          <a href="#first-project">Projects</a>
      </div>

      <div className='navbar__container-button'>
           <Light toggleMove={toggleMove} move={move} toggleTheme={toggleTheme}/>
      </div>     
      
      </div> 
      <div className='navbar_line_div'/>
{/**mobile */}
      <div className='navbar_mobile'>

      <div className='navbar__container-name'>
       <h1 className="navbar__name">Fabian</h1>
       <div/>
       <span className="navbar__name-icon"><i className="fa-solid fa-hand-peace" style={{color: "orange"}}></i></span>
      </div>
       
      <div className='navbar__container-button'>
           <Light toggleMove={toggleMove} move={move
          } toggleTheme={toggleTheme}/>
      </div>

      {
        toggleMenu 
        ? (<i className="fa-solid fa-xmark fa-xl" style={{color: "#e63333"}} onClick={toggleState}></i>)
        : (<i className="fa-solid fa-bars fa-xl" style={{color: `${theme === "light" ? "#FFFFFF" : "var(--color-yellow)"}`}} onClick={toggleState}></i>)
      }
      {
        toggleMenu && (
          <div className='navbar_mobile-menu'>
          <a href="#home" onClick={toggleState}>Home</a>
          <a href="#info" onClick={toggleState}>About</a>
          <a href="#first-project" onClick={toggleState}>Projects</a>
          </div>
        )
      }
      </div>
    </div>
   </>
 )
}

export default Navbar