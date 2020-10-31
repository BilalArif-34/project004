## Destructuing Object

Dstructuing objects is a new technique to destructure properties from an object
Usually in javascript we used to do something like this

### `let user={name:"Bilal", age:20}`
### `let name=user.name;'
### `let age=user.age;'

But it is hard to extract object properties in this way. So the new technique is

### `let{name,age}=user;'

Now we can directly use name and age properties of the object (user).
So in React instead of writting `props` we can directly destructure the properties
using `{}`



```
function Child({color, age}){
    return ( 
            <div> 
                I am Child component. My favorite color is {color}
                 and I am {age+5} old.       
            </div>

        )

}
```

Now we don't need to write `props` word