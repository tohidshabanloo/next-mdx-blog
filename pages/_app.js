import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/font.css";

import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { useState } from "react";
import { getCookie, setCookies } from "cookies-next";

export default function App(props) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState(props.ColorScheme);

  const toggleColorScheme = (value) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookies("maintine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <div dir="rtl">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Header />
          <main className="container">
            <Component {...pageProps} />
          </main>
          <Footer />
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

App.getInitialProps = ({ ctx }) => ({
  colorScheme: getCookie("maintine-color-scheme", ctx) || " n",
});
