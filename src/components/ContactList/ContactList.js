import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <>
      <ul className={s.list}>
        {contacts.map(contact => {
          return (
            <li key={contact.number} className={s.item}>
              <p>
                <span className={s.name}>{contact.name}</span>: {contact.number}
              </p>
              <button onClick={() => onDelete(contact.id)} className={s.button}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
