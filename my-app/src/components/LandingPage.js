import React, { useState, useEffect } from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                // Map the fetched data to the format expected by the component
                const mappedContacts = data.map(user => ({
                    id: user.id,
                    name: user.name,
                    phone: user.phone,
                    email: user.email,
                    image: 'https://via.placeholder.com/150'
                }));
                setContacts(mappedContacts);
            })
            .catch(error => {
                console.error('Error fetching contacts:', error);
            });
    }, []);

    return (
        <div className="contact-page">
            <h2>Contact List</h2>
            <div className="contact-grid">
                {contacts.map(contact => (
                    <div key={contact.id} className="contact-card">
                        <img src={contact.image} alt={`${contact.name}'s profile`} className="contact-image" />
                        <h3>{contact.name}</h3>
                        <p><strong>Phone:</strong> {contact.phone}</p>
                        <p><strong>Email:</strong> {contact.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LandingPage;
