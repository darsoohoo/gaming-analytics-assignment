import React, { Fragment } from 'react';
import './Table.css';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import GroupDescription from './GroupDescription';

const Table = props => {
  let table;

  if (!props.groupBy) {
    table = (
      <table id='table' className='highlight responsive-table'>
        <TableHeader sortBy={props.sortBy} />
        {props.items.map((item, i) => {
          return <TableRow item={item} index={i} />;
        })}
      </table>
    );
  } else {
    table = props.items.map((key, index) => {
      const group = Object.entries(props.items[index]).map((attr, i) => {
        const groupDescription = (
          <GroupDescription
            groupBy={props.groupBy}
            items={props.items}
            index={index}
            i={i}
          />
        );
        const groupTableHeader = (
          <TableHeader sortBy={props.sortBy} direction={props.direction} />
        );
        const row = attr[1].map((item, i) => {
          return <TableRow item={item} index={i} />;
        });

        return (
          <Fragment>
            {groupDescription}
            <table id='table' className='highlight responsive-table'>
              {groupTableHeader}
              {row}
            </table>
          </Fragment>
        );
      });
      return group;
    });
  }
  return table;
};

export default Table;
