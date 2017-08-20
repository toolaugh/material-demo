/* eslint-disable react/jsx-boolean-value */
/**
 * Created by NguyenBa on 7/28/2017.
 */
import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            userName: '',
            passWord: '',
            errors: {},
        };
    }

    onLogin = () => {
        const { userName, passWord } = this.state;
        const errors = {};
        if (userName.length === 0) {
            errors.userName = 'invalid userName';
        }
        if (passWord.length === 0) {
            errors.passWord = 'invalid passWord';
        }
        this.setState({ errors });
        if (Object.keys(errors).length > 0) {
            return;
        }
        console.log('click login');
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="login-page">
                <div className="login-box">
                    <div className="logo">
                        <a href="javascript:void(0);">Admin<b>BSB</b></a>
                        <small>Admin BootStrap Based - Material Design</small>
                    </div>
                    <div className="card">
                        <div className="body">
                            <form id="sign_in" method="POST">
                                <div className="msg">Sign in to start your session</div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-user" />
                                    </span>
                                    <TextField
                                        hintText="UserName"
                                        errorText={errors.userName ? 'This field is required' : null}
                                        onChange={e => this.setState({
                                            userName: e.target.value,
                                        })}
                                    />
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-lock" />
                                    </span>
                                    <TextField
                                        hintText="PassWord"
                                        type="password"
                                        errorText={errors.passWord ? 'This field is required' : null}
                                        onChange={e => this.setState({
                                            passWord: e.target.value,
                                        })}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-xs-8 p-t-5">
                                        <Checkbox label="Remember Me" />
                                    </div>
                                    <div className="col-xs-4">
                                        <RaisedButton label="SIGN IN" secondary={true} onClick={this.onLogin} />
                                    </div>
                                </div>
                                <div className="row m-t-15 m-b--20">
                                    <div className="col-xs-6">
                                        <a href="sign-up.html">Register Now!</a>
                                    </div>
                                    <div className="col-xs-6 align-right">
                                        <a href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
            ;
    }
};
