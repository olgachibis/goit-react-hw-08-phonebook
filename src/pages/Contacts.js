import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { getError, getIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <h3>Request in progress...</h3>}
      {!isLoading && error && <h3>Error...{error}</h3>}
      <ContactList />
    </div>
  );
}