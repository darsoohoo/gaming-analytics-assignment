import React, {Fragment} from 'react';

const TableRow = (props) => {

    let tableRows;
    if(!props.groupBy) {
        tableRows = props.items.map((item, i) => {
            const row = i+1;
            return (
                <tr key={i}>
                <td>{row}</td>
                <td>{item.Asset}</td>
                <td>{item.Action}</td>
                <td>{item.RecommendationStatus}</td>
                <td>{item.Area}</td>
                <td>{item.Zone}</td>
                <td>{item.Bank}</td>
                <td>{item.Stand}</td>
                <td>{item.NetWin}</td>
                <td>{item.OldDenom}</td>
                <td>{item.NewDenom}</td>
                <td>{item.OldPaybackPct}</td>
                <td>{item.NewPaybackPct}</td>
                <td>{item.Date}</td>
            </tr>
            )
        })
    } else {
    tableRows =    <div>{props.items[0][0]}</div>
        }
        
    return tableRows;
}

export default TableRow;