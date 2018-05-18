import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";

export default class Master extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="home-master">
        <Header></Header>
        <main role="main" className="container">
          {this.props.children}
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
