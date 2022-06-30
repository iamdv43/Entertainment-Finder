import React from "react";
import LexChat from "react-lex-plus";

const ChatBot = () => {
  return (
    <LexChat
      botName="CloudCriticsBot"
      IdentityPoolId="us-east-1:0539db60-9c96-4f92-9c6c-e67d82f5340c"
      placeholder="Enter"
      backgroundColor="#FFFFFF"
      height="300px"
      region="us-east-1"
      headerText="CloudCritics"
      headerStyle={{ backgroundColor: "#024082", fontSize: "20px" }}
      greeting={
        "Hello, Welcome to CloudCritics! How can I help?"
      }
    />
  );
};
export default ChatBot;
