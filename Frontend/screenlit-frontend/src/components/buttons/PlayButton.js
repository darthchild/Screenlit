import React, { useState } from "react";

// Dynamic inline styles
function PlayButton({ className, children }) {
  const [isHovered, setIsHovered] = useState(false); // State to track hover

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    width: "150px",
    backgroundColor: isHovered ? '#8e7900' : '#b49b0f', 
    transform: isHovered ? 'scale(1.05)' : 'scale(1)', 
    transition: 'all 0.3s ease', 
  }

  const playIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );

  return (
    <button
      className={className}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Reset hover state
    >
      {playIcon} {children}
    </button>
  );
}

export default PlayButton;
