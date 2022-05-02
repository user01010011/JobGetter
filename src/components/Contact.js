import React, { Component } from "react";
import '../App.css';
// import ContactForm from "./ContactForm";

// class Contact extends Component {
//     render() {
//         return (
//             <div className="contact has-text-white has-text-centered" id="contact">
//                 <ContactForm />
//             </div>
//         )
//     }
// }

class Contact extends Component {
  state = {
    full_name: "",
    phone_number: "",
    email: "",
    message: "",
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.contactForm(this.state);
  };

  render() {
    return (
      <div className="page-wrapper" id="contact">
        <h2 className="header">Contact Us 💌 </h2>
        <form className="page-form" onSubmit={this.handleOnSubmit}>
          <label className="form-label">Full Name:</label>
          <input
            className="form-input"
            id="name-input"
            type="text"
            name="full_name"
            value={this.state.full_name}
            onChange={this.handleOnChange}
          />
          <label className="form-label">Phone #:</label>
          <input
            className="form-input"
            id="phone-input"
            type="text"
            name="phone_number"
            value={this.state.phone_number}
            onChange={this.handleOnChange}
          />
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            id="email-input"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
          />
          <label className="form-label">Message:</label>
          <textarea
            className="form-textarea"
            id="message-input"
            type="textarea"
            name="message"
            cols="50"
            rows="10"
            placeholder="Enter your message..."
            value={this.state.message}
            onChange={this.handleOnChange}
          ></textarea>
          <button
            className="submit-button"
            type="submit"
            onClick={this.handleOnSubmit}
          >
            Send!
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
