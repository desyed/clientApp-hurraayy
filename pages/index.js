import React from "react";

import { connect } from "react-redux";

import { startClock } from "../lib/clock/actions";
import { countIncrease } from "../lib/count/actions";
import { loadData } from "../lib/placeholder/actions";

import App from "../components/App";
import Header from "../components/Header";
import Page from "../components/Page";
import { Button } from "antd";

// import "../node_modules/antd/dist/";
// import "antd/dist/antd.css";

class PageIndex extends React.Component {
  static async getInitialProps({ ctx: { store } }) {
    store.dispatch(countIncrease());
    if (!store.getState().placeholder.data) {
      store.dispatch(loadData());
    }
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    return (
      <App>
        <Header />
        <Page title="Home Page" />
        <Button size="large">Ant Design Button</Button>
        <Button type="primary">Primary</Button>
        <p className="p">test paragraph</p>
        <div className="uk-text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </App>
    );
  }
}

export default connect()(PageIndex);
