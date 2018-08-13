import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
    fontColor: 'black',
    fontSize: 12,
    fontFamily: 'monospace',
    allowEdit: 'true'
    }
  }
 updateColor = (event) => {
  this.setState({
    fontColor: event.target.value
  })
  console.log(this.state.fontColor);
 }

 updateSize = (event) => {
  this.setState({
    fontSize: parseInt(event.target.value)
  })
  console.log(this.state.fontSize);
  
 }

 updateFamily = (event) => {
  this.setState({
    fontFamily: event.target.value
  })
  console.log(this.state.fontFamily);
 }

 updateEditStatus = (event) => {
  this.setState({
    allowEdit: event.target.value
  })
 }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle update={this.updateEditStatus} />
          <ColorChanger update={this.updateColor} allowEdit={this.state.allowEdit}/>
          <SizeChanger update={this.updateSize} allowEdit={this.state.allowEdit} />
          <FamilyChanger update={this.updateFamily} allowEdit={this.state.allowEdit} />
        </div>
        <div className="textArea">
          <TextContainer fontColor={this.state.fontColor} fontsize={this.state.fontSize} fontFamily={this.state.fontFamily} />
        </div>
      </div>
    )
  }
}

export default App;
