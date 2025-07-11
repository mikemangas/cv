import React from 'react';
import data from '../../data/data.json';

export default function Languages() {
  return (
	<h1 className="Languages">
	    {data.languages.map((language, index) => (
		  <div key={index}>
			<h2>{language.name} - {language.level}</h2>
		  </div>
		))} 
	</h1>
  );
}