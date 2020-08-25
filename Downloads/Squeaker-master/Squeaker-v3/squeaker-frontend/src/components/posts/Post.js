import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import '../../css/Post.css'

class Post extends Component {
    render() {
        return (
            <NavLink to={`/${this.props.post.username}/${this.props.post.id}`} style={{ color: "white", textDecoration: 'none' }}>      
                <div className="post">
                        <div className="post--avatar">
                            <Avatar src={this.props.post.avatar}/>
                        </div>

                        <div className="post--body">
                            <div className="post--header">
                                <div className="post--headerText">
                                    <h3>
                                        {this.props.post.displayName}{" "}
                                        <span className="post--headerSpecial">
                                            @{this.props.post.username}
                                        </span>
                                    </h3>
                                </div>
            
                                <div className="post--headerDescription">
                                    <p>{this.props.post.text}</p>
                                </div>
                            </div>

                            <img src={this.props.post.image} alt=''/>

                        </div>
                </div>
            </NavLink>
        )
    }
}

export default Post
