import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import Post from './posts/Post'
import '../css/Info.css'

export class Info extends Component {
    render() {
        const postsList = this.props.posts.filter(post => post.username)
        const posts = postsList.map(post => {
            return (
                <Post
                    key={post.id}
                    post={post}
                />
            )
        })

        const post = posts[Math.floor(Math.random() * posts.length)]

        return (
            <div className="info">
                <SearchBar />

                <div className="info--infoContainer">
                    <h2>What's Happening</h2>
                    <br />
                    {post}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
      posts: state.postReducer.posts
    })
}

export default connect(mapStateToProps)(Info)
