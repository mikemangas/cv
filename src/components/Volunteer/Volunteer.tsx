import React from 'react';
import data from '../../data/data.json';
export default function  Volunteer() {
  return (
	<h1 className="Volunteer">
	    {data.volunteer.map((vol, index) => (
		  <div key={index}>
			<h2>{vol.role}</h2>
			<p>{vol.organization} - {vol.location}</p>
			<p>{vol.startDate} - {vol.endDate}</p>
			<p>{vol.description}</p>
		  </div>
		))} 
	</h1>
  );
}