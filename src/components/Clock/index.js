import React from "react";
import { connect } from "react-redux";

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          date: new Date(),
      };
    }
    componentWillMount(){
        this.isOpened = alert('Hello');
        
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );  
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
      this.isHidden = alert('Bye bye!');
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      console.log(this.props)
      return (
        <div>
          <h1>Hello World</h1>
          <h2>Now is{this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  export default Clock;