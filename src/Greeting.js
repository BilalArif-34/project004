
import Reacht from 'react';
import './Stylesheet.css'
function Greeting(props) {
  return <div>
    <h1> Hi from <strong>{props.name}</strong>. The name is passed dynamically through props.</h1>
      <div className="center">
        <ol className="orderlist">
          <li>React</li>
          <li>Vue</li>
          <li>Angular</li>
        </ol>
        <ul className="unorderlist">
          <li>JS script</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </div>
 
}

export default Greeting;
