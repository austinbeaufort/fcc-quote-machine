(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t,e,n){t.exports={container:"QuoteBox_container__3v0zL",btn:"QuoteBox_btn__1FR7d"}},,,,,,function(t,e,n){t.exports={btn:"TweetButton_btn__32JCI"}},function(t,e,n){t.exports={quote:"Quote_quote__1T-WP"}},,,function(t,e,n){t.exports=n(19)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(3),c=n.n(r),u=(n(17),n(18),n(4)),i=n(5),s=n(9),l=n(6),h=n(10),m=function(t){return a.a.createElement("h3",{id:"author"},t.author)},f=n(7),d=n.n(f),b=function(t){return a.a.createElement(a.a.Fragment,null,a.a.createElement("a",{href:"https://twitter.com/intent/tweet",rel:"noopener noreferrer",target:"_blank",id:"tweet-quote"},a.a.createElement("button",{className:d.a.btn},"Tweet Quote!")))},w=n(8),p=n.n(w),v=function(t){return a.a.createElement("h2",{className:p.a.quote,id:"text"},t.quote)},q=n(1),E=n.n(q),_=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).state={quote:"",author:""},n}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(function(t){return t.json()}).then(function(e){var n=e.quotes[Math.ceil(102*Math.random())],o=n.quote,a=n.author;t.setState({quote:o,author:a})})}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:E.a.container},a.a.createElement(v,{quote:this.state.quote}),a.a.createElement(m,{author:this.state.author}),a.a.createElement("button",{className:E.a.btn,id:"new-quote",onClick:function(){return t.componentDidMount()}},"New Quote"),a.a.createElement(b,null))}}]),e}(o.Component);var g=function(){return a.a.createElement("div",{className:"App",id:"quote-box"},a.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.69967a1b.chunk.js.map