import "../styles/globals.css";

//Layout
import Layout from "../layout/Root";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
