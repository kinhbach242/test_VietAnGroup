import "./scss/style.scss";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Config from "./pages/Config";
import Account from "./pages/Account";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Config} path="/config" />
          <Route component={Account} path="/account" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
