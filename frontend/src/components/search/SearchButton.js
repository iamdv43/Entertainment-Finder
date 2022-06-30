import { useState } from "react";
import { TextField } from "@material-ui/core";
import { AppBar, Toolbar } from "@mui/material";

export const SearchButton = ({
  movieDetails,
  setMovieDetails,
  setStage,
  sentimentResult,
}) => {
  const [search, setSearch] = useState("");

  const searchMovie = () => {
    console.log("button clicked");
    const response = fetch(
      "https://imdb-api.com/en/API/Search/k_2vsqvaos/" + search
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("This is your data", data["results"]);
        
        const movie_details = {};
        for (const movie in data["results"]) {
          const movie_name_discreption =
            data["results"][movie]["title"] +
            " " +
            data["results"][movie]["description"];

          movie_details[movie_name_discreption] = data["results"][movie]["id"];
        }
        console.log(movie_details);
        setMovieDetails(movie_details);
        setStage(2);
      });
  };

  return (
    <AppBar position="static" style={{ background: "#FFFFFF" }}>
      <Toolbar>
        <div display="flex" flex-direction="row">
          <TextField
            style={{ margin: "10px 10px" }}
            name="search"
            variant="outlined"
            label="Search Movies Here"
            width="100px"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            style={{
              backgroundColor: "#0d47a1",
              fontSize: "18px",
              margin: "10px 10px",
              color: "white",
            }}
            className="btn #0d47a1 blue darken-4"
            onClick={() => searchMovie()}
          >
            Search
          </button>
        </div>

        <div>
          {sentimentResult.length !== 0 ? (
            <div>{sentimentResult.Sentiment}</div>
          ) : null}
        </div>
      </Toolbar>
    </AppBar>
  );
};
