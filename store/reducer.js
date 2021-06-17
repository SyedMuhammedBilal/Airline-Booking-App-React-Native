export const initialState = {
    user: null,
    token: null
}

const reducer = (state, action) => {
    // console.log(action);

    switch(action.type) {
        case 'LOGIN': 
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'LOGOUT':
            return {
                ...state,
                token: null
            }
        default:
            return state
    }
}

export default reducer