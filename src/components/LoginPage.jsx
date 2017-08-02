/**
 * Created by NguyenBa on 7/28/2017.
 */
import React, { Component } from 'react';

export default class Login extends Component {
    render() {
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
                                    <div className="form-line">
                                        <input type="text" className="form-control" name="username" placeholder="Username" required autofocus/>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="fa fa-lock" />
                                    </span>
                                    <div className="form-line">
                                        <input type="password" className="form-control" name="password" placeholder="Password" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-8 p-t-5">
                                        <input type="checkbox" name="rememberme" id="rememberme" className="filled-in chk-col-pink" />
                                            <label for="rememberme">Remember Me</label>
                                    </div>
                                    <div className="col-xs-4">
                                        <button className="btn btn-block bg-pink waves-effect" type="submit">SIGN IN</button>
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
        );
    }
}
