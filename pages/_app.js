import "../styles/globals.css";
import HivesignerContext from "../components/HivesignerContext";
import hivesigner from "hivesigner";

function MyApp({ Component, pageProps }) {
  const client = new hivesigner.Client({
    app: "cold.brew",
    callbackURL: "http://localhost:3000",
    scope: ["vote", "comment"],
  });
  return (
    <HivesignerContext.Provider value={{ client: client }}>
      <Component {...pageProps} />
    </HivesignerContext.Provider>
  );
}

export default MyApp;
