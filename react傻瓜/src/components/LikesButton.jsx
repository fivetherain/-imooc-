import React, { Component } from 'react';

class LikesButton extends Component {
    constructor(props){
        super(props)
        this.state={
            likes:0
        }
    }
    likeIncrease(){
        this.setState({
            likes:++this.state.likes
        })
    }
    render() {
        
        return (
            <div>
               <button type='button' className='likes-button-component' onClick={()=>{this.likeIncrease()}}>👌{this.state.likes}</button>
            </div>
        );
    }
}

export default LikesButton;