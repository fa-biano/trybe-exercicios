import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const toDo = ['Tarefa1', 'Tarefa2', 'Tarefa3', 'Tarefa4', 'Tarefa5', 'Tarefa6'];

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>{toDo.map((element) => Task(element))}</ul>
      </div>
      
    )
  }
}

export default App;