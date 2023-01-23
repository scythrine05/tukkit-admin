import React from "react";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

//Components
import Button from "../components/Button";
import Spinner from "../components/Spinner";

//Contexts
import { postContext } from "../contexts/Post";

export default function Cards() {
  const { data, last, more, loading, deleteData } =
    React.useContext(postContext);
  return (
    <div className="w-full">
      {data
        ? data.map((item, index) => (
            <Card item={item} key={index} deleteData={deleteData} />
          ))
        : "Loading"}
      {!last ? (
        <div className="flex justify-center items-center">
          <Button
            label={loading ? <Spinner label="Loading" /> : "More"}
            onClick={more}
          />
        </div>
      ) : null}
    </div>
  );
}
