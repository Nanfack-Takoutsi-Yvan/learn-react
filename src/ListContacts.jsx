import React, { Component } from "react";

class ListContacts extends Component {
  render(){
    const { contacts } = this.props
    return (
      <ol className={''}>
        {
          contacts.map((contacts, id) => 
            <li>{contacts.name}</li>
          )
        }
      </ol>
    )
  }
}

export default ListContacts