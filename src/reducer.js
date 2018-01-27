const initialState = {
  mode: "desktop",
  currentRoom: "navRoom",
  welcomeClicked: false,
  anyLightSwitchClicked: false,
  graceElementVisible: false,
  adaElementVisible: false,
  joannaElementVisible: false,
  chelseaElementVisible: false,
  constanzeElementVisible: false,
  audreyElementVisible: false,
  barbaraElementVisible: false,
  margaretElementVisible: false,
  dorothyElementVisible: false
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
            graceElementVisible: true
        })
      }
      else if (action.person === "ada") {
        return Object.assign({}, state, {
            adaElementVisible: true
        })
      }
      else if (action.person === "joanna") {
        return Object.assign({}, state, {
            joannaElementVisible: true
        })
      }
      else if (action.person === "chelsea") {
        return Object.assign({}, state, {
            chelseaElementVisible: true
        })
      }
      else if (action.person === "constanze") {
        return Object.assign({}, state, {
            constanzeElementVisible: true
        })
      }
      else if (action.person === "audrey") {
        return Object.assign({}, state, {
            audreyElementVisible: true
        })
      }
      else if (action.person === "barbara") {
        return Object.assign({}, state, {
            barbaraElementVisible: true
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

    default:
      return state
  }
}
