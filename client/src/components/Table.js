import React, { Component } from 'react'
import './Table.css'

export class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
          direction: {
            Asset: '',
            ChangeDay: '',
            Action: '',
            RecommendationStatus: '',
            Area: '',
            Zone: '',
            Bank: '',
            Stand: '',
            NetWin: '',
            OldDenom: '',
            NewDenom: '',
            OldPaybackPct: '',
            NewPaybackPct: '',
            Date: ''
          },
          grouping: {
            Bank: '',
            Area: '',
            Zone: '',
            OldDenom: ''
          }
        };
      }


      componentDidMount() {
        this.loadData()
      }

      loadData = () => {
        fetch('/recommendations')
        .then(res => res.json())
        .then(items =>
          this.setState({ items: items, isLoaded: true }, () =>
            console.log('Items fetched...', items)
          )
        )
        .catch(e => {
          console.log(`An error occured: ${e}`);
        });
      }

      sortBy = (key) => {
        this.setState({
          items: this.state.items.sort( (a, b) => (
            this.state.direction[key] === 'asc'
            ? parseFloat(a[key]) - parseFloat(b[key])
            : parseFloat(b[key]) - parseFloat(a[key])
          )),
          direction: {
            [key]: this.state.direction[key] === 'asc'
            ? 'desc'
            : 'asc'
          }
        })
      }

      groupBy = (key) => {
        this.setState({

        })
      }

  
  

    render() {

        const { items } = this.state;

        return (
  
                <section>
                               
                    <table className="table highlight responsive-table">
                        <thead className="table-head">
                            <th 
                              className="asset"
                              onClick={() => this.sortBy('Asset')}>
                              Asset
                            </th>
                            <th 
                              className="action" 
                              onClick={() => this.sortBy('Action')}>
                              Action
                            </th>
                            <th 
                              className="status"
                              onClick={() => this.sortBy('RecommendedStatus')}>
                              Status
                            </th>
                            <th 
                              className="area"
                              onClick={() => this.sortBy('Area')}>
                              Area
                            </th>
                            <th 
                              className="zone"
                              onClick={() => this.sortBy('Zone')}>
                              Zone
                            </th>
                            <th 
                              className="bank"
                              onClick={() => this.sortBy('Bank')}>
                              Bank
                            </th>
                            <th 
                              className="stand" 
                              onClick={() => this.sortBy('Stand')}>
                              Stand
                            </th>
                            <th 
                              className="netwin"
                              onClick={() => this.sortBy('NetWin')}>
                                Net Win
                            </th>
                            <th 
                              className="old-denom"
                              onClick={() => this.sortBy('OldDenom')}>
                              Old Denom
                            </th>
                            <th 
                              className="new-denom"
                              onClick={() => this.sortBy('NewDenom')}>
                              New Denom
                            </th>
                            <th  
                              className="old-payback-pct"
                              onClick={() => this.sortBy('OldPaybackPct')}>
                              Old Payback Percentage
                            </th>
                            <th 
                              className="new-payback-pct"
                              onClick={() => this.sortBy('NewPaybackPct')}>
                              New Payback Percentage
                            </th>
                            <th 
                              className="date"
                              onClick={() => this.sortBy('Date')}>
                              Date
                            </th>
                        </thead>
                        <tbody>
                            {items
                            .map(item => (
                                <tr>
                                <td key={item.Asset}>{item.Asset}</td>
                                <td>{item.Action}</td>
                                <td>{item.RecommendationStatus}</td>
                                <td>{item.Area}</td>
                                <td>{item.Bank}</td>
                                <td>{item.Zone}</td>
                                <td>{item.Stand}</td>
                                <td>{item.NetWin}</td>
                                <td>{item.OldDenom}</td>
                                <td>{item.NewDenom}</td>
                                <td>{item.OldPaybackPct}</td>
                                <td>{item.NewPaybackPct}</td>
                                <td>{item.Date}</td>
                                </tr>
                            ))}
                       </tbody>
                    </table>
                </section>
        )
    }
}

export default Table;