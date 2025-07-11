import React from 'react';
import data from '../../data/data.json';
export default function Education() {
  return (
	<h1 className="Education">
	    {data.education.map((edu, index) => (
	      <div key={index}>
	        <h2>{edu.degree}</h2>
	        <p>{edu.institution} - {edu.location}</p>
	        <p>{edu.startDate} - {edu.endDate}</p>
	        <p>{edu.description}</p>
	      </div>
	    ))} 
	</h1>
  );
}