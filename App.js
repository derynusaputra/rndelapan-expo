import React from "react";
import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigations/RootNavigator";

export default function App() {
  return (
    <>
      <RootNavigator />
      <StatusBar style="light" />
    </>
  );
}
