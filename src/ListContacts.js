import React from "react";

const ListContacts = ({ contacts }) => {
  return (
    <ol className="contact-list">
      {
        contacts.map((contact) => 
          <li className="contact-list-item" key={contact.id}>
            <div 
              className="contact-avatar"
              style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}
              ></div>
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>@{contact.handle}</p>
              </div>
              <button className="contact-remove">
                Remove
              </button>
          </li>
        )
      }
    </ol>
  )
}

export default ListContacts