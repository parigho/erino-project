import React from "react";
import ContactForm from "./components/ContactForm";
import ContactsTable from "./components/ContactsTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ContactsTable />} />
                <Route path="/add" element={<ContactForm />} />
            </Routes>
        </Router>
    );
}

export default App;
