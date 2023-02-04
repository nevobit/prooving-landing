import "../styles/globals.css";
import "../styles/variables.css";
import type { AppProps } from "next/app";
import ContextWrapper from "../context/ContextWrapper";
import { Provider } from "react-redux";
import store from "@/utilities/Store";

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <Provider store={store}>
      <ContextWrapper>
          <Component {...pageProps} />
      </ContextWrapper>
    </Provider>

  );
}

export default MyApp;
