import React from 'react';
import './GroupByDropdown.css';

const GroupByDropdown = props => {
  return (
    <div className='grouping-selection'>
      <h6>Group by</h6>
      <select
        className='browser-default'
        id='lang'
        onChange={e => props.change(e)}
        value={props.groupBy}
      >
        <option value='Select'>Select</option>
        <option value='Clear'>Clear</option>
        <option value='Asset'>Asset</option>
        <option value='Action'>Action</option>
        <option value='Status'>Status</option>
        <option value='Area'>Area</option>
        <option value='Zone'>Zone</option>
        <option value='Bank'>Bank</option>
        <option value='Stand'>Stand</option>
        <option value='NetWin'>Net Win</option>
        <option value='OldDenom'>Old Denom</option>
        <option value='NewDenom'>New Denom</option>
        <option value='OldPaybackPct'>Old Payback %</option>
        <option value='NewPaybackPct'>New Payback %</option>
        <option value='Date'>Date</option>
      </select>
    </div>
  );
};

export default GroupByDropdown;
