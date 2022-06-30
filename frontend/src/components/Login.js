import { Config } from "aws-sdk";
import {
    CognitoUserPool,
} from "amazon-cognito-identity-js";

import {
    CognitoUser,
    AuthenticationDetails
} from "amazon-cognito-identity-js";

import React, { useState,  useEffect } from 'react';
import appConfig from "../config/config";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

Config.region = appConfig.region;



const userPool = new CognitoUserPool({
    UserPoolId: appConfig.UserPoolId,
    ClientId: appConfig.ClientId,
});

const Login = () => {


    const [email, setEmail] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("name");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleEmailInput = e => {
        setEmail(e.target.value.trim());
    };

    const handlePasswordInput = e => {
        setPassword(e.target.value.trim());
    };


    const handleSubmit = e => {
        e.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: userPool,
        });

        const authenticationDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });

        user.authenticateUser(authenticationDetails, {
            onSuccess: (userDetails) => {
                console.log("Success: " + userDetails);
                navigate("/Dashboard");
            },
            onFailure: (error) => {
                console.error("Failure: ", error)
                alert(error)
            },
        })
    }

    useEffect(() => {
        localStorage.setItem("email", JSON.stringify(email));
      }, [email]);

    return (
        <Container>
            <div className="card mt-5 w-50 mx-auto shadow-sm p-3 mb-5 bg-white rounded">
                <div className="card-body">
                    <div className="card-title text-center">
                        <h4>Login</h4>
                    </div>
                    <div className="card-text">
                        <form className="mt-4 mb-4 col-md-7 mx-auto col-lg-7">

                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={email}
                                    placeholder="Enter Email"
                                    onChange={handleEmailInput}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    autoComplete="on"
                                    placeholder="Enter Password"
                                    onChange={handlePasswordInput}
                                />
                            </div>

                            <div className="text-center mb-3">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    onClick={handleSubmit}
                                >
                                    Login
                                </button>
                            </div>

                            <div className="text-center mt-3">
                                <span>
                                    <label>Don't have an account? &nbsp;</label>
                                    <h6>
                                        <Link to={"/register"}>
                                            Sign Up
                                        </Link>
                                    </h6>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Login;