import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={props.addContact}>
      <opton value="">Select a Contact</opton>;
      {props.contacts.map((contact) => {
        return <option value={contact.name}>{contact.name}</option>;
      })}
    </select>
  );
};
