import React, { Fragment } from 'react';
import TableHeader from './TableHeader';

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
        return (
            <Fragment>
                <TableHeader
                    sortBy={props.sortBy}
                    items={props.items} 
                />
                {tableRows}
            </Fragment>
        )
    } else {

        tableRows = props.items.map((key, index) => {
         
           const group = Object.entries(props.items[index]).map((attr, i) => {

                const groupHeader = (
                    <Fragment>
                         Group by
                            {props.groupBy}
                            {Object.keys(props.items[index])[i]}
                        
                        <i class="tiny material-icons">insert_chart</i>
                        <TableHeader
                            sortBy={props.sortBy}
                            items={props.items} 
                        />
                    </Fragment>
                )
                const row = attr[1].map((at, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{at.Asset}</td>
                                <td>{at.Action}</td>
                                <td>{at.RecommendationStatus}</td>
                                <td>{at.Area}</td>
                                <td>{at.Zone}</td>
                                <td>{at.Bank}</td>
                                <td>{at.Stand}</td>
                                <td>{at.NetWin}</td>
                                <td>{at.OldDenom}</td>
                                <td>{at.NewDenom}</td>
                                <td>{at.OldPaybackPct}</td>
                                <td>{at.NewPaybackPct}</td>
                                <td>{at.Date}</td>
                            </tr>
                        )
                    })
                    return (
                        <Fragment>
                            {groupHeader}
                            {row}
                        </Fragment>
                    )
            })
            return (
                <Fragment>
                        {group}
                </Fragment>
            )
        }) 
    }
    return tableRows;
}

export default TableRow;