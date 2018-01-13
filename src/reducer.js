const initialState = {
  currentRoom: "navRoom"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_ROOM':
      console.log("room changed" )
      return Object.assign({}, state, {
          currentRoom: action.room
      })
    default:
      return state
  }
}
