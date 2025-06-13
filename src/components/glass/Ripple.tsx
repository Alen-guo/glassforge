import React, { useRef } from 'react';

interface RippleProps {
  color?: string;
}

const Ripple: React.FC<RippleProps> = ({ color = 'rgba(99,102,241,0.25)' }) => {
  const rippleRef = useRef<HTMLDivElement>(null);

  const createRipple = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const container = rippleRef.current;
    if (!container) return;
    const circle = document.createElement('span');
    const diameter = Math.max(container.clientWidth, container.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - container.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - container.getBoundingClientRect().top - radius}px`;
    circle.className = 'ripple-effect';
    circle.style.background = color;
    container.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  return (
    <div
      ref={rippleRef}
      className="ripple-container"
      onClick={createRipple}
      style={{ position: 'absolute', inset: 0, zIndex: 20, borderRadius: 'inherit', overflow: 'hidden', pointerEvents: 'none' }}
    />
  );
};

export default Ripple; 