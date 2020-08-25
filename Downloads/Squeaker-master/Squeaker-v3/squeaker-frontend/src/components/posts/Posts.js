import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { getPosts } from '../../actions/posts'
import Post from './Post'
import ShowPost from './ShowPost'
import PostForm from './PostForm'
import '../../css/Posts.css'

class Posts extends Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const posts = this.props.posts.filter(post => post.username)
        const postsList = posts.map(post => {
            return (
                <div>
                    <Post 
                        key={post.id}
                        post={post}
                    />
                </div>
            )
        })
        return (
            <div className='posts'>
                <div className="posts--header">
                    <h2>Home</h2>
                </div>

                <PostForm user={this.props.user}/>

                {postsList}

                <Route exact path='/:username/:post_id' component={ShowPost}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
      posts: state.postReducer.posts,
      loading: state.postReducer.loading,
      user: state.userReducer.currentUser
    })
}

export default connect(mapStateToProps, { getPosts })(Posts)
