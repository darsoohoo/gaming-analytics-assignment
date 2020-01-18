import React, { Fragment } from 'react';

const TableRow = (props) => {

    const groupedItems = [
    
        {48: [{
            Asset: 8919,
            ChangeDay: '',
            Action: 'reject',
            RecommendationStatus: 'rejected',
            Area: 1,
            Zone: 1,
            Bank: 99,
            Stand: 3,
            NetWin: 33069,
            OldDenom: 5,
            NewDenom: 1,
            OldPaybackPct: 92.5,
            NewPaybackPct: 94,
            Asset: 8353,
            Date: '2019/06/15'
        },
        {
            ChangeDay: '',
            Action: 'reject',
            RecommendationStatus: 'rejected',
            Area: 1,
            Zone: 1,
            Bank: 99,
            Stand: 2,
            NetWin: 33069,
            OldDenom: 5,
            NewDenom: 1,
            OldPaybackPct: 92.5,
            NewPaybackPct: 94,
            Asset: 8351,
            Date: '2019/06/15'
        },
        {
            ChangeDay: '',
            Action: 'reject',
            RecommendationStatus: 'rejected',
            Area: 1,
            Zone: 1,
            Bank: 99,
            Stand: 1,
            NetWin: 33069,
            OldDenom: 5,
            NewDenom: 1,
            OldPaybackPct: 92.5,
            NewPaybackPct: 94,
            Asset: 8350,
            Date: '2019/06/15'
        },
        {
            ChangeDay: '',
            Action: 'accept',
            RecommendationStatus: 'accepted',
            Area: 1,
            Zone: 1,
            Bank: 35,
            Stand: 6,
            NetWin: 0,
            OldDenom: 1,
            NewDenom: 1,
            OldPaybackPct: 90.04,
            NewPaybackPct: 90.04,
            Asset: 8451,
            Date: '2019/06/15'
        }]
      },
      {37: [{
        ChangeDay: '',
        Action: 'accept',
        RecommendationStatus: 'accepted',
        Area: 1,
        Zone: 6,
        Bank: 129,
        Stand: 6,
        NetWin: 6095,
        OldDenom: 0.1,
        NewDenom: 0.1,
        OldPaybackPct: 90.14,
        NewPaybackPct: 92.1,
        Asset: 4044,
        Date: '2019/06/16'
        },
        {
            ChangeDay: '',
            Action: 'accept',
            RecommendationStatus: 'accepted',
            Area: 1,
            Zone: 6,
            Bank: 129,
            Stand: 5,
            NetWin: 0,
            OldDenom: 0.1,
            NewDenom: 0.1,
            OldPaybackPct: 90.08,
            NewPaybackPct: 90.08,
            Asset: 4043,
            Date: '2019/06/16'
        }]
      },
      {50: [{
        ChangeDay: '',
        Action: 'accept',
        RecommendationStatus: 'accepted',
        Area: 1,
        Zone: 6,
        Bank: 129,
        Stand: 4,
        NetWin: 0,
        OldDenom: 0.1,
        NewDenom: 0.1,
        OldPaybackPct: 91.94,
        NewPaybackPct: 91.94,
        Asset: 4042,
        Date: '2019/06/16'
        },
        {
            ChangeDay: '',
            Action: 'accept',
            RecommendationStatus: 'accepted',
            Area: 1,
            Zone: 6,
            Bank: 129,
            Stand: 3,
            NetWin: 10542,
            OldDenom: 0.1,
            NewDenom: 0.1,
            OldPaybackPct: 90.03,
            NewPaybackPct: 93.42,
            Asset: 4041,
            Date: '2019/06/16'
        },
        {
            ChangeDay: '',
            Action: 'accept',
            RecommendationStatus: 'accepted',
            Area: 1,
            Zone: 6,
            Bank: 129,
            Stand: 2,
            NetWin: 6188,
            OldDenom: 0.1,
            NewDenom: 0.1,
            OldPaybackPct: 89.98,
            NewPaybackPct: 91.97,
            Asset: 4040,
            Date: '2019/06/16'
        }]
      }
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
        tableRows = groupedItems.map((item, i) => {
            
            for(let num in item) {
                
                const groupRow = <tr>{num}</tr>

                for(let key in item[num]) {
                    let row = (
                        <Fragment>
                            <td>{i}</td>
                            <td>{item[num][key].Asset}</td>
                            <td>{item[num][key].Action}</td>
                            <td>{item[num][key].Status}</td>
                            <td>{item[num][key].Area}</td>
                            <td>{item[num][key].Zone}</td>
                            <td>{item[num][key].Bank}</td>
                            <td>{item[num][key].Stand}</td>
                            <td>{item[num][key].NetWin}</td>
                            <td>{item[num][key].OldDenom}</td>
                            <td>{item[num][key].NewDenom}</td>
                            <td>{item[num][key].OldPaybackPct}</td>
                            <td>{item[num][key].NewPaybackPct}</td>
                            <td>{item[num][key].Date}</td>
                        </Fragment>
                    )
                return (
                    <Fragment>
                    {groupRow}
                    {row}
                    </Fragment>

                )
                }
            }
            

        })

    }


      
    return tableRows;
        

}

export default TableRow;