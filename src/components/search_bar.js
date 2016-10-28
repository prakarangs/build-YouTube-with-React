// Import React
// This means import React and pull of propertie and call it Component
// const Component = React.Component;
import React, { Component } from "react";


// Declare searchbar and extend to get functionalities from React.component
class SearchBar extends Component {
	// All javascript classes has special function called 'Constructor'
	// Constructor function is the first and only one that is called automatically
	// whenever the new instance of the class is created
	constructor(props) {
		// Call parent method with super
		super(props);

		// Initialize state by creating new object and assign it to this.state
		this.state = { term: "Start value" };
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

  // ** This is the syntax we use to declare a method **
	render() {
		return (
			<div>
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	// onInputChange(event) {
	// 	console.log(event.target.value);
	// }
}

// Export sub set of the code
export default SearchBar;

// Functional component
// --------------------
// We use this when we take in some information and the just output some JSX.
// Functional component can container Class Base component

// Class Base component
// --------------------
// Class base component is just a plain javascript object. When your component
// has more functionalities it's good to refactor from functional component into
// a class base component.
// Rules:
// 1. Every Class Base Component must have a defined render method

// Handling event in React (PROP)
// -----------------------
// 1. Declare an event handler - which is a function that should be run whenever
// the event occurs.
// 2. We pass the event hanler to the element that we want to monitor for events.
// * we pass event as prop in our JSX html

// State
// -----
// Plain js object that is used to record and react to use the events
// Each Class base component has its own 'state object'
// Whenever the state is changed, the component immediately re-render
// 1. Init your state
// : Whenever you use State in your component you need to initialize your State.
// How:
// Create constructor method

// Manipulate your State
// ---------------------
// 1. setState
// 2. ControlField - this is the form that the value is being set by the State
