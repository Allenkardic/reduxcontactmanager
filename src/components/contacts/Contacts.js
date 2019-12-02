import React, { Component } from "react";
import Contact from "./Contact";
import { connect } from "react-redux";
import { getContacts } from "../../action/contactAction";
import PropTypes from "prop-types";

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map((item) => (
          <Contact contact={item} key={item.id} />
        ))}
      </div>
    );
  }
}

Contact.propTypes = {
  items: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({ items: state.contact.items });
export default connect(mapStateToProps, { getContacts })(Contacts);
