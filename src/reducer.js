const initialState = {
    lemongrab: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE_LEMONGRAB':
            console.log("vote Lemongrab" )
            return Object.assign({}, state, {
                lemongrab: state.lemongrab + 1
            })
        default:
            return state
    }
}
