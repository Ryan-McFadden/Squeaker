export default (state = { loading: false }, action) => {
    switch (action.type) {
  
        case 'ADDING_COMMENT':
            return ({
                ...state,
                loading: true
            })

        case 'COMMENT_ADDED':
            return ({
                ...state,
                loading: false
            })

        default:
            return state

    }
}