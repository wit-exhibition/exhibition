import React from 'react';

export default class StartScreen extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
    this.state = {hovered: false}
  }

  handleClick = (device) => (e) => {
    if (device === "desktop") {
      this.store.dispatch({ type: "CHOOSE_DEVICE", mode: device })
    }
    else if (device === "cardboard") {
      this.store.dispatch({ type: "CHOOSE_DEVICE", mode: device })
    }
  }

  style() {
      if (this.hovered) {
        return { color: "red" }
      } else {
        return { color: "grey" }
      }
    }

  onMouseOver() {
    console.log("mouse over");
    //this.setState({ hovered:true });
  }

  onMouseOut() {
    console.log("mouse out");
    //this.setState({ hovered:false });
  }

  render() {
    return (
      <div className='start-screen'>
        <h1>3D-Ausstellung</h1>
        <h2>Wähle dein Gerät:</h2>

          <a className='computer' onClick={this.handleClick('desktop')} role="button">
            <img src="https://ucarecdn.com/a081ebd4-6e25-4527-aa21-7dae3e679b49/"/>
            <div className='computer-label' onMouseOver={this.onMouseOver}>Desktop</div>
          </a>
          <button onClick={this.handleClick('cardboard')} role="button">CardBoard</button>

            <span onMouseOver={this.onMouseOver}
                  onMouseOut={this.onMouseOut}
                  style={this.style()}>Hover me</span>
        </div>
    )
  }

}
