import React from 'react';

// Estilos inline para simplicidade, mas podem ser movidos para o CSS
const ProgressBarContainer = {
  width: '100%',
  backgroundColor: '#e0e0de',
  borderRadius: '5px',
  marginTop: '10px',
};

const FillerStyles = {
  height: '8px',
  borderRadius: 'inherit',
  textAlign: 'right',
  transition: 'width .2s ease-in',
  backgroundColor: '#0077cc'
};

function ProgressBar({ completed, total }) {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div style={ProgressBarContainer}>
      <div style={{ ...FillerStyles, width: `${percentage}%` }}></div>
    </div>
  );
}

export default ProgressBar;