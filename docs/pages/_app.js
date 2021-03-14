import { useEffect } from "react";

import "../styles.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
