import React from "react";
import { useRouter } from "next/router";
import { Timestamp, where, collection, query } from "firebase/firestore";
import { db } from "../firebase";

//Components
import TextField, { TextArea } from "../components/TextField";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import { Danger } from "../components/Alert";

//Utils
import { AddData, ReadData, UpdateData } from "../utils/CRUD";
import { FIELDS_EMPTY } from "../utils/Strings";

//Contexts
import { postContext } from "../contexts/Post";

export default function Form() {
  const [data, setData] = React.useState({
    title: "",
    description: "",
    source: "",
    display: "",
    url: "",
  });
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const { addData, updateData } = React.useContext(postContext);

  const router = useRouter();
  const { eid } = router.query;

  React.useEffect(() => {
    if (eid) {
      const defaultConfig = query(
        collection(db, "posts"),
        where("Id", "==", eid)
      );
      ReadData(defaultConfig)
        .then((d) => setData(d[1][0]))
        .catch((e) => console.error(e));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (isEmpty) {
      setError(FIELDS_EMPTY);
      setLoading(false);
      return null;
    }

    if (!data.Id) {
      AddData(data, "posts")
        .then((nData) => {
          addData(nData);
          router.push("/");
        })
        .catch((e) => {
          setError(null);
          setLoading(false);
          console.log(e);
        });
    } else {
      UpdateData(data, "posts", data.Id)
        .then((nData) => {
          updateData(nData);
          router.push("/");
        })
        .catch((e) => {
          setError(null);
          setLoading(false);
          console.log(e);
        });
    }
  };

  const handleChange = (e) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const isEmpty = !Object.values(data).every((x) => !!x);

  return (
    <React.Fragment>
      {error ? <Danger msg={error} /> : null}
      <form onSubmit={handleSubmit}>
        <TextField
          label={"Title"}
          name={"title"}
          placeholder="Title"
          twclass="w-full"
          type="text"
          onChange={handleChange}
          value={data.title}
        />
        <TextArea
          label={"Description"}
          name={"description"}
          placeholder="Description (max limit 60 words)"
          twclass="w-full"
          onChange={handleChange}
          value={data.description}
        />
        <TextField
          label={"Source"}
          name={"source"}
          placeholder="Source"
          twclass="w-full"
          type="text"
          onChange={handleChange}
          value={data.source}
        />
        <TextField
          label={"Source Url"}
          name={"url"}
          placeholder="Source Url"
          twclass="w-full"
          type="text"
          onChange={handleChange}
          value={data.url}
        />
        <TextField
          label={"Display Url"}
          name={"display"}
          placeholder="Display Url"
          twclass="w-full"
          type="text"
          onChange={handleChange}
          value={data.display}
        />
        <Button
          type="submit"
          label={loading ? <Spinner label="Publishing" /> : "Publish"}
        />
      </form>
    </React.Fragment>
  );
}
