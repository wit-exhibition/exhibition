import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import ExhibitionBox from './ExhibitionBox';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';

class NavRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  componentDidMount() {
    const box = document.getElementById('abc')
    box.setAttribute('sound', 'on', 'click');
    box.setAttribute('sound', 'src', '#welcome-audio');
  }

  showHintText() {
    return (
      <HintText
        rotation={{ y: 0 }}
        hint={"Click on Ada"}
        position={{ x: -1, y: 2.5, z: -1.5 }}
        wrapCount={16}
      />
    )
  }

  welcomeClicked() {
    this.store.dispatch({ type: "WELCOME_CLICK"})
  }

  renderNavElements() {
    return (
      <Entity>
        <TeleportationElement
          src={ "#firstRoomSign" }
          material={{ color: "white"}}
          position={"-0.8 1.753 -1.154"}
          scale={"0.400 0.400 0"}
          transparent={ "true" }
          rotation={"0 20 0"}
          destination="firstRoom"
          store={ this.store }
        />

        <TeleportationElement
          src={ "#secondRoomSign" }
          material={{ color: "white"}}
          position={"0.8 1.753 -1.154"}
          scale={"0.400 0.400 0"}
          transparent={ "true" }
          rotation={"0 -20 0"}
          destination="secondRoom"
          store={ this.store }
        />

        <TeleportationElement
          src={ "#secondRoomSign" }
          material={{ color: "white"}}
          position={"-0.8 2.3 -1.154"}
          scale={"0.400 0.400 0"}
          transparent={ "true" }
          rotation={"0 20 0"}
          destination="secondRoom"
          store={ this.store }
        />

        <TeleportationElement
          src={ "#secondRoomSign" }
          material={{ color: "white"}}
          position={"0.8 2.3 -1.154"}
          scale={"0.400 0.400 0"}
          transparent={ "true" }
          rotation={"0 -20 0"}
          destination="secondRoom"
          store={ this.store }
        />
      </Entity>
    )
  }

  render() {
    return (
      <Entity>

        { !this.props.welcomeClicked && this.showHintText() }

        <ExhibitionBox
          id="abc"
          src={ "#welcome" }
          position={ "0 2.1 -1.4"}
          rotation={"0 0 0"}
          scale={"1.3 1.3 0"}
          shader={"flat"}
          transparent={"true"}
          events={{ click: () => this.welcomeClicked() }}
        />

        { this.props.welcomeClicked && this.renderNavElements() }

      </Entity>
    )
  }

}

const mapStateToProps = state => {
  return {
    welcomeClicked: state.welcomeClicked
  }
}

const navRoom = connect( mapStateToProps )(NavRoom)

export default navRoom;
