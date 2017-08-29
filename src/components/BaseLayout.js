import React, {Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class BaseLayout extends Component {
  render() {
    return (
      // <div>This should house Header and Footer components and be able to house any children components.</div>
      <div className = "">
        <Header />
        <div className = "">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
