import React from 'react';
import random from './random.json'
import './listItems.css'

class listItems extends React.Component {
  constructor(props){
    super(props);
    this.state = {list: null};
  }

  componentDidMount() {
    this.setState({
      list: random.map((item) => 
        <li key={item.index}>{item.balance} {item.name.first} {item.name.last}</li>
      )
    })
  }

  handleClick(e){
    e.preventDefault()
    let id = e.target.id
    let filtered = []
    if(id === "Active"){
      random.filter((item) => {
        if(item.isActive){filtered.push(item)}
        return filtered
      })
    } else if(id === "inActive"){
      random.filter((item) => {
        if(!item.isActive){filtered.push(item)}
        return filtered
      })
    } 
    this.setState({
      list: filtered.map((item) => 
        <li key={item.index}>{item.balance} {item.name.first} {item.name.last}</li>
      )
    })
  }

  render() {
    return (
      <div>
        <button className='button button-left' id="Active" onClick={(e) => this.handleClick(e)}>Active</button>
        <button className='button button-right' id="inActive" onClick={(e) => this.handleClick(e)}>Inactive</button>
        <ul>{this.state.list}</ul>
      </div>
    );
  }
}

export default listItems;
