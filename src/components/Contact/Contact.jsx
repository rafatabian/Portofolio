import "./Contact.css"

const Contact = () => {
  return (
    <div className="contact__container" >

        <div className="contact__contact_links">
          <div className="contact__contact">
            <h1>CONTACT</h1>
            <p><i className="fa-solid fa-envelope" style={{color: "#FFFFFF"}}></i> Email:</p>
            <h2>fabianrwork@gmail.com</h2>
          </div>
          
          <div className="contact__links">
            <h1>LINKS</h1>
            <a href="#home">Home</a>
            <a className="about" href="#info">About</a>
            <a className="projects" href="#first-project">Projects</a>
          </div>
           <div className="contact__rights">
            <p>&#169; 2023 Rata Fabian All Rights Reserved</p>
        </div>
        </div>
    </div>
  )
}

export default Contact
