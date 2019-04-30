import React from 'react';
import './CommentSection.css';

function CommentInput() {
    return ( 
        <div>
            <input className = 'comment-input' type='text' placeholder="Add comment... " />
        </div>
    )
}

export default CommentInput;