import React from 'react';
import  { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';
// puede utilizar el constructor para configurar el estado,
// así como vincular todos los controladores de eventos.
export default class Registro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();
        let email = this.refs.email.value.trim(); // let en vez de const
        let password = this.refs.pass.value.trim();
        if(password.length < 8) {
            return this.setState({error: 'tu contraseña debe de ser mayor a 8 caracteres'});
        }
        
        Accounts.createUser({email, password}, (err) => {
            //console.log('signup callback', err);
            if(err) {
                this.setState({error: err.reason});
            } else { 
                this.setState({error: ''}); 
            }
        });
    }
    

    render() {
        const float = {float: 'center'}
		return(
            <div className='container-registro'>
				<div className='registro-vitae'>
                <h1>Borealis</h1>
                {this.state.error ? <p>{this.state.error}</p> : undefined}
				<center>
                <form  className="form-registro" onSubmit={this.onSubmit.bind(this)} >
                    <input className="input-registro" type="email" ref="email" name="email" placeholder="email"/>
                    <input className="input-registro" type="password" ref="pass" name="password" placeholder="password"/>
                    <button className='btn'>registrate</button>
                </form>
				</center>
                <Link className="link-to" to="/">ya tienes una cuenta</Link>
				</div>
            </div>
        );
    };
}