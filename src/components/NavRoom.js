import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import ExhibitionBox from './ExhibitionBox';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';
import PlayElement from './PlayElement'
import HoverAnimation from './HoverAnimation';

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
          src={ "#milestone" }
          material={{ color: "white"}}
          position={"-0.8 1.753 -1.154"}
          scale={"0.400 0.400 0"}
          transparent={ "true" }
          rotation={"0 20 0"}
          destination="firstRoom"
          store={ this.store }>
          <HoverAnimation scale={{ x: 0.4, y: 0.4, z: 0 }}/>
        </TeleportationElement>

        <TeleportationElement
          src={ "#activist" }
          material={{ color: "white"}}
          position={"0.8 1.753 -1.2"}
          scale={"0.400 0.400 0"}
          transparent={ "true" }
          rotation={"0 -20 0"}
          destination="secondRoom"
          store={ this.store }>
          <HoverAnimation scale={{ x: 0.4, y: 0.4, z: 0 }}/>
        </TeleportationElement>

        <TeleportationElement
          src={ "#racket" }
          material={{ color: "white"}}
          position={"-0.8 2.3 -1.2"}
          scale={"0.400 0.400 0"}
          transparent={ "true" }
          rotation={"0 20 0"}
          destination="secondRoom"
          store={ this.store }>
          <HoverAnimation scale={{ x: 0.4, y: 0.4, z: 0 }}/>
        </TeleportationElement>

        <TeleportationElement
          src={ "#rails" }
          material={{ color: "white"}}
          position={"0.8 2.3 -1.2"}
          scale={"0.400 0.400 0"}
          transparent={ "true" }
          rotation={"0 -20 0"}
          destination="secondRoom"
          store={ this.store }>
          <HoverAnimation scale={{ x: 0.4, y: 0.4, z: 0 }}/>
        </TeleportationElement>
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
          position={ "0 2.1 -2"}
          rotation={"0 0 0"}
          scale={"1.3 1.3 0"}
          shader={"flat"}
          transparent={"true"}
          events={{ click: () => this.welcomeClicked() }}
        />

        <PlayElement geometry="primitive: plane; height: 0.2; width: 0.5"
          position= { "-0.002 1.362 -2.007" }
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
