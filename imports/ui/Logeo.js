import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router'
export default class Logeo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
			hidden: false
        };
    }
    onSubmit(e) {
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.pass.value.trim();
        Meteor.loginWithPassword({email}, password, (err) =>{
            if(err) {
                this.setState({error: 'verifica tus accesos!'});
            } else {
                this.setState({error: ''});
            }
        })
    }
    render() {
        var fondoBorealis = '/images/sky.jpg';
        const esquema = {
            backgroundImage: "url(" + fondoBorealis + ")"
        }
        //const fondoBorealis = '/images'
        return(
            <div style={esquema} className="container-logeo-vitae">
            <div  className="logeo-vitae">
                <div className="header wrap">
                    <h1>borealis </h1>
                </div>
					<div className="form">
					<center>
                    {this.state.error ? <p>{this.state.error}</p> : undefined}
                        <form className="form-logeo-vitae" onSubmit={this.onSubmit.bind(this)}>
                            <input className="input-logeo" autoComplete="off" type="email" ref="email" placeholder="correo" />
                            <input className="input-logeo" autoComplete="off" type="password" ref="pass" placeholder="••••••••••" />
                            <button className="btn">login</button>
                        </form>
                    <Link to="/registro" className="link-to">crea una cuenta.</Link>
					</center>
					</div>
            </div>	
            </div>
        );
    }
}