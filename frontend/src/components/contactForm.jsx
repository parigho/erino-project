import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { createContact } from "../api";

const ContactForm = () => {
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        jobTitle: "",
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createContact(contact);
            alert("Contact created successfully!");
        } catch (error) {
            console.error("Failed to create contact:", error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextField name="firstName" label="First Name" onChange={handleChange} required />
            {/* Other fields */}
            <Button type="submit" variant="contained">Add Contact</Button>
        </Box>
    );
};

export default ContactForm;
