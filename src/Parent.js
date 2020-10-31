import React from 'react'
import Child from './Child'
function Parent(){

return <div>I am the parent component. Passing values from Parent component to child component.  <Child color="Green" age={20} /> </div>


}

export default Parent;