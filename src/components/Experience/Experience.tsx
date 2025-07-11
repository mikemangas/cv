import React from 'react';
import data from '../../data/data.json';

export default function Experience() {
  return (
	<h1 className="Experience">
	    {data.workExperience.map((exp, index) => (
	      <div key={index}>
	        <h2>{exp.position}</h2>
	        <p>{exp.company} - {exp.location}</p>
	        <p>{exp.startDate} - {exp.endDate}</p>
	        <p>{exp.description}</p>
	      </div>
	    ))} 
	</h1>
  );
}