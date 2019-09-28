import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions/index";
import requireAuth from "../components/hocs/requireAuth";
class AdminListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }
  render() {
    return (
      <div>
        <h3>Here's a Admin list of users </h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => {
  return { admins };
};

function loadData(store) {
  return store.dispatch(fetchAdmins());
}

export default {
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(requireAuth(AdminListPage)),
  loadData
};
