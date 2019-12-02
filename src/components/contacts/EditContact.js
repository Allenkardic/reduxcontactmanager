import React, { Component } from "react";
import { getContact, updateContact } from "../../action/contactAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../css/AddContact.css";

class EditContact extends Component {
  state = { name: "", email: "", phone: "" };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { name, email, phone } = nextProps.item;
    this.setState({
      name,
      email,
      phone
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const { id } = this.props.match.params;
    const updContact = {
      id,
      name,
      phone,
      email
    };

    this.props.updateContact(updContact);

    this.setState({ name: "", email: "", phone: "" });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="container-form">
        <form onSubmit={this.handleSubmit}>
          <h1 className="add-contact">Edit Contact</h1>
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

const mapStateToProps = (state) => ({
  item: state.contact.item
});

EditContact.propTypes = {
  item: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getContact, updateContact })(
  EditContact
);
