import React, { Component } from 'react';

class NameCard extends Component {
    render() {
        const {name , number, isHuman, tags} = this.props
        return (
            <div className='alert alert-success'>
                <h4 className='alert-heading'>{name}</h4>
                <ul>
                    <li>{number}</li>
                    <li>{isHuman?'human':'monster'}</li>
                </ul>
                <hr/>
                <p>
                    {tags.map((name,index)=>{
                        return <span className='badge badge-primary badge-pill' key={index}>{name}</span>
                    })
                    }
                </p>
            </div>
        );
    }
}

export default NameCard;