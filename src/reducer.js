const initialState = {
  mode: "desktop",
  currentRoom: "navRoom",
  graceElementVisible: false,
  adaElementVisible: false,
  joannaElementVisible: false,
  welcomeClicked: false,
  anyLightSwitchClicked: false
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

    default:
      return state
  }
}
