import React from "react";
import { Provider } from "react-redux";
import "./css/App.css";
import store from "./redux/store";
import { Auth0Provider } from "@auth0/auth0-react";
import MainPages from "./pages/MainPages";
function App() {
  return (
    <Auth0Provider
      domain="dev-getn3nuj1qo3kwft.us.auth0.com"
      clientId="MBZ6yuiJGOSYzs5rkGQq4CHP0t1h49FQ"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <div>
          <MainPages />
        </div>
      </Provider>
    </Auth0Provider>
  );
}

export default App;
