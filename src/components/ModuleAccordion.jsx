import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa'; // Importa todos os ícones de Font Awesome
import ProgressBar from './ProgressBar';
import { Link } from 'react-router-dom';

function ModuleAccordion({ module }) {
  const [isOpen, setIsOpen] = useState(false);

  // Pega o componente de ícone dinamicamente pelo nome
  const IconComponent = FaIcons[module.icon] || FaIcons.FaBook;

  // Simulação de progresso (a lógica real virá do usuário)
  const completedLessons = 0; 
  const totalLessons = module.lessons.length;

  return (
    <div className="accordion-card">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="accordion-icon">
          <IconComponent size={30} />
        </div>
        <div className="accordion-title-container">
          <h2>{module.title}</h2>
          <span className="lesson-count">{`${completedLessons} / ${totalLessons} aulas`}</span>
          <ProgressBar completed={completedLessons} total={totalLessons} />
        </div>
        <div className="accordion-toggle-icon">
          {isOpen ? <FaIcons.FaChevronUp /> : <FaIcons.FaChevronDown />}
        </div>
      </div>

      {isOpen && (
        <div className="accordion-content">
          <ul>
            {module.lessons.map((lesson, index) => (
              <li key={lesson._id}>
                <Link to={`/lesson/${lesson._id}`} className="lesson-link">
                  <span className="lesson-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="lesson-title">{lesson.title}</span>
                  {/* Ícone de "completo" (a lógica virá depois) */}
                  <FaIcons.FaRegCheckCircle className="lesson-status-icon" /> 
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ModuleAccordion;