(this["webpackJsonpfake-interview"]=this["webpackJsonpfake-interview"]||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/trump0.b7139b39.gif"},28:function(e,t,a){e.exports=a.p+"static/media/reporterimg.3bcd0c5a.png"},29:function(e,t,a){e.exports=a.p+"static/media/boss.9c0a39b6.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/trumpDefault.5edb7909.png"},31:function(e,t,a){e.exports=a.p+"static/media/trumpPlus1.ff1fb72d.gif"},32:function(e,t,a){e.exports=a.p+"static/media/trumpPlus2.35e95cec.gif"},33:function(e,t,a){e.exports=a.p+"static/media/trumpPlus3.3215cfc3.gif"},34:function(e,t,a){e.exports=a.p+"static/media/trumpMinus1.a3bd8ef1.gif"},35:function(e,t,a){e.exports=a.p+"static/media/trumpMinus2.eb211291.gif"},36:function(e,t,a){e.exports=a.p+"static/media/trumpMinus3.486cf56e.gif"},37:function(e,t,a){e.exports=a.p+"static/media/trump-head.a31f24db.png"},38:function(e,t,a){e.exports=a.p+"static/media/trump-body.ac1c0f54.png"},42:function(e,t,a){e.exports=a(71)},47:function(e,t,a){},66:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(26),r=a.n(i),o=(a(47),a(41)),l=a(3),c=a(4),u=a(6),m=a(5),d=a(7),p=a(11),h=a.n(p);a(48);h.a.initializeApp({apiKey:"AIzaSyD-w3DBlvAvvRskQNSF1yoKrrcRN_oTE0w",authDomain:"fake-interview.firebaseapp.com",databaseURL:"https://fake-interview.firebaseio.com",projectId:"fake-interview",storageBucket:"fake-interview.appspot.com",messagingSenderId:"284782516391",appId:"1:284782516391:web:c14c49534de8257f39a382"});var f=h.a,v=a(27),g=a.n(v),w=a(28),y=a.n(w),E=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"chatGrid"},s.a.createElement("div",{className:"leftDialog"},this.props.askedQuestion.map((function(e){return s.a.createElement("div",{className:"leftChat"},s.a.createElement("p",null,e.trumpTalk))}))),s.a.createElement("div",{className:"rightDialog"},this.props.askedQuestion.map((function(e){return s.a.createElement("div",{className:"rightChat"},s.a.createElement("p",{className:"reporterQ"},e.question),s.a.createElement("img",{className:"reporterimg",src:y.a,alt:"User Avatar"}))})))))}}]),t}(n.Component),b=(a(66),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).hander=function(){e.props.handler(e.state.userChoice),e.props.interestHandler(e.state.userChoice.interest),e.props.newsValueHandler(e.state.userChoice.newsValue),e.props.interestChangeHandler(e.state.userChoice.interest)},e.setChoice1=function(){e.props.selected(),e.setState({userChoice:e.props.q1},(function(){e.hander()}))},e.setChoice2=function(){e.props.selected(),e.setState({userChoice:e.props.q2},(function(){e.hander()}))},e.setChoice3=function(){e.props.selected(),e.setState({userChoice:e.props.q3},(function(){e.hander()}))},e.state={userChoice:{},display:!0},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:this.props.questionDisplay?"":"hidden"},s.a.createElement("div",{className:"wrapper ask"},s.a.createElement("button",{className:"askButton",onClick:this.setChoice1},this.props.q1.question),s.a.createElement("button",{className:"askButton",onClick:this.setChoice2},this.props.q2.question),s.a.createElement("button",{className:"askButton",onClick:this.setChoice3},this.props.q3.question)))}}]),t}(n.Component)),N=a(29),k=a.n(N),q=a(30),C=a.n(q),D=function(e){var t=e.resultDisplay,a=e.newsValue,n=e.interest,i="",r="";return 0===n?i="Never ever enter my white house again! LEAVE! You FAKE media!":n<3?i="You are the enemy of the people, I will not invite you again":n<4?i="I don't like your reporting, it's kinda fake":n<5?i="Can you leave now? I need to go golfing right away":n<7?i="I like your questions, but I like my FOX news friends better":n<9?i="Such a great time, let me put your reporting on my twitter":n>=9&&(i="We both are stable genius! Here is my number, call me maybe"),r=a>10?"Such a bombshell! Amazing Interview! I'm giving you a raise!":a>8?"Great job! Better than I expected, headline material!":a>7?"Good effort, now we had some useful information to work on":a>6?"Not good, I was expecting a bombshell, you didn't deliver":a>5?"I'm not impressed, how can we report these shit?":"This interview was hopeless and pointless, You are sacked!",s.a.createElement("div",{className:t?"":"hidden"},s.a.createElement("div",{className:"result"},s.a.createElement("div",{className:"wrapper resultContainer"},s.a.createElement("div",{className:"trumpResult"},s.a.createElement("div",{className:"trumpResultImg"},s.a.createElement("img",{className:"trump",src:C.a,alt:"Trump Image"})),s.a.createElement("p",{className:"resultText"},"Trump: ",i)),s.a.createElement("div",{className:"bossResult"},s.a.createElement("div",{className:"bossResultImg"},s.a.createElement("img",{className:"boss",src:k.a,alt:"Your Boss"})),s.a.createElement("p",{className:"resultText"},"Your Boss: ",r)))))},O=a(12),S=a.n(O),j=a(31),I=a.n(j),x=a(32),T=a.n(x),H=a(33),V=a.n(H),Q=a(34),A=a.n(Q),B=a(35),L=a.n(B),J=a(36),R=a.n(J),F=function(e){var t=e.interest,a=e.interestChange,n=8*t,i=S.a;return i=0===a?S.a:-1===a?A.a:-2===a?L.a:-3===a?R.a:1===a?I.a:2===a?T.a:V.a,s.a.createElement("div",{className:"status"},s.a.createElement("div",{className:"wrapper"},s.a.createElement("img",{className:"trumvatar",src:i,alt:"Donald J. Trump Avatar"}),s.a.createElement("div",{className:"interest"},s.a.createElement("h2",null,"President of United State"),s.a.createElement("div",{className:"interestBar"},s.a.createElement("h3",null,"interest"),s.a.createElement("div",{className:"meter"},s.a.createElement("span",{style:{width:JSON.stringify(n)+"%"}}))))))},M=function(e){var t=8*e.newsValue;return s.a.createElement("div",{className:"wrapper newsValue"},s.a.createElement("h3",null,"News Value"),s.a.createElement("div",{className:"meter"},s.a.createElement("span",{style:{width:JSON.stringify(t)+"%"}})))},U=a(37),Y=a.n(U),W=a(38),G=a.n(W),P=function(){return s.a.createElement("div",{className:"figure"},s.a.createElement("img",{className:"body",src:G.a,alt:"Donald Trump is standing"}),s.a.createElement("img",{className:"head",src:Y.a,alt:"Donald Trump is shaking his head"}))},z=a(39),K=a(40),_=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).hideIt=function(){e.setState({hidden:!0})},e.state={hidden:!1},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:this.state.hidden?"hidden nitro":"nitro"},s.a.createElement("div",{className:"intro"},s.a.createElement("div",{className:"closeToggle",onClick:this.hideIt},"               ",s.a.createElement(z.a,{className:"toggleFont",icon:K.a})),s.a.createElement("div",{className:"wrapper introContent"},s.a.createElement("div",{className:"trumpFigure"},s.a.createElement(P,null)),s.a.createElement("div",{className:"introText"},s.a.createElement("h1",null,"Fake Interview"),s.a.createElement("p",null,"Welcome! You will be playing as a Journalist in this game, and you've given a precious chance to interview the president of United State; Donald J. Trump. We provide you a series of interview questions during the game, all you need to do is to select them. However, there are two major factors you need to consider before starting the interview. First, keep you eyes on the president, if he's not interested in the conversation, he could ask you to leave at any moment. Also, you shouldn't let him answer too comfortably either, some questions may look unpleasant but bring tremendous news value to your company. Remember, your boss is watching!")))))}}]),t}(n.Component),X=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).apiToText=function(){e.state.questionList.forEach((function(e){0!==e.api&&g()({url:"http://proxy.hackeryou.com",dataType:"json",method:"GET",params:{reqUrl:"https://api.tronalddump.io/tag/"+e.api,xmlToJSON:!1}}).then((function(t){e.trumpTalk=t.data._embedded.tags[0].value}))}))},e.displayOrNot=function(){(5===e.state.round||e.state.interest<=0)&&(e.setState({questionDisplay:!1,resultDisplay:!0}),console.log("downdowndown"))},e.questionDisplay=function(){e.setState({question1:e.state.questionList[3*e.state.round],question2:e.state.questionList[3*e.state.round+1],question3:e.state.questionList[3*e.state.round+2]})},e.questionSelected=function(){e.setState({round:e.state.round+1},(function(){e.questionDisplay(),console.log("current round:",e.state.round)}))},e.updateAskedHandler=function(t){e.setState({askedQuestion:[].concat(Object(o.a)(e.state.askedQuestion),[t])},(function(){}))},e.updateInterestHandler=function(t){e.setState({interest:e.state.interest+t},(function(){e.state.interest<0&&e.setState({interest:0}),e.displayOrNot(),console.log("interest"+e.state.interest)}))},e.interestChangeHandler=function(t){e.setState({interestChange:t})},e.newsValueHandler=function(t){e.setState({newsValue:e.state.newsValue+t},(function(){console.log("newsvalue"+e.state.newsValue)}))},e.resultDisplayHandler=function(t){e.setState({resultDisplay:t})},e.state={allQuestions:[],questionList:[],askedQuestion:[],round:0,question1:"",question2:"",question3:"",interest:5,interestChange:0,newsValue:0,questionDisplay:!0,resultDisplay:!1},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.database().ref().on("value",(function(t){var a=t.val().choice;e.setState({allQuestions:a}),console.log(e.state.allQuestions);for(var n=[],s=0;s<18;s++){var i=Math.floor(Math.random()*e.state.allQuestions.length);n.push(e.state.allQuestions[i]),e.state.allQuestions.splice(i,1)}e.setState({questionList:n}),console.log(e.state.questionList),e.apiToText(),e.questionDisplay()}))}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(_,null),s.a.createElement(F,{interest:this.state.interest,interestChange:this.state.interestChange}),s.a.createElement(E,{askedQuestion:this.state.askedQuestion}),s.a.createElement(M,{newsValue:this.state.newsValue}),s.a.createElement(b,{q1:this.state.question1,q2:this.state.question2,q3:this.state.question3,handler:this.updateAskedHandler,interestHandler:this.updateInterestHandler,interestChangeHandler:this.interestChangeHandler,newsValueHandler:this.newsValueHandler,interest:this.state.interest,selected:this.questionSelected,round:this.state.round,resultDisplayHandler:this.resultDisplayHandler,questionDisplay:this.state.questionDisplay}),s.a.createElement(D,{resultDisplay:this.state.resultDisplay,newsValue:this.state.newsValue,interest:this.state.interest}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.c118a12b.chunk.js.map