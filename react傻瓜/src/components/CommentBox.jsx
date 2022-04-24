import React, { Component } from 'react';

class CommentBox extends Component {
    constructor(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit=(e) =>{
        this.props.addComment(this.textInput.value)
        e.preventDefault()
        }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='p-5'>
                    <div className='form-group'>
                        <label>留言内容</label>
                        <input type='text' placeholder='请输入添加内容'
                        ref={(textInput)=>{this.textInput=textInput}}
                        className='form-control'>
                        </input>
                    </div>
                     <button type='submit' className='btn btn-primary'>提交</button>
                </form>
                <p>这里有{this.props.comment.length}条评论</p>
            </div>
        );
    }
}

export default CommentBox;