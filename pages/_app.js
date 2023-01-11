import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Firebase
import initFirebase from "../config";

//Contexts
import AuthProvider from "../contexts/Auth";

initFirebase(); //initiating Firebase

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
