import React, { Component, PropTypes } from 'react';

const propTypes = {
  message: PropTypes.object.isRequired,
};

class App extends Component {
  render() {
    const { messageString } = this.props.message;

    return (
      <h1>
        {`${messageString} World!`}
      </h1>
    );
  }
}

App.propTypes = propTypes;

export default App;
