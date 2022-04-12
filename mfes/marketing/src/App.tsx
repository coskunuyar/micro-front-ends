import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

interface AppProps {
  history: any;
}

export default function App(props: AppProps) {
  return (
    <div>
      <StylesProvider
        generateClassName={createGenerateClassName({
          productionPrefix: "marketing",
        })}
      >
        <Router history={props.history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
}
