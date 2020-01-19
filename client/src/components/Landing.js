import React, { Component } from 'react';
import './Landing.css';
import Table from './Table';


export class Landing extends Component {
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
      groupBy: '',
      value: 'select'
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

  clearGroupBy = () => {
    this.setState({ groupBy: '' })
    this.loadData();
  };

  change = (event) => {
    if(event.target.value === 'Clear') {
      this.clearGroupBy();
    } else {
      this.setState({groupBy: event.target.value});
      this.groupItems(event.target.value)
    }

}

  render() {

    return (
      <section className="container landing">
        <div className='grouping-selection'>
        <label>Group by</label>
              <select className="browser-default" id="lang" onChange={(e) => this.change(e)} value={this.state.groupBy}>
                  <option value="Select">Select</option>
                  <option value="Clear">Clear</option>
                  <option value="Asset">Asset</option>
                  <option value="Action">Action</option>
                  <option value="Status">Status</option>
                  <option value="Area">Area</option>
                  <option value="Zone">Zone</option>
                  <option value="Bank">Bank</option>
                  <option value="Stand">Stand</option>
                  <option value="NetWin">Net Win</option>
                  <option value="OldDenom">Old Denom</option>
                  <option value="NewDenom">New Denom</option>
                  <option value="OldPaybackPct">Old Payback %</option>
                  <option value="NewPaybackPct">New Payback %</option>
                  <option value="Date">Date</option>
               </select>
        </div>
            <Table 
              items={this.state.items}
              groupBy={this.state.groupBy}
              onGroupBy={this.onGroupBy} 
              sortBy={this.sortBy}
            />
      </section>
    );
  }
}

export default Landing;