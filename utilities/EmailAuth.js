import React from "react";
//Firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//Contexts
import { authContext } from "../contexts/Auth";

const auth = getAuth();

export async function SignIn(email, password) {
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    throw e;
  }
}
