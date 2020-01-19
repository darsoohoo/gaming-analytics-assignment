import React, { Fragment } from 'react';
import TableHeader from './TableHeader';

const TableRow = (props) => {

    const row = props.index+1;
    const tableRows =           
        (
                <tr key={props.index}>
                    <td>{row}</td>
                    <td>{props.item.Asset}</td>
                    <td>{props.item.Action}</td>
                    <td>{props.item.RecommendationStatus}</td>
                    <td>{props.item.Area}</td>
                    <td>{props.item.Zone}</td>
                    <td>{props.item.Bank}</td>
                    <td>{props.item.Stand}</td>
                    <td>{props.item.NetWin}</td>
                    <td>{props.item.OldDenom}</td>
                    <td>{props.item.NewDenom}</td>
                    <td>{props.item.OldPaybackPct}</td>
                    <td>{props.item.NewPaybackPct}</td>
                    <td>{props.item.Date}</td>
                </tr>
        )
    return tableRows;
}

export default TableRow;