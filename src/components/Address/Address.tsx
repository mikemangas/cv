import React from 'react';
import data from '../../data/data.json';

export default function Address() {
  return (
	<h1 className="address">
	    {data.street}, {data.zip} {data.city}, {data.country}, {data.phone}
	</h1>
  );
}