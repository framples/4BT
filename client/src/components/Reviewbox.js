import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import "./Review.css";


class Reviewbox extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            date_name: '',
            platform: '',
            one_word: '',
            review: '',
            errors: {}
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            date_name: decoded.date_name,
            platform: decoded.platform,
            one_word: decoded.one_word,
            review: decoded.review,
        })
    }

    render() {
        return (
            <div className="container">
                <div id="review" className="card">
                    <div className="card-header">
                    Spicy Reviews
                    </div>
                    <div class = "card-body">
                        <h5 className = "card-title">Date:{this.state.date_name}</h5>
                        <p className = "card-text">Review from: {this.state.first_name}</p>
                        <p className = "card-text">Met on: {this.state.platform}</p>
                        <p className = "card-text">If you had only one word to describe them: {this.state.one_word}</p>
                        <p className = "card-text">Review: {this.state.review}</p>
                    </div>
                </div>
            </div>

        )
    }

}

export default Reviewbox;