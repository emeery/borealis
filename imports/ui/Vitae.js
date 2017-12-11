import { slide as Menu } from 'react-burger-menu'
import React from 'react';
class Vitae extends React.Component {
  showSettings (event) {
    event.preventDefault();
   
  }

  render () {
      
    return (
        <div className='navbar-side'>
      <Menu >
            
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
            
        </Menu>
        </div>
    );
  }
}
export default Vitae;

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
//                         un deseo descomunal por querer aspirar, trascender, propagar esta
//                         estas palabras llegaban con impaciencia
//                     </p>
//                 </div>
//             </div>
//             </div>
//         );
//     }
// }
// export default Vitae;


{/* <p>
Una minima intencion a sus ideas llegaba con celeridad
un deseo descomunal por querer aspirar, trascender, propagar esta
estas palabras llegaban con impaciencia
</p> */}