// Dashboard.js

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/contacts');
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <section className='p-32'>
        
    <div className="max-w-md mx-auto bg-bgPrimary bg-opacity-50 shadow-lg rounded-lg overflow-hidden  px-8 py-12 lg:px-18">
      <div className="px-4 py-2 ">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">Interested Candidates</h1>
      </div>
      <ul className="divide-y divide-gray-200 px-4">
        {contacts.map(contact => (
          <li key={contact._id} className="py-4">
            <div className="flex flex-col">
              <span className="text-lg font-bold">{contact.first_name} {contact.last_name}</span>
              <span className="text-lg font-light text-gray-500">{contact.email}</span>
              <span className="text-lg font-light text-gray-500">{contact.phone}</span>
              <span className="text-lg font-light text-gray-500">{contact.city}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </section>
  );
};

export default Dashboard;
