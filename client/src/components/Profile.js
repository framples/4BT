import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import "./profile.css";

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            review: '',
            errors: {}

        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
            review: decoded.review,
        })
    }

    render() {
        return (
            <div className="container">
                <div id="profile" className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 id="profile-text" className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td class="data">First Name</td>
                                <td class="data2">{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td class="data">Last Name</td>
                                <td class="data2">{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td class="data">Email</td>
                                <td class="data2">{this.state.email}</td>
                            </tr>
                            <tr>
                                <td for="exampleFormControlTextarea1">Date Review:</td>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                <td>{this.state.review}</td>
                                <button type="button" class="btn btnSubmit btn-success">Submit</button>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default Profile 