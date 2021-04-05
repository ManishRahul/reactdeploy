import React, { Component } from 'react'

class Details extends Component {

    
        constructor(props) {
            super(props)
        
            this.state = {
                 email : "",
                 password : ""
                 
                 
            }
        }
        
    sendValue(){
        this.setState ({
            email : "finally" 
            //document.getElementById("e1").value
            //password : document.getElementById("p1"),  
        })
        alert(this.setState.email)
    }
    
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="email" id="e1" onChange= {this.sendValue} />
                    <input type="text" name="password" id="p1" onChange= {this.sendValue} />
                    <input type="submit"  />
                </form>
            </div>
        )
    }
}

export default Details
