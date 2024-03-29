import React, { Component } from 'react'
import { login } from './UserFunctions'
import "./login.css"; 

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
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

        const user = {
            email: this.state.email,
            password: this.state.password

        }

        login(user)
            .then(res => {
                if (res) {
                    this.props.history.push('/profile')
                }
            })
            .catch(err => {
                console.log("Oh, no!", err);
            });
    }

    render() {
        return (
       
            <div className="container">
                <div className="row1 magictime spaceInLeft">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 id="submit-title" className="h3 mb-3 font-weight-normal">Please Sign In</h1>
                            <div className="form-group-1">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group-1">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>
                            <button type="submit" id="submit1" className="btn btn-lg btn-primary btn-block">
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
       
        )
    }

}

export default Login;