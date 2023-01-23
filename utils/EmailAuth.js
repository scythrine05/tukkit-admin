import React from "react";
//Firebase
import { signInWithEmailAndPassword } from "firebase/auth";

//Contexts
import { authContext } from "../contexts/Auth";

import { auth } from "../firebase";

export async function SignIn(email, password) {
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    throw e;
  }
}
