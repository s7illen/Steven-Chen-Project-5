import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebase';
import Status from './status';
import Dialog from './dialog';
import Ask from './ask';
import './App.css';



class App extends Component {
  constructor() {
    super();
    this.state = {
      questionlist:{}
    }
  }

  componentDidMount() {

    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      // console.log(response.val().choice[0].question);
     const whateverList = response.val();

      console.log(whateverList);

      this.setState({questionlist: whateverList});

      console.log(this.state.questionlist.choice[0].question);
    });


    axios({
      url: 'http://proxy.hackeryou.com',
      dataType: 'json',
      method: 'GET',
      params: {
        reqUrl: 'https://api.tronalddump.io/tag/Hillary%20Clinton',
        xmlToJSON: false
      }
    }).then(function (res) {
      const dog = res.data._embedded.tags[0].value;
      console.log(dog)
    });
  }

  render() {
    return (
      <div className="App">
        <Status />
        <Dialog />
        <Ask />
      </div>
    );
  }
}

export default App;


// var randomProperty = function (obj) {
//   var keys = Object.keys(obj)
//   return obj[keys[keys.length * Math.random() << 0]];
// };