import './styles.css';
import menuFunction from './menu.js';
import amenitiesFunction from './amenities.js';
import timingFunction from './timings.js';

const contentDiv=document.querySelector('#content');
const menuButton=document.querySelector('#menu');
const amenitiesButton=document.querySelector('#amenities');
const timingsButton=document.querySelector('#timings');

let buttons =[[menuButton,menuFunction],[amenitiesButton,amenitiesFunction],[timingsButton,timingFunction]];
for (let btn of buttons){
    btn[0].addEventListener('click',btn[1](contentDiv));
}
