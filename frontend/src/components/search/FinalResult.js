import { Container } from "react-bootstrap";

export const FinalResult = ({ movieDetails, sentimentResult, setStage }) => {
  const sentiment = JSON.parse(sentimentResult);
  const result = sentiment.Sentiment;
  const score = sentiment.SentimentScore;
  const positive = score.Positive;
  const negative = score.Negative;
  const neutral = score.Neutral;

  const msg = '';

  return (
    <Container>
      <div className="card mt-5 w-50 mx-auto shadow-sm p-3 mb-5 bg-white rounded">
        <div className="card-body">
          <div className="card-title text-center">
            <h4>Sentiment Analysis Result for the movie</h4>
          </div>
          <div className="card-text">
            <form className="mt-4 mb-4 col-md-7 mx-auto col-lg-7">
              <div>Movie Name: {movieDetails}</div>
              <div>
                Sentiment analysis Result: {result}
                <br/>
                {"Positive: " + positive}
                <br/>
                {"Negative: " + negative}
                <br/>
                {"Neutral: " + neutral}
               
              </div>
              <div display="flex" flex-direction="row">
                <button
                  style={{
                    backgroundColor: "#0d47a1",
                    fontSize: "18px",
                    margin: "10px 10px",
                    color: "white",
                  }}
                  className="btn #0d47a1 blue darken-4"
                  onClick={() => setStage(1)}
                >
                  Search another movie
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};
