import React from 'react';
import './GroupDescription.css';

const GroupDescription = ({ groupBy, items, index, i }) => {
  return (
    <div className='collection group-description'>
      <a href='#!' className='collection-item'>
        Grouped by {groupBy} <b>{Object.keys(items[index])[i]}</b>
      </a>
    </div>
  );
};

export default GroupDescription;
