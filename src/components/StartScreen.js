import React from 'react';
import { connect } from 'react-redux';

class StartScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick = (device) => (e) => {
    if (device === "desktop") {
      this.props.dispatch({ type: "CHOOSE_DEVICE", mode: device })
    }
    else if (device === "cardboard") {
      this.props.dispatch({ type: "CHOOSE_DEVICE", mode: device })
    }
  }

  render() {
    return (
      <div className="ui inverted segment" style={{ height: '720px', textAlign: 'center'}}>
        <h1>Choose your device:</h1>
        <button onClick={this.handleClick('desktop')} className="ui violet inverted button" role="button">Desktop</button>
        <button onClick={this.handleClick('cardboard')} className="ui purple inverted button" role="button">CardBoard</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ dispatch })

const startScreen = connect( null, mapDispatchToProps )(StartScreen)

export default startScreen;
