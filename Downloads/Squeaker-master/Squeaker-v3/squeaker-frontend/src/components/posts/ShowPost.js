import React, { Component } from 'react'
import Post from './Post'
import Comment from '../comments/Comment'
import CommentForm from '../comments/CommentForm'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/posts'
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../../css/Posts.css'

export class showPost extends Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const posts = this.props.posts.filter(post => post.id == this.props.match.params.post_id)
        const post = posts.map(post => {
            return (
                <div>
                    <Post 
                        key={post.id}
                        post={post}
                    />

                    <CommentForm
                        className="commentForm" 
                        post_id={post.id}
                        user={this.props.user}
                    />

                    {post.comments &&
                        post.comments.reverse().map(comment => {
                            return (
                                <Comment
                                    key={comment.id}
                                    comment={comment}
                                />
                            )
                        })
                    }
                </div>
            )
        })

        return (
            <div className='posts'>
                <div className="posts--header">
                    <IconButton onClick={() => window.history.back()} className="posts--backButton" >
                        <ArrowBackIcon />
                    </IconButton>

                    <h2>Tweet</h2>
                </div>
                    {post}
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

export default connect(mapStateToProps, { getPosts })(showPost)
