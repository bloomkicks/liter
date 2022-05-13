import type { AppProps } from "next/app";
import "../styles/globals.scss";
import "../styles/body.scss";
import store from '../store'
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
