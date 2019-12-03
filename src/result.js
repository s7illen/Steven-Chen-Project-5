import React from 'react';
import boss from './image/boss.jpg';
import trump from './image/trumpDefault.png';

const Result = (props) => {

    const { resultDisplay, newsValue, interest } = props;

    let trumpResult = '';

    let bossResult = '';

    if (interest === 0) {trumpResult = `Never ever enter my white house again! LEAVE! You FAKE media!`}
    else if (interest < 3) { trumpResult = `You are the enemy of the people, I will not invite you again` }
    else if (interest < 4) { trumpResult = `I don't like your reporting, it's kinda fake` }
    else if (interest < 5) { trumpResult = `Can you leave now? I need to go golfing right away` }
    else if (interest < 7) { trumpResult = `I like your questions, but I like my FOX news friends better` }
    else if (interest < 9) { trumpResult = `Such a great time, let me put your reporting on my twitter` }
    else if (interest >= 9) { trumpResult = `We both are stable genius! Here is my number, call me maybe` }
    

    if (newsValue > 10) { bossResult = `Such a bombshell! Amazing Interview! I'm giving you a raise!`} 
    else if (newsValue > 8) { bossResult = 'Great job! Better than I expected, headline material!'}
    else if (newsValue > 7) { bossResult = 'Good effort, now we had some useful information to work on'}
    else if (newsValue > 6) { bossResult = `Not good, I was expecting a bombshell, you didn't deliver`}
    else if (newsValue > 5) { bossResult = `I'm not impressed, how can we report these shit?`}
    else { bossResult = `This interview was hopeless and pointless, You are sacked!`}




    return (
        <div className={resultDisplay ? '' : 'hidden'}>
            <div className={'result'}>
                <div className={'wrapper resultContainer'}>
                    <div className={"trumpResult"}>
                    <div className={'trumpResultImg'}>
                        <img className={'trump'} src={trump} alt="Trump Image"></img>
                    </div>
                        <p className={'resultText'}>Trump: {trumpResult}</p>
                    </div>
                    <div className={"bossResult"}>
                    <div className={'bossResultImg'}>
                        <img className={'boss'} src={boss} alt="Your Boss"></img>
                    </div>
                        <p className={'resultText'}>Your Boss: {bossResult}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    
}

export default Result;