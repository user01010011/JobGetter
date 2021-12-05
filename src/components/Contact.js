import React from "react";
import ContactForm from "./ContactForm"

// const Contact = () => {
//     return (
//         <div className="has-text-white has-text-centered" id="contact" style={{position: "fixed", top: "180px"}}>
//             <br/>
//             <label className="tag label is-large title">
//                 <h2>Contact Us 💌 </h2>
//                 <ContactForm />
//             </label>
//             <br/>
//             <p>
                
//             </p>
//         </div>
//     )
// }

function Contact() {
    return (
        <div className="contact has-text-white has-text-centered" id="contact" stype={{position: "fixed", top: "180px"}}>
            <ContactForm />
        </div>
    )
}

export default Contact;
