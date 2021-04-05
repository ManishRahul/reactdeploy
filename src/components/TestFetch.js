import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TestFetch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    
    componentDidMount() {

        fetch('https://api.github.com/repositories/19438/issues')
            .then(res => res.json())
            .then(json => {
                this.setState({ 
                    items: json, 
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            }); // end of fetching

            const { isLoaded, items } = this.state;
            const map1 = this.state.items.map(item => (
            
               item.comments     
            ))
           console.log(map1)

    }

    // filter(){ // Own function
    //     const { isLoaded, items } = this.state;
        
    //             //return <div>Loading...</div>;
    //            const map1 = items.map(item => (
                   
    //                 //item.id
    //                item.comments
    //                 //console.log(item.id,item.comments)
                    
    //             ))
    //             console.log(map1)
    //             //return map1 //returning "map1 array" to line no. 57
                
    //             //console.log(items)
    // }

    render() {
        return (
            <div>
                {/* {this.filter()} */}
            </div>
        )
    }
}

export default TestFetch
