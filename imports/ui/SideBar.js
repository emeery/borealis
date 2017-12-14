import React from 'react';

class SideBar extends React.Component {
	render() {
			var estilo = { textDecoration: "underline" };
			return (
			<div className='sidebar-puntos'> 
			
			<div className='grid'>
			<h1><span>h</span>abitos</h1>
			<ul> <li> No a las distracciones </li> 
							<li> Leer algo nuevo todos los dias. </li>
							<li> Acepta tus errores y sigue adelante. </li>
							<li> Acostumbrate a levantarte temprano. </li>
							<li style={estilo}>Cuida tu cuerpo</li>
							<li> aprender a delegar </li>
			</ul>
			</div>
			
			<div className='grid'>
			<h1><span>p</span>ensamientos</h1>
			<ul> <li>tal vez solo un cuento trivial, un pensamiento que sentó en diagonal</li>	
							<li>sin tener en que caerme y con el cuerpo abatido</li>
							<li>mi movimiento asistido por un pensamiento abstraido</li>
							<li>influenciado en el vecindario, estas palabras no son del armario</li>
							<li>solo doy mi punto de vista,  un renglon en el temario </li> 
			</ul>
			</div>

			
			</div> 
			
		
			);
	};
}
export default SideBar;