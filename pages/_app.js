import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/font.css";

import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { useState } from "react";

function MyApp(props) {
  const { Component, pageProps } = props;
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(preferredColorScheme);

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

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

export default MyApp;
