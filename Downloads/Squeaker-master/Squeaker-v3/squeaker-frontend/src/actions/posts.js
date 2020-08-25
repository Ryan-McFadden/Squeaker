export const getPosts = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_POSTS' })
        fetch('/posts')
        .then(res => res.json())
        .then(posts => dispatch({ type: 'POSTS_LOADED', payload: posts.reverse() }))
    }
}

export const getPost = (id) => {
    return dispatch => {
        dispatch({ type: 'LOADING_POST' })
        fetch(`/posts/${id}`)
        .then(res => res.json())
        .then(post => dispatch({ type: 'POST_LOADED', payload: post }))
    }
}

export const addPost = (post) => {
    return dispatch => {
        dispatch({ type: 'ADDING_POST' })
        fetch('/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(post => {
            console.log(post)
            dispatch({ type: 'POST_ADDED', payload: post })
        })
    }
}