import React, { Component } from 'react';
import firebase from './firebase';
import axios from 'axios';
import Dialog from './dialog';
import './App.scss';
import Ask from './ask';
import Result from './result';
import Status from './status';
import NewsValue from './newsValue';
import Intro from './intro';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allQuestions: [],
      questionList: [],
      askedQuestion: [],
      round: 0,
      question1: '',
      question2: '',
      question3: '',
      interest: 5,
      interestChange: 0,
      newsValue: 0,
      questionDisplay: true,
      resultDisplay: false
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      const whateverList = response.val().choice;
      this.setState({allQuestions: whateverList});
      const shuffledList = [];
      for (let i = 0; i < 18; i++) {
        const x = Math.floor(Math.random() * this.state.allQuestions.length);
        shuffledList.push(this.state.allQuestions[x]);
        this.state.allQuestions.splice(x, 1);
      }
      this.setState({ questionList: shuffledList });
      this.apiToText();
      this.questionDisplay();
    })
  }

  apiToText = () => {
    this.state.questionList.forEach(
      (i) => {
        if (i.api !== 0) {
          axios({
            url: 'https://proxy.hackeryou.com',
            dataType: 'json',
            method: 'GET',
            params: {
              reqUrl: 'https://api.tronalddump.io/tag/' + i.api,
              xmlToJSON: false
            }
          }).then(function (res) {
            i.trumpTalk = res.data._embedded.tags[0].value;
          })
        }
      }
    )
  }

  displayOrNot = () => {
    if (this.state.round === 5 || this.state.interest <= 0) {
      this.setState({
        questionDisplay: false,
        resultDisplay: true
      });
    }
  }

  questionDisplay = () => {
    this.setState({ question1: this.state.questionList[this.state.round * 3], question2: this.state.questionList[this.state.round * 3 + 1], question3: this.state.questionList[this.state.round * 3 + 2]})
  }

  questionSelected = () => {
    this.setState({ round: this.state.round + 1 },() =>{
    this.questionDisplay();
    });
  }

  updateAskedHandler = (q) => {
    this.setState({ askedQuestion: [...this.state.askedQuestion, q] }) 
  }

  updateInterestHandler = (i) => {
    this.setState({ interest: this.state.interest + i }, () => {
      if (this.state.interest < 0) {
        this.setState({ interest: 0 })
      }
      this.displayOrNot();
    });
  }

  interestChangeHandler = (ic) => {
    this.setState({ interestChange: ic });
  }

  newsValueHandler = (n) => {
    this.setState({ newsValue: this.state.newsValue + n })
  }

  resultDisplayHandler = (r) => {
    this.setState({ resultDisplay: r });
  }

  render() {
    return (
      <div className="App">
        <Intro />
        <Status interest={this.state.interest} interestChange={this.state.interestChange}/>
        <Dialog askedQuestion={this.state.askedQuestion}/>
        <NewsValue newsValue={this.state.newsValue}/>
        <Ask q1={this.state.question1} q2={this.state.question2} q3={this.state.question3} handler={this.updateAskedHandler} interestHandler={this.updateInterestHandler} interestChangeHandler={this.interestChangeHandler} newsValueHandler={this.newsValueHandler} interest={this.state.interest} selected={this.questionSelected} round={this.state.round} resultDisplayHandler={this.resultDisplayHandler} questionDisplay={this.state.questionDisplay}/>
        <Result resultDisplay={this.state.resultDisplay} newsValue={this.state.newsValue} interest={this.state.interest}/>
      </div>
    );
  }
}

export default App;