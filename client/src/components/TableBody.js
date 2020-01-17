import React from 'react';
import TableRow from './TableRow';

const TableBody = (props) => {



    return (
        <tbody>
            <TableRow 
                items={props.items} 
                groupBy={props.groupBy}
             
            />
        </tbody>
    );
}

export default TableBody;


