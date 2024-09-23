import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../services/api';
import Card from '../../components/CardEvent'; 
import AppBar from '../../components/AppBar';

function Home() {
  const [events, setEvents] = useState([]);

  async function getEvents() {
    const eventsApi = await api.get('/event/all');
    setEvents(eventsApi.data);
  }

  const handleDelete = async (id) => {
    await api.delete(`/event/${id}`); // Call API to delete event
    setEvents(prevEvents => prevEvents.filter(event => event.id !== id)); 
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      <AppBar />
      <div className='container'>
        {events.map((event) => (
          <Card key={event.id} event={event} onDelete={handleDelete} /> 
        ))}
      </div>
    </div>
  );
}

export default Home;
