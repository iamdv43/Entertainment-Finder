import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// var AWS = require('aws-sdk');

// // let awsConfig = {
// //     "region": "us-east-1",
// //     "secretAccessKey": "cZoZ8eHxGDFg6ladPUscIhT1VXHacHkxMG34V2az",
// //     "accessKeyId": "ASIAX453AZRE4NTXS63V",
// //     "endpoint": "http://dynamodb.us-east-1.amazonaws.com"
// // }

// AWS.config.update({
//     "region": "us-east-1",
//     "endpoint": "dynamodb.us-east-1.amazonaws.com",
//     "secretAccessKey": "cZoZ8eHxGDFg6ladPUscIhT1VXHacHkxMG34V2az",
//     "accessKeyId": "ASIAX453AZRE4NTXS63V",
//     "aws_session_token": "FwoGZXIvYXdzEHsaDKtaREXvON8BvxYk5SLAAQt8+LSdFWygNM+lKx0KIwt5G+ArdxvJ3bis9rXaXtkAR/f7WXaEhQTMTyXxCD8fSXhu4OM17ZDxS2tCqkIqgHQer6ehVBtnUz3hGk6XleOc5nHgZkQv/I3wz9gfoUbGdbNX+WJ3HY/XOfH1gJ5zEyFORJBV4AR0FafRT7+g3B+OIiqKI7iCXQKEXJ2+PCuYIQk5iWtJR5Wasgvc/TFuRtK8CHwaRC7yqavQVUZtZu5jCgsZ4lFoa8H0gYAUZCAjUij5lNqRBjItLjXwT/FFsWAgAF5ZkdkJTknkxQ9V3xr66GAJU6Hu+yc7LraKKhVNN37KK05a"
// });

//AWS.config.update(awsConfig)

//const documentClient = new AWS.DynamoDB.DocumentClient()
// var dynamodb = new AWS.DynamoDB();

// var params = {
//     TableName: "Movies",
//     KeySchema: [
//         { AttributeName: "year", KeyType: "HASH" },  //Partition key
//         { AttributeName: "title", KeyType: "RANGE" }  //Sort key
//     ],
//     AttributeDefinitions: [
//         { AttributeName: "year", AttributeType: "N" },
//         { AttributeName: "title", AttributeType: "S" }
//     ],
//     ProvisionedThroughput: {
//         ReadCapacityUnits: 10,
//         WriteCapacityUnits: 10
//     }
// };

const Activation = () => {
  return (
    <Container>
      <div className="card mt-5 w-50 mx-auto shadow-sm p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <div className="card-title text-center">
            <h4>Account Activation</h4>
          </div>
          <div className="card-text"></div>
          <p>
            An account activation link has been sent to you registered email
            address. Kindly activate your CloudCritics account using the activation link and
            sign in using Login link:{" "}
          </p>
          <div className="text-center mt-3">
            <span>
              <h6>
                <Link to={"/login"}>Login</Link>
              </h6>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Activation;
