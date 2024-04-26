import React from 'react';
import './Modal.scss';
import Typography from '../Typography/Typography';

const Modal = (props) => {
	const { className, isOpen, onClose, children, title } = props;

	const customizeClassName = `Modal ${className}`;

	const handleModalClose = () => onClose(false);
	return (
		<React.Fragment>
			{isOpen && (
				<div className={customizeClassName}>
					<div className="Modal--Backdrop" onClick={handleModalClose}></div>
					<div className="Modal--Content">
						<Typography className="Modal--Title">{title}</Typography>

						<hr className="Modal--Divider" />
						{children && <div className="Modal--Body">{children}</div>}
					</div>
				</div>
			)}
		</React.Fragment>
	);
};

export default Modal;
