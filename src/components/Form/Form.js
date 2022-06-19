import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './Form.module.css';

export default class Form extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  nameId = nanoid();
  phoneId = nanoid();

  handleInputChange = e => {
    this.setState({
      id: nanoid(),
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <form
          name="signup_form"
          autoComplete="on"
          onSubmit={this.handleSubmit}
          className={s.form}
        >
          <div className={s.container}>
            <label htmlFor={this.nameId} className={s.label}>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleInputChange}
                id={this.nameId}
                className={s.input}
              />
            </label>
            <label htmlFor={this.phoneId} className={s.label}>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleInputChange}
                id={this.phoneId}
                className={s.input}
              />
            </label>
            <button type="submit" className={s.button}>
              Add contact
            </button>
          </div>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
