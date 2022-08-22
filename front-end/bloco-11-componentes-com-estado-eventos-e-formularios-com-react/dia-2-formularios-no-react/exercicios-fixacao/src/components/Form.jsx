import React from 'react';
import Fieldset from './Fieldset';
import TextareAndCheckbox from './TextareAndCheckbox';

class Form extends React.Component {
  state = {
    name: '',
    age: '',
    genre: '',
    saySomething: '',
    accept: false,
    formularioComErros: false,
  }
  
  handleError = () => {
    const { name, age, genre, saySomething, accept } = this.state;
    
    const errorCases = [
      name.length > 15 || !name.length,
      Number(age) > 100 || !age.length,
      genre !== 'Male' && genre !== 'Female',
      saySomething.length === 0,
      accept === false,
    ];

    console.log(errorCases);
    
    const formularioPreenchido = errorCases.some((err) => err === true);
    
    this.setState({formularioComErros: formularioPreenchido});
  }
  
    handleForm = (event) => {
      const { target } = event;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({ [target.name]: value }, () => { this.handleError()})
    }

  render() {
    return (
      <div>
        <h1> Teste Form React</h1>
        <form>
          <Fieldset
          nameValue={this.state.name}
          ageValue={this.state.age}
          genreValue={this.state.genre}
          onChange={this.handleForm}
          />
          
          <TextareAndCheckbox
          saySomethingValue={this.state.saySomething}
          acceptValue={this.state.accept}
          onChange={this.handleForm}
          />
        </form>
      </div>
    );
  }
}

export default Form;
