(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e){e.exports=["Build","Rancher","Unit Test"]},238:function(e,t,a){e.exports=a(438)},243:function(e,t,a){},438:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),l=a.n(i),c=(a(243),a(29)),s=a(61),o=a(31),u=a(30),m=a(32),p=a(16),d=a(58),b=a.n(d),g=a(59),h=a.n(g),f=a(17),v=a.n(f);var y=Object(p.withStyles)({})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(b.a,{position:"static"},r.a.createElement(h.a,null,r.a.createElement(v.a,{variant:"h6",color:"inherit"},"Pipeline Catalogue"))))}),E=a(10),k=a(64),O=a(19),j=a(20),I=a(33),S=a(41),x=a(5),C=a.n(x),N=a(162),B=a(166),D=a(40),w=a.n(D),A=a(60),T=["Misc"];var R=Object(p.withStyles)(function(e){return{root:Object(j.a)({},e.mixins.gutters(),{marginBottom:2*e.spacing.unit,paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),heading:{fontSize:"24px",marginBottom:2*e.spacing.unit},list:{width:"100%",backgroundColor:e.palette.background.paper},listDragged:{backgroundColor:"lightgrey"},listItemDragged:{backgroundColor:A.pink[500]},listItemTextDragged:{color:"#fff"}}})(function(e){var t=e.classes,a=e.bucketName,n=e.items,i=e.type,l=e.droppableBucket;return r.a.createElement(E.k,{className:t.root,elevation:1},r.a.createElement(E.o,{variant:"h6",component:"h6"},a),r.a.createElement(S.c,{droppableId:"".concat(i,"-").concat(a,"-Droppable"),isDropDisabled:Object(B.a)(T).concat([a]).indexOf(l)<0},function(e,l){return r.a.createElement("div",Object.assign({className:C()(t.list,l.isDraggingOver&&t.listDragged),ref:e.innerRef},e.droppableProps),r.a.createElement(E.g,{dense:!0},n&&n[a]?n[a].map(function(e,n){return r.a.createElement(S.b,{key:e.Name,draggableId:"".concat(i,"-").concat(a,"-").concat(e.Name),index:n},function(a,n){return r.a.createElement(w.a,{rootRef:a.innerRef},r.a.createElement(E.h,Object.assign({},a.draggableProps,a.dragHandleProps,{style:a.draggableProps.style,classes:{root:n.isDragging?t.listItemDragged:void 0}}),r.a.createElement(E.i,{primary:e.Name,classes:{primary:n.isDragging?t.listItemTextDragged:void 0}})))})}):null,e.placeholder))}))});var L=Object(p.withStyles)(function(e){return{heading:{fontSize:"24px",marginBottom:2*e.spacing.unit,marginTop:2*e.spacing.unit}}})(function(e){var t=e.className,a=e.classes,n=e.items,i=e.title,l=e.type,c=e.droppableBucket;return r.a.createElement("div",{className:C()(t,a.root)},r.a.createElement(v.a,{variant:"h2",className:a.heading},i),N.map(function(e){return r.a.createElement(R,{key:e,bucketName:e,items:n,type:l,droppableBucket:c})}))});var J=function(e){var t=e.className,a=e.availableItems,n=e.droppableBucket;return r.a.createElement(L,{className:t,items:a,title:"Available Options",type:"available",droppableBucket:n})};var P=function(e){var t=e.className,a=e.selectedItems,n=e.droppableBucket;return r.a.createElement(L,{className:t,items:a,title:"Selected Options",type:"selected",droppableBucket:n})},V=function(e,t,a){var n=Array.from(e),r=n.splice(t,1),i=Object(I.a)(r,1)[0];return n.splice(a,0,i),n},M=function(e,t,a,n){var r=Array.from(e),i=Array.from(t||[]),l=r.splice(a,1),c=Object(I.a)(l,1)[0];return i.splice(n,0,c),{source:r,destination:i}},z=a(102),G=a.n(z),U=a(165),q=a(103),F=a.n(q),H=a(430),Q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={expanded:null},a.handleChange=function(e){return function(t,n){a.setState({expanded:!!n&&e})}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(U.a)(G.a.mark(function e(){var t,a;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./static/templates/config.template.mst");case 2:return t=e.sent,e.next=5,t.text();case 5:return this.configTemplate=e.sent,e.next=8,fetch("./static/templates/pipeline.template.mst");case 8:return a=e.sent,e.next=11,a.text();case 11:this.pipelineTemplate=e.sent;case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.className,a=e.classes,n=e.usedLibraries,i=e.selectedItems,l=this.state.expanded;return r.a.createElement("div",{className:C()(t,a.root)},r.a.createElement(v.a,{variant:"h2",className:a.heading},"Configurations"),r.a.createElement(E.a,{expanded:"pipeline"===l,onChange:this.handleChange("pipeline")},r.a.createElement(E.c,{expandIcon:r.a.createElement(F.a,null)},r.a.createElement(v.a,{className:a.heading},"Pipeline")),r.a.createElement(E.b,null,r.a.createElement("pre",null,this.pipelineTemplate?H.render(this.pipelineTemplate,{selectedItems:Object.keys(i).map(function(e){return{name:e,commands:i[e].map(function(e){return e.Command}),isVisible:!!i[e]&&i[e].length}})}):null))),r.a.createElement(E.a,{expanded:"config"===l,onChange:this.handleChange("config")},r.a.createElement(E.c,{expandIcon:r.a.createElement(F.a,null)},r.a.createElement(v.a,{className:a.heading},"config/Jenkinsfile.yaml")),r.a.createElement(E.b,null,r.a.createElement("pre",null,this.configTemplate?H.render(this.configTemplate,{libraries:Array.from(n),showLibraries:n.size}):null))))}}]),t}(r.a.Component),W=Object(p.withStyles)(function(e){return{heading:{fontSize:"24px",marginBottom:2*e.spacing.unit,marginTop:2*e.spacing.unit}}})(Q),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={selectedArchetype:Object.keys(a.props.data)[0],availableItems:a.props.data[Object.keys(a.props.data)[0]],selectedItems:{},usedLibraries:new Set,droppableBucket:null},a.handleChange=function(e){a.setState({selectedArchetype:e.target.value,availableItems:a.props.data[e.target.value],selectedItems:{}})},a.onDragEnd=function(e){var t=e.source,n=e.destination;if(n){var r,i,l=a.state,c=l.availableItems,s=l.selectedItems,o=t.droppableId.split("-"),u=Object(I.a)(o,2),m=u[0],p=u[1],d=n.droppableId.split("-"),b=Object(I.a)(d,2),g=b[0],h=b[1];if("available"===m?(r=c,i=s):(r=s,i=c),m===g){var f=V(r[p],t.index,n.index);a.setState(function(e){return"available"===m?{availableItems:Object(j.a)({},e.availableItems,Object(O.a)({},p,f)),droppableBucket:null}:{selectedItems:Object(j.a)({},e.selectedItems,Object(O.a)({},p,f)),droppableBucket:null}})}else{var v=M(r[p],i[h],t.index,n.index);a.setState(function(e){var a=new Set(e.usedLibraries);return"available"===m?(a.add(c[p][t.index].Library),{availableItems:Object(j.a)({},e.availableItems,Object(O.a)({},p,v.source)),selectedItems:Object(j.a)({},e.selectedItems,Object(O.a)({},h,v.destination)),droppableBucket:null,usedLibraries:a}):(a.delete(s[p][t.index].Library),{availableItems:Object(j.a)({},e.availableItems,Object(O.a)({},h,v.destination)),selectedItems:Object(j.a)({},e.selectedItems,Object(O.a)({},p,v.source)),droppableBucket:null,usedLibraries:a})})}}},a.onDragStart=function(e){var t=e.source.droppableId.split("-")[1];a.setState({droppableBucket:t})},a.render=function(){var e=a.props,t=e.className,n=e.classes,i=e.data,l=a.state,c=l.selectedArchetype,s=l.availableItems,o=l.selectedItems,u=l.droppableBucket,m=l.usedLibraries;return r.a.createElement("div",null,r.a.createElement("form",{className:t,autoComplete:"off"},r.a.createElement(E.d,{className:n.formControl},r.a.createElement(E.f,{htmlFor:"arch"},r.a.createElement(E.o,null,"Archetype")),r.a.createElement(E.l,{value:c,onChange:a.handleChange,inputProps:{name:"archetype",id:"arch"}},Object.keys(i).map(function(e){return r.a.createElement(E.j,{key:e,value:e},r.a.createElement(E.o,null,e))})))),r.a.createElement(S.a,{onDragEnd:a.onDragEnd,onDragStart:a.onDragStart},r.a.createElement(E.e,{container:!0,justify:"center",spacing:32},r.a.createElement(E.e,{item:!0,xs:3},r.a.createElement(J,{availableItems:s,droppableBucket:u})),r.a.createElement(E.e,{item:!0,xs:3},r.a.createElement(P,{selectedItems:o,droppableBucket:u})),r.a.createElement(E.e,{item:!0,xs:3},r.a.createElement(W,{usedLibraries:m,selectedItems:o})))))},a}return Object(m.a)(t,e),t}(r.a.Component),K=Object(p.withStyles)(function(e){return{formControl:{minWidth:120,marginTop:e.spacing.unit}}})(_),X=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={currentSol:0},a.onTabClick=function(e,t){a.setState({currentSol:t})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.currentSol;return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("div",{className:e.tabs},r.a.createElement(E.n,{value:t,onChange:this.onTabClick},Object.keys(k).map(function(e){return r.a.createElement(E.m,{key:e,label:e})})),Object.keys(k).map(function(e,a){return t===a?r.a.createElement(K,{key:e,data:k[e]}):null})))}}]),t}(n.Component),Y=Object(p.withStyles)(function(e){return{tabs:{padding:2*e.spacing.unit}}})(X);l.a.render(r.a.createElement(Y,null),document.getElementById("root"))},64:function(e){e.exports={Jenkins:{Java:{"Unit Test":[{Solution:"Jenkins",Archetype:"Java",Name:"SonarQube",Description:"Ability to run Sonar",Command:"Sonarrun",Stage:"Unit Test","Minimum SolutionVersion":"2.12",Version:"1.0",Tags:"Jenkins, Sonar, SharedLib","Github Repo":"github.com/sonar",Platform:"multi",Dependencies:"pipelineplugin",Library:"sonarqube@master",Config:"pipelines/conf/sonarqube.yaml"}]},Node:{Build:[{Solution:"Jenkins",Archetype:"Node",Name:"Build",Description:"Ability to run build",Command:"gulp run",Stage:"build","Minimum SolutionVersion":"2.12",Version:"1.0",Tags:"Jenkins, build, SharedLib","Github Repo":"github.com/nodebuild",Platform:"multi",Dependencies:"pipelineplugin",Library:"nodebuild@master",Config:"pipelines/conf/node_build.yaml"}]}},Ansible:{Role:{Rancher:[{Solution:"Ansible",Archetype:"Role",Name:"Rancher",Description:"Role to install Rancher",Command:"ansible-playbook rancher",Stage:"Rancher","Minimum SolutionVersion":"2.12",Version:"1.0",Tags:"Ansible, Roles, Rancher","Github Repo":"github.com/ansible/rancher",Platform:"multi",Dependencies:"rke, docker",Library:"",Config:""}]}}}}},[[238,2,1]]]);
//# sourceMappingURL=main.a72d0c0c.chunk.js.map