import s from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ queryValue, onFilter }) {
  return (
    <>
      <div className={s.container}>
        <form className={s.form}>
          <label className={s.label}>Find Contacts by name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={queryValue}
            onChange={onFilter}
            className={s.input}
          />
        </form>
      </div>
    </>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  queryValue: PropTypes.string.isRequired,
};
