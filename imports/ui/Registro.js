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
        return(
            <div>
                <h1>join bonafont</h1>
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                <form onSubmit={this.onSubmit.bind(this)} noValidate>
                    <input type="email" ref="email" name="email" placeholder="email"/>
                    <input type="password" ref="pass" name="password" placeholder="password"/>
                    <button>registrate</button>
                </form>
                <Link to="/">ya tienes una cuenta</Link>
            </div>
        );
    };
}