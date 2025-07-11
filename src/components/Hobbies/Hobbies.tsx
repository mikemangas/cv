import React from 'react';
import data from '../../data/data.json';

export default function Hobbies() {
  return (
	<h1 className="Hobbies">
	    {data.hobbies.map((hobby, index) => (
		  <div key={index}>
			<h2>{hobby}</h2>
		  </div>
		))}
	</h1>
  );
}