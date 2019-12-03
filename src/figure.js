import React from 'react';
import head from './image/trump-head.png';
import body from './image/trump-body.png';

const Figure = () => {




    return (
        <div className={'figure'}>
            <img className={'body'} src={body} alt="Donald Trump is standing"></img>
            <img className={'head'} src={head} alt="Donald Trump is shaking his head"></img>
        </div>
    )


}

export default Figure;