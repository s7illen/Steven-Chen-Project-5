import React, { Component } from 'react';
import firebase from './firebase';
import axios from 'axios';
import Dialog from './dialog';
import './App.css';
import Ask from './ask';
import Result from './result';
import Status from './status';
import NewsValue from './newsValue';
import Intro from './intro'



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

  //create a function that pick a question randomly from question list(state), save it as a var, also remove it from the question list(state)

  componentDidMount() {

    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {
      // console.log(response.val().choice[0].question);
      const whateverList = response.val().choice;

      // console.log(whateverList);

      this.setState({allQuestions: whateverList});

      console.log(this.state.allQuestions);

      // console.log(this.state.allQuestions.choice.id0.question);

      const shuffledList = [];
      for (let i = 0; i < 18; i++) {
        const x = Math.floor(Math.random() * this.state.allQuestions.length);
        shuffledList.push(this.state.allQuestions[x]);
        this.state.allQuestions.splice(x, 1);
      }
      this.setState({ questionList: shuffledList });
      console.log(this.state.questionList)

      this.apiToText();

      this.questionDisplay();
      // console.log(this.state.question3)

    })



    

    // axios({
    //   url: 'http://proxy.hackeryou.com',
    //   dataType: 'json',
    //   method: 'GET',
    //   params: {
    //     reqUrl: 'https://api.tronalddump.io/tag/Hillary%20Clinton',
    //     xmlToJSON: false
    //   }
    // }).then(function (res) {
    //   const dog = res.data._embedded.tags[0].value;
    //   console.log(dog)
    // });

  }

  componentDidUpdate() {

  //   if (this.state.askedQuestion.length > 0) {
  //       this.state.askedQuestion.forEach( (i) => {
  //         if(i.api !== 0){
            
            // () => {
            //   axios({
            //     url: 'http://proxy.hackeryou.com',
            //     dataType: 'json',
            //     method: 'GET',
            //     params: {
            //       reqUrl: 'https://api.tronalddump.io/tag/' + i.api,
            //       xmlToJSON: false
            //     }
            //   }).then(function (res) {
            //     i.interest = res.data._embedded.tags[0].value
            //   });
  //       // }
        
  //     }
  //   }
  // }

    // (solved) cannot force re-render after api call's been made, the trumptalk display always renders before the api call, trumptalk can only display correctly after another question button being clicked
    

    // if (this.state.askedQuestion.length > 0){
    //   this.state.askedQuestion.forEach(
    //     (i) => {
    //       if(i.api !==0){
    //           axios({
    //             url: 'http://proxy.hackeryou.com',
    //             dataType: 'json',
    //             method: 'GET',
    //             params: {
    //               reqUrl: 'https://api.tronalddump.io/tag/' + i.api,
    //               xmlToJSON: false
    //             }
    //           }).then(function (res) {
    //             i.trumpTalk = res.data._embedded.tags[0].value;
    //           })
    //       }
    //     }
    //   )
    // }

}

 

  // displayOrNot = () => {
  //   if (this.state.round === 1) {
  //     this.setState({ display: false },()=>{
  //       console.log(this.state.display)
  //     });
  //   }
  // }



  // randomQuestion = () => {
  //   // const random = Math.floor(Math.random() * this.state.allQuestions.length);
  //   // const first = this.state.allQuestions[random];
  //   // const shuffled = this.state.allQuestions.sort(() => 0.5 - Math.random());
  //   // let shuffledList = shuffled.slice(0, 8);
  //   //push it to the questionList array
  //   // remove this question from the allQuestions
  //   const shuffledList = [];
  //   for (let i = 0; i < 3; i++) {
  //     const x = Math.floor(Math.random() * this.state.allQuestions.length);
  //     shuffledList.push(this.state.allQuestions[x]);
  //     this.state.allQuestions.splice(x, 1);
  //   }
  //   this.setState({questionList: shuffledList});
  //   console.log(this.state.questionList)
  // }

  apiToText = () => {
    this.state.questionList.forEach(
      (i) => {
        if (i.api !== 0) {
          axios({
            url: 'http://proxy.hackeryou.com',
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
      console.log('downdowndown')
    }
  }

  questionDisplay = () => {
    this.setState({ question1: this.state.questionList[this.state.round * 3], question2: this.state.questionList[this.state.round * 3 + 1], question3: this.state.questionList[this.state.round * 3 + 2]})
  }

  questionSelected = () => {
    this.setState({ round: this.state.round + 1 },() =>{
    this.questionDisplay();
    console.log('current round:', this.state.round)
    });
  }

  updateAskedHandler = (q) => {
    this.setState({ askedQuestion: [...this.state.askedQuestion, q] }, () => {
      // console.log(this.state.askedQuestion)
    });
  }

  updateInterestHandler = (i) => {
    this.setState({ interest: this.state.interest + i }, () => {
      if (this.state.interest < 0) {
        this.setState({ interest: 0 })
      }
      this.displayOrNot();
      console.log('interest'+this.state.interest)
    });
  }

  interestChangeHandler = (ic) => {
    this.setState({ interestChange: ic });
  }

  newsValueHandler = (n) => {
    this.setState({ newsValue: this.state.newsValue + n }, () => {
      console.log('newsvalue'+this.state.newsValue)
    });
  }

  resultDisplayHandler = (r) => {
    this.setState({ resultDisplay: r });
  }


  // stopInterview = () => {
  //   if (this.state.round === 1) {
  //     console.log('555')
  //   }
  // }

  // this.state.askedQuestion.push(q) \/
  // when user selected a question, save it into asked question array \/
  // display the question in dialog section \/
  // get api response refer to the askedquestion \/
  // display the api quote on the page \/
  // change state.interest value refer to the askedquestion \/
  // change newsValue value refer to the askedquestion \/
  // update firebase json file \/
  // show trump reaction meme on status bar \/
  // show result panel after question hidden, show news value & trump interest \/
  // display an intro

  render() {
    return (
      <div className="App">
        <Intro />
        <Status interest={this.state.interest} interestChange={this.state.interestChange}/>
        <Dialog askedQuestion={this.state.askedQuestion}/>
        <NewsValue newsValue={this.state.newsValue}/>
        <Ask q1={this.state.question1} q2={this.state.question2} q3={this.state.question3} handler={this.updateAskedHandler} interestHandler={this.updateInterestHandler} interestChangeHandler={this.interestChangeHandler} newsValueHandler={this.newsValueHandler} interest={this.state.interest} selected={this.questionSelected} round={this.state.round} resultDisplayHandler={this.resultDisplayHandler} questionDisplay={this.state.questionDisplay}/>
        <Result resultDisplay={this.state.resultDisplay} newsValue={this.state.newsValue} interest={this.state.interest}/>
        {/* <button onClick={this.questionSelected}>Question A {this.state.question1.question}</button>
        <button onClick={this.questionSelected}>Question B {this.state.question2.question}</button>
        <button onClick={this.questionSelected}>Question C {this.state.question3.question}</button> */}
      </div>
    );
  }
}

export default App;