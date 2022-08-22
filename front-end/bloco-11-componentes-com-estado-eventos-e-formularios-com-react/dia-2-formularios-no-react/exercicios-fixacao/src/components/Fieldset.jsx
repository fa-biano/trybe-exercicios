import React from 'react';
import PropTypes from 'prop-types';

class Fieldset extends React.Component {
  render() {
    const { nameValue, ageValue, genreValue, onChange } = this.props
    return (
      <fieldset>
        <label>
          Nome:
          <input type="text" name="name" value={nameValue} onChange={onChange}></input>
          {nameValue.length > 15 ? 'Diminua o tamanho do nome' : ''}
        </label>

        <label>
          Idade:
          <input type="number" name="age" value={ageValue} onChange={onChange}></input>
          {ageValue > 100 ? 'Idade maior que 100' : ''}
        </label>

        <label>
          Sexo:
          <select name="genre" value={genreValue} onChange={onChange}>
            <option>-</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          {genreValue === 'Male' || genreValue === 'Female' ? '' : 'Selecione'}
        </label>
      </fieldset>
    );
  }
}

Fieldset.prototypes = {
  nameValue: PropTypes.string.isRequired,
  ageValue: PropTypes.string.isRequired,
  genreValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Fieldset;
