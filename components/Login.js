import React from "react";
import Image from "next/image";

//Components
import TextField from "../components/TextField";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import { Danger } from "../components/Alert";

//Icons
import { ERROR } from "../utils/Icons";

//Utility
import { SignIn } from "../utils/EmailAuth";
import { AUTH_ERROR, EMAIL_EMPTY, PASSWORD_EMPTY } from "../utils/Strings";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (!email || !password) {
      !email ? setError(EMAIL_EMPTY) : setError(PASSWORD_EMPTY);
      setLoading(false);
    } else
      SignIn(email, password)
        .then(() => setLoading(false))
        .catch((e) => {
          setError(AUTH_ERROR);
          setLoading(false);
        });
  };

  return (
    <div className="flex justify-center items-center p-20">
      <form
        className="bg-[#4a4a4a] flex flex-col p-20 rounded"
        onSubmit={handleSubmit}
      >
        <div className="py-2 text-md flex justify-center">
          <Image
            src="/assets/logo/main.svg"
            alt="Tukkit logo"
            width={60}
            height={60}
          />
        </div>
        {error ? <Danger msg={error} /> : null}
        <TextField
          id="email"
          label="Email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          light
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          light
        />
        <Button type="submit" label={!loading ? "Login" : <Spinner />} />
      </form>
    </div>
  );
}
