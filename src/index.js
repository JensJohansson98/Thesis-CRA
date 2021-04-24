import React from 'react';
import reactDom from 'react-dom';
import Car from "./app.js"


const myElement = <Car brand="Volvo" />

reactDom.render(myElement, document.getElementById("root"));