import React from 'react';
import trump0 from './image/trump0.gif';
import trumpPlus1 from './image/trumpPlus1.gif';
import trumpPlus2 from './image/trumpPlus2.gif';
import trumpPlus3 from './image/trumpPlus3.gif';
import trumpMinus1 from './image/trumpMinus1.gif';
import trumpMinus2 from './image/trumpMinus2.gif';
import trumpMinus3 from './image/trumpMinus3.gif';

const Status = (props) => {
    const {interest, interestChange} = props;
    let level = interest*8;
    let trumpSrc = trump0;

    if (interestChange === 0) {
        trumpSrc = trump0
    } else if (interestChange === -1) {
        trumpSrc = trumpMinus1
    } else if (interestChange === -2) {
        trumpSrc = trumpMinus2
    } else if (interestChange === -3) {
        trumpSrc = trumpMinus3
    } else if (interestChange === 1) {
        trumpSrc = trumpPlus1
    } else if (interestChange === 2) {
        trumpSrc = trumpPlus2
    } else {
        trumpSrc = trumpPlus3
    }
    
    return(
        <div className={'status'}>
            <div className={'wrapper'}>
                <img className={'trumvatar'} src={trumpSrc} alt="Donald J. Trump Avatar"></img>
                <div className={'interest'}>
                <h2>President of United State</h2>
                <div className={'interestBar'}>
                    <h3>interest</h3>
                    <div className="meter">
                        <span style={{width: JSON.stringify(level)+"%"}}></span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Status;