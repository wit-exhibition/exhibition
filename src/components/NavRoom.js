import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import ExhibitionBox from './ExhibitionBox';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';
import PlayElement from './PlayElement';
import HoverAnimation from './HoverAnimation';
import Name from './Name';

class NavRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  showHintText() {
    console.log(this.props.mode);
    let hintText = ""
    if (this.props.mode === "cardboard") {
      hintText = "Fixiere das Play-Zeichen mit dem Cursor"
    } else {
      hintText = "Bewege den Cursor \n auf Play und klicke!"
    }

    return (
      <HintText
        rotation={{ y: 20 }}
        hint={ hintText }
        position={{ x: -1.1, y: 1.3, z: -2 }}
        wrapCount={20}
      />
    )
  }

  renderNavElements() {
    return (
      <Entity>
        <TeleportationElement
          src={ "#milestone-portal" }
          material={{ color: "white"}}
          position={"-0.9 0.85 -1.5"}
          scale={"0.400 0.400 0"}
          transparent={ "true" }
          rotation={"-30 0 0"}
          destination={"milestoneRoom"}
          cursor-listener
          store={ this.store }>
          <HoverAnimation scale={{ x: 0.4, y: 0.4, z: 0 }}/>
        </TeleportationElement>

        <TeleportationElement
          src={ "#space-portal" }
          material={{ color: "white"}}
          position={"-0.3 0.85 -1.5"}
          scale={"0.400 0.400 0"}
          transparent={ "true" }
          rotation={"-30 0 0"}
          destination="spaceRoom"
          cursor-listener
          store={ this.store }>
          <HoverAnimation scale={{ x: 0.4, y: 0.4, z: 0 }}/>
        </TeleportationElement>

        <TeleportationElement
          src={ "#activist-portal" }
          material={{ color: "white"}}
          position={"0.3 0.85 -1.5"}
          scale={"0.400 0.400 0"}
          transparent={ "true" }
          rotation={"-30 0 0"}
          destination="activistRoom"
          cursor-listener
          store={ this.store }>
          <HoverAnimation scale={{ x: 0.4, y: 0.4, z: 0 }}/>
        </TeleportationElement>

        <TeleportationElement
          src={ "#rails-portal" }
          material={{ color: "white"}}
          position={"0.9 0.85 -1.5"}
          scale={"0.400 0.400 0"}
          transparent={ "true" }
          rotation={"-30 0 0"}
          destination="newWaysRoom"
          cursor-listener
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
          src={ "#welcome" }
          position={ "0 2.1 -2"}
          rotation={"0 0 0"}
          scale={"1.3 1.3 0"}
          shader={"flat"}
          transparent={"true"}
        >
          <PlayElement
            id="nav-play-element"
            soundID={"#welcome-audio"}
            store={ this.store }
            welcomeClicked={true}
            cursor-listener/>
          <Name name={"Ada Lovelace"}/>
        </ExhibitionBox>

        { this.renderNavElements() }

      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    welcomeClicked: state.welcomeClicked,
    mode: state.mode
  }
}

const navRoom = connect( mapStateToProps )(NavRoom)

export default navRoom;
