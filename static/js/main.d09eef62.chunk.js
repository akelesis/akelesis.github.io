(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{20:function(e,a,t){e.exports=t(46)},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(18),r=t.n(o),l=(t(25),t(26),t(3)),s=t(4),i=t(6),u=t(5),m=t(7),d=(t(27),function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("header",{className:"cep-header"},c.a.createElement("div",{className:"logo-settings"},c.a.createElement("h3",null,"PESQUISA DE ENDERE\xc7O")))}}]),a}(n.Component)),p=t(19),h=t(2),g=(t(28),t(8)),E=t.n(g),f=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).state={cep:"",endereco:"",uf:""},t.getCEP=t.getCEP.bind(Object(h.a)(t)),t.handleChange=t.handleChange.bind(Object(h.a)(t)),t.getLocal=t.getLocal.bind(Object(h.a)(t)),t.transformaLocal=t.transformaLocal.bind(Object(h.a)(t)),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"getCEP",value:function(){var e=this;E.a.get("https://viacep.com.br/ws/".concat(this.state.cep,"/json")).then((function(a){console.log(a.data),e.setState((function(e){return{endereco:"".concat(a.data.logradouro," - Bairro ").concat(a.data.bairro,", ").concat(a.data.localidade," - ").concat(a.data.uf,", ").concat(a.data.cep,", Brasil")}}))}))}},{key:"getLocal",value:function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(this.transformaLocal):alert("Este navegador n\xe3o tem suporte para geolocaliza\xe7\xe3o!")}},{key:"transformaLocal",value:function(e){var a=this;E.a.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(e.coords.latitude,",").concat(e.coords.longitude,"&key=AIzaSyBUzTymXXri50Wo62RLkwfRBT-EYDy6x3g")).then((function(e){a.setState((function(a){return{endereco:e.data.results[0].formatted_address}}))}))}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},this.state,{cep:e.target.value}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"principal"},c.a.createElement("div",{className:"pesquisa"},c.a.createElement("div",{className:"pesquisa-cep"},c.a.createElement("label",{className:"pesquisa-label"},"Insira o CEP: "),c.a.createElement("input",{type:"text",className:"cep",onChange:this.handleChange,value:this.state.cep}),c.a.createElement("button",{className:"botao-cep",onClick:this.getCEP},"Pesquisar")),c.a.createElement("div",{className:"texto-separador"},c.a.createElement("h3",null,"OU")),c.a.createElement("div",{className:"pesquisa-local"},c.a.createElement("button",{className:"btn-pesquisa",onClick:this.getLocal},"Capturar Localiza\xe7\xe3o ",c.a.createElement("i",{className:"fas fa-map-marker-alt"})))),c.a.createElement("hr",null),c.a.createElement("div",{className:"resultado"},c.a.createElement("p",null,this.state.endereco)))}}]),a}(n.Component);var b=function(){return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.d09eef62.chunk.js.map