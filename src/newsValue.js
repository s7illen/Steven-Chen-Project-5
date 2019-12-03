import React from 'react';

const NewsValue = (props) => {
    const {newsValue} = props;
    let level = newsValue*8;
        return(
            <div className={'wrapper newsValue'}>
                <h3>News Value</h3>
                <div className="meter">
                    <span style={{width: JSON.stringify(level)+"%"}}></span>
                </div>

            </div>
        )
}

export default NewsValue;