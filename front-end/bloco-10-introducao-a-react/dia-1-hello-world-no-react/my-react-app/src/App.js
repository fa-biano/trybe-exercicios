// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//Exercicio conteudo JSX:

// const textJSX = 'Hello, World!';
// const elementH1 = <h1> {textJSX} </h1>;

// export default function App() {
//   return (
//     <div className="App"> {elementH1} </div>
//   )
// }

//Exercicio conteudo Classes e React

import React from 'react';
import About from './about';

class App extends React.Component {
  render () {
    return (
      <About/>
    );
  }
}

export default App;


