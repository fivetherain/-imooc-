import React, { Component } from 'react';

class DigitalClock extends Component {
    constructor(props){
            super(props)
            this.state={
                time:new Date()
            }
        }
    componentDidMount(){
        this.times=setInterval(() =>{
            this.setState({
            time:new Date()
        })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.times)
    }
    render() {
        return (
            <div>
                <h1>{this.state.time.toLocaleString()}</h1>
            </div>
        );
    }
}

export default DigitalClock;