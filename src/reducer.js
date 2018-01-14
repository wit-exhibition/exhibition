const initialState = {
  mode: "start",
  currentRoom: "firstRoom",
  graceElementVisible: false,
  adaElementVisible: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ROOM':
      console.log("room changed" )
      return Object.assign({}, state, {
          currentRoom: action.room
      })
    case 'CHOOSE_DEVICE':
      console.log("device chosen" )
      return Object.assign({}, state, {
          mode: action.mode
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
