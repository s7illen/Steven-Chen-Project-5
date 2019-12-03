import React, { Component } from 'react';

class Ask extends Component {
    constructor() {
        super();
        this.state = {
            userChoice: {},
            display: true
        }
    }

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