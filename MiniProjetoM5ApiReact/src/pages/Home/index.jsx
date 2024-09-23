import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../services/api';
import Card from '../../components/CardEvents'; 
import AppBar from '../../components/AppBar';

function Home() {
  const [events, setEvents] = useState([]);

  async function getEvents() {
    const eventsApi = await api.get('/event/all');
    setEvents(eventsApi.data);
  }

  const handleDelete = async (id) => {
    await api.delete(`/event/${id}`); // Chama a API para deletar o evento
    setEvents(prevEvents => prevEvents.filter(event => event.id !== id)); 
  };

 
  const handleSearch = (searchResults) => {
    setEvents(searchResults);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div>
      <AppBar onSearch={handleSearch} /> {/* Passa a função de busca para a AppBar */}
      <div className='container'>
        {events.map((event) => (
          <Card key={event.id} event={event} onDelete={handleDelete} /> 
        ))}
      </div>
    </div>
  );
}

export default Home;
