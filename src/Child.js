import React from 'react'

function Child(props){
    return ( 
            <div> 
                I am Child component. My favorite color is {props.color}
                 and I am {props.age+5} old.       
            </div>

        )

}

export default Child;