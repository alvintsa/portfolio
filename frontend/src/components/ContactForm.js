import { React, useState} from "react";
import axios from 'axios';
import "./ContactForm.css";
import "./Containers.css"

const ContactForm = () => {
    //TODO: NEWEST TODO IS TO FORMAT THE FORM, FRONTEND TO BACKEND CONNECTIONS IS DONE!!!
    //TODO: ALSO FIX .THEN .CATCH FORMATTING BELOW!!

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Send formData to backend
        axios.post("/api/contact", inputs)
        .then(response => {
            // Handle success
            console.log(response.data);
})
        .catch(error => {
            // Handle error
            console.error('There was an error!', error);
        });
        // alert(inputs);
    }
    return (
        <div className = "form-container">
            <form className = "contact-form" onSubmit = {handleSubmit}>
                <h1>Contact Me!</h1>
                <label> Name: <input type="text" name="name" value={inputs.name || ""} onChange={handleChange} />
                </label>
                
                <label> Email: <input type = "text" name = "email" value = {inputs.email || ""} onChange = {handleChange}/>
                </label>

                <label> Leave a message!: <input type = "text" name = "message" value = {inputs.message || ""} onChange = {handleChange}/>
                </label>

                <input type = "submit" />

            </form>
        </div>


    );


};

export default ContactForm;