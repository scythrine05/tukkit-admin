import React from "react";

//Firebase
import { initializeApp } from "firebase/app";
import {
  collection,
  query,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase";

//Utils
import { ReadData } from "../utils/CRUD";

export const feedContext = React.createContext();

const PostProvider = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [start, setStart] = React.useState(null);
  const [last, setLast] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const defaultConfig = query(
    collection(db, "feedback"),
    orderBy("created", "desc"),
    limit(10)
  );

  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
      ReadData(defaultConfig)
        .then((d) => {
          setStart(d[0]);
          setData(d[1]);
        })
        .catch((e) => console.error(e));
    }
    return () => (mounted = false);
  }, []);

  const more = async () => {
    if (!last) {
      setLoading(true);
      const newConfig = query(defaultConfig, startAfter(start));
      ReadData(newConfig)
        .then((d) => {
          setStart(d[0]);
          setData([...data, ...d[1]]);
          d[1].length == 0 ? setLast(true) : setLast(false);
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
          console.error(e);
        });
    }
  };

  return (
    <feedContext.Provider value={{ data, more, last, loading }}>
      {children}
    </feedContext.Provider>
  );
};

export default PostProvider;
