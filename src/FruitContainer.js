import React, {Component} from 'react';

const FruitList = props => (
  <ul>
     {props.fruits.map(fruit => <li>{fruit}</li>)}
  </ul>
)

const FruitFilter = props => (
  <div>
    <label htmlFor="fruit-filter">Filter these Fruits: </label>
    <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter" />
  </div>
)


class FruitContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      fruitsToDisplay: props.fruits,
      unmatchedFruits: [],
      filterValue: ''
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange(event) {
    event.preventDefault()
    const filterValue = event.target.value;
    this.setState((prevState, props) => {
      console.log(props)
      // remove fruits that don't contain the filter value
      const filteredFruitList = props.fruits.filter(fruit =>
        fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));
      const unmatchedFruits = props.fruits.filter(fruit =>
        !fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()));
      // return new state with the filtered fruit list and the new value of the filter
      return {
        fruitsToDisplay: filteredFruitList,
        unmatchedFruits: unmatchedFruits,
        filterValue
      }
    })
  }

  render() {
    return (
      <div>
        <FruitFilter value={this.state.filterValue} onChange={this.handleFilterChange} />
        <h3> Matching </h3>
        <FruitList fruits={this.state.fruitsToDisplay} />
        <h3> Not-Matching </h3>
        <FruitList fruits={this.state.unmatchedFruits} />
      </div>
    )
  }

}

export default FruitContainer
