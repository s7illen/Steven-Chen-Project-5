(this["webpackJsonpfake-interview"]=this["webpackJsonpfake-interview"]||[]).push([[0],{25:function(t,e,n){t.exports=n(51)},30:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n.n(s),o=n(23),i=n.n(o),u=(n(30),n(9)),r=n(2),c=n(3),l=n(5),p=n(4),d=n(6),h=n(8),f=n.n(h);n(32);f.a.initializeApp({apiKey:"AIzaSyD-w3DBlvAvvRskQNSF1yoKrrcRN_oTE0w",authDomain:"fake-interview.firebaseapp.com",databaseURL:"https://fake-interview.firebaseio.com",projectId:"fake-interview",storageBucket:"fake-interview.appspot.com",messagingSenderId:"284782516391",appId:"1:284782516391:web:c14c49534de8257f39a382"});var m=f.a,q=n(24),k=n.n(q),v=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(l.a)(this,Object(p.a)(e).call(this))).state={quote:[],api:[]},t}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){var t=[];this.props.askedQuestion.length>0&&this.props.askedQuestion.forEach((function(e){t.push(e.trumpTalk)})),t.length!==this.state.api.length&&(this.setState({api:t}),console.log(t))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"DIALOG"),this.props.askedQuestion.map((function(t){return a.a.createElement("p",null,t.question)})),this.props.askedQuestion.map((function(t){return a.a.createElement("p",null,t.trumpTalk)})))}}]),e}(s.Component),b=(n(50),function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(l.a)(this,Object(p.a)(e).call(this))).displayOrNot=function(){5===t.props.round&&t.setState({display:!1})},t.setChoice1=function(){t.props.selected(),t.setState({userChoice:t.props.q1},(function(){t.props.handler(t.state.userChoice),t.displayOrNot()}))},t.setChoice2=function(){t.props.selected(),t.setState({userChoice:t.props.q2},(function(){t.props.handler(t.state.userChoice),t.displayOrNot()}))},t.setChoice3=function(){t.props.selected(),t.setState({userChoice:t.props.q3},(function(){t.props.handler(t.state.userChoice),t.displayOrNot()}))},t.state={userChoice:{},display:!0},t}return Object(d.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:this.state.display?"":"hidden"},a.a.createElement("button",{onClick:this.setChoice1},"Question A ",this.props.q1.question),a.a.createElement("button",{onClick:this.setChoice2},"Question B ",this.props.q2.question),a.a.createElement("button",{onClick:this.setChoice3},"Question C ",this.props.q3.question))}}]),e}(s.Component)),y=function(){return a.a.createElement("div",null,a.a.createElement("h2",null,"Great Interview"))},O=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(l.a)(this,Object(p.a)(e).call(this))).questionDisplay=function(){t.setState({question1:t.state.questionList[3*t.state.round],question2:t.state.questionList[3*t.state.round+1],question3:t.state.questionList[3*t.state.round+2]})},t.questionSelected=function(){t.setState({round:t.state.round+1},(function(){t.questionDisplay(),console.log("current round:",t.state.round)}))},t.updateAskedHandler=function(e){t.setState({askedQuestion:[].concat(Object(u.a)(t.state.askedQuestion),[e])},(function(){console.log(t.state.askedQuestion)}))},t.updateQuoteHandler=function(e){t.setState({quoteList:[].concat(Object(u.a)(t.state.quoteList),[e])},(function(){console.log(t.state.quoteList)}))},t.state={allQuestions:[],questionList:[],askedQuestion:[],round:0,question1:"",question2:"",question3:"",display:!0,quoteList:[],interest:5,newsValue:0},t}return Object(d.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;m.database().ref().on("value",(function(e){var n=e.val().choice;t.setState({allQuestions:n}),console.log(t.state.allQuestions);for(var s=[],a=0;a<18;a++){var o=Math.floor(Math.random()*t.state.allQuestions.length);s.push(t.state.allQuestions[o]),t.state.allQuestions.splice(o,1)}t.setState({questionList:s}),console.log(t.state.questionList),t.questionDisplay()}))}},{key:"componentDidUpdate",value:function(){this.state.askedQuestion.length>0&&this.state.askedQuestion.forEach((function(t){0!==t.api&&k()({url:"http://proxy.hackeryou.com",dataType:"json",method:"GET",params:{reqUrl:"https://api.tronalddump.io/tag/"+t.api,xmlToJSON:!1}}).then((function(e){t.trumpTalk=e.data._embedded.tags[0].value}))}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(v,{askedQuestion:this.state.askedQuestion,quoteList:this.state.quoteList,handler:this.updateQuoteHandler}),a.a.createElement(b,{q1:this.state.question1,q2:this.state.question2,q3:this.state.question3,handler:this.updateAskedHandler,selected:this.questionSelected,round:this.state.round,displayOrNot:this.displayOrNot}),a.a.createElement(y,null))}}]),e}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.42600a26.chunk.js.map