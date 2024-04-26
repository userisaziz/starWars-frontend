import React from 'react';

import './Card.scss'; // Import your SCSS styles

export const Card = ({ planets }) => {
	return (
		<div className="scroll">
			<div className="container grid-cards">
				{planets.map((planet, index) => (
					<div className="card" key={index}>
						<div className="card-body">
							<h3 className="title-card">{planet.name}</h3>
							<p>
								<strong>Rotation Period:</strong> {planet.rotation_period}
							</p>
							<p>
								<strong>Orbital Period:</strong> {planet.orbital_period}
							</p>
							<p>
								<strong>Diameter:</strong> {planet.diameter}
							</p>
							<p>
								<strong>Climate:</strong> {planet.climate}
							</p>
							<p>
								<strong>Gravity:</strong> {planet.gravity}
							</p>
							<p>
								<strong>Terrain:</strong> {planet.terrain}
							</p>
							<p>
								<strong>Surface Water:</strong> {planet.surface_water}
							</p>
							<p>
								<strong>Population:</strong> {planet.population}
							</p>
							<div className="card-footer">
								<a href={planet.url}>More Info</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
