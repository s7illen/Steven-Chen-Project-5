import React, { Component } from 'react';
import Figure from './figure';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

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
            <div className={this.state.hidden ? 'hidden nitro' : 'nitro'}>
                <div className={'intro'}>
                    <div className={'closeToggle'} onClick={this.hideIt}>                       <FontAwesomeIcon className={'toggleFont'} icon={faTimesCircle}/>
                    </div>
                    <div className={'wrapper introContent'}>
                        <div className={'trumpFigure'}>
                            <Figure />
                        </div>
                        <div className={'introText'}>
                            <h1>Fake Interview</h1>
                            <p>Welcome! You will be playing as a Journalist in this game, and you've given a precious chance to interview the president of United State; <em>Donald J. Trump</em>. We provide you a series of interview questions during the game, all you need to do is to select them. However, there are two major factors you need to consider before starting the interview. First, keep you eyes on the president, if he's not interested in the conversation, he could ask you to leave at any moment. Also, you shouldn't let him answer too comfortably either, some questions may look unpleasant but bring tremendous news value to your company. Remember, your boss is watching!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Intro;