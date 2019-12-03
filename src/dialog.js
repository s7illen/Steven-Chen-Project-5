import React, { Component } from 'react';
import reporterimg from './image/reporterimg.png';

class Dialog extends Component {

    render(){
        return(
            <div className={'wrapper'}>
                <div className={'chatGrid'}>
                    <div className={'leftDialog'}>
                    {this.props.askedQuestion.map((i) => {
                        return (<div className={'leftChat'}><p>{i.trumpTalk}</p></div>)
                        })}
                    </div>


                    <div className={'rightDialog'}>{this.props.askedQuestion.map((i) => {
                        return (<div className={'rightChat'}><p className={'reporterQ'}>{i.question}</p><img className={'reporterimg'} src={reporterimg} alt="User Avatar"></img></div>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialog;