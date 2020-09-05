import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Home from "./components/Home";
import About from "./components/About";

export default class App extends React.Component {
  state = {
    beforefetching: true
  };

  componentDidMount() {
    this.setState({
      beforefetching: false
    });
    //this.props.getPersons();
  }

  render() {
    const { beforefetching } = this.state;

    if (beforefetching) {
      return <p>fetching....</p>;
    }
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
