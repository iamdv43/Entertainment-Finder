import { AppBar } from '@material-ui/core';
import * as AWS from 'aws-sdk'
import React, { useState } from "react";
import Header from './Header';
import {UseLocalStorage} from './useLocalStorage';

import { Toolbar } from "@mui/material";
import { Container } from "react-bootstrap";

const configuration = {
    accessKeyId: "AKIAYF655U5VDYSDUZQG",
    accessSecretKey: "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",
    region: "us-east-1"
}

AWS.config.update(configuration)



export const History = (tableName) => {

    const [userEmail, setIslogin] =  UseLocalStorage("email", "");

   var [dataU, setDataU] = useState([{}]);

    const fetchData = (tableName) => {

        const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'})
    
        var params = {
            FilterExpression: 'email = :email',
            ExpressionAttributeValues: {
                ':email': userEmail
            },
            TableName: tableName

        }
    
        docClient.scan(params, function (err, data) {
            if (err) {
                console.log(err)
            }else{
                console.log(data.Items);
                setDataU(data.Items);
            }
        })
    }


    return (
        <div>
            <Header/>
            <Container>
            <div className="card mt-5 w-50 mx-auto shadow-sm p-3 mb-3 bg-white rounded">
                <div className="card-body">
            
            <button onClick={() => fetchData('MovieReviewsDatabase')} className="btn btn-primary"
                                    type="submit"> Previous search </button>
           
            { dataU.map(dataU => <div key="{dataU.Id}">
                <br/>{"Moive name: "+ dataU.Movie} <br/> {"Sentiment Analysis result: "+ dataU.Sentiment}
             <br/><br/>
             </div>)} 
            </div>
            </div>                     
            </Container>
        </div>
    );
}

export default History;