
import React from "react"

function Register(){
    return(
        <div class="register">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-4 offset-md-1">
                        <div class="register-form">
                            <div class="mb-5">
                                <h1>Register</h1>
                                <p class="lead">Create an account to start playing.</p>
                            </div>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-info">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password Confirmation</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="custom-control custom-checkbox my-4">
                                <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                <label class="custom-control-label" for="customCheck2">Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-block btn-primary">Submit</button>
                            </form>
                            <p class="small my-4 text-center">Already have an account? <a href="#a">Log in</a>.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 offset-md-1">
                        <img src="assets/img/password.svg" alt="pick" />
                    </div>
                </div>
            </div>
        </div>
        )
    }

export default Register
