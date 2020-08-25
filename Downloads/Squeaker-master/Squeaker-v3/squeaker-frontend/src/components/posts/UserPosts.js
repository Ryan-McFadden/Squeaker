import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/posts'
import { NavLink } from 'react-router-dom';
import { Button, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Post from './Post'
import '../../css/Posts.css'

export class UserPosts extends Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const posts = this.props.posts.filter(post => post.username === this.props.user.username)
        const postsList = posts.map(post => {
            return (
                <Post 
                    key={post.id}
                    post={post}
                />
            )
        })

        return (
            <div className='posts'>
                <div className="posts--header">
                    <IconButton onClick={() => window.history.back()} className="posts--backButton" >
                        <ArrowBackIcon />
                    </IconButton>

                    <h2>{this.props.user.displayName}</h2>
                </div>

                {postsList.length > 0 ? postsList : 
                    <div style={{'text-align': 'center', margin: '10px'}}>
                        <h3 style={{ margin: '10px' }}>Hey you dont have any Tweets!</h3>

                        <p>Go ahead and click on the button below to make your first Tweet!</p>
                        
                        <NavLink to='/' style={{ color: "white", textDecoration: 'none' }}>
                            <Button className="posts--button">Tweet</Button>
                        </NavLink>
                    </div>
                }
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

export default connect(mapStateToProps, { getPosts })(UserPosts)