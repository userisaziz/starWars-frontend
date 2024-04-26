import React from 'react';
import './ProfileCard.scss';
import ProfileIcon from '../../../assets/icon/ProfileIcon/ProfileIcon';

const ProfileCard = ({ name, profileUrl }) => {
	return (
		<div className="card">
			<div className="profileImage">
				<ProfileIcon />
			</div>
			<div className="textContainer">
				<p className="name">{name}</p>
				<a href={profileUrl} className="profile">
					Profile
				</a>
			</div>
		</div>
	);
};

export default ProfileCard;
