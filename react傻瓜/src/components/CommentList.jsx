import React, { Component } from 'react';

class CommentList extends Component {
    render() {
        return (
            <div>
                <label>评论列表</label>
                <ul>
                    {this.props.comment.map((comment,index)=>
                        <li key={index} className='list-group-item'>{comment}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default CommentList;