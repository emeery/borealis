<<<<<<< HEAD
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
=======
// import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// // <hr style={{color: 'salmon', width:'300px'}}></hr>

// class SideBar extends React.Component {
	
// 	render() {
// 			var estilo = { 
// 			border: {borderColor:'salmon', borderWidth:'1px', 
// 			borderStyle:'solid', color: 'lightblue', paddingBottom: '15px'}, 
// 			estiloLogo : { width: "50px", height: "50px" }, 
// 			borderTitle: {paddingBottom: '15px' },
// 			};
// 			return (
// 			<div className='sidebar-puntos'> 
			
// 			<div className='grid'>
// 			<h1><span>h</span>abitos</h1>
// 			<ul> <li> No a las distracciones </li> 
// 							<li> Leer algo nuevo todos los dias. </li>
// 							<li> Acepta tus errores y sigue adelante. </li>
// 							<li> Acostumbrate a levantarte temprano. </li>
// 							<li style={{textDecoration:'underline'}}>Cuida tu cuerpo</li>
// 							<li> aprender a delegar </li>
// 			</ul>
// 			</div>
			
// 			<div className='grid'>
// 			<h1><span>p</span>ensamientos</h1>
// 			<ul> 
// 							<li>sin tener en que caerme y con el cuerpo abatido</li>
// 							<li>mi movimiento asistido por un pensamiento abstraido</li>
// 							<li>influenciado en el vecindario, estas palabras no son del armario</li>
// 							<li>solo doy mi punto de vista,  un renglon en el temario </li> 
// 			</ul>
			
// 			</div>
// 				<Container>
// 					<Row style={estilo.borderTitle}>
// 						<Col>
// 							<img src="images/mouse.png" 
// 							size="mini" style={estilo.estiloLogo} />
// 						</Col>
// 					</Row>
// 					<Row>
// 					  <Col style={estilo.border} >Cualquier dispositivo.</Col>
// 					  <Col style={estilo.border} >Menos codigo.</Col>
// 					  <Col style={estilo.border} >Herramientas extensibles.</Col>
// 					</Row>
// 				</Container>
		
// 			</div>
			
			
		
// 			);
// 	};
// }
// export default SideBar;
>>>>>>> 2a1c17c1843d163aa674539df3adad9759e43ed9
