import React from 'react';
import NavbarBoots from './Vitae-Plantilla/NavbarBoots';

//import React, { Component } from 'react';
class Vitae extends React.Component {
    render() {
        return(<div>
            <h1>Animals by Alphabet</h1>
            
            <div className="container">
              <div className="heading">A</div>
              <div>American Buffalo</div>
              <div>Aardvark</div>
              <div>Alligator</div>  
              <div>Antelope</div>    
            
              <div className="heading">B</div>
              <div>Baboon</div>
              <div>Bat</div>
              <div>Blue Bird</div>
              
              <div className="heading">C</div>
              <div>Cat</div>
              <div>Camel</div>
              <div>Chicken</div>  
              <div>Chipmunk</div>    
            
              <div className="heading">D</div>
              <div>Dog</div>
              <div>Donkey</div>
              <div>Dave</div>  
              <div>Duck</div>      
            </div>
        </div>);
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