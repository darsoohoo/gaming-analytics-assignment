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
          groupBy: {
            Bank: '',
            Area: '',
            Zone: '',
            OldDenom: ''
          },
          value: '',
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
        if(key == 'Date')  {
          const dateParser = this.state.items.map(item => {
            item.Date = new Date(item.Date)
            return item;
          })
          this.setState({
            items: dateParser.sort(( a, b) => (a.Date < b.Date))
          })
        } else if ('number' == typeof(this.state.items[0][key])) {

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
        } else if ('string' == typeof(this.state.items[0][key])) {

          this.setState({
            items: this.state.items.sort( (a, b) => (
              this.state.direction[key] === 'asc'
              ? (a[key]) - (b[key])
              : (b[key]) - (a[key])
            )),
            direction: {
              [key]: this.state.direction[key] === 'asc'
              ? 'desc'
              : 'asc'
            }
            })
        }

      }

      groupBy = (key) => {
        this.setState({
          items: this.state.items.sort( (a, b) => 
            this.state.groupBy[key] === 'asc'
            ? parseFloat(a[key]) - parseFloat(b[key])
            : parseFloat(b[key]) - parseFloat(a[key])
          ),
          groupBy: {
            [key]: this.state.groupBy[key] === 'asc'
            ? 'desc'
            : 'asc'
          }
        })


      }

  
  

    render() {

        const { items } = this.state;

        return (

                <section>
                    <div className="grouping">
                      Group by
                      <button className="waves-effect waves-light btn" onClick={() => this.groupBy('Area')}>Area</button>
                      <button className="waves-effect waves-light btn" onClick={() => this.groupBy('Zone')}>Zone</button>
                      <button className="waves-effect waves-light btn" onClick={() => this.groupBy('Bank')}>Bank</button>
                      <button className="waves-effect waves-light btn" onClick={() => this.groupBy('OldDenom')}>Old Denom</button>
                    </div>

                    <table className="table highlight responsive-table">
                        <thead className="table-head">
                          <th>Row</th>
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
                            .map((item, index) => (
                                <tr key={index}>
                                <td >{index+1}</td>
                                <td>{item.Asset}</td>
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