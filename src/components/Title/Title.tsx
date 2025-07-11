import React from 'react';
import data from '../../data/data.json';
import './Title.css';

export default function Title() {
  return (
	<h1 className="name">
	    {data.firstName} {data.lastName}
	</h1>
  );
}