import React from "react";
import { useState, useEffect } from "react";


import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [newName, setNewName] = useState("");

  function addName(event) {
    setNewName(event.target.value);
  }
/*useEffect(()=>{

  const {names}= props.contacts
  function toFind(newName){
    return alert('already on file')
  }
  names.find(toFind)

}, [newName])*/

  const [newPhone, setNewPhone] = useState("");

  function addPhone(event) {
    setNewPhone(event.target.value);
  }
  const [newEmail, setNewEmail] = useState("");

  function addEmail(event) {
    setNewEmail(event.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    let contact = {
      name: newName,
      phone: newPhone,
      email: newEmail,
    };
    setNewName("");
    setNewEmail("");
    setNewPhone("");

    props.contactHandler(contact);
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <form className='forms' onSubmit={handleSubmit}>
          <label> Name: </label>
          <input onChange={addName} type="text" value={newName} />
          <br />
          <label> Phone: </label>
          <input
            onChange={addPhone}
            type="text"
            value={newPhone}
           /* pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"*/
          />
          <br />
          <label> Email: </label>
          <input onChange={addEmail} type="text" value={newEmail} />
          <br />
          <br />

          <button type="submit" onClick="">
            ENTER
          </button>
        </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>

        <TileList objArr={props.contacts} />
      </section>
    </div>
  );
};
