import React from 'react';
import { Entity } from 'aframe-react';

export default class PlayElement extends React.Component {

  constructor(props) {
    super(props);
    this.playing = false
  }

  playSound(soundID, id) {
    const box = document.getElementById(id)
    box.setAttribute('sound', 'src', soundID)

    if (this.playing) {
      box.components.sound.stopSound()
      box.setAttribute('src', '#play-icon')
      this.playing = false
    } else {
      box.components.sound.playSound()
      box.setAttribute('src', '#stop-icon')
      this.playing = true
    }

  }

  render() {
    return (
      <Entity
        primitive={ "a-box" }
        scale={ "0.5 0.2 0" }
        src={ "#play-icon" }
        {...this.props}
        events={{ click: () => this.playSound(this.props.soundID, this.props.id) }}>
      </Entity>
    )
  }
}
