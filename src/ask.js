import React, { useState } from 'react';

//i tried to use state object from app.js, but it didn't work, you cannot get state value from component other than using hook, which I never learn, I deplyed the hood (use state), it shows something emty, maybe because things rendered before api/backend call, but it shouldn't happen in react because everything should update all the time. if everything failed, try to use prop.

const Ask = () => {

    const i = useState();

    console.log(i);

    return (
        <div>
            Pick your Questions
            {/* <button>{App.state.questionlist.choice[0].question}</button> */}
            <button>Question 2</button>
            <button>Question 3</button>
        </div>
    )
}

export default Ask;