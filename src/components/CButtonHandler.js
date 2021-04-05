import React, { Component } from 'react'

class CButtonHandler extends Component {
    constructor() {
        super()
    
        this.state = {
            message:"Hello"
        }
    }
    changeMessage(){
        this.setState({
            message:"Welcome Manish"
        })
    }
    
    render() {
        return (
            <div>
            {this.state.message} <br></br>
            <button onClick={() => this.changeMessage()}>Click to change text</button>
            </div>
        )
    }
}

export default CButtonHandler
