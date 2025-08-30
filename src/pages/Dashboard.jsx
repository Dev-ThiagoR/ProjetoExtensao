import React, { useState, useEffect } from 'react';
import { fetchContent } from '../services/contentService';
import ModuleAccordion from '../components/ModuleAccordion';

function Dashboard() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      try {
        const response = await fetchContent();
        setModules(response.data);
      } catch (error) {
        console.error('Falha ao buscar conteúdo', error);
      }
    };
    getContent();
  }, []);

  return (
    <div className="container">
      <div className="dashboard-header">
        <h1>Meus Cursos</h1>
        <p>Continue de onde você parou.</p>
      </div>

      <div className="dashboard-grid">
        {modules.map(module => (
          <ModuleAccordion key={module._id} module={module} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;