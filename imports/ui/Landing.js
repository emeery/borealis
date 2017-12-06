import React from 'react';
//import '../stylesheets/style.css';
import NavbarLanding from './Landing-Plantilla/NavbarLanding';
import CabeceraLanding from './Landing-Plantilla/CabeceraLanding';
import CuerpoLanding from './Landing-Plantilla/CuerpoLanding';
import PieLanding from './Landing-Plantilla/PieLanding';
import NavbarBootsLanding from './Landing-Plantilla/NavbarBootsLanding';
import Animacion from './Landing-Plantilla/Animacion';
import {Notas} from '../api/notas';
class Landing extends React.Component {
    
    render() {
        
        return (
          <div className="container-landing">
				<Animacion/>
                <header>
                        <NavbarBootsLanding  title="&"/>
                    <div className="cabecera-landing">
                        <CabeceraLanding  subtitle="el pais del nunca jamás."/>
                    </div>
                </header> 
                    <div className="body-landing-">
                        
                        <div className="cuerpo-landing">
                            <CuerpoLanding  title="Notas"/>
                        </div>
                        <div className="pie-landing">
                            <PieLanding title="pie"/>
                        </div>
                        
                    </div>
          </div>
        ); 
    }; // render
} // Landing
export default Landing;
