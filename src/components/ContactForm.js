import React, {Component} from "react"; 

class ContactForm extends Component {
    state = {
        full_name: "", 
        phone_number: "", 
        email: "", 
        message: ""
    }; 

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleOnSubmit = event => {
        event.preventDefault(); 
        this.props.contactForm(this.state); 
    }

    render() {
        return (
        <div className="contact-form has-text-white has-text-centered" id="contact-form" style={{position: "fixed", top: "180px"}}>
            <h2>Contact Us 💌 </h2>
            <br/>
            <form onSubmit={this.handleOnSubmit}>
                <label className="label has-text-white"><strong>Full Name: </strong></label>
                <input className="name-input" id="name-input" type="text" name="full_name" value={this.state.full_name} onChange={this.handleOnChange}/>
                <br/><br/>
                <label className="label has-text-white"><strong>Phone #: </strong></label>
                <input className="phone-input" id="phone-input" type="text" name="phone_number" value={this.state.phone_number} onChange={this.handleOnChange}/>
                <br/><br/>
                <label className="label has-text-white"><strong>Email: </strong></label>
                <input className="email-input" id="email-input" type="text" name="email" value={this.state.email} onChange={this.handleOnChange}/>
                <br/><br/>
                <label className="label has-text-white"><strong>Message: </strong></label>
                <textarea className="message-input" id="message-input" type="textarea" name="message" cols="50" rows="10"
                placeholder="Enter your message..." value={this.state.message} onChange={this.handleOnChange}></textarea>
                <br/>
                <br/>
                <button className="button is-link" type="submit" onClick={this.handleOnSubmit}>Send!</button>
            </form>
        </div>
    )}
}

export default ContactForm;