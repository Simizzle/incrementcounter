// class App extends React.Component {
//   state = {
//     persons: [
//       {name: "Dan", age: 34},
//       {name: "Ben", age: 21}
//     ]
//   }

// Render(){
//   return (
//     <div>
//       <h1>I am a class component</h1>
//       <Person />
//       <Person />
//     </div>
//   );
// }
// }


// Example 2

// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [count, setCount] = useState(0);

//   // const helloWorld = () => {
//   //   setCount(3000);
//   // };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount("hi world")}>Click me</button>
//     </div>
//   )
// }

// export default App

// // Example 3

// import React, { useState } from "react";
// import "./App.css";
// const App = () => {
//   const [count, setCount] = useState(0);
//   const [add2, setAdd2] = useState(false);

//   const handleClick = () => {
//     if (add2) {
//       setCount(count + 2);
//     } else {
//       setCount(count + 1);
//     }
//   };
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleClick}>Add</button>
//       <button onClick={() => setAdd2(!add2)}>Toggle add 2</button>
//      
//       {/* {paragraph} */}
//       {add2 && <p>You are currently adding 2 at a time</p>}
//     </div>
//   );
// };


// ACTIVITY 1.5

import React, { useState } from "react";
import "./App.css";
function ButtonIncrement(props) {
  
  return (
    <button onClick={props.onClickFunc}>
    +1
    </button>
  )
}
function ButtonDecrement(props) {
 
 return (
   <button onClick={props.onClickFunc}>
   -1
   </button>
 )
}
function Display(props) {
 return (
   <label style={{ marginLeft: '.5rem'}} ><h1>{props.message}</h1></label>
 )
}
function App() {
 const [counter, setCounter] = useState(1);
 const incrementCounter = () => setCounter(counter + 1);
 let decrementCounter = () => setCounter(counter - 1);
 if(counter<=1) {
   decrementCounter = () => setCounter(1);
 }
 return (
   <container>
   <div> 
     <ButtonIncrement onClickFunc={incrementCounter}/>
     <Display message={counter}/> 
     <ButtonDecrement onClickFunc={decrementCounter}/>
   </div>
   </container>
 );
}
export default App;