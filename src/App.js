import React, { Component } from 'react';
import Badge from './Badge';
import OtherBadge from './OtherBadge';
import './App.css';

var userData = {
  img : 'http://cdn3-www.cattime.com/assets/uploads/gallery/32-impossibly-cute-kittens/cute-kitten-23.jpg',
  name : 'Other name'
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Badge 
        img='http://cdn3-www.cattime.com/assets/uploads/gallery/32-impossibly-cute-kittens/cute-kitten-23.jpg'
        name='Some cat'
        />
       <OtherBadge
        user ={userData}
       />
       
      </div>
    );
  }
}

export default App;
