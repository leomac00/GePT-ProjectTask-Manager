import PropTypes from 'prop-types';
import React from 'react';

export const Button = ({ color, text, onClick }) => {
	return (
		<div>
			<button
				onClick={onClick}
				className="btn"
				style={{ backgroundColor: color }}
			>
				{text}
			</button>
		</div>
	);
};

Button.defaultProps = {
	color: 'black',
};

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func.isRequired,
};

export default Button;
