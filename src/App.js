import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const randomNumber =  2500;
const reader = {name: 'bablu',
  job: 'book reader',
  age: 25}

const readerStyle = {
  color: 'red',
  backgroundColor: 'green',
  padding: '5px'
}

// function App() {
//   const companies = [
//     {name:'Masco', location:'Dhaka'},
//     {name:'DTML', location:'CTG'},
//     {name:'FCA', location:'Khulna'},
//     {name:'Epyllion', location:'Cumilla'},
//     {name:'HP', location:'Barisal'}
//   ];
//   return (
//     <div className="App">
//       {/* {
//         companies.map(company => <li>{company}</li>)
//       } */}
//       {
//         companies.map(company =><Person name={company.name}></Person>)
//       }
//       {/* <Person name="Walton" certificateNow ="BASIC"></Person>
//       <Person name="VISION" certificateNow ="BSS N/A"></Person>
//       <Person name="Bangla" certificateNow ="N/A"></Person>
//       <Person name="Epyllion" certificateNow ="OCS"></Person>
//       <Person name={companies[0]} certificateNow ="OCS"></Person> */}
//       <Person availability="always"></Person>
//     </div>
//   );
// }

/* function App() {
  return (
    <div className="App">
      <Person name="Walton" certificateNow ="BASIC"></Person>
      <Person name="VISION" certificateNow ="BSS N/A"></Person>
      <Person name="Bangla" certificateNow ="N/A"></Person>
      <Person name="Epyllion" certificateNow ="OCS"></Person>
    </div>
  );
} */


function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter () {
  const [count, setCount] = useState(12);
  
  return (
    <div>
      <h2>Count:{count} </h2>
      <button>Increase</button>
    </div>
  )
}


/* function Person(props) {
  console.log(props);
  return (
    <div className='personDetails'>
    <h2>{props.name}</h2>
    <p>{props.certificateNow}</p>
    </div>
  )
}
 */
export default App;
