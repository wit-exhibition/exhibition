const POSITION_WELCOME = "0 2.1 -2"
const POSITION_MIDDLE = "0 2.6 -2.8"
const POSITION_LEFT = "-2 2.5 -2"
const POSITION_RIGHT = "2 2.5 -2"

const NO_ROTATION = "0 0 0"
const ROTATION_LEFT = "0 50 0"
const ROTATION_RIGHT = "0 -50 0"

const initialState = {
  mode: "start",
  currentRoom: "navRoom",
  currentAudio: "",
  welcomeClicked: false,
  anyLightSwitchClicked: false,
  ada: {
    id: "ada",
    name: "Ada Lovelace",
    picture: "#welcome",
    sound: "#welcome-audio",
    position: POSITION_WELCOME,
    rotation: NO_ROTATION,
    visible: true
  },
  anuradha: {
    id: "anuradha",
    name: "Anuradha TK",
    picture: "#anuradhaPortrait",
    sound: "#anuradha-audio",
    position: POSITION_RIGHT,
    rotation: ROTATION_RIGHT,
    lightbulbPosition: "1.6 3.5 -1.6",
    visible: false
  },
  audrey: {
    id: "audrey",
    name: "Audrey Tang",
    picture: "#audreyPortrait",
    sound: "#audrey-audio",
    position: "-2 2.5 -2",
    rotation: "0 50 0",
    lightbulbPosition: "-2 3.7 -2",
    visible: false
  },
  barbara: {
    id: "barbara",
    name: "Barbara Liskov",
    picture: "#barbaraPortrait",
    sound: "#barbara-audio",
    position: POSITION_MIDDLE,
    rotation: NO_ROTATION,
    lightbulbPosition: "0 3.7 -2.8",
    visible: false
  },
  chelsea: {
    id: "chelsea",
    name: "Chelsea Manning",
    picture: "#chelseaPortrait",
    sound: "#chelsea-audio",
    position: POSITION_LEFT,
    rotation: ROTATION_LEFT,
    lightbulbPosition: "-2 4 -2",
    visible: false
  },
  constanze: {
    id: "constanze",
    name: "Constanze Kurz",
    picture: "#constanzePortrait",
    sound: "#constanze-audio",
    position: POSITION_MIDDLE,
    rotation: NO_ROTATION,
    lightbulbPosition: "0 4 -2.8",
    visible: false
  },
  dorothy: {
    id: "dorothy",
    name: "Dorothy Vaughan",
    picture: "#dorothyPortrait",
    sound: "#dorothy-audio",
    position: POSITION_LEFT,
    rotation: "0 50 0",
    lightbulbPosition: "-1.6 3.5 -1.6",
    visible: false
  },
  evelyn: {
    id: "evelyn",
    name: "Evelyn Boyd Granville",
    picture: "#evelynPortrait",
    sound: "#evelyn-audio",
    position: "0 2.366 -2.8",
    rotation: NO_ROTATION,
    lightbulbPosition: "0 4 -2.8",
    visible: false
  },
  grace: {
    id: "grace",
    name: "Grace Hopper",
    picture: "#gracePortrait",
    sound: "#grace-audio",
    position: POSITION_RIGHT,
    rotation: ROTATION_RIGHT,
    lightbulbPosition: "2 3.7 -2",
    visible: false
  },
  hedy: {
    id: "hedy",
    name: "Hedy Lamarr",
    picture: "#hedyPortrait",
    sound: "#hedy-audio",
    position: "-2 2.246 -2",
    rotation: "0 50 0",
    lightbulbPosition: "-2 4 -2",
    visible: false
  },
  joanna: {
    id: "joanna",
    name: "Joanna Rutkowska",
    picture: "#joanna",
    sound: "#joanna-audio",
    position: "2 2.5 -2",
    rotation: ROTATION_RIGHT,
    lightbulbPosition: "2 4 -2",
    visible: false
  },
  kamila: {
    id: "kamila",
    name: "Kamila Sidor",
    picture: "#kamilaPortrait",
    sound: "#kamila-audio",
    position: POSITION_RIGHT,
    rotation: ROTATION_RIGHT,
    lightbulbPosition: "2 4 -2",
    visible: false
  },
  margaret: {
    id: "margaret",
    name: "Margaret Hamilton",
    picture: "#margaretPortrait",
    sound: "#margaret-audio",
    position: POSITION_MIDDLE,
    rotation: NO_ROTATION,
    lightbulbPosition: "0 3.5 -2",
    visible: false
  }
}

const setVisible = (personObject, person) => {
  return Object.assign({}, personObject, {
    visible: true
  })
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
      return {
        ...state,
        [action.person]: {
          ...state[action.person],
          ...setVisible(state[action.person], action.person)
        }
      }
    default:
      return state
  }
}
