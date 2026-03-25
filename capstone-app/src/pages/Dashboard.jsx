import { useState } from "react";

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const addEvent = () => {
    if (!name || !date) {
      alert("Please fill all fields");
      return;
    }

    const newEvent = {
      id: Date.now(),
      name,
      date,
    };

    setEvents([...events, newEvent]);
    setName("");
    setDate("");
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <h3>Add Event</h3>

      <input
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={addEvent}>Add Event</button>

      <h3>My Events</h3>

      {events.map((event) => (
        <div key={event.id}>
          <p>{event.name} - {event.date}</p>
          <button onClick={() => deleteEvent(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}