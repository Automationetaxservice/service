import React from 'react';
import { render } from 'react-dom';
import Exportar from './Exportar';

var functions = require("./functions");




document.addEventListener("DOMContentLoaded", function(event) {
  functions.csList();
});


const root = document.getElementById('root');

render(
  <Exportar/>, root
);
