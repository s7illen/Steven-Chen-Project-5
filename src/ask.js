import React, { Component } from 'react';

//i tried to use state object from app.js, but it didn't work, you cannot get state value from component other than using hook, which I never learn, I deplyed the hood (use state), it shows something emty, maybe because things rendered before api/backend call, but it shouldn't happen in react because everything should update all the time. if everything failed, try to use prop.


// transfer questionChoice arr to this component by using props
// display firtst three items.question in the arr by creating three buttons
// whenever user picked a buttons, get another three new items.question from the arr

class Ask extends Component {
    constructor() {
        super();
        this.state = {
            userChoice: {},
            display: true
        }
    }
    
// !cannot make the setChoice DRY due to fail to grab the value on the button

    // displayOrNot = () => {
    //     if (this.props.round === 5 || this.props.interest <= 0 ) {
    //         this.setState({ 
    //             display: false
    //         });
    //         this.props.resultDisplayHandler(true);
    //     }
    // }

    hander = () => {
        this.props.handler(this.state.userChoice)
        this.props.interestHandler(this.state.userChoice.interest);
        this.props.newsValueHandler(this.state.userChoice.newsValue);
        this.props.interestChangeHandler(this.state.userChoice.interest);
    }

    setChoice1 = () => {
        this.props.selected();
        this.setState ({
            userChoice: this.props.q1
        }, () => {
            this.hander()
        });
    }

    setChoice2 = () => {
        this.props.selected();
        this.setState({
            userChoice: this.props.q2
        }, () => {
            this.hander()
        });
    }

    setChoice3 = () => {
        this.props.selected();
        this.setState({
            userChoice: this.props.q3
        }, () => {
            this.hander()
        });
    }


    render(){
        return (
            <div className={this.props.questionDisplay ? '' : 'hidden'}>
                <div className={'wrapper ask'}>
                <button className={'askButton'} onClick={this.setChoice1}>{this.props.q1.question}</button>
                <button className={'askButton'} onClick={this.setChoice2}>{this.props.q2.question}</button>
                <button className={'askButton'} onClick={this.setChoice3}>{this.props.q3.question}</button>
                </div>
            </div>
        )
    }

}

export default Ask;