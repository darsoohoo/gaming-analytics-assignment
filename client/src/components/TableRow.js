import React, { Fragment } from 'react';

const TableRow = (props) => {


    const groupedItemsObj = [
        { 48: [{ Asset: 8919, Area: 1, Zone: 2, Bank: 48 }, { Asset: 8917, Area: 1, Zone: 2, Bank: 48 }] },
        { 37: [{ Asset: 1529, Area: 1, Zone: 2, Bank: 37 }] },
        { 50: [{ Asset: 7919, Area: 1, Zone: 2, Bank: 50 }, { Asset: 2297, Area: 1, Zone: 2, Bank: 50 }] }
    ]
    
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

        tableRows = groupedItemsObj.map(function(key, index) {
            let row;
           

            let groupRow = <div>{Object.keys(groupedItemsObj[index])}</div>
            
            row = Object.entries(groupedItemsObj[index]).map((attr) => {
                
               let r = attr[1].map((at, i) => {
                    return (
                        <tr>
                            <td>{i + 1}</td>
                            <td>{at.Asset}</td>
                            <td>{at.Area}</td>
                            <td>{at.Zone}</td>
                            <td>{at.Bank}</td>
                        </tr>
                    )

                })
                return r;
            })
            return row;
          
        }) 
  
    
    }

    return tableRows;

}

export default TableRow;