import React, { Component } from 'react';
import firebase from './firebase';
import axios from 'axios';
import Dialog from './dialog';
import './App.css';
import Ask from './ask';
import Result from './result'



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
      display: true,
      quoteList: [],
      interest: 5,
      newsValue: 0
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

    // !!!cannot force re-render after api call's been made, the trumptalk display always renders before the api call, trumptalk can only display correctly after another question button being clicked
    

    if (this.state.askedQuestion.length > 0){
      this.state.askedQuestion.forEach(
        (i) => {
          if(i.api !==0){
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
      console.log(this.state.askedQuestion)
    });
  }

  updateQuoteHandler = (q) => {
    this.setState({ quoteList: [...this.state.quoteList, q] }, () => {
      console.log(this.state.quoteList)
    });
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
  // change state.interest value refer to the askedquestion
  // change newsValue value refer to the askedquestion

  render() {
    return (
      <div className="App">
        <Dialog askedQuestion={this.state.askedQuestion} quoteList={this.state.quoteList} handler={this.updateQuoteHandler}/>
        <Ask q1={this.state.question1} q2={this.state.question2} q3={this.state.question3} handler={this.updateAskedHandler} selected={this.questionSelected} round={this.state.round} displayOrNot={this.displayOrNot}/>
        <Result />
        {/* <button onClick={this.questionSelected}>Question A {this.state.question1.question}</button>
        <button onClick={this.questionSelected}>Question B {this.state.question2.question}</button>
        <button onClick={this.questionSelected}>Question C {this.state.question3.question}</button> */}
      </div>
    );
  }
}

export default App;