import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Layuot } from "./Layout";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { ContactForm } from "./ContactForm/ContactForm.js";




export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...newContact }, ...prevState.contacts],
    })
    );
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget
    this.setState({ [name]: value })
  };

  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   const { name, number } = evt.currentTarget;
  //   const contact = {
  //     name: name.value,
  //     number: number.value,
  //     id: nanoid(),
  //   };
  //   this.setState(({ contacts }) => ({
  //     contacts: [contact, ...contacts],
  //   })

  //   );
  //   this.reset();
  // };

  // reset = () => {
  //   this.setState({ name: '', number: '' })
  // };

  getVisibilContact = () => {
    const { contacts, filter } = this.state;
    const normolizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normolizedFilter));
  }

  render() {
    const { filter } = this.state;
    const visibilContact = this.getVisibilContact();

    return (
      <Layuot>
        <ContactForm onAdd={this.addContact} />
        {/* <form onSubmit={this.handleSubmit}>
          <label>Name
            <input type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required value={name} onChange={this.handleChange} />
          </label>
          <label>Number
            <input type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required value={number} onChange={this.handleChange} />
          </label>
          <button type="submit">Add contact</button>
        </form> */}
        <h3>Contacts</h3>
        <Filter value={filter}
          onChange={this.handleChange} />
        <ul>
          {
            visibilContact.map(({ name, id, number }) => (
              <li key={id}>{name} : {number}</li>
            ))
          }
        </ul>
        <GlobalStyle />
      </Layuot>
    );
  }

};
