import React from 'react';
import data from '../../data/data.json';

export default function Socials() {
  return (
	<h1 className="Socials">
		<a href={data.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
		<a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
		<a href={data.socials.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
		<a href={data.socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
	</h1>
  );
}