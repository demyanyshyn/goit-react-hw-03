import { useState, useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import plugContacts from './contacts.json';

const App = () => {
    const localStorageContactList = JSON.parse(
        localStorage.getItem('contact-list')
    );

    const [inputValue, setInputValue] = useState('');
    const [contactList, setContactList] = localStorageContactList
        ? useState(localStorageContactList)
        : useState(plugContacts);

    useEffect(() => {
        localStorage.setItem('contact-list', JSON.stringify(contactList));
    }, [contactList]);

    const handleDeleteContact = id => {
        const newContactList = contactList.filter(item => item.id !== id);
        setContactList(newContactList);
    };

    const handleInput = evt => {
        setInputValue(evt.target.value);
    };

    const filteredContactList = inputValue => {
        return contactList.filter(contact =>
            Object.values(contact).some(
                value =>
                    typeof value === 'string' &&
                    value.toLowerCase().includes(inputValue.toLowerCase())
            )
        );
    };
    return (
        <section className="app">
            <h1>Phonebook</h1>
            <ContactForm
                contactList={contactList}
                setContactList={setContactList}
            />
            <SearchBox handleInput={handleInput} inputValue={inputValue} />
            <ContactList
                contactList={filteredContactList(inputValue)}
                handleDeleteContact={handleDeleteContact}
            />
        </section>
    );
};
export default App;
