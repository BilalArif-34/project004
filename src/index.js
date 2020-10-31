import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div><App name="Bilal" age={25} /></div>,
  document.getElementById('root')
);



/*
ReactDOM.render(
  React.createElement('div',null,React.createElement('span',null,"Hello in span create element")),
  document.getElementById('root')
);
*/
/*
ReactDOM.render(
  <div>Hello World</div>,
  document.getElementById('root')
);*/
reportWebVitals();
