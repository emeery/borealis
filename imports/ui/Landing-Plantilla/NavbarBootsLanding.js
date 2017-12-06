import React from 'react';
import {Link} from 'react-router';
import { Accounts } from 'meteor/accounts-base';
//import { Dropdown } from 'semantic-ui-react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
//import {Menu, Dropdown, Icon } from 'antd';
import { Dropdown, DropdownItem} from 'pui-react-dropdowns';
import F from 'ramda';
//import {Dropdown, DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
//import DropDownMenu from 'material-ui/DropDownMenu';
//import MenuItem from 'material-ui/MenuItem';
// https://secapaz.com/handwritting/     s   c a p a z 
 //  <Link to="/registro">crea una cuenta.</Link>
 

export default class NavbarBootsLanding extends React.Component {
  	render() {
			var estiloLogo = {
				
				width: "50px",
				height: "50px"
				};
				return(
					<div className='heading'>
					<div className="navbarboots-landing">
					
						<nav>
							<div>
									<ul className="ul-landing">
											<img src="images/icon-rocket.png" 
											size="mini" style={estiloLogo} />
											<li className="navbar-title-landing"><a>{this.props.title}</a></li>
												
										<div className="navbar-menu">
											
											<li><a>acerca</a></li>
											<li><a>portafolio</a></li>
											<li><a>contacto</a></li>
											<Button color="danger"className="btn" 
											onClick={() => Accounts.logout()}>Logout</Button>
										</div>
									</ul>
							</div>
						</nav>
					</div>
					</div>
				);
    };
}
NavbarBootsLanding.propTypes = {
    title: React.PropTypes.string.isRequired
};

// class Boton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       popoverOpen: false
//     };
//   }

//   toggle() {
//     this.setState({
//       popoverOpen: !this.state.popoverOpen
//     });
//   }

//   render() {
//     return (
//       <div>
//         <Button id="Popover1" onClick={this.toggle}>
//           Launch Popover
//         </Button>
//         <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
//           <PopoverHeader>Popover Title</PopoverHeader>
//           <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
//         </Popover>
//       </div>
//     );
//   }
// }



// - - - -  funcional
// {renderAcerca(lista)}
		/* const lista = ['lista1','lista2', 'lista3'];
		const renderAcerca =  function (listaAcerca) {
			return listaAcerca.map(function (lista){
				return <ul>{lista}</ul>
			});
		} */


/* class DropdownList extends React.Component {
	render() {
		return(
			<div>
				<ul>
					this.props.lista.map(function(valorLista){
						return <li>{valorLista}</li>;
					});
				</ul>
			</div>
		);
	}
} */
/* class OverlayVisible extends React.Component {
  state = {
    visible: false,
  };
  handleMenuClick = (e) => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  }
  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  }
  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
      </Menu>
    );
    return (
      <Dropdown overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <a className="ant-dropdown-link" href="#">
          Hover me <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
} */

//export default NavbarBootsLanding;

