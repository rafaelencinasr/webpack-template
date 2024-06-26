import './style.css';
import Icon from './happyface.png';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "hello";
    element.classList.add("hello");

    const myIcon = new Image();
    myIcon.src = Icon;
  
    element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());