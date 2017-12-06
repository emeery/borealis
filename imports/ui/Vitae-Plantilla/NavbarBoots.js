import React from 'react';
// https://stackoverflow.com/questions/17117073/jquery-hide-show-based-on-scroll

export default class NavbarBoots extends React.Component {
    render(props) {
        return(
        <div className="navbar-boots">
        <nav>
                <ul>
                  <li><a>{this.props.title}</a></li>
                  <li><a id="subtitulo">subtitulo</a></li>
                </ul>
            </nav>  
        </div>  
        ); // return
    };
}
NavbarBoots.propTypes = {
    title: React.PropTypes.string.isRequired
}