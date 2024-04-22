import { React, useState} from "react";
import axios from 'axios';

const ContactForm = () => {
    //TODO: CONTACT FORM (THIS WILL SHOW UP ON THE BOTTOM RIGHT OF EVERY PAGE!!) NOT TO BE CONFUSED WITH THE 
    // TODO: CONTACT COMPONENT IN PAGES DIRECTORY
    //TODO:

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
        alert(inputs);
    }
    return (
        <form onSubmit = {handleSubmit}>
            <label> Name: <input type="text" name="name" value={inputs.name || ""} onChange={handleChange} />
            </label>
            
            <label> Email: <input type = "text" name = "email" value = {inputs.email || ""} onChange = {handleChange}/>
            </label>

            <label> Leave a message!: <input type = "text" name = "message" value = {inputs.message || ""} onChange = {handleChange}/>
            </label>

            <input type = "submit" />

        </form>


    );


};

export default ContactForm;