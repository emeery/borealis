import React from 'react';
// https://stackoverflow.com/questions/17117073/jquery-hide-show-based-on-scroll

class NavbarV extends React.Component {
    render(props) {
        var estiloLogo = {width: "50px", height: "50px",
        paddingTop:"4px"};
        return(
        <div className="navbar-v">
        <nav>
                <ul>
                <img src="images/recycling.png" 
			        size="mini" style={estiloLogo} />
                </ul>
            </nav>  
        </div>  
        ); // return
    };
}
export default NavbarV;
NavbarV.propTypes = {
    title: React.PropTypes.string.isRequired
}