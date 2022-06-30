import { Grid } from '@material-ui/core';
import { Card, CardActions, Button, Typography } from "@material-ui/core";
import axios from 'axios';

import { Container } from "react-bootstrap";
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Dashboard } from '../Dashboard';
import {UseLocalStorage} from '../useLocalStorage';


var AWS = require("aws-sdk");

export const MovieList = ({ movieDetails, setStage, setSentimentResult, setMovieDetails }) => {

    const [userEmail, setUserEmail] =  UseLocalStorage("email", "");
    
    let reviews;

    let sentimentResult = '';

    const getReview = (id, key) => {
        const api = "https://imdb-api.com/en/API/Reviews/k_2vsqvaos/" + id;
        axios
        .get(api)
        .then((response) => {
            console.log(response.data.items); 
            reviews = response.data.items;
            gateWayCall(id, key, reviews);
        })
        .catch((error) => {
          console.log(error);
        })
    }

    const gateWayCall = (id, key, reviews) => {

        console.log("Reviews: " + reviews);

        console.log(id, key, reviews)
        const api = "https://w1tr1p9qa6.execute-api.us-east-1.amazonaws.com/movieapi/addmovie";
        const data = { "name" : key,
                        "id": id,
                        "reviews": reviews,  
                        "email": userEmail};
        axios
        .post(api, data)
        .then((response) => {
            sentimentResult = response.data.body;
          console.log(sentimentResult);
          setMovieDetails(key);
          setSentimentResult(sentimentResult);
            setStage(3)
        })
        .catch((error) => {
          console.log(error);
        })


    }



    return (
        movieDetails ? (
            
            <Grid container alignItems="stretch" spacing={3}>
                {
                    Object.keys(movieDetails).map((key) => (

                        <Grid key={movieDetails[key]} item xs={12} sm={6} style={{ margin: '10px 10px' }}>
                            
                            <Card >
                                <div>
                                    <Typography variant="h6"> {key}</Typography>
                                </div>

                                <CardActions>
                                    <Button color='primary' size="medium" onClick={() => {getReview(movieDetails[key], key)}}>
                                        Select
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    ))
                }

            </Grid>
        ) : null
    );
}
