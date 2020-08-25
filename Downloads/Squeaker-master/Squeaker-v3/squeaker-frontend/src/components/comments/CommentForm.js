import React, { Component } from 'react'
import { Avatar, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { addComment } from '../../actions/comments'
import autosize from 'autosize'
import '../../css/CommentForm.css'

class CommentForm extends Component {
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

    handleSubmit = (event) => {
        event.preventDefault()
        const comment = {
            displayName: this.props.user.displayName,
            username: this.props.user.username,
            avatar: this.props.user.avatar,
            text: this.state.text,
            image: this.state.image,
            post_id: this.props.post_id
        }
        this.props.addComment(comment)
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
            <div className="commentForm">
                <form>
                    <div className="commentForm--input">
                        <Avatar src={this.props.user.avatar}/>

                        <textarea 
                            type="text" 
                            value={this.state.text}
                            onChange={this.textChange}
                            placeholder="Whatcha' think?"
                            maxLength={280}
                        />

                        {charCount}
                    </div>
    
                    <div className="commentForm--footer">
                        <input 
                            className="commentForm--inputImage" 
                            type="text" 
                            value={this.state.image} 
                            onChange={this.imageChange}
                            placeholder="Enter image URL"
                        />

                        <Button onClick={this.handleSubmit} type="submit" className="commentForm--button">Comment</Button>
                    </div>

                </form>
            </div>
        )
    }
}

export default connect(null, { addComment })(CommentForm)
