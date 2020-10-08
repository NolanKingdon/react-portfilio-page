import React, { Component } from 'react';
import MobileWorkItem from './MobileWorkItem.jsx';
import MobileWorkSlider from './MobileWorkSlider.jsx';
import Background from './work-slider-background.jsx';
import Animate from 'react-move/Animate';
import { easeExpOut, easeLinear } from 'd3-ease';
import "./css/workmobile.css";
//Images below
import BVP from './images/BVP-logo.png';
import CALC from './images/calc.jpg';
import PYCON from './images/python.png';
import REACT from './images/react.png';
import PHPSQL from './images/php-mysql.png';
import THISIMG from './images/this.png';
import MOON from './images/moonphase.PNG';
import POKEMON from './images/pokemon.png';
import READER from './images/speedreader.png';
import CLOCK from './images/clock.png';

class WorkMobile extends Component {

  render(){
    let t = [ this.props.showWorkSlider ? "block" : "none" ]
    return(
      <div>
        <div className = "mobile-work-grid" style = {{marginLeft: "10vw"}}>
          <MobileWorkItem
            sliderToggle = {this.props.sliderToggle}
            projectSelector = {this.props.projectSelector}
            image = {BVP}
            title = {"Buona Vita Pizza Online Menu"}
            noteText = {"Online Menu for Buona Vita Pizza, Hamilton"}
            />
          <MobileWorkItem
            sliderToggle = {this.props.sliderToggle}
            projectSelector = {this.props.projectSelector}
            image = {THISIMG}
            title = {"This Page"}
            noteText = {"My React based portfolio page"}
            />
          <MobileWorkItem
            sliderToggle = {this.props.sliderToggle}
            projectSelector = {this.props.projectSelector}
            image = {POKEMON}
            title = {"Daily Pokemon"}
            noteText = {"A module for the open source library, MagicMirror. Displays a random Pokemon at set intervals throughout the day."}
            />
          <MobileWorkItem
            sliderToggle = {this.props.sliderToggle}
            projectSelector = {this.props.projectSelector}
            image = {MOON}
            title = {"Moon Phase"}
            noteText = {"A module for the open source library, MagicMirror. Calculates and plots current moon phase"}
            />
          <MobileWorkItem
            sliderToggle = {this.props.sliderToggle}
            projectSelector = {this.props.projectSelector}
            image = {PYCON}
            title = {"Python QA Reporting Tool"}
            noteText = {"Console based QA reporting tool"}
            />
          <MobileWorkItem
            sliderToggle = {this.props.sliderToggle}
            projectSelector = {this.props.projectSelector}
            image = {READER}
            title = {"Speed Reader"}
            noteText = {"Console/GUI Speed Reading Application"}
            />
          <MobileWorkItem
            sliderToggle = {this.props.sliderToggle}
            projectSelector = {this.props.projectSelector}
            image = {REACT}
            title = {"Project Efficiency Tool"}
            noteText = {"Client organizational tool"}
            />
          <MobileWorkItem
            sliderToggle = {this.props.sliderToggle}
            projectSelector = {this.props.projectSelector}
            image = {CLOCK}
            title = {"Monitor Landing Screen"}
            noteText = {"A tool built to condense several of my commonly used applications into one convenient location"}
            />
        </div>
        <Animate
          start={()=> ({
            x: "-80vw",
          })}

          update={() => ({
            x: [ this.props.showWorkSlider ? "13vw" : "-80vw"],
            timing: { duration: 1000, ease: easeExpOut },
          })}
          >
          {(state) => {
            const { x } = state;

            return(
              <MobileWorkSlider
                currentProject = {this.props.currentProject}
                sliderToggle = {this.props.sliderToggle}
                sliderStyles = {{
                  position: "fixed",
                  top: "10vh",
                  right: x,
                  width: "75vw",
                  height: "80%",
                  overflowY: "scroll",
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
            opacity: [ this.props.showWorkSlider ? "0.5" : "0"],
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
export default WorkMobile;