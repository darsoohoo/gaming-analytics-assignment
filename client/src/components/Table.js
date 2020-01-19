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
      groupBy: ''
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

  groupItems = (k) => {
    const { items } = this.state;
 
    let keymap = {};
    for( let i = 0; i < items.length; i++) {
        if(!keymap[items[i][k]]) {
            keymap[items[i][k]] = [];
            keymap[items[i][k]].push(items[i])

        } else {
            keymap[items[i][k]].push(items[i])
        }
    }
  

    this.setState({ items: [keymap] });
}

  onGroupBy = key => {
    this.setState({ groupBy: key }, () => console.log("set GroupBy to", key))
    this.groupItems(key)
    
  };

  clearGroupBy = () => {
    this.setState({ groupBy: '' })
  };

  render() {

    return (
      <section>
        <div className='grouping'>
           {!this.state.groupBy ? "" : `Group by: ${this.state.groupBy}`}
          <button
            className='waves-effect waves-light btn'
            onClick={() => this.onGroupBy('Area')}
          >
            Area
          </button>
          <button
            className='waves-effect waves-light btn'
            onClick={() => this.onGroupBy('Zone')}
          >
            Zone
          </button>
          <button
            className='waves-effect waves-light btn'
            onClick={() => this.onGroupBy('Bank')}
          >
            Bank
          </button>
          <button
            className='waves-effect waves-light btn'
            onClick={() => this.onGroupBy('OldDenom')}
          >
            Old Denom
          </button>
          <button
            className='waves-effect waves-light btn btn-flat'
            onClick={() => this.clearGroupBy()}
          >
            Clear
          </button>
        </div>
        <table className='table highlight responsive-table'>

   
            <TableHeader
              sortBy={this.sortBy}
              items={this.state.items} 
            />
            <TableBody 
              items={this.state.items}
              groupBy={this.state.groupBy}
              onGroupBy={this.onGroupBy} 
            />

        </table>

      </section>
    );
  }
}

export default Table;