//import { slide as Menu } from 'react-burger-menu'
import React from 'react';
import {Container, Row, Col} from 'reactstrap';
class Vitae extends React.Component {
    constructor(props) {
		super(props);    
		this.alternarMenu = this.alternarMenu.bind(this);
		this.controlarApuntador = this.controlarApuntador.bind(this);
		this.state = {visible:false};
	}; // comillas 
	alternarMenu () { this.setState({visible:!this.state.visible}); }
	controlarApuntador (e) { this.alternarMenu(); console.log('clic');
    	e.stopPropagation(); }
    render() {
			var estilo = { 
			border: {borderColor:'salmon', borderWidth:'1px', 
			borderStyle:'solid', color: 'lightblue', paddingBottom: '15px'}, 
			estiloLogo : { width: "50px", height: "50px" }, 
			borderTitle: {paddingBottom: '15px' },
			};
			return (
			<div className='sidebar-puntos'>
			<Boton  controlarApuntador={this.controlarApuntador} />
			<Menu controlarApuntador={this.controlarApuntador} menuVisible={this.state.visible} />
			<div className='grid'>
			<h1><span>h</span>abitos</h1>
			<ul> <li> No a las distracciones </li> 
							<li> Leer algo nuevo todos los dias. </li>
							<li> Acepta tus errores y sigue adelante. </li>
							<li> Acostumbrate a levantarte temprano. </li>
							<li style={{textDecoration:'underline'}}>Cuida tu cuerpo</li>
							<li> aprender a delegar </li>
			</ul>
			</div>
			
			<div className='grid'>
			<h1><span>p</span>ensamientos</h1>
			<ul> 
							<li>sin tener en que caerme y con el cuerpo abatido</li>
							<li>mi movimiento asistido por un pensamiento abstraido</li>
			</ul>
			
			</div>
				<Container>
					<Row style={estilo.borderTitle}>
						<Col>
							<img src="images/mouse.png" 
							size="mini" style={estilo.estiloLogo} />
						</Col>
					</Row> <Row>
					  <Col style={estilo.border} >Cualquier dispositivo.</Col>
					  <Col style={estilo.border} >Menos codigo.</Col>
					  <Col style={estilo.border} >Herramientas extensibles.</Col>
					</Row>
					
				</Container>
				</div>
			);
	};
}
export default Vitae;
class Boton extends React.Component {
	render() { 
		return(<button  className='roundButton'onMouseDown={this.props.controlarApuntador}></button> ); 
	}
}
class Menu extends React.Component {
	render() { 
		const { menuVisible} = this.props;
		const borealis = {width: '100%', height:'100%'}
		const className = menuVisible ? 'flyoutMenu show' : 'flyoutMenu hide';
		var fondoBorealis = '/images/sky.jpg';
        const esquema = { backgroundImage: "url(" + fondoBorealis + ")" };
		return(<div  onMouseDown={this.props.controlarApuntador} className={className} >
			
			<div  className='menu-lateral'>
				<img src="images/borealis.jpg" 
							size="mini" style={borealis} />
				<h2><a  href='#'><span>A</span>cerca</a></h2>
					<hr></hr>
				<h2><a  href='#'><span>C</span>ontacto</a></h2>
					<hr></hr>
				<div style={{ paddingTop: '10px'}}>
					<hr></hr>
				</div>
				<div style={{ paddingTop: '10px'}}>
					<iframe src="https://open.spotify.com/embed/user/emeery/playlist/5ZUCEmqNDcx4HhVaMAgliO" 
					width="300" height="87" frameBorder="0" allowTransparency="true"></iframe>
				</div>
				
			</div>
		</div>);
	}
}

//    jquery 

// getWindowHeight() {
//     let deviceWindow = document.getElementById('seccion-landing').clientHeight;
//     this.setState({alturaVentana:deviceWindow});   
// }
// componentDidMount() {
//     window.addEventListener('scroll', this.handleScroll);
//     this.getWindowHeight();
// }
// handleScroll() {
//     if(window.pageYOffset >= this.state.alturaVentana) {
        
//         console.log('fiz');
//     } else if (window.pageYOffset < this.state.alturaVentana) {
//         console.log('nofiz');
//     }    
// }





//                         Una minima intencion a sus ideas llegaba con celeridad



//                         un deseo descomunal por querer aspirar, trascender, propagar esta idea que aterrizaba con impaciencia
   



