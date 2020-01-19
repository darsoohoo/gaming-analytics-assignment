import React, { Fragment } from 'react';

const TableRow = (props) => {


    // 
    
    const groupedItemsObj = [
        { 48: 
            [
                { 
                    ChangeDay: '',
                    Action: 'reject',
                    RecommendationStatus: 'rejected',
                    Area: 1,
                    Zone: 6,
                    Bank: 48,
                    Stand: 8,
                    NetWin: 11226,
                    OldDenom: 0.1,
                    NewDenom: 0.1,
                    OldPaybackPct: 90.38,
                    NewPaybackPct: 93.99,
                    Asset: 8919,
                    Date: '2019/06/16'
                },
                { 
                    ChangeDay: '',
                    Action: 'reject',
                    RecommendationStatus: 'rejected',
                    Area: 1,
                    Zone: 6,
                    Bank: 48,
                    Stand: 8,
                    NetWin: 11226,
                    OldDenom: 0.1,
                    NewDenom: 0.1,
                    OldPaybackPct: 90.38,
                    NewPaybackPct: 93.99,
                    Asset: 8917,
                    Date: '2019/06/16' 
                }
            ] 
        },
        { 37: 
            [
                {
                    ChangeDay: '',
                    Action: 'accept',
                    RecommendationStatus: 'accepted',
                    Area: 1,
                    Zone: 6,
                    Bank: 37,
                    Stand: 2,
                    NetWin: 6188,
                    OldDenom: 0.1,
                    NewDenom: 0.1,
                    OldPaybackPct: 89.98,
                    NewPaybackPct: 91.97,
                    Asset: 1529,
                    Date: '2019/06/16'
                }
            ] 
        },
        { 50: 
            [
                { 
                    ChangeDay: '',
                    Action: 'accept',
                    RecommendationStatus: 'accepted',
                    Area: 1,
                    Zone: 6,
                    Bank: 50,
                    Stand: 4,
                    NetWin: 0,
                    OldDenom: 0.1,
                    NewDenom: 0.1,
                    OldPaybackPct: 91.94,
                    NewPaybackPct: 91.94,
                    Asset: 7919,
                    Date: '2019/06/16'
                }, 
                { 
                    ChangeDay: '',
                    Action: 'accept',
                    RecommendationStatus: 'accepted',
                    Area: 1,
                    Zone: 6,
                    Bank: 50,
                    Stand: 4,
                    NetWin: 0,
                    OldDenom: 0.1,
                    NewDenom: 0.1,
                    OldPaybackPct: 91.94,
                    NewPaybackPct: 91.94,
                    Asset: 2297,
                    Date: '2019/06/16'
                }
            ] 
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
        console.log("propsitems ",props.items)

        tableRows = props.items.map((key, index) => {
         
            let groupHeader;
            let row;

            
            row = Object.entries(props.items[index]).map((attr, i) => {


            groupHeader = (
                <thead>
                    <th>{Object.keys(props.items[index])[i]}</th>
                </thead>
            )
  
                      
        
                let r = attr[1].map((at, i) => {
                  

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
                            {r}
                        </Fragment>
                    )


            })
            return (
                <Fragment>
                     {/* {groupHeader} */}
                        {row}
                </Fragment>
            )
          
        }) 
  
    
    }

    return tableRows;

}

export default TableRow;