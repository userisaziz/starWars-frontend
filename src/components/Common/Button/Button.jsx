import React from 'react';
import './Button.scss';
import { ArrowRight, PreLoader } from '../../../assets/icon';
import capitalizeFirstLetter from '../../../utils/CapitalizeFirstLetter/CapitalizeFirstLetter';
const Button = (props) => {
	const {
		children,
		onClick,
		className = '',
		variant = 'primary',
		isDisabled = false,
		isLoading = false,
		icon,
		type,
		suffix,
	} = props;

	// Determine the appropriate variant class based on the variant prop
	const variantClassName = `Button--${capitalizeFirstLetter(variant)}`;

	// Determine the disabled class based on isDisabled or isLoading state
	const disabledClassName = isDisabled || isLoading ? `Button--Disabled${capitalizeFirstLetter(variant)}` : '';

	// Determine if the button should be disabled
	const isButtonDisabled = isDisabled || isLoading;

	// Define the complete class name for the button
	const customClassName = `Button ${className} ${disabledClassName} ${variantClassName}`;

	// Determine the arrow color for links based on the button state
	const linkArrowColor = isDisabled || isLoading ? '#979797' : '#FF6B6B';

	// Suffix component to render additional content after the button text/icon
	const Suffix = () => (
		<div className="Button--Suffix">
			{capitalizeFirstLetter(variant) === 'Link' ? (
				<ArrowRight color={linkArrowColor} />
			) : (
				suffix // Render the provided suffix if it exists
			)}
		</div>
	);

	return (
		<button className={customClassName} onClick={onClick} disabled={isButtonDisabled} type={type}>
			{/* Render loading spinner if isLoading is true */}
			{isLoading && (
				<div className="Button--Loader">
					<PreLoader strokeWidth={4} />
				</div>
			)}

			{/* Render children (text/icon) and suffix when not loading */}
			{!isLoading && (
				<>
					{icon && <div className="Button--Icon">{icon}</div>}
					{children}
					{(suffix || capitalizeFirstLetter(variant) === 'Link') && <Suffix />}
				</>
			)}
		</button>
	);
};

export default Button;
