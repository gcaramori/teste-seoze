import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import FirstModal from './components/firstModal';
import SecondModal from './components/SecondModal';

class App extends Component {
  constructor(props) {    
    super(props);
    this.state = {
      isToggle: false
    };
  }

  closeModal() {
    document.querySelector('.firstContainer').style.display = 'none';
  }


  render() { 
    return (
      <div className="row">
        <div className="col-lg-12">
          <FirstModal passedFunction={this.closeModal} /> 
          <SecondModal />
        </div>
      </div>
    );
  }
}  

export default App;