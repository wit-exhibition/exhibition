const initialState = {
  mode: "start",
  currentRoom: "navRoom",
  currentAudio: "",
  welcomeClicked: false,
  anyLightSwitchClicked: false,
  graceVisible: false,
  adaElementVisible: false,
  joannaVisible: false,
  chelseaVisible: false,
  constanzeVisible: false,
  audreyVisible: false,
  barbaraVisible: false,
  margaretVisible: false,
  dorothyVisible: false,
  anuradhaVisible: false,
  evelynVisible: false,
  hedyVisible: false,
  kamilaVisible: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY_SOUND':
      return Object.assign({}, state, {
        currentAudio: action.soundID
      })
    case 'CHOOSE_DEVICE':
      console.log("device chosen" )
      return Object.assign({}, state, {
          mode: action.mode
      })
    case 'WELCOME_CLICK':
      console.log("welcome clicked" )
      return Object.assign({}, state, {
          welcomeClicked: true
      })
    case 'CHANGE_ROOM':
      console.log("room changed" )
      return Object.assign({}, state, {
          currentRoom: action.room
      })
    case 'SWITCH':
      console.log("switch clicked" )
      return Object.assign({}, state, {
          anyLightSwitchClicked: true
      })
    case 'SPOTLIGHT_ON':
      if (action.person === "grace") {
        return Object.assign({}, state, {
            graceVisible: true
        })
      }
      else if (action.person === "ada") {
        return Object.assign({}, state, {
            adaElementVisible: true
        })
      }
      else if (action.person === "joanna") {
        return Object.assign({}, state, {
            joannaVisible: true
        })
      }
      else if (action.person === "chelsea") {
        return Object.assign({}, state, {
            chelseaVisible: true
        })
      }
      else if (action.person === "constanze") {
        return Object.assign({}, state, {
            constanzeVisible: true
        })
      }
      else if (action.person === "audrey") {
        return Object.assign({}, state, {
            audreyVisible: true
        })
      }
      else if (action.person === "barbara") {
        return Object.assign({}, state, {
            barbaraVisible: true
        })
      }
      else if (action.person === "margaret") {
        return Object.assign({}, state, {
            margaretVisible: true
        })
      }
      else if (action.person === "dorothy") {
        return Object.assign({}, state, {
            dorothyVisible: true
        })
      }
      else if (action.person === "anuradha") {
        return Object.assign({}, state, {
            anuradhaVisible: true
        })
      }
      else if (action.person === "evelyn") {
        return Object.assign({}, state, {
            evelynVisible: true
        })
      }
      else if (action.person === "hedy") {
        return Object.assign({}, state, {
            hedyVisible: true
        })
      }
      else if (action.person === "kamila") {
        return Object.assign({}, state, {
            kamilaVisible: true
        })
      }
    default:
      return state
  }
}
