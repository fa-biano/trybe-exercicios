import React from 'react';
import PropTypes from 'prop-types';

class TextareAndCheckbox extends React.Component {
  render() {
    const { saySomethingValue, acceptValue, onChange } = this.props
    return (
      <div>
        <label>
            Diga alguma coisa:
            <textarea name="saySomething" value={saySomethingValue} onChange={onChange}></textarea>
          </label>
          <label>
            Aceitar?
            <input type="checkbox" name="accept" value={acceptValue} onChange={onChange}></input>
          </label>
      </div>
    );
  }
}

TextareAndCheckbox.propTypes = {
  saySomethingValue: PropTypes.string.isRequired,
  acceptValue: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default TextareAndCheckbox;