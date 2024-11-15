import React, { useState, useEffect } from "react";
import { fetchContacts } from "../api";
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";

const ContactsTable = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const getContacts = async () => {
            const { data } = await fetchContacts();
            setContacts(data);
        };
        getContacts();
    }, []);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    {/* Other headers */}
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {contacts.map((contact) => (
                    <TableRow key={contact._id}>
                        <TableCell>{contact.firstName}</TableCell>
                        {/* Other cells */}
                        <TableCell>
                            <Button>Edit</Button>
                            <Button>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ContactsTable;
