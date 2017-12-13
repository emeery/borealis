import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import {routes, cambioAutenticacion } from '../imports/routes/routes';
import React from 'react';
import SideBar from '../imports/ui/SideBar';
// import cambioAutenticacion
//import { Menu, Dropdown, Icon } from 'antd';
import {MediaQuery} from 'react-responsive';

Tracker.autorun(() => {
  const estaAutenticado = !!Meteor.userId();
  cambioAutenticacion(estaAutenticado);
});
Meteor.startup(() => {
	Meteor.call('sumaNumeros', 11 , 20, (err, res) =>{
		console.log(res);
	});
  ReactDOM.render(<SideBar/>, document.getElementById('app'));
});


// class Overlay extends React.Component {
//   state = {
//     visible: false,
//   };
//   handleMenuClick = (e) => {
//     if (e.key === '3') {
//       this.setState({ visible: false });
//     }
//   }
//   handleVisibleChange = (flag) => {
//     this.setState({ visible: flag });
//   }
//   render() {
//     const menu = (
//       <Menu onClick={this.handleMenuClick}>
//         <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
//         <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
//         <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
//       </Menu>
//     );
//     return (
//       <Dropdown overlay={menu}
//         onVisibleChange={this.handleVisibleChange}
//         visible={this.state.visible}
//       >
//         <a className="ant-dropdown-link" href="#">Hover me <Icon type="down" />
//         </a>
//       </Dropdown>
//     );
//   }
// }

