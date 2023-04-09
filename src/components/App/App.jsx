import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContaactsList';
import Filter from '../Filter/Filter';
import { Container } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    contacts.find(({ name }) => name.toLowerCase() === data.name.toLowerCase())
      ? alert(`${data.name} is already in contacts`)
      : setContacts(prevState => [data, ...prevState]);
  };

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContacts = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter changeFilter={changeFilter} filter={filter} />
      <ContactsList
        contacts={getFiltredContacts()}
        onDeleteContact={deleteContacts}
      />
    </Container>
  );
};

export default App;