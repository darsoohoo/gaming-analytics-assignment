import React from 'react';
import TableRow from './TableRow';

const TableBody = (props) => {



    return (
        <table className='table highlight responsive-table'>
     
            <TableRow 
                items={props.items} 
                groupBy={props.groupBy}
                sortBy={props.sortBy}
             
            />

        </table>
      
    );
}

export default TableBody;


