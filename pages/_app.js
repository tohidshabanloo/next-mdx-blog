import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/font.css";

function MyApp({ Component, pageProps }) {
  return (
    <div dir="rtl">
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
