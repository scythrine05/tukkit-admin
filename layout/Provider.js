import React from "react";

//Providers
import AuthProvider from "../contexts/Auth";
import PostProvider from "../contexts/Post";
import FeedProvider from "../contexts/Feedback";

export default function Provider({ children }) {
  const providers = [AuthProvider, PostProvider, FeedProvider];
  return (
    <>
      {providers.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
}
