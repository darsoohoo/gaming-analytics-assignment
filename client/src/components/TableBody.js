import React from 'react';
import TableRow from './TableRow';

const TableBody = (props) => {
    const tableRows = props.items.map((item, i) => {
        const row = i+1;
        return <TableRow row={row} key={i} item={item} />
})
    return (
        <tbody>
            {tableRows}
        </tbody>
    );
}

export default TableBody;
