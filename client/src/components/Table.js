import React, { Component } from 'react';
import './Table.css';
import TableHeader from './TableHeader';
import TableBody from './TableBody';


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
      }
    };
  }

  componentDidMount() {
    this.loadData();
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
  };

  sortBy = key => {
    if (key === 'Date') {
      const dateParser = this.state.items.map(item => {
        const date = new Date(item[key]);
        const month = date.getUTCMonth(item[key]);
        const year = date.getUTCFullYear(item[key]);
        const day = date.getDate();
        const formattedDate = year + '/' + (month + 1) + '/' + day;
        item[key] = formattedDate;
        item.dateAsNumber = Date.parse(formattedDate);
        return item;
      });
      this.setState({
        items: dateParser.sort((a, b) =>
          this.state.direction[key] === 'asc'
            ? a.dateAsNumber - b.dateAsNumber
            : b.dateAsNumber - a.dateAsNumber
        ),
        direction: {
          [key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc'
        }
      });
    } else if ('number' === typeof(this.state.items[0][key])) {
      this.setState({
        items: this.state.items.sort((a, b) =>
          this.state.direction[key] === 'asc'
            ? parseFloat(a[key]) - parseFloat(b[key])
            : parseFloat(b[key]) - parseFloat(a[key])
        ),
        direction: {
          [key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc'
        }
      });
    } else if ('string' === typeof(this.state.items[0][key])) {
      this.setState({
        items: this.state.items.sort((a, b) =>
          this.state.direction[key] === 'asc'
            ? (a[key]).localeCompare(b[key])
            : (b[key]).localeCompare(a[key])
        ),
        direction: {
          [key]: this.state.direction[key] === 'asc' ? 'desc' : 'asc'
        }
      });
    }
  };

  groupBy = key => {
    this.setState({
      items: this.state.items.sort((a, b) =>
        this.state.groupBy[key] === 'asc'
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key])
      ),
      groupBy: {
        [key]: this.state.groupBy[key] === 'asc' ? 'desc' : 'asc'
      }
    });
  };

  render() {

    const groupedItems = [
    
      {48: [{
          Asset: 8919,
          Area: 1,
          Zone: 2,
          Bank: 48
      },
      {
          Asset: 8918,
          Area: 1,
          Zone: 2,
          Bank: 48
      },
      {
          Asset: 1097,
          Area: 1,
          Zone: 2,
          Bank: 48
      }]
    },
    {37: [{
          Asset: 1529,
          Area: 1,
          Zone: 2,
          Bank: 37
      },
      {
          Asset: 3097,
          Area: 1,
          Zone: 2,
          Bank: 37
      }]
    },
    {50: [{
          Asset: 7919,
          Area: 1,
          Zone: 2,
          Bank: 50
      },
      {
          Asset: 2297,
          Area: 1,
          Zone: 2,
          Bank: 50
      }]
    }
  ]
  console.log(groupedItems)


    return (
      <section>
        <div className='grouping'>
          Group by
          <button
            className='waves-effect waves-light btn'
            onClick={() => this.groupBy('Area')}
          >
            Area
          </button>
          <button
            className='waves-effect waves-light btn'
            onClick={() => this.groupBy('Zone')}
          >
            Zone
          </button>
          <button
            className='waves-effect waves-light btn'
            onClick={() => this.groupBy('Bank')}
          >
            Bank
          </button>
          <button
            className='waves-effect waves-light btn'
            onClick={() => this.groupBy('OldDenom')}
          >
            Old Denom
          </button>
        </div>

        <table className='table highlight responsive-table'>
        <thead className='table-head'>
            <th>Row</th>
            <th className='asset' onClick={() => this.ortBy('Asset')}>
                Asset
            </th>
            <th className='area' onClick={() => this.sortBy('Area')}>
                Area
            </th>
            <th className='zone' onClick={() => this.sortBy('Zone')}>
                Zone
            </th>
            <th className='bank' onClick={() => this.sortBy('Bank')}>
                Bank
            </th>
          </thead>
          <tbody>
      
          </tbody>

          
       

        </table>

        <table className='table highlight responsive-table'>
          <TableHeader
            sortBy={this.sortBy}
            items={this.state.items} 
          />

          <TableBody 
            items={this.state.items} 
          />
       

        </table>
      </section>
    );
  }
}

export default Table;
