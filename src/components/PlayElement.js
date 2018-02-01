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

    // const box = document.getElementById(id)
    // box.setAttribute('sound', 'src', soundID)
    //
    // if (this.playing) {
    //   box.components.sound.stopSound()
    //   box.setAttribute('src', '#play-icon')
    //   this.playing = false
    // } else {
    //   box.components.sound.playSound()
    //   box.setAttribute('src', '#stop-icon')
    //   this.playing = true
    // }

    if (this.props.welcomeClicked) {
      this.props.dispatch({ type: "WELCOME_CLICK"})
    }

  }

  render() {
    return (
      <Entity
        primitive={ "a-box" }
        scale={ "0.2 0.2 0" }
        src={ "#play-icon" }
        position={ "-0.3 -0.65 0" }
        {...this.props}
        events={{ click: () => this.playSound(this.props.soundID, this.props.id) }}>
      </Entity>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect (
  mapStateToProps,
  mapDispatchToProps
) (PlayElement)
