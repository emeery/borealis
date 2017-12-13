import React from 'react';

class SideBar extends React.Component {
	render() {
			var estilo = { textDecoration: "underline" };
			return (<div className='sidebar-puntos'> 
			<h1>habitos</h1>
			<ul> <li> No a las distracciones </li> 
							<li> Leer algo nuevo todos los dias. </li>
							<li> Acepta tus errores y sigue adelante. </li>
							<li> Acostumbrate a levantarte temprano. </li>
							<li style={estilo}>Cuida tu cuerpo</li>
							<li> aprender a delegar </li>
					</ul></div> 
		
			);
	};
}
export default SideBar;