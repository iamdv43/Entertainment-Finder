import { Config } from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import React, { useState } from "react";
import appConfig from "../../../config/config";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

Config.region = appConfig.region;

const userPool = new CognitoUserPool({
  UserPoolId: appConfig.UserPoolId,
  ClientId: appConfig.ClientId,
});

const RegisterForm = ({ email, setEmail, setStage }) => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const handleEmailInput = (e) => {
    setEmail(e.target.value.trim());
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value.trim());
  };

  const handleNameInput = (e) => {
    setName(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const attributeList = [
      new CognitoUserAttribute({
        Name: "name",
        Value: name,
      }),
    ];

    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        console.log(err);
        alert(err);
        return;
      }
      console.log("user name is " + result.user.getUsername());
      console.log("call result: " + result);
      if (subscribe) {
        let params = {
          email: email,
        };
        const reqOptions = {
          method: "POST",
          body: JSON.stringify(params),
        };
        fetch(
          "https://tcl13xx50f.execute-api.us-east-1.amazonaws.com/test/subscribe",
          reqOptions
        )
          .then((response) => response.json())
          .then((res) => {
            console.log(res);
          });
      }
      setStage(2);
      //alert("User " + result.user.getUsername() + " regristered successfully. Please accept the verification link sent to your email.")
    });
  };

  return (
    <Container>
      <div className="card mt-5 w-50 mx-auto shadow-sm p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <div className="card-title text-center">
            <h4>Sign Up</h4>
          </div>
          <div className="card-text">
            <form className="mt-4 mb-4 col-md-7 mx-auto col-lg-7">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter Name"
                  value={name}
                  onChange={handleNameInput}
                ></input>
              </div>
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
                  autoComplete="on"
                  value={password}
                  placeholder="Enter Password"
                  onChange={handlePasswordInput}
                />
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={subscribe}
                  onChange={(e) => {
                    setSubscribe(!subscribe);
                    console.log(e.target.checked);
                  }}
                />
                <label className="form-check-label">
                  I agree to subscribe CloudCritics newsletter and understand
                  that I can unsubscribe at any time.
                </label>
              </div>

              <div className="text-center mb-3">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </div>

              <div className="text-center mt-3">
                <span>
                  <label>Already have an account? &nbsp;</label>
                  <h6>
                    <Link to={"/login"}>Login</Link>
                  </h6>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RegisterForm;
