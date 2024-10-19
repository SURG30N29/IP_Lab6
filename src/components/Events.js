import React, { useState } from 'react';
import eventsData from '../data/EventsData.js';

function Events() {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Upcoming Events</h2>
      <div className="row">
        {eventsData.map(event => (
          <EventsTag key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
}

function EventsTag({ id, name, description, url }) {
  const [message, setMessage] = useState('');
  const [button, setButton] = useState(true);

  const handleEventClick = () => {
    setMessage('Event registered successfully!');
    setButton(false);
  };

  return (
    <div className="col-md-4 mb-4" key={id}>
      <div className="card h-100 d-flex flex-column">
        <img src={url} alt={name} className="card-img-top" />
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{description}</p>
          </div>
          <div className="mt-auto">
            {button && (
              <button onClick={handleEventClick} className="btn btn-primary">
                Register Now
              </button>
            )}
            {message && <p className="mt-2 text-success">{message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
