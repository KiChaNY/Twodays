
import './App.css';
import { useState } from 'react';
function Counter(props){
   console.log('counter');
   let countState = useState(props.iniValue);
   let counte = countState[0];
   let setCount = countState[1];
   console.log9countState0;
   function up(){
    console.log(1)
    setCount(count+1);

   }
    return <div>
      <hi>{props.title}</hi>
      <button onclick={up}>+</button> {count}
    </div>
}
function App() {
  return (
    <div>
      <Counter title="불면증 카운터"initValue={10}></Counter>
      <Counter title="손님 카운터"initValue={10}></Counter>
      <Counter></Counter>
    </div>
  );
}

export default App;
