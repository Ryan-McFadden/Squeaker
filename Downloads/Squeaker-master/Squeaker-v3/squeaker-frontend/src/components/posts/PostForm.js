import React, { Component } from 'react'
import { Avatar, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { addPost } from '../../actions/posts'
import autosize from 'autosize'
import '../../css/PostForm.css'

class PostForm extends Component {

    state = {
        text: '',
        image: ''
    }

    textChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    imageChange = (event) => {
        this.setState({
            image: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const post = {
            displayName: this.props.user.displayName,
            username: this.props.user.username,
            avatar: this.props.user.avatar,
            text: this.state.text,
            image: this.state.image
        }
        this.props.addPost(post)
        this.setState({
            text: '',
            image: ''
        })
    }

    render() {
        const ta = autosize(document.querySelectorAll('textarea'));
        autosize(ta);

        const charCount = 280 - this.state.text.length

        return (
            <div className="postForm">
                <form>
                    <div className="postForm--input">
                        <Avatar src={this.props.user.avatar}/>

                        <textarea 
                            type="text" 
                            value={this.state.text}
                            onChange={this.textChange}
                            placeholder="What's happening?"
                            maxLength={280}
                        />

                        {charCount}
                    </div>
    

                    <div className="postForm--footer">
                        <input 
                            className="postForm--inputImage" 
                            type="text" 
                            value={this.state.image} 
                            onChange={this.imageChange}
                            placeholder="Enter image URL"
                        />

                        <Button onClick={this.handleSubmit} type="submit" className="postForm--button">Tweet</Button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default connect(null, { addPost })(PostForm)