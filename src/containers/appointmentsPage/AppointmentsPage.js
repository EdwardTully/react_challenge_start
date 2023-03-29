import React from "react";
import { useState } from "react";
import { TileList } from "../../components/tileList/TileList";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [newTitle, setNewTitle] = useState("");

  function addTitle(event) {
    setNewTitle(event.target.value);
  }
  const [newContact, setNewContact] = useState("");
  function addContact(event) {
    setNewContact(event.target.value);
  }
  const [newDate, setNewDate] = useState("");
  function addDate(event) {
    setNewDate(event.target.value);
  }
  const [newTime, setNewTime] = useState("");
  function addTime(event) {
    setNewTime(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      let appoint = {
      title: newTitle,
      contact: newContact,
      date: newDate,
      time: newTime
    };
    setNewTitle("");
    setNewContact("");
    setNewDate("");
    setNewTime("")

    props.appointHandler(appoint);
  };
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <form className="forms" onSubmit={handleSubmit}>
          <label> Title: </label>
          <input onChange={addTitle} type="text" value={newTitle} />
          <br />
          <label>Contact: </label>
          <ContactPicker contacts={props.contacts} addContact={addContact}/>
          <br />
          <label> Date: </label>
          <input
            onChange={addDate}
            type="date"
            value={newDate}
            min={getTodayString()}
          />
          <br />
          <label> Time: </label>
          <input onChange={addTime} type="time" value={newTime} />
          <br />

          <button type="submit" onClick="">
            ENTER
          </button>
        </form>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList objArr={props.appointments} />
      </section>
    </div>
  );
};
