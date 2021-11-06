import 'bootstrap/dist/js/bootstrap.bundle.min'

import {createElement} from 'react'
import {render} from 'react-dom'
import Home from "./elements/home/Home";
// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

const domContainer = document.querySelector('#react');
render(createElement(Home), domContainer);

