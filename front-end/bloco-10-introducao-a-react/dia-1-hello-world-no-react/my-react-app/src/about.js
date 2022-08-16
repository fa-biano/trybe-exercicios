import React from 'react';

class About extends React.Component {
  render() {
    const skills = ['HTML', 'CSS', 'Javascript', 'Git', 'Github', 'Jest', 'React.js'] // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
    return (
      <div>
        <h1>Hello, my name is Fabiano</h1>
        <h2>This page was built using React.js!</h2>
        <p>This's my Skills:</p>
        <ul>{jsxSkills}</ul>
      </div>
    )
  }
}

export default About;