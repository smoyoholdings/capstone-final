import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";

export default function Dashboard() {
  const { events, addEvent, deleteEvent } = useContext(EventContext);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = () => {
    if (!name || !date) {
      alert("Fill all fields");
      return;
    }

    addEvent({
      id: Date.now(),
      name,
      date,
    });

    setName("");
    setDate("");
  };

  return (
    <div>
      <h1>Dashboard</h1>

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

      <button onClick={handleAdd}>Add Event</button>

      {events.map((event) => (
        <div key={event.id}>
          <p>{event.name} - {event.date}</p>
          <button onClick={() => deleteEvent(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}