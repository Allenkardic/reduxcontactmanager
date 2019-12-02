import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../action/contactAction";
import { Link } from "react-router-dom";
import "../../css/Contact.css";

class Contact extends Component {
  state = { toggle: false };
  onClickToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  onClickDelete = (id) => {
    this.props.deleteContact(id);
  };

  render() {
    const {
      id,
      name,
      email,
      phone,
      website,
      company,
      address
    } = this.props.contact;
    return (
      <div className="container">
        <h1 className="contact-h1">
          name: {name}{" "}
          <i onClick={this.onClickToggle} class="fas fa-caret-down" />
          <i
            class="fas fa-trash-alt"
            style={{ float: "right", color: "red" }}
            onClick={this.onClickDelete.bind(this, id)}
          />
          <Link to={`/editcontact/${id}`}>
            <i
              style={{
                float: "right",
                marginRight: "0.5rem",
                color: "blue"
              }}
              class="fas fa-user-edit"
            />
          </Link>
        </h1>
        {this.state.toggle ? (
          <ul className="container-inner">
            <li className="container-inner-li">email: {email}</li>
            <li className="container-inner-li">phone: {phone}</li>
            <li className="container-inner-li">website: {website}</li>
            <li className="container-inner-li">company name: {company.name}</li>
            <li className="container-inner-li">zipcode: {address.zipcode}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};
export default connect(null, { deleteContact })(Contact);
