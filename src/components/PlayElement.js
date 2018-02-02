import React from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

class PlayElement extends React.Component {

  constructor(props) {
    super(props);
    this.playing = false
  }

  playSound(soundID, id) {

    this.props.dispatch({ type: "PLAY_SOUND", soundID})

    if (this.props.welcomeClicked) {
      this.props.dispatch({ type: "WELCOME_CLICK"})
    }
  }

  icon() {
    if (this.props.currentAudio === this.props.soundID) {
      console.log("Inside icon");
      return "#stop-icon"
    } else {
      return "#play-icon"
    }
  }


  render() {
    return (
      <Entity
        primitive={ "a-box" }
        scale={ "0.2 0.2 0" }
        src={ this.icon()  }
        position={ "-0.3 -0.65 0" }
        {...this.props}
        events={{ click: () => this.playSound(this.props.soundID, this.props.id) }}>
      </Entity>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentAudio: state.currentAudio
  }
}

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (PlayElement)
