import React from 'react';
import './App.css';
// import LifecycleExample from '../LifecycleExample';
import Clock from '../Clock';

class App extends React.Component {
  state = {
    isHidden: false
  }
  render(){
    return (
    <div className="App">
      <button onClick={() => this.setState({isHidden: !this.state.isHidden})}>
        Show/Hide
      </button>
      {this.state.isHidden ? <h4>{this.state.isHidden = alert('hidden')}</h4> : <Clock/>}
    </div>
    );
  }  
}

export default App;
