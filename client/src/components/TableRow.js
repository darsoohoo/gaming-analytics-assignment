import React, {Fragment} from 'react';

const TableRow = ({item, key, row}) => {
    return (
        <tr key={key}>
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
    );
}

export default TableRow;