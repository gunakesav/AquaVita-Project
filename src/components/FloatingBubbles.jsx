import React from 'react';

const FloatingBubbles = () => {
  return (
    <div className="bubbles-container">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
            width: `${20 + Math.random() * 60}px`,
            height: `${20 + Math.random() * 60}px`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
