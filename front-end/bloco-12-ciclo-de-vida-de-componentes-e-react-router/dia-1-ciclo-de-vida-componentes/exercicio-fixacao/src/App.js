import React from 'react';

class App extends React.Component {

  state = {
    isLoaded: false,
    user: '',
  }

  fetchRandomUser = async () => {
    const endpoint = 'https://api.randomuser.me/';
    const response = await fetch(endpoint);
    const data = await response.json();
    this.setState({ 
      user: data.results,
      isLoaded: true
    })
  }

  componentDidMount() {
    this.fetchRandomUser()
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const elder = 50;
    const checkAge = nextState.user[0].dob.age;
    console.log(checkAge);
    if (checkAge > elder) return false;
    return true;
  }

  render() {
    const { user, isLoaded } = this.state
    return (
      <main>
        <h1>Exercício</h1>
        { !isLoaded 
          ? <p>Carregando...</p>
          : user.map((element) => (
            <div key={element.id.value}>
              <img  src={element.picture.large} alt={element.name.first} />
              <p>{`${element.name.title} ${element.name.first} ${element.name.last}`}</p>
              <p>{`email: ${element.email}`}</p>
              <p>{`${element.dob.age} years old`}</p>
            </div>
          )) }
      </main>
    );
  }
}

export default App;
