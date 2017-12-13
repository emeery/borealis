import { slide as Menu } from 'react-burger-menu'
import React from 'react';
class Vitae extends React.Component {
  showSettings (event) {
    event.preventDefault();
   
  }

  render () {
    var estiloLogo = {
	width: "70px", height: "70px"};  
	var p = {lineHeight:'5px'};
	var a = {paddingTop: '18px'};
	
	
    return (
        <div  className='navbar-side'>
      <Menu  >
            
			
            <a id="home" className="menu-item-h" href="/">
			<span className='g'>.</span>
			<p style={p}></p><img  src="images/placeholder.png" 
			size="mini" style={estiloLogo} />
			</a>
			
			
			
			<p style={p}></p>
            <a id="about" className="menu-item-h" href="/about">
			<span className='g'>Acerca</span>
			<p style={p}></p><img  src="images/learning.png" 
			size="mini" style={estiloLogo} /></a>
			
			
			
			<p style={p}></p>
            <a style={a} id="contact" className="menu-item-h" href="/contact">
			<span className='g'>Contacto</span>
			<p style={p}></p><img  src="images/at.png" 
			size="mini" style={estiloLogo} /></a>
			
			
            
            
        </Menu>
        </div>
    );
  }
}
export default Vitae;

// class Acerca extends React.Component 




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




// class Vitae extends React.Component {
//     render() {
//         return(
//             <div className='fila'>
//             <NavbarBoots title='un header' />
//             <div className='espacio-fila'>
//                 <div className='seccion'>
//                     <p>
//                         Una minima intencion a sus ideas llegaba con celeridad
//                         un deseo descomunal por querer aspirar, trascender, propagar esta idea
//                         que aterrizaba con impaciencia
//                     </p>
//                 </div>
//             </div>
//             </div>
//         );
//     }
// }
// export default Vitae;


