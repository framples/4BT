import React, { Component } from 'react'
import "./landing.css"; 
import "../../src/components/magic-master/dist/magic.css";

class Landing extends Component {
    render() {
        return (
        
            <div className="container">
                <div id="welcome" className="jumbotron mt-5 magictime vanishIn">
                    <div className="col-sm-8 mx-auto">
                        <h1 id="text" className="text-center">Twin Cities Rate Your Date</h1></div>
                </div>
            </div>
            
        )
    }
}

export default Landing