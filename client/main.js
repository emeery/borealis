import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import {routes, cambioAutenticacion } from '../imports/routes/routes';
import React from 'react';
import SideBar from '../imports/ui/SideBar';
import Camisa from '../imports/ui/Camisa';
// import cambioAutenticacion
import { Menu, Dropdown, Icon } from 'antd';

//import 'bootstrap';
Tracker.autorun(() => {
  const estaAutenticado = !!Meteor.userId();
  cambioAutenticacion(estaAutenticado);
});
// 
Meteor.startup(() => {
	Meteor.call('sumaNumeros', 11 , 20, (err, res) =>{
		console.log(res);
  });
  // <Camisa col='blue' num='666' talla='mediana' />
  ReactDOM.render(routes, document.getElementById('app'));
});


