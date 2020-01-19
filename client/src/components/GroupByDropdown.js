import React, { Fragment } from 'react';
import './GroupByDropdown.css';

const GroupByDropdown = props => {
  return (
    <Fragment>
      <div className='grouping-selection'>
        <div className='row'>
          <h6 id='dropdown-name'>Group by</h6>
        </div>
        <div id='grouping-selection-dropdown' className='row'>
          <div className='column'>
            <select
              className='browser-default'
              id='lang'
              onChange={e => props.change(e)}
              value={props.value}
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

          {!props.value ? (
            ''
          ) : (
            <div className='column'>
              <div className='chip'>
                {props.value}
                <i
                  onClick={props.clearGroupBy}
                  className='close material-icons'
                >
                  close
                </i>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default GroupByDropdown;
