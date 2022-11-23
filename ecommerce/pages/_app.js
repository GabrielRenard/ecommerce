import "../styles/globals.css";
import { Layout } from "../components";
import { stateContext } from "../context/StateContext";

function MyApp({ Component, pageProps }) {
  return (
    <stateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </stateContext>
  );
}

export default MyApp;
