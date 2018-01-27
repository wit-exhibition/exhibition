import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import ExhibitionBox from './ExhibitionBox';
import LightSwitch from './LightSwitch';
import HintText from './HintText';
import TeleportationElement from './TeleportationElement';
import PlayElement from './PlayElement';
import HoverAnimation from './HoverAnimation';
import FloorIndicator from './FloorIndicator';

class SpaceRoom extends React.Component {

  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  renderMargaret() {
    return (
      <Entity>
        <ExhibitionBox
        src={ "#margaretPortrait" }
        position={ "0 2.2 -2" }
        rotation={ "0 0 0" }
        scale={ "1 1 0" }/>

        <PlayElement
          src={ "#play-icon" }
          position={ "0 1.58 -2.2" }
          sound="on: click; src: #margaret-audio"/>
      </Entity>
    )
  }

  renderDorothy() {
    return (
      <Entity>
        <ExhibitionBox
        src={ "#dorothyPortrait" }
        position={ "-1.8 2.3 -1.8" }
        rotation={ "0 50 0" }
        scale={ "1 1 0" }/>

        <PlayElement
          src={ "#play-icon" }
          position={ "-1.900 1.570 -1.939" }
          rotation={ "0 50 0" }
          sound="on: click; src: #dorothy-audio"/>
      </Entity>
    )
  }

  renderAnuradha() {
    return (
      <Entity>
        <ExhibitionBox
        src={ "#anuradhaPortrait" }
        position={ "2 2.5 -2" }
        rotation={ "0 -50 0" }
        scale={ "1 1 0" }/>

        <PlayElement
          src={ "#play-icon" }
          position={ "2 1.7 -1.989" }
          rotation={ "0 -50 0" }
          sound="on: click; src: #anuradha-audio"/>
      </Entity>
    )
  }

  renderLightSwitchHint() {
    return (
      <HintText
        rotation={{ y: 20 }}
        hint={"Klick auf die Lichtschalter!"}
        position={{ x: -0.5, y: 1.6, z: -1.4 }}
        wrapCount={20}
      />
    )
  }

  render() {
    return (
      <Entity>

      { !this.props.anyLightSwitchClicked && this.renderLightSwitchHint() }

        <LightSwitch
          position={"0 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"margaret"}
          store={ this.store } />

        { this.props.margaretElementVisible && this.renderMargaret() }

        <LightSwitch
          position={"-0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"dorothy"}
          store={ this.store } />

        { this.props.dorothyElementVisible && this.renderDorothy() }

        <LightSwitch
          position={"0.5 1.35 -1.4"}
          scale={"0.2 0.2 0.2"}
          person={"anuradha"}
          store={ this.store } />

        { this.props.anuradhaElementVisible && this.renderAnuradha() }


        <FloorIndicator src={ "#space-floor" }/>

        <HintText
          rotation={{ y: 50 }}
          hint={"Exit"}
          position={{ x: -2.8, y: 1, z: -2 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#01ff26"}}
          position={ "-3 0.5 -2"}
          scale={"0.5 0.5 1"}
          destination="navRoom"
          teleportSound={true}
          store={ this.store } />
        <HintText
          rotation={{ y: -50 }}
          hint={"Next room"}
          position={{ x: 3, y: 1, z: -2 }}
          wrapCount={8}/>
        <TeleportationElement
          material={{ color: "#d800f0"}}
          position={ "3 0.5 -2"}
          scale={"0.5 0.5 1"}
          destination="activistRoom"
          teleportSound={true}
          store={ this.store }/>
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    margaretElementVisible: state.margaretElementVisible,
    dorothyElementVisible: state.dorothyElementVisible,
    anuradhaElementVisible: state.anuradhaElementVisible,
    anyLightSwitchClicked: state.anyLightSwitchClicked
  }
}

const spaceRoom = connect( mapStateToProps )(SpaceRoom)

export default spaceRoom;
