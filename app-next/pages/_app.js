import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    const track = navigator.doNotTrack;
    const uad = navigator.userAgentData;

    const sendAnalytics = async () => {
      fetch("https://romain-legall.fr/api/analytics/overall", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lang: lang ?? "bot",
          mobile: uad.mobile ?? false,
          from: document.referrer ?? null,
        }),
      });
    };
    if (track === "yes" || track === "1" || track === null) sendAnalytics();
  });

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
