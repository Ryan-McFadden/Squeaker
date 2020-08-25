export default (state = { posts: [], loading: false }, action) => {
    switch (action.type) {
  
        case 'LOADING_POSTS':
            return ({
                ...state,
                loading: true
            })
  
        case 'POSTS_LOADED':
            return ({
                ...state,
                posts: action.payload,
                loading: false
            })

        case 'LOADING_POST':
            return ({
                ...state,
                loading: true
            })

        case 'POST_LOADED':
            return ({
                ...state,
                posts: action.payload,
                loading: false
            })

        case 'ADDING_POST':
            return ({
                ...state,
                loading: true
            })
          
        case 'POST_ADDED':
            return ({
                ...state,
                posts: [action.payload, ...state.posts],
                loading: false
            })

        default:
            return state;

    }
};