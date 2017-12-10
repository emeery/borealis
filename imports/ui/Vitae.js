import React from 'react';
import NavbarV from './Vitae-Plantilla/NavbarV';

//import React, { Component } from 'react';
class Vitae extends React.Component {

    render() {
        var fondoBorealis = '/images/sky.jpg';
        const esquema = {
            backgroundImage: "url(" + fondoBorealis + ")",
            backgroundSize: 'cover' };
        //const esquema2 = {height:'1000px', backgroundColor:'salmon'};
        return(<div className="page-vitae">
            
            <div >
                <div><NavbarV title='R'/></div>
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