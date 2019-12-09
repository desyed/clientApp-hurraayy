import React from "react";

import { connect } from "react-redux";

import { startClock } from "../lib/store/clock/actions";
import { countIncrease } from "../lib/store/count/actions";
import { loadData } from "../lib/store/placeholder/actions";

import App from "../layouts/App";
import Header from "../components/header/Header";

import HeroSection from "../components/hero-section";
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
        <HeroSection />
      </App>
    );
  }
}

export default connect()(PageIndex);
