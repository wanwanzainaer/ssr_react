import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export default ChildComponent => {
  class requireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <h1>Loading</h1>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }
  const mapStateToProps = ({ auth }) => {
    return { auth };
  };
  return connect(mapStateToProps)(requireAuth);
};
