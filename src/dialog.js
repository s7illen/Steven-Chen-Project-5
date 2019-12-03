import React, { Component } from 'react';
import reporterimg from './image/reporterimg.png';

class Dialog extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         quote: [],
    //         api: [],
    //     }
    // }

    // componentDidMount(){
        
    // }

    // componentDidUpdate(){

        
        //this pushes api to the stateapilist, but because using componentDidUpdate, api pushes 
        

        // let apiList = [];
       

        // if (this.props.askedQuestion.length > 0) {
        //     this.props.askedQuestion.map((i) => {
        //         return (
        //             apiList.push(i.api)
        //         )
        //     })
        // }

        // let apiQuote = 'dsdsdd'; 

        // let getApiQuote = (x) => {
        //     axios({
        //         url: 'http://proxy.hackeryou.com',
        //         dataType: 'json',
        //         method: 'GET',
        //         params: {
        //             reqUrl: 'https://api.tronalddump.io/tag/' + x,
        //             xmlToJSON: false
        //         }
        //     }).then((res) => {
        //         // return res.data._embedded.tags[0].value;
        //         console.log(res.data._embedded.tags[0].value);
        //         // apiQuote = res.data._embedded.tags[0].value
        //         // apiQuote = res.data._embedded.tags[0].value;
        //         // this.setState({ apiData:res.data._embedded.tags[0].value });

        //         // console.log(apiQuote);
        //         apiList.push(res.data._embedded.tags[0].value);
        //     })
        // }

        // apiList.push(getApiQuote(i.api))

        // if (this.props.askedQuestion.length > 0) {
        //     this.props.askedQuestion.forEach((i) => {
        //        apiList.push(i.trumpTalk)
        //     })
        // }

        // if (apiList.length !== this.state.api.length) {
        //     this.setState({ api: apiList })
        //     console.log(apiList)
        // }

        // if (this.state.api.length > 0) {
        //     this.state.api.map((i) => {
        //         if(i===0){return (quoteList.push(i.api))}
        //         else{return 0}
        //     })
        // }


        
        // console.log(this.state.api)

        // let quoteId = '';

        //     this.props.askedQuestion.map((i) => {
        //         return (quoteId = i.api)
        //     }, () => { console.log(quoteId) })



    // }





//this.props.handler(quote)

    //update thequotelist for each question in the askedquestion list


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