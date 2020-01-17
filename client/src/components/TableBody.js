import React from 'react';
import TableRow from './TableRow';

const TableBody = (props) => {
    const tableRows = !props.groupBy ? (
        <div>groupby is null</div>
    ) : (
        <div>groupby is {props.groupBy}</div>
    ) 
    
    // const tableRows = props.items.map((item, i) => {
    //     const row = i+1;
    //     return <TableRow row={row} key={i} item={item} />
    // })




    return (
        <tbody>
            {tableRows}
            {/* {tableRows} */}
        </tbody>
    );
}

export default TableBody;


