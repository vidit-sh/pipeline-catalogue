(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{242:function(e,t,a){e.exports=a(434)},247:function(e,t,a){},434:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),i=(a(247),a(108)),s=a.n(i),o=a(165),m=a(30),u=a(31),p=a(34),d=a(32),g=a(35),b=a(18),f=a(63),v=a.n(f),h=a(65),E=a.n(h);var y=Object(b.withStyles)(function(e){return{logo:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit}}})(function(e){var t=e.classes;return l.a.createElement("div",{className:t.root},l.a.createElement(v.a,{position:"static"},l.a.createElement(E.a,null,l.a.createElement("img",{className:t.logo,src:"./static/images/lloyds_personal_banking_logo.png",alt:"Lloyds Personal Banking"}))))}),j=a(8),O=a(36),k=a(16),I=a(15),C=a(37),S=a(33),x=a(22),D=a.n(x),N=a(5),w=a.n(N),B=a(169),T=a.n(B);var A=Object(b.withStyles)(function(e){return{listItemDragged:{backgroundColor:e.palette.primary.main},listItemTextDragged:{color:"#fff"},iconButton:{padding:"0px"}}})(function(e){var t=e.classes,a=e.index,n=e.item,r=e.type,c=e.bucketName,i=e.onDeleteClick,s=e.showDeleteButton;return l.a.createElement(S.b,{draggableId:"".concat(r,"-").concat(c,"-").concat(n.Name),index:a},function(e,a){return l.a.createElement(j.n,{rootRef:e.innerRef},l.a.createElement(j.j,Object.assign({},e.draggableProps,e.dragHandleProps,{style:e.draggableProps.style,classes:{root:a.isDragging?t.listItemDragged:void 0}}),l.a.createElement(j.k,{primary:n.Name,classes:{primary:a.isDragging?t.listItemTextDragged:void 0}}),s?l.a.createElement(j.f,{color:"primary",className:t.iconButton,onClick:i},l.a.createElement(T.a,null)):null))})});var R=Object(b.withStyles)(function(e){return{root:Object(I.a)({},e.mixins.gutters(),{marginBottom:2*e.spacing.unit,paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),heading:{fontSize:"24px",marginBottom:2*e.spacing.unit},list:{width:"100%",backgroundColor:e.palette.background.paper},listDragged:{backgroundColor:"lightgrey"}}})(function(e){var t=e.classes,a=e.bucketName,n=e.items,r=e.type,c=e.droppableBucket,i=e.onDeleteClick,s="Default"===a;return l.a.createElement(j.m,{className:t.root,elevation:1},s?null:l.a.createElement(j.r,{variant:"h6"},a),l.a.createElement(S.c,{droppableId:"".concat(r,"-").concat(a,"-Droppable"),isDropDisabled:!(s||a===c)},function(e,c){return l.a.createElement("div",Object.assign({className:w()(t.list,c.isDraggingOver&&t.listDragged),ref:e.innerRef},e.droppableProps),l.a.createElement(j.i,{dense:!0},n&&n.length?n.map(function(e,t){return l.a.createElement(A,{key:e.Name,index:t,item:e,type:r,bucketName:a,onDeleteClick:function(){return i&&i(a,t)},showDeleteButton:!!i})}):l.a.createElement(j.r,{align:"center"},s?"Drag few items here":""),e.placeholder))}))});var P=Object(b.withStyles)(function(e){return{heading:{fontSize:"24px",marginBottom:2*e.spacing.unit,marginTop:2*e.spacing.unit}}})(function(e){var t=e.className,a=e.classes,n=e.items,r=e.title,c=e.type,i=e.droppableBucket,s=e.stages,o=e.onDeleteClick;return l.a.createElement("div",{className:w()(t,a.root)},l.a.createElement(D.a,{variant:"h2",className:a.heading},r),s&&s.length?s.map(function(e){return l.a.createElement(R,{key:e,bucketName:e,items:n[e],type:c,droppableBucket:i})}):l.a.createElement(R,{bucketName:"Default",items:n.Default,type:c,droppableBucket:i,onDeleteClick:o}))});var z=function(e){var t=e.className,a=e.availableItems,n=e.droppableBucket,r=e.stages;return l.a.createElement(P,{className:t,items:a,title:"Available Options",type:"available",droppableBucket:n,stages:r})};var M=function(e){var t=e.className,a=e.selectedItems,n=e.droppableBucket,r=(e.stages,e.onDeleteClick);return l.a.createElement(P,{className:t,items:a,title:"Selected Options",type:"selected",droppableBucket:n,onDeleteClick:r})},W=function(e,t,a){var n=Array.from(e),l=n.splice(t,1),r=Object(C.a)(l,1)[0];return n.splice(a,0,r),n},_=function(e,t,a,n){var l=Array.from(e),r=Array.from(t||[]),c=l.splice(a,1),i=Object(C.a)(c,1)[0];return r.splice(n,0,i),{source:l,destination:r}},J=a(109),L=a.n(J),q=a(170),F=a.n(q),H=a(45),V=a.n(H),G=a(110),K=a.n(G),Q=a(432),U=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={expanded:null,selectedItems:a.props.selectedItems},a.pipelineRef=null,a.configRef=null,a.handleChange=function(e){return function(t,n){a.setState({expanded:!!n&&e})}},a.download=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"file";if(e){var a=new Blob([e]);F()(a,t)}},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.props.selectedItems;if(e.selectedItems&&t!==e.selectedItems){var a=(e.selectedItems.Default||[]).reduce(function(e,t){return Object(I.a)({},e,Object(k.a)({},t.Stage,e[t.Stage]?Object(O.a)(e[t.Stage]).concat([t]):[t]))},{});this.setState({selectedItems:a})}}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.classes,r=t.usedConfigs,c=t.pipelineTemplate,i=t.configTemplate,s=this.state,o=s.expanded,m=s.selectedItems;return l.a.createElement("div",{className:w()(a,n.root)},l.a.createElement(D.a,{variant:"h2",className:n.heading},"Configurations"),l.a.createElement(j.a,{expanded:"pipeline"===o,onChange:this.handleChange("pipeline")},l.a.createElement(j.c,{expandIcon:l.a.createElement(L.a,null)},l.a.createElement(D.a,{className:n.heading,variant:"h3"},"Pipeline")),l.a.createElement(j.b,{className:n.details},l.a.createElement("pre",{className:n.code,ref:function(t){return e.pipelineRef=t}},c?Q.render(c,{selectedItems:Object.keys(m).map(function(e){return{name:e,commands:m[e].reduce(function(e,t){return Array.isArray(t.Command)?e.concat(t.Command):Object(O.a)(e).concat([t.Command])},[]),libraries:m[e].map(function(e){return e.Library}),isStageVisible:!!m[e]&&m[e].length}})}):null),l.a.createElement(V.a,{variant:"contained",color:"primary",size:"small",className:n.btnSave,onClick:function(){e.download(e.pipelineRef.innerText,"pipeline")}},l.a.createElement(K.a,{className:n.btnIcon}),"Save"))),l.a.createElement(j.a,{expanded:"config"===o,onChange:this.handleChange("config")},l.a.createElement(j.c,{expandIcon:l.a.createElement(L.a,null)},l.a.createElement(D.a,{className:n.heading,variant:"h3"},"Config")),l.a.createElement(j.b,{className:n.details},l.a.createElement("pre",{className:n.code,ref:function(t){return e.configRef=t}},i?Q.render(i,{usedConfigs:Array.from(r)}):null),l.a.createElement(V.a,{variant:"contained",color:"primary",size:"small",className:n.btnSave,onClick:function(){e.download(e.configRef.innerText,"config")}},l.a.createElement(K.a,{className:n.btnIcon}),"Save"))))}}]),t}(l.a.Component),X=Object(b.withStyles)(function(e){return{heading:{fontSize:"24px",marginBottom:1*e.spacing.unit,marginTop:1*e.spacing.unit},code:{"flex-basis":"100%","overflow-x":"auto"},btnSave:{marginTop:4*e.spacing.unit,marginBottom:2*e.spacing.unit},btnIcon:{marginRight:e.spacing.unit},details:{"flex-wrap":"wrap"}}})(U),Y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={selectedArchetype:null,availableItems:null,selectedItems:{},usedConfigs:new Set,droppableBucket:null},a.handleChange=function(e){a.setState({selectedArchetype:e.target.value,availableItems:a.props.data[e.target.value],selectedItems:{},usedConfigs:new Set})},a.onDragEnd=function(e){var t=e.source,n=e.destination;if(n){var l,r,c=a.state,i=c.availableItems,s=c.selectedItems,o=t.droppableId.split("-"),m=Object(C.a)(o,2),u=m[0],p=m[1],d=n.droppableId.split("-"),g=Object(C.a)(d,2),b=g[0],f=g[1];if("available"===u?(l=i,r=s):(l=s,r=i),u===b){var v=W(l[p],t.index,n.index);a.setState(function(e){return"available"===u?{availableItems:Object(I.a)({},e.availableItems,Object(k.a)({},p,v)),droppableBucket:null}:{selectedItems:Object(I.a)({},e.selectedItems,Object(k.a)({},p,v)),droppableBucket:null}})}else{var h=_(l[p],r[f],t.index,n.index);a.setState(function(e){var a=new Set(e.usedConfigs);return"available"===u?(a.add(i[p][t.index].Config),{availableItems:Object(I.a)({},e.availableItems,Object(k.a)({},p,h.source)),selectedItems:Object(I.a)({},e.selectedItems,Object(k.a)({},f,h.destination)),droppableBucket:null,usedConfigs:a}):(a.delete(s[p][t.index].Config),{availableItems:Object(I.a)({},e.availableItems,Object(k.a)({},f,h.destination)),selectedItems:Object(I.a)({},e.selectedItems,Object(k.a)({},p,h.source)),droppableBucket:null,usedConfigs:a})})}}},a.onSelectedItemDelete=function(e,t){var n=a.state.selectedItems,l=Object(I.a)({},n[e][t]),r=Object(O.a)(n.Default);r.splice(t,1),a.setState(function(e){return{selectedItems:Object(I.a)({},e.selectedItems,{Default:r}),availableItems:Object(I.a)({},e.availableItems,Object(k.a)({},l.Stage,Object(O.a)(e.availableItems[l.Stage]).concat([l])))}})},a.onDragStart=function(e){var t=e.source.droppableId.split("-")[1];a.setState({droppableBucket:t})},a.render=function(){var e=a.props,t=e.className,n=e.classes,r=e.data,c=e.configTemplate,i=e.pipelineTemplate,s=a.state,o=s.selectedArchetype,m=s.availableItems,u=s.selectedItems,p=s.droppableBucket,d=s.usedConfigs,g=Object.keys(r[o]);return l.a.createElement("div",null,l.a.createElement("form",{className:t,autoComplete:"off"},l.a.createElement(j.d,{className:n.formControl},l.a.createElement(j.g,{htmlFor:"arch"},"Archetype"),l.a.createElement(j.o,{value:o,onChange:a.handleChange,inputProps:{name:"archetype",id:"arch"}},Object.keys(r).map(function(e){return l.a.createElement(j.l,{key:e,value:e},e)})))),l.a.createElement(S.a,{onDragEnd:a.onDragEnd,onDragStart:a.onDragStart},l.a.createElement(j.e,{container:!0,justify:"center",spacing:32},l.a.createElement(j.e,{item:!0,xs:3},l.a.createElement(z,{availableItems:m,droppableBucket:p,stages:g})),l.a.createElement(j.e,{item:!0,xs:3},l.a.createElement(M,{selectedItems:u,droppableBucket:p,onDeleteClick:a.onSelectedItemDelete})),l.a.createElement(j.e,{item:!0,xs:3},l.a.createElement(X,{usedConfigs:d,selectedItems:u,configTemplate:c,pipelineTemplate:i})))))},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.data,t=Object.keys(this.props.data)[0];this.setState({selectedArchetype:t,availableItems:e[t]})}}]),t}(l.a.Component),Z=Object(b.withStyles)(function(e){return{formControl:{minWidth:120,marginTop:e.spacing.unit}}})(Y),$=Object(b.createMuiTheme)({palette:{primary:{main:"#006a4d"}}}),ee=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={currentSol:0,data:null},a.onTabClick=function(e,t){a.setState({currentSol:t})},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=Object(o.a)(s.a.mark(function e(){var t,a,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./static/data/libraries.json");case 2:return t=e.sent,e.next=5,fetch("./static/templates/config.template.mst");case 5:return a=e.sent,e.next=8,a.text();case 8:return this.configTemplate=e.sent,e.next=11,fetch("./static/templates/pipeline.template.mst");case 11:return n=e.sent,e.next=14,n.text();case 14:return this.pipelineTemplate=e.sent,e.t0=this,e.next=18,t.json();case 18:e.t1=e.sent,e.t2={data:e.t1},e.t0.setState.call(e.t0,e.t2);case 21:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.currentSol,r=a.data;return l.a.createElement(b.MuiThemeProvider,{theme:$},r?l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement("div",{className:t.tabs},l.a.createElement(j.q,{value:n,onChange:this.onTabClick,indicatorColor:"primary"},Object.keys(r).map(function(e){return l.a.createElement(j.p,{key:e,label:e})})),Object.keys(r).map(function(t,a){return n===a?l.a.createElement(Z,{key:t,data:r[t],configTemplate:e.configTemplate,pipelineTemplate:e.pipelineTemplate}):null}))):l.a.createElement(j.h,{color:"primary"}))}}]),t}(n.Component),te=Object(b.withStyles)(function(e){return{tabs:{padding:2*e.spacing.unit}}})(ee);c.a.render(l.a.createElement(te,null),document.getElementById("root"))}},[[242,2,1]]]);
//# sourceMappingURL=main.016ec7d7.chunk.js.map