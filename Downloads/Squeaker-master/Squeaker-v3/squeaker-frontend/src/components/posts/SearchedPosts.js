import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/posts'
import { NavLink } from 'react-router-dom';
import { Button, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Post from './Post'
import '../../css/Posts.css'

export class SearchedPosts extends Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const posts = this.props.posts.filter(post => {
            return (
                post.text.toLowerCase().includes(this.props.match.params.query.toLowerCase()) ||
                post.username.toLowerCase().includes(this.props.match.params.query.toLowerCase()) ||
                post.displayName.toLowerCase().includes(this.props.match.params.query.toLowerCase())
            )
        })

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

                    <h2 className="posts--search"><SearchIcon /> {this.props.match.params.query}</h2>
                </div>

                {postsList.length > 0 ? postsList : 
                    <div style={{'text-align': 'center', margin: '10px'}}>
                        <h3 style={{ margin: '10px' }}>Sorry, we couldn't find any Tweets including that search</h3>
                        <p>Go ahead and try something else or go back to browsing!</p>
                        <NavLink to='/' style={{ color: "white", textDecoration: 'none' }}>
                            <Button className="posts--button">Home</Button>
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

export default connect(mapStateToProps, { getPosts })(SearchedPosts)
