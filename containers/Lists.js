import React from "react";
import ListItem from "../components/ListItem";

//Components
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import Loader from "../components/Loader";

//Data Contexts
import { feedContext } from "../contexts/Feedback";

function ListsContainer() {
  const { data, last, loading, more } = React.useContext(feedContext);
  return (
    <div className="w-full divide-slate-300 divide-y-2">
      {data ? (
        <>
          {data.map((item, index) => (
            <ListItem item={item} key={index} />
          ))}
          {!last ? (
            <div className="flex justify-center items-center">
              <Button
                onClick={more}
                label={loading ? <Spinner label="Loading" /> : "More"}
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

export default ListsContainer;
