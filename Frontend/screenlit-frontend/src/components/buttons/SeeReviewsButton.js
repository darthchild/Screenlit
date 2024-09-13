import React, { useState } from 'react';

function SeeReviewsButton({ onClick, className, children }) {
	// Use state to track whether the button is hovered
	const [isHovered, setIsHovered] = useState(false);

	// Define styles for normal and hovered states
	const buttonStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '10px 20px',
		margin: '10px 0',
		borderRadius: '8px',
		border: "none",
		fontSize: '18px',
		cursor: 'pointer',
		width: '150px',
		backgroundColor: isHovered ? '#aaaaaa' : 'white', 
		transform: isHovered ? 'scale(1.05)' : 'scale(1)', 
		transition: 'all 0.3s ease', 
	};

	return (
		<button
			className={className}
			style={buttonStyle}
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)} // Set hover state to true
			onMouseLeave={() => setIsHovered(false)} // Reset hover state
		>
			{children}
		</button>
	);
}

export default SeeReviewsButton;
