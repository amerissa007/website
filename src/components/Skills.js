import React from 'react';
import ReactLogo from '../assets/img/logo512.png'
import JavaLogo from'../assets/img/java-logo.png'
import JavaScriptLogo from '../assets/img/JavaScript-Logo-2048x1280.png'
import PythonLogo from '../assets/img/python.png'
import HTMLLogo from '../assets/img/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon-by-vexels.png'
import CSSLogo from '../assets/img/css-3-logo-svgrepo-com.svg'
import SASSLogo from '../assets/img/SassLogo.png'
import RLogo from '../assets/img/R_logo.png'
import CSharpLogo from '../assets/img/c-sharp-800x800.png';
import SpringbootLogo from '../assets/img/spring-boot-logo_full.png'
import UnityLogo from '../assets/img/unityengine.png'
import awsLogo from '../assets/img/awsLogo.png'
import firebaseLogo from '../assets/img/firebaseLogo.png'
import flaskLogo from '../assets/img/flaskLogo.png'
import flstudioLogo from '../assets/img/flstudio_logo.png'

export const Skills = () => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    const currentRef = domRef.current; // Create a variable to hold the current ref value
    return () => observer.unobserve(currentRef); // Use the variable in the cleanup function
  }, []);
    
    return (
      <section className='skill' id='skills'>
        <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
          <div className='skills-container'>
              <div className='skills-text'>
                <h1>Skills</h1>
                <p>Here are the programming languages, markup languages, libraries, and frameworks that I have worked with and have experience with.</p>
              </div>
              <div className='skills-logo-section'>
                <div className='skills-carousel'>
                  <img className='skill-image' src={JavaLogo} alt='Java' />
                  <img className='skill-image' src={CSharpLogo} alt='C#' />
                  <img className='skill-image' src={UnityLogo} alt='Unity' />
                  <img className='skill-image' src={PythonLogo} alt='Python' />
                  <img className='skill-image' src={RLogo} alt='R' />
                  <img className='skill-image' src={JavaScriptLogo} alt='JavaScript' />
                  <img className='skill-image' src={HTMLLogo} alt='HTML' />
                  <img className='skill-image' src={CSSLogo} alt='CSS' />
                  <img className='skill-image' src={SASSLogo} alt='SASS' />
                  <img className='skill-image' src={ReactLogo} alt='React' />
                  <img className='skill-image' src={SpringbootLogo} alt='Spring Boot' />
                  <img className='skill-image' src={awsLogo} alt='AWS' />
                  <img className='skill-image' src={firebaseLogo} alt='Firebase' />
                  <img className='skill-image' src={flaskLogo} alt='Flask' />
                  <img className='skill-image' src={flstudioLogo} alt='FLStudio' />

                </div>
                <div className='skills-carousel'>
                  <img className='skill-image' src={JavaLogo} alt='Java' />
                  <img className='skill-image' src={CSharpLogo} alt='C#' />
                  <img className='skill-image' src={UnityLogo} alt='Unity' />
                  <img className='skill-image' src={PythonLogo} alt='Python' />
                  <img className='skill-image' src={RLogo} alt='R' />
                  <img className='skill-image' src={JavaScriptLogo} alt='JavaScript' />
                  <img className='skill-image' src={HTMLLogo} alt='HTML' />
                  <img className='skill-image' src={CSSLogo} alt='CSS' />
                  <img className='skill-image' src={SASSLogo} alt='SASS' />
                  <img className='skill-image' src={ReactLogo} alt='React' />
                  <img className='skill-image' src={SpringbootLogo} alt='Spring Boot' />
                  <img className='skill-image' src={awsLogo} alt='AWS' />
                  <img className='skill-image' src={firebaseLogo} alt='Firebase' />
                  <img className='skill-image' src={flaskLogo} alt='Flask' />
                  <img className='skill-image' src={flstudioLogo} alt='FLStudio' />


                </div>
              </div>
          </div>
        </div>
      </section>
    )
}
export default Skills;