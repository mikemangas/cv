import React from 'react';
import data from '../../data/data.json';

export default function Knowledge() {
  return (
	<h1 className="Knowledge">
		Knowledge
	    {data.knowledge.map((item, index) => (
		  <div key={index}>
			<h2>{item}</h2>
		  </div>
		))} 
	</h1>
  );
}