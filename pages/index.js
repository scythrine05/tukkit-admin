import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//Containers
import Tabs from "../containers/Tabs";
import Login from "../containers/Login";

//Components
import Header from "../components/Header";

//Contexts
import { authContext } from "../contexts/Auth";

export default function Home() {
  const { user } = React.useContext(authContext); //authUser State

  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Panel</title>
        <meta name="description" content="Admin Panel for Tukkit news app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{user ? <Tabs /> : <Login />}</main>
    </div>
  );
}
