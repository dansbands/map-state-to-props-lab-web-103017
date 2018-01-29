import React, { Component } from 'react';
import UserInput from './components/UserInput'
import { ConnectedUsers } from './components/Users'

export class App extends Component {
  render() {
    console.log('App', this.props);
    return (
      <div className="App">
        <UserInput store={this.props.store}/>
        <ConnectedUsers />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { users: state.users }
// }
//
// export default connect(mapStateToProps)(App);
export default App;
