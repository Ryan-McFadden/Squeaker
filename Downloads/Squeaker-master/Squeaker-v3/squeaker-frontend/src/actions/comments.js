export const addComment = (comment) => {
    return dispatch => {
        dispatch({ type: 'ADDING_COMMENT' })
        fetch(`/comments`, {
            method: 'POST',
            body: JSON.stringify(comment),                 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch({ type: 'COMMENT_ADDED' })
        dispatch({ type: 'LOADING_POSTS' })
        fetch('/posts')
        .then(res => res.json())
        .then(posts => dispatch({ type: 'POSTS_LOADED', payload: posts.reverse() }))
    }
}