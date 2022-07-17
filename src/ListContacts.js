import React, { Component } from "react"
import PropsTypes from 'prop-types'
import { Link } from "react-router-dom"
class ListContacts extends Component {
  static propsTypes = {
    contacts: PropsTypes.array.isRequired,
    onDeleteContact: PropsTypes.func.isRequired
  }
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }

  clearQuery = () => {
    this.setState({
      query: ''
    })
  }

  render(){
    const { query } = this.state
    const { contacts, onDeleteContact } = this.props

    const showingContact = !query 
      ? contacts
      : contacts.filter((contact) => contact.name.includes(query.toLowerCase()))
      
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Sontacts"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <Link
            to="/create"
            className="add-contact"
          >
            Add Contact
          </Link>
        </div>

        {showingContact.length !== contacts.length && (
          <div className="showing-contacts">
            <span>Now showing {showingContact.length} of {contacts.length}</span>
            <button onClick={() => this.clearQuery()}>Show all</button>
          </div>
        )}

        <ol className="contact-list">
          {
            showingContact.map((contact) => 
              <li className="contact-list-item" key={contact.id}>
                <div 
                  className="contact-avatar"
                  style={{
                    backgroundImage: `url(${contact.avatarURL})`
                  }}
                  ></div>
                  <div className="contact-details">
                    <p>{contact.name}</p>
                    <p>{contact.handle}</p>
                  </div>
                  <button
                    className="contact-remove"
                    onClick={() => onDeleteContact(contact)}
                  >
                    Remove
                  </button>
              </li>
            )
          }
        </ol>
      </div>
    )
  }
}

export default ListContacts