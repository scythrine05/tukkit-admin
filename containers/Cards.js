import React from "react";
import Card from "../components/Card";

//Components
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import Loader from "../components/Loader";

//Contexts
import { postContext } from "../contexts/Post";

export default function Cards() {
  const { data, last, more, loading, deleteData } =
    React.useContext(postContext);
  return (
    <div className="w-full">
      {data ? (
        <>
          {data.map((item, index) => (
            <Card item={item} key={index} deleteData={deleteData} />
          ))}
          {!last ? (
            <div className="flex justify-center items-center">
              <Button
                label={loading ? <Spinner label="Loading" /> : "More"}
                onClick={more}
              />
            </div>
          ) : null}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
