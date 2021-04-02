import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import useHivesigner from "../components/useHivesigner";
export default function Auth() {
  const auth = useHivesigner();
  console.log(auth);
  const login = () => {
    auth.client.login({ username: "benny.blockchain" });
  };
  const logout = () => {
    let params = new URL(location).searchParams;
    const token =
      params.get("access_token") || localStorage.getItem("sc_token");
    console.log(token);
    auth.client.removeAccessToken();
    console.log(auth.client);
  };
  const post = () => {
    const jsonMetadata = {
      tags: ["hive-152197", "coldbrew-dev"],
      app: "cold.brew",
      format: "markdown",
    };
    const json_metadata = JSON.stringify(jsonMetadata);
    auth.client.comment(
      "benny.blockchain",
      "sup-internet",
      "benny.blockchain",
      "post6",
      "Cold Brew Posting",
      "Test test test",
      json_metadata,
      function (response, error) {
        if (error) {
          console.log("error", error);
        } else {
          console.log("response", response);
        }
      }
    );
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={login}>Log in</button>
      <button onClick={logout}>Log out</button>
      <button onClick={post}>Post</button>
      <Link href="/">
        <h1>Test page</h1>
      </Link>
    </div>
  );
}
