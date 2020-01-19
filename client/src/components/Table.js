import React, { Fragment } from 'react';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import './Table.css';


const Table = (props) => {
    let table;

    if(!props.groupBy) {
        table = (
            <table className='table highlight responsive-table'>
                <TableHeader sortBy={props.sortBy} />

                {props.items.map((item, i) => {
                    return <TableRow item={item} index={i} />
                })}
            </table>     
        )
    } else {
       table = props.items.map((key, index) => {
         
            const group = Object.entries(props.items[index]).map((attr, i) => {

                    const groupDescription = (
                        <Fragment>
                            <div className="collection group-description">
                                <a href="#!" className="collection-item">Grouped by {props.groupBy} <b>{Object.keys(props.items[index])[i]}</b></a>
                            </div>
                        </Fragment>
                    )
                    const groupTableHeader = (
                        <Fragment>
                            <TableHeader
                                sortBy={props.sortBy}
                                items={props.items} 
                            />
                        </Fragment>
                    );
                    const row = attr[1].map((item, i) => {
                            return <TableRow item={item} index={i} />
                    });

                return (
                        <Fragment>
                        {groupDescription}
                        <table className="table highlight responsive-table">
                            {groupTableHeader}
                            {row}
                        </table>
                        </Fragment>
                    );

            })
            return group;
        }) 
    }    
    return table;
    }

export default Table;


