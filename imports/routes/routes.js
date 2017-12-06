import React from 'react';
import {Meteor} from 'meteor/meteor';
import { Router, Route, browserHistory } from 'react-router';

import Vitae from '../ui/Vitae';
import Logeo from '../ui/Logeo';
import Registro from '../ui/Registro';
import NoEncontrado from '../ui/NoEncontrado';
import Landing from '../ui/Landing';
  // flecha tracker
  Tracker.autorun(() => {
    const paginasUnautenticadas = ['/', '/registro'];
    const paginasAutenticadas = ['/vitae', '/landing'];
    const enPaginaPublica = () => {
      if(Meteor.userId()) {
        browserHistory.replace('/vitae');
      } 
    };
    const enPaginaPrivada = () => {
      if(!Meteor.userId()) {
        browserHistory.replace('/');
      }
    };
    export const cambioAutenticacion = (estaAutenticado) => {
        const pathname = browserHistory.getCurrentLocation().pathname;
        const esPaginaUnautenticada = paginasUnautenticadas.includes(pathname);
        const esPaginaAutenticada = paginasAutenticadas.includes(pathname);
        if(esPaginaUnautenticada && estaAutenticado) {
            browserHistory.replace('/landing');
        } else if (esPaginaAutenticada && !estaAutenticado) {
            browserHistory.replace('/');
        }
    };
    export const routes = (
        <Router history={browserHistory}> 
          <Route path="/" component={Logeo}/>
          <Route path="/vitae" component={Vitae}/>
          <Route path="/registro" component={Registro}/>
          <Route path="/landing" component={Landing}/>
          <Route path="*" component={NoEncontrado}/>
        </Router>
      );
});