import React, {Component} from 'react';

class MobileEducationItem extends Component {

  handleClick(){
    this.props.sliderToggle();
    this.props.courseSelector(this.props.title);
  }


  render(){
    {/* Instead of linking out, maybe provide a quick description of what it actually is. Have a Div element slide on in from the side */}
    return(
      <button className = "education-item-button" onClick = {() => this.handleClick()} style = {{width: "75vw"}}>
        <div className = "education-item-grid">
          <img src = {this.props.image} className = "employment-logo" alt = "Logo"/>
          <div>
            <h2 className = "education-item-title">{this.props.title}</h2>
            <hr className = "education-item-hr" />
            <p className = "education-item-note-text">{this.props.noteText}</p>
          </div>
        </div>
      </button>
    )
  }

}
export default MobileEducationItem;