import React from "react";

//Layouts
import Provider from "./Provider";
import Navigation from "./Navigation";

export default function Root({ children }) {
  const layouts = [Provider, Navigation];
  return (
    <>
      {layouts.reduceRight((acc, Layout) => {
        return <Layout>{acc}</Layout>;
      }, children)}
    </>
  );
}
