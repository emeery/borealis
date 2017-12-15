import React, { Component } from "react";
 
class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { visible: false };
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.toggleMenu = this.toggleMenu.bind(this);
	}
	
	toggleMenu() {
	  this.setState({
		  visible: !this.state.visible
	  });
	}
	
	handleMouseDown(e) {
		this.toggleMenu();
	 
		console.log("clicked");
		e.stopPropagation();
	}
  render() {
    return (
	
	<div>
	
	<MenuButton handleMouseDown={this.handleMouseDown}/>
	<Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
      <div>
        <div>
          <p>Can you spot the item that doesn't belong?</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebees</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </div> 
	  
	  </div>
    );
  }
}
export default SideBar;

class MenuButton extends React.Component {
  render() {
    return (
      <button className="roundButton"
              onMouseDown={this.props.handleMouseDown}></button>
    );
  }
}


class Menu extends React.Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div className="flyoutMenu"
           onMouseDown={this.props.handleMouseDown} 
           className={visibility}>
        <h2><a href="#">Home</a></h2>
        <h2><a href="#">About</a></h2>
        <h2><a href="#">Contact</a></h2>
        <h2><a href="#">Search</a></h2>
      </div>
    );
  }
}