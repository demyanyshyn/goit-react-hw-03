import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
const ContactList = ({ contactList, handleDeleteContact }) => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Phonebook</h2>
            <ul className={s.ContactList}>
                {contactList.map(item => (
                    <Contact
                        key={item.id}
                        data={item}
                        handleDeleteContact={handleDeleteContact}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
