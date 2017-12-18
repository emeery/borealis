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
        const esquema = { backgroundImage: "url(" + fondoBorealis + ")" }
        const trans = {backgroundColor:'transparent'}
        
        return(
            <div style={trans} className="container-logeo-vitae">
            <div style={{paddingTop:'40vh'}} className="logeo-vitae">
                <div>
                    <h1>borealis </h1>
                </div>
					<div >
					<center>
                    {this.state.error ? <p style={{color:'white'}}>{this.state.error}</p> : undefined}
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