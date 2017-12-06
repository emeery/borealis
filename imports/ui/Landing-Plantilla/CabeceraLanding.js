import React from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
class CabeceraLanding extends React.Component {
    // const stylea
	render(){
		return(
			<div  className="cabecera-landing-js">
				<div>
					<Zoom delay={6000}><h1><span>W</span>elcome</h1></Zoom>
					<hr></hr>
				</div>
				<div className="reloj-cabecera">
					<Fade delay={6000} bottom big>
						<Reloj />
					</Fade>
				</div>
			</div>
		);
	}
};
export default CabeceraLanding;
class Reloj extends React.Component {
	constructor(props) {
		super(props);
		this.state ={date: new Date()};
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		this.setState({date: new Date() });
	}
	render() {
		return(<h2 >{this.state.date.toLocaleTimeString()}.</h2>);
	}
}

// CabeceraLanding.propTypes = {
//     title: React.PropTypes.string.isRequired,
//     subtitle: React.PropTypes.string.isRequired
// };
