import React, { Component } from 'react';
import './css/education.css';
import EducationItem from './educationItem.jsx';
import InfoSlider from './info-slider.jsx';
import Background from './info-slider-background.jsx'
import UdemyLogo from './images/udemy-logo.png';
import BrockLogo from './images/Brock_logo.png';
import MitLogo from './images/MITOCW.png';
import Animate from 'react-move/Animate';
import { easeExpOut, easeLinear } from 'd3-ease';

class Education extends Component {
  render(){
    let t = [ this.props.showInfoSlider ? "block" : "none" ]

    let responsiveT = ["20vh","10vh"];

    if(this.props.screenSize == 1920){
      responsiveT = ["20vh","10vh"];
    } else if(this.props.screenSize == 1366){
      responsiveT = ["10vh","5vh"];
    } else if(this.props.screenSize == 1280){
      responsiveT = ["10vh", "5vh"];
    }

    return(
      <div>
        <Animate
          start={()=> ({
            x: "35vw",
            gtc: "1fr 1fr",
            w: "50vw",
            t: responsiveT[1],
          })}

          update={() => ({
            x: [ this.props.navHidden ? "12vw" : "35vw"],
            gtc: [ this.props.navHidden ? "1fr 1fr 1fr" : "1fr 1fr"],
            w: [ this.props.navHidden ? "75vw" : "50vw"],
            t: [ this.props.navHidden ? responsiveT[0] : responsiveT[1]],
            timing: { duration: 1000, ease: easeExpOut },
          })}
          >
          {(state) => {
            const { x, gtc, w, t } = state;

            return(
              <div className = "education-grid" style = {{marginLeft: x, gridTemplateColumns: gtc, width: w, marginTop: t}}>
                <EducationItem courseSelector = {this.props.courseSelector} sliderToggle = {this.props.sliderToggle} link = {"https://www.udemy.com/react-js-and-redux-mastering-web-apps/learn/v4/overview"} image = {UdemyLogo} title = {"React JS and Redux - Mastering Web Apps"} noteText = {"David Katz - Software Engineer"}/>
                <EducationItem courseSelector = {this.props.courseSelector} sliderToggle = {this.props.sliderToggle} link = {"https://www.udemy.com/create-php-ajax-js-jquery-mysql-login-system-today/learn/v4/overview"} image = {UdemyLogo} title = {"Create a PHP Login and Registration from Scratch"} noteText = {"Kalob Taulien - Web Developer"}/>
                <EducationItem courseSelector = {this.props.courseSelector} sliderToggle = {this.props.sliderToggle} link = {"https://www.udemy.com/javascript-learn-javascript-essentials-and-build-project/learn/v4/overview"} image = {UdemyLogo} title = {"Learn JavaScript for Web Development"} noteText = {"Irfan Dayan - Freelancer/Web Developer"}/>
                <EducationItem courseSelector = {this.props.courseSelector} sliderToggle = {this.props.sliderToggle} link = {"https://www.udemy.com/csharp-tutorial-for-beginners/learn/v4/"} image = {UdemyLogo} title = {"C# Basics for Beginners: Learn C# Fundamentals by Coding"} noteText = {"Mosh Hamedani - Software Engineer"}/>
                <EducationItem courseSelector = {this.props.courseSelector} sliderToggle = {this.props.sliderToggle} link = {"https://www.udemy.com/complete-python-bootcamp/learn/v4/overview"} image = {UdemyLogo} title = {"Complete Python Bootcamp: Go from zero to hero in Python"} noteText = {"Jose Portilla - Data Scientist"}/>
                <EducationItem courseSelector = {this.props.courseSelector} sliderToggle = {this.props.sliderToggle} link = {"https://ocw.mit.edu/index.htm"} image = {MitLogo} title = {"Core Computer Science Courses"} noteText = {"Various Professors"}/>
                <EducationItem courseSelector = {this.props.courseSelector} sliderToggle = {this.props.sliderToggle} link = {"https://brocku.ca/social-sciences/"} image = {BrockLogo} title = {"Bachelor of Arts (BA)"} noteText = {"Honours Sociology, Conc. Criminology - Minor in Philosophy"}/>
              </div>
            )
          }}

        </Animate>
        <Animate
          start={()=> ({
            x: "-50vw",
          })}

          update={() => ({
            x: [ this.props.showInfoSlider ? "30vw" : "-50vw"],
            timing: { duration: 1000, ease: easeExpOut },
          })}
          >
          {(state) => {
            const { x } = state;

            return(
              <InfoSlider
                currentCourse = {this.props.currentCourse}
                sliderToggle = {this.props.sliderToggle}
                sliderStyles = {{
                  position: "fixed",
                  top: "10vh",
                  right: x,
                  width: "40vw",
                  height: "60%",
                  backgroundColor: "#023670",
                  color: "white",
                  textAlign: "left",
                  MozBoxShadow:    "4px 3px 10px 1px black",
                  WebkitBoxShadow: "4px 3px 10px 1px black",
                  boxShadow:       "4px 5px 10px 1px black",
                  WebkitTransform: `translate3d(${x}px, 0, 0)`,
                  transform:       `translate3d(${x}px, 0, 0)`,
                  borderRadius: "5px",
                  zIndex: "21"
                }}
                />
            )
          }}
        </Animate>

        <Animate
          start={()=> ({
            opacity: "0",
          })}

          update={() => ({
            opacity: [ this.props.showInfoSlider ? "0.5" : "0"],
            timing: { duration: 500, ease: easeLinear },
          })}

          >
          {(state) => {
            const { opacity } = state;

            return(
              <Background
                sliderToggle = {this.props.sliderToggle}
                backgroundStyles = {{
                  position: "fixed",
                  top: "0",
                  left: "0",
                  height: "100%",
                  width: "100%",
                  display: t,
                  backgroundColor: `rgba(0,0,0,${opacity})`,
                  zIndex: "20"
                }}
                />
            )
          }}
        </Animate>
      </div>
    )
  }

}

export default Education;