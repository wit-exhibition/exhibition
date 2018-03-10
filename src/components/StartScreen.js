import React from 'react';
import { connect } from 'react-redux';

class StartScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hoveredComputer: false,
      hoveredCardboard: false
    }
  }

  handleClick = (device) => (e) => {
    if (device === "desktop") {
      this.props.dispatch({ type: "CHOOSE_DEVICE", mode: device })
    }
    else if (device === "cardboard") {
      this.props.dispatch({ type: "CHOOSE_DEVICE", mode: device })
    }
  }

  onMouseOverComputer = () => {
    this.setState({ hoveredComputer:true });
  }

  onMouseOutComputer = () => {
    this.setState({ hoveredComputer:false });
  }

  onMouseOverCardBoard = () => {
    this.setState({ hoveredCardboard:true });
  }

  onMouseOutCardBoard = () => {
    this.setState({ hoveredCardboard:false });
  }

  showCardboard() {
    if (this.state.hoveredCardboard) {
      return <img className="button" alt="Choose Cardboard" src="https://ucarecdn.com/5be235ca-371b-4797-b438-57869862019f/"/>
    } else {
      return <img className="button" alt="Choose Cardboard" src="https://ucarecdn.com/17711bb1-eba6-4ff3-942b-7ee9a9b4f38b/"/>
    }
  }

  showComputer() {
    if (this.state.hoveredComputer) {
      return <img className="button" alt="Choose Computer" src="https://ucarecdn.com/4cd8203c-f4c5-4bad-8406-4d56602b0b42/"/>
    } else {
      return <img className="button" alt="Choose Computer" src="https://ucarecdn.com/7facddb6-ce90-4db1-b62f-88297d9cce05/"/>
    }
  }

  render() {
    return (
      <div className='start-screen'>
        <h3>Wähle dein Gerät:</h3>
          <a className='device'
             onClick={this.handleClick('cardboard')}
             onMouseOver={this.onMouseOverCardBoard}
             onMouseOut={this.onMouseOutCardBoard}
             >
             { this.showCardboard() }
          </a>
          <a className='device'
             onClick={this.handleClick('desktop')}
             onMouseOver={this.onMouseOverComputer}
             onMouseOut={this.onMouseOutComputer}
             >
             { this.showComputer() }
          </a>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({ dispatch })

const startScreen = connect( null, mapDispatchToProps )(StartScreen)

export default startScreen;
