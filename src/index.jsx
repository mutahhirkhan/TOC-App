import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "react-router-dom";
import store from "./Redux/store";
import { Provider } from "react-redux";
import history from "./History/history";
import ModalManager from "./Components/ModalManager/ModalManager";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./Redux/store";
import CodeSplittedApp from './CodeSplittedApp';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ModalManager />
          <App />
          {/* <CodeSplittedApp/> */}
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
