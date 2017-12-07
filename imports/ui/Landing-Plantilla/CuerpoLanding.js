import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Notas} from '/imports/api/notas'; 
import {Tracker} from 'meteor/tracker';
import FlatButton from 'material-ui';
class CuerpoLanding extends React.Component{
    constructor(props) {
		super(props);
		this.state = {notas: [] };
	}
	componentDidMount() {
		this.noteTracker = Tracker.autorun(() => {
			console.log('Montado');
			var user = Meteor.user();
			
			Meteor.subscribe('notas');
			const notas = Notas.find().fetch(); // 1 para ascendente y -1 descendente
			this.setState({ notas});
		});
	}
	componentWillUnmount() {
		this.noteTracker.stop();
		console.log('desmontado');
	}
	renderNotas() {
		 var estiloLogo = {
			 logo:{width: "15px", height: "15px"}};
		return this.state.notas.map((note) => {
			return(
			<div key={note._id} className="cuerpo-landing-notes">
				<div  className='container-notes'>
					<div className='p' >
					{note.noteName} </div> 
					<img onClick={()=> Notas.remove(note._id)} src="images/trash.svg" 
					size="mini" style={estiloLogo.logo} />
				</div>
			</div>);
		});
	}; // renderNotas
	 onSubmit = function (e) {
		let noteName = e.target.noteName.value;
		e.preventDefault();
		
		if(noteName) {
			Meteor.call('nota.insert', noteName);
			e.target.noteName.value = '';
			/* Notas.insert({
				nota: noteName,
				fecha: new Date()
			}); */
		}
	}; // onSubmit
	primeraLetraUsuario() {
		var usuario = Meteor.user();
		return <p>{usuario}</p>
	} 
	correoUsuarioActual()	{
		var estilosEmail = {color: 'lightblue'};
		var user = Meteor.user();
		var email = user && user.emails && user.emails[0].address
		return <p style={estilosEmail}>{email}</p>;
	};
	render() {
		return(
			<div className="cuerpo-landing-about">
				<h1>{this.props.title}</h1>
				<hr></hr>
				
				{this.correoUsuarioActual()}
				<h3>introduce tu nota.</h3>
				<div className='form-cuerpo-landing'>
					<form onSubmit={this.onSubmit}>
					<input type='text' name='noteName' placeholder='agrega nota'/>
					<button>add</button>
					</form>
				</div>
				<div>
					{this.renderNotas()}
				</div>
			</div>
		);
	}
};

export default CuerpoLanding;
CuerpoLanding.propTypes = {
    title: React.PropTypes.string.isRequired
};



