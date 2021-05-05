import React from 'react';
import {render} from 'react-dom'
import Menu from './components/Menu'
import data from '../data/recipes.json'
window.React = React;

render(
    <Menu recipes={data} />,
    document.getElementById("react-container")
)