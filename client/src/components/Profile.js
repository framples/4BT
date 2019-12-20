import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { getReview } from './UserFunctions'
import "./profile.css";

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            date_name: '',
            platform: '',
            review: '',
            one_word: '',
            errors: {}

        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const review = {
            first_name: this.state.first_name,
            date_name: this.state.date_name,
            platform: this.state.platform,
            one_word: this.state.one_word,
            review: this.state.review,
        }

        getReview(review)
            .then(res => {
                if (res) {
                    this.props.history.push('/reviewbox')
                }
            })
            .catch(err => {
                console.log("There has been a big mistake", err);
            })
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
        })
    }

    render() {
        return (

                <div className="container">
                    <div className="row1 magictime spaceInLeft">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h1 id="submit-title" className="h3 mb-3 font-weight-normal">Time to vent.</h1>
                                <div className="form-group-1">
                                    <label htmlFor="datename">What was your dates name?</label>
                                    <input type="text" className="form-control form-control-lg"
                                        name="date_name"
                                        placeholder="Dates Name"
                                        value={this.state.date_name}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group-1">
                                    <label htmlFor="platform">How did you meet them?</label>
                                    <input type="text" className="form-control"
                                        name="platform"
                                        placeholder="Tinder"
                                        value={this.state.platform}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group-1">
                                    <label htmlFor="date">Give us one word to describe them.</label>
                                    <input type="text" className="form-control form-control-lg"
                                        name="one_word"
                                        placeholder="Goofy"
                                        value={this.state.oneword}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group-1">
                                    <label htmlFor="date">Give us the deets.</label>
                                    <input type="text" className="form-control form-control-lg"
                                        name="review"
                                        placeholder="Review"
                                        value={this.state.review}
                                        onChange={this.onChange} />
                                </div>
                                <button type="submit" id="submit1" className="btn btn-lg btn-primary btn-block">
                                    Add your review!
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Profile 