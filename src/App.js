import React from "react";
import { Provider } from "react-redux";
import "./css/App.css";
import store from "./redux/store";
import MainPages from "./pages/MainPages";
function App() {
  return (
    <Provider store={store}>
      <div>
        <MainPages />
      </div>
    </Provider>
  );
}

export default App;
