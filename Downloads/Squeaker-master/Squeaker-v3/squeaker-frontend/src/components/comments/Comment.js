import React from 'react'
import { Avatar } from '@material-ui/core'
import '../../css/Comment.css'

const Comment = (comment) => {
    return (
        <div className="comment">
            <div className="comment--avatar">
                <Avatar src={comment.comment.avatar}/>
            </div>

            <div className="comment--body">
                <div className="comment--header">
                    <div className="comment--headerText">
                        <h3>
                            {comment.comment.displayName}{" "}
                            <span className="comment--headerSpecial">
                                @{comment.comment.username}
                            </span>
                        </h3>
                    </div>

                    <div className="comment--headerDescription">
                        <p>{comment.comment.text}</p>
                    </div>
                </div>

                <img src={comment.comment.image} alt=''/>

            </div>
        </div>
    )
}

export default Comment