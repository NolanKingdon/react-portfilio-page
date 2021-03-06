import React, { Component } from 'react';
import Page from './components/Page';
import NavigationBar from './components/NavigationBar';
import MobileNavToggle from './components/MobileNavToggle';
import './css/styles.css';
import navigationItems from './model/navigation.jsx';
import pageContent from './model/pageContent.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentPage: "About",
      navExtended: window.innerWidth > 700,
      viewportWidth: window.innerWidth,
      isMobile: window.innerWidth <= 700
    }

    this.changeState = this.changeState.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.updateWindowWidth = this.updateWindowWidth.bind(this);
    this.leftSwipeHandler = this.leftSwipeHandler.bind(this);
    this.rightSwipeHandler = this.rightSwipeHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowWidth);
    window.addEventListener('touchstart', this.touchDownHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowWidth);
  }

  changeState(page){
    // Changing page. Sets Navbar to closed if we are mobile.
    this.setState({
      currentPage: page,
      navExtended: !this.state.isMobile
    });
  }

  /**
   * Updates the state and automatically adjusts page content accordingly.
   */
  updateWindowWidth(){
    let width = window.innerWidth;

    this.setState({viewportWidth: width});

    // As part of the update, I Want to automatically close our navbar.
    if (width < 875 && this.state.navExtended) {
      this.toggleNavbar();
    }

    // I also want to check to see if we're tripping into our mobile css.
    if (width <= 700 && !this.state.navExtended){
      this.setState({isMobile: true});
    } else {
      this.setState({isMobile: false});
    }
  }

  leftSwipeHandler(){
    let page = this.state.currentPage;
    let keys = Object.keys(navigationItems);
    let currentIndex = keys.indexOf(page);

    if (currentIndex < keys.length-1){
      this.setState({currentPage: keys[currentIndex+1]});
    }
  }

  rightSwipeHandler(){
    let page = this.state.currentPage;
    let keys = Object.keys(navigationItems);
    let currentIndex = keys.indexOf(page);

    if (currentIndex > 0){
      this.setState({currentPage: keys[currentIndex-1]});
    }
  }

  toggleNavbar(){
    let extended = this.state.navExtended;
    this.setState({navExtended: !extended});
  }

  // Rendering our components.
  render(){
    return (
      <div className="main-flex-panel">
        <NavigationBar
            items={navigationItems}
            changeState={this.changeState} 
            toggleHandler={this.toggleNavbar}
            extended={this.state.navExtended} 
            isMobile={this.state.isMobile} />
        {
          this.state.viewportWidth <= 700 &&
            <div className="mobile-nav-btns">
              <MobileNavToggle 
                extended={this.state.navExtended}
                toggleHandler={this.toggleNavbar}/>
            </div>
        }
        <Page
          leftSwipeHandler={this.leftSwipeHandler}
          rightSwipeHandler={this.rightSwipeHandler}
          currentPage={this.state.currentPage}
          pageContents={pageContent[this.state.currentPage]} />
      </div>
    );
  }
}

export default App;
