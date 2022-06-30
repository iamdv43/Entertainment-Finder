import { useState } from "react";
import { MovieList } from "./MovieList";
import { SearchButton } from "./SearchButton";
import { FinalResult } from "./FinalResult";

export const SearchMovies = () => {

    const [movieDetails, setMovieDetails] = useState('');
    const [stage, setStage] = useState(1);

    const [sentimentResult, setSentimentResult] = useState('');

    return (
        <div>
            {stage === 1 && (
                <SearchButton movieDetails={movieDetails} setMovieDetails={setMovieDetails} setStage={setStage} sentimentResult={sentimentResult} />
            )}
            {stage === 2 && (
                <MovieList movieDetails={movieDetails} setStage={setStage} setSentimentResult={setSentimentResult} setMovieDetails={setMovieDetails}/>
            )}
            {stage === 3 && (
                <FinalResult movieDetails={movieDetails} sentimentResult={sentimentResult} setStage={setStage}/>
            )}
        </div>
    );
}