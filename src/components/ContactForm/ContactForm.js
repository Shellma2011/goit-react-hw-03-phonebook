import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import shortid from 'shortid';

const PhonebookForm = styled.form`
  width: 300px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
`;

const PhonebookLabel = styled.label`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  padding: 12px 16px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;

  resize: none;
  margin-bottom: 12px;
`;

const PhonebookInput = styled.input`
  padding: 4px 12px;
  width: 240px;
  margin-top: 5px;
  font: inherit;
  line-height: 12px;
  letter-spacing: 0.01em;
`;

const PhonebookButton = styled.button`
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;

  width: 100%;
  margin-left: auto;
  border-radius: 4px;
  padding: 12px 24px;
  background-color: #3f51b5;
  color: #fff;
  font-weight: 500;

  &:hover,
  &:focus {
    background-color: #303f9f;
  }

  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();

  handleChange = e => {
    const { name, number, value } = e.currentTarget;
    this.setState({
      [name]: value,
      [number]: value,
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <PhonebookForm onSubmit={this.handleOnSubmit}>
        <PhonebookLabel htmlFor={this.nameInputId}>
          Name
          <PhonebookInput
            id={this.nameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </PhonebookLabel>
        <PhonebookLabel htmlFor={this.telInputId}>
          Number
          <PhonebookInput
            id={this.telInputId}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </PhonebookLabel>
        <PhonebookButton type="submit">Add contact</PhonebookButton>
      </PhonebookForm>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
