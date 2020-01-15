import React from 'react';


const TableHeader = ({sortBy}) => {
    
  return (
            <thead className='table-head'>
                <th>Row</th>
                <th className='asset' onClick={() => sortBy('Asset')}>
                    Asset
                </th>
                <th className='action' onClick={() => sortBy('Action')}>
                    Action
                </th>
                <th className='status' onClick={() => sortBy('RecommendationStatus')}
                >
                    Status
                </th>
                <th className='area' onClick={() => sortBy('Area')}>
                    Area
                </th>
                <th className='zone' onClick={() => sortBy('Zone')}>
                    Zone
                </th>
                <th className='bank' onClick={() => sortBy('Bank')}>
                    Bank
                </th>
                <th className='stand' onClick={() => sortBy('Stand')}>
                    Stand
                </th>
                <th className='netwin' onClick={() => sortBy('NetWin')}>
                    Net Win
                </th>
                <th className='old-denom' onClick={() => sortBy('OldDenom')}>
                    Old Denom
                </th>
                <th className='new-denom' onClick={() => sortBy('NewDenom')}>
                    New Denom
                </th>
                <th
                    className='old-payback-pct' onClick={() => sortBy('OldPaybackPct')}>
                    Old Payback Percentage
                </th>
                <th
                    className='new-payback-pct' onClick={() => sortBy('NewPaybackPct')}>
                    New Payback Percentage
                </th>
                <th className='date' onClick={() => sortBy('Date')}>
                    Date
                </th>
            </thead>
  );
};

export default TableHeader;
