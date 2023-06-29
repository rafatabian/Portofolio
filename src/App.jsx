import "./App.css";
import React, { lazy, Suspense} from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createContext, useState } from "react";

const NavbarComp = lazy(() => import("./containers/Navbar/Navbar"))
const HomeComp = lazy(() => import("./containers/Home/Home"))
const InfoComp = lazy(() => import("./containers/Info/Info"))
const ProjectsComp = lazy(() => import("./components/Projects/Projects"))
const ContactLazy = lazy(() => import ("./components/Contact/Contact"))


export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
  };

  return (
    <Suspense fallback={<h3 className="app_loading">Loading...</h3>}>
     <div className='app__main-div' id={theme}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <NavbarComp toggleTheme={toggleTheme} theme={theme}/> 
            <HomeComp />
            <InfoComp />
            <ProjectsComp />
            <ContactLazy />
        </ThemeContext.Provider> 
        </div>
        </Suspense>
  );
}
export default App;
