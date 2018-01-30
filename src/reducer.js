const initialState = {
  mode: "start",
  currentRoom: "navRoom",
  welcomeClicked: false,
  anyLightSwitchClicked: false,
  graceVisible: false,
  adaElementVisible: false,
  joannaVisible: false,
  chelseaVisible: false,
  constanzeVisible: false,
  audreyVisible: false,
  barbaraVisible: false,
  margaretElementVisible: false,
  dorothyElementVisible: false,
  anuradhaElementVisible: false,
  evelynElementVisible: false,
  hedyElementVisible: false,
  kamilaElementVisible: false
}

export default (state = initialState, action) => {
  switch (action.type) {
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
            margaretElementVisible: true
        })
      }
      else if (action.person === "dorothy") {
        return Object.assign({}, state, {
            dorothyElementVisible: true
        })
      }
      else if (action.person === "anuradha") {
        return Object.assign({}, state, {
            anuradhaElementVisible: true
        })
      }
      else if (action.person === "evelyn") {
        return Object.assign({}, state, {
            evelynElementVisible: true
        })
      }
      else if (action.person === "hedy") {
        return Object.assign({}, state, {
            hedyElementVisible: true
        })
      }
      else if (action.person === "kamila") {
        return Object.assign({}, state, {
            kamilaElementVisible: true
        })
      }
    default:
      return state
  }
}
