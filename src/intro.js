import React, { Component } from 'react';

class Intro extends Component{
    constructor() {
        super();
        this.state = {
            hidden: false
        }
    }



    hideIt = () => {
        this.setState({hidden:true})
    }

    render() {
        return (
            <div className={this.state.hidden ? 'hidden' : ''}>
                <div>
                    <div className={'closeToggle'} onClick={this.hideIt}>x</div>
                    <div className={'introText'}>
                        <h1>How to play</h1>
                        <p>Welcome! You will be playing as a Journalist in this game, and you've given a precious chance to interview the president of United State; Donald J. Trump. We provide you a series of interview questions during the game, all you need to do is to select the choice. However, there are two major factors you need to consider before starting the interview. First, keep you eyes on the president, if you keep asking questions that he's not interested, he could ask to leave at any moment. Also, you shouldn't let him be too comfortable either, some questions may look unpleasant but bring tremendous news value to our news agency. Remember, your boss is watching!</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Intro;