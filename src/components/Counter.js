import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
    incrementIfOdd = () => {
        // Stretch Problem: Implement an increment function that
        // only increments if the counter value is odd
        if (this.props.count % 2 !==0) {
            this.props.increment();
        }
    };

    incrementAsync = () => {
        // Stretch Problem: Implement an increment function that
        // increments after waiting for one second
        setTimeout(() => 
            this.props.increment(), 1000);
    };

    render() {
        console.log(this.props)
        // Fill in the two button onClick methods
        // Upon clicking these buttons, the count
        // should decrement or increment accordingly
        return (
            <p>
                Clicked: {this.props.count} times
                <button onClick={() => {this.props.increment(this.props.count)}}>
                    +
                </button>
                <button onClick={() => {this.props.decrement(this.props.count)}}>
                    -
                </button>
                 {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
                <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                <button onClick={this.incrementAsync}>
                    Increment async
                </button> 
            </p>
        );
    }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.


//Step IV - create the mapStateToProps funciton... passes in state as an argument, and returns the parts of state needed for this component as props.
//Then pass mapStateToProps into the connect argument
const mapStateToProps = (state) => {
    return {
        count: state.count
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.

//Step III, import connect and call it wtice. The first call takes in a function and an object. The function brings
//in pieces of state to this component as props
//the object brings in action creators as props
//This is a higher order component which takes in our component and adds to it the props we want it to have

export default connect(mapStateToProps, { increment, decrement })(Counter);
