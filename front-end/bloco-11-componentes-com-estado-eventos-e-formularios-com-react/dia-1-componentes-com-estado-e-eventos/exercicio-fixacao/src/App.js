import React from 'react';

class App extends React.Component {
  state = {
    count1: 0,
    count2: 0,
    count3: 0,
  }

  handleClick = (stateKey) => {
    this.setState((prevState) => ({
      [stateKey]: prevState[stateKey] + 1,
    }))

    const even = this.state[stateKey] + 1;
    even % 2 === 0 ? console.log('Par: green'): console.log('Impar: black');;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick('count1')}>{`Clicks Btn1: ${this.state.count1}`}</button>
        <button onClick={() => this.handleClick('count2')}>{`Clicks Btn2: ${this.state.count2}`}</button>
        <button onClick={() => this.handleClick('count3')}>{`Clicks Btn2: ${this.state.count3}`}</button>
      </div>
    );
  }
}

export default App;
