import { StyleSheet, Text, View } from "react-native";
import Appscreen from "./components/screens/Appscreen";
import { Provider } from "react-redux";
import store from "./reduxhandle/store";

export default function App() {
  return (
    <Provider store={store}>
      <Appscreen></Appscreen>
    </Provider>
  );
}
