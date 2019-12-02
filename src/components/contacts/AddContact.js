import React, { Component } from "react";
import { addContact } from "../../action/contactAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/AddContact.css";

class AddContact extends Component {
  state = { name: "", email: "", phone: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      name,
      phone,
      email
    };

    this.props.addContact(newContact);

    this.setState({ name: "", email: "", phone: "" });

    this.props.history.push("/");
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="container-form">
        <form onSubmit={this.handleSubmit}>
          <h1 className="add-contact">Add Contacts</h1>
          <label For=""></label>
          <input
            type="text"
            placeholder="entername"
            name="name"
            value={name}
            onChange={this.handleChange}
            className="input-inner"
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className="input-inner"
          />
          <input
            type="phone"
            placeholder="Enter phone number"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            className="input-inner"
          />
          <button>SUBMIT</button>
        </form>
      </div>
    );
  }
}

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired
};

export default connect(null, { addContact })(AddContact);
