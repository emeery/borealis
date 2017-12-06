import React from 'react';
//import {Link} from 'react-router'
import { Accounts } from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

 
export default class NavbarVitae extends React.Component {
    
      
    render() {
        return(
        <div className="navbar-landing">
            <nav>
                <div>
                        <ul className="ul-landing">
                                {/* <img src="./public/images/flat-rocket.jpg"></img> */}
                                <li className="navbar-title"><a>{this.props.title}}</a></li>
                            <div className="navbar-menu">
                                <li><a>acerca</a></li>
                                <li><a>portafolio</a></li>
                                <li><a href="contacto">contacto</a></li>
                                <button className="btn"onClick={() => Accounts.logout()}>Logout</button>
                            </div>
                        </ul>
                </div>
             </nav>
        </div>
        );
    };
}
Meteor.startup(function(){
    $("contacto").click(function(){
        $(this).hide();
    });
});

NavbarVitae.reactProptype = {
    title: React.PropTypes.string.isRequired
};