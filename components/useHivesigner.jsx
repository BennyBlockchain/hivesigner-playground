import {
  createElement,
  createContext,
  useEffect,
  useContext,
  useState,
} from "react";
import HivesignerContext from "../components/HivesignerContext";

export default function useHivesigner() {
  const auth = useContext(HivesignerContext);

  useEffect(() => {
    let params = new URL(location).searchParams;
    const token =
      params.get("access_token") || localStorage.getItem("sc_token");

    if (token) {
      auth.client.setAccessToken(token);
      auth.client.me(function (err, result) {
        localStorage.setItem("sc_token", token);
        console.log(err, result);
      });
    } else {
      console.log("something happened or first load");
    }
  }, []);
  return auth;
}
