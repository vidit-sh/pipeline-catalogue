(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{241:function(e,t,a){e.exports=a(440)},246:function(e,t,a){},440:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),l=a.n(r),s=(a(246),a(30)),c=a(62),o=a(32),u=a(31),m=a(33),p=a(10),d=a(59),b=a.n(d),g=a(60),f=a.n(g),h=a(17),v=a.n(h);var y=Object(p.withStyles)({})(function(e){var t=e.classes;return i.a.createElement("div",{className:t.root},i.a.createElement(b.a,{position:"static"},i.a.createElement(f.a,null,i.a.createElement(v.a,{variant:"h6",color:"inherit"},"Pipeline Catalogue"))))}),E=a(11),k=a(66),j=a(20),O=a(21),S=a(34),C=a(42),x=a(5),N=a.n(x),I=a(65),B=a(40),w=a.n(B),D=a(61),R=["Misc"];var T=Object(p.withStyles)(function(e){return{root:Object(O.a)({},e.mixins.gutters(),{marginBottom:2*e.spacing.unit,paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),heading:{fontSize:"24px",marginBottom:2*e.spacing.unit},list:{width:"100%",backgroundColor:e.palette.background.paper},listDragged:{backgroundColor:"lightgrey"},listItemDragged:{backgroundColor:D.pink[500]},listItemTextDragged:{color:"#fff"}}})(function(e){var t=e.classes,a=e.bucketName,n=e.items,r=e.type,l=e.droppableBucket;return i.a.createElement(E.k,{className:t.root,elevation:1},i.a.createElement(E.o,{variant:"h6",component:"h6"},a),i.a.createElement(C.c,{droppableId:"".concat(r,"-").concat(a,"-Droppable"),isDropDisabled:Object(I.a)(R).concat([a]).indexOf(l)<0},function(e,l){return i.a.createElement("div",Object.assign({className:N()(t.list,l.isDraggingOver&&t.listDragged),ref:e.innerRef},e.droppableProps),i.a.createElement(E.g,{dense:!0},n&&n[a]?n[a].map(function(e,n){return i.a.createElement(C.b,{key:e.Name,draggableId:"".concat(r,"-").concat(a,"-").concat(e.Name),index:n},function(a,n){return i.a.createElement(w.a,{rootRef:a.innerRef},i.a.createElement(E.h,Object.assign({},a.draggableProps,a.dragHandleProps,{style:a.draggableProps.style,classes:{root:n.isDragging?t.listItemDragged:void 0}}),i.a.createElement(E.i,{primary:e.Name,classes:{primary:n.isDragging?t.listItemTextDragged:void 0}})))})}):null,e.placeholder))}))});var A=Object(p.withStyles)(function(e){return{heading:{fontSize:"24px",marginBottom:2*e.spacing.unit,marginTop:2*e.spacing.unit}}})(function(e){var t=e.className,a=e.classes,n=e.items,r=e.title,l=e.type,s=e.droppableBucket,c=e.stages;return i.a.createElement("div",{className:N()(t,a.root)},i.a.createElement(v.a,{variant:"h2",className:a.heading},r),c.map(function(e){return i.a.createElement(T,{key:e,bucketName:e,items:n,type:l,droppableBucket:s})}))});var J=function(e){var t=e.className,a=e.availableItems,n=e.droppableBucket,r=e.stages;return i.a.createElement(A,{className:t,items:a,title:"Available Options",type:"available",droppableBucket:n,stages:r})};var M=function(e){var t=e.className,a=e.selectedItems,n=e.droppableBucket,r=e.stages;return i.a.createElement(A,{className:t,items:a,title:"Selected Options",type:"selected",droppableBucket:n,stages:r})},P=function(e,t,a){var n=Array.from(e),i=n.splice(t,1),r=Object(S.a)(i,1)[0];return n.splice(a,0,r),n},V=function(e,t,a,n){var i=Array.from(e),r=Array.from(t||[]),l=i.splice(a,1),s=Object(S.a)(l,1)[0];return r.splice(n,0,s),{source:i,destination:r}},L=a(106),z=a.n(L),G=a(169),U=a(107),_=a.n(U),q=a(170),F=a.n(q),H=a(41),Q=a.n(H),W=a(108),K=a.n(W),X=a(432),Y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={expanded:null},a.pipelineRef=null,a.configRef=null,a.handleChange=function(e){return function(t,n){a.setState({expanded:!!n&&e})}},a.download=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"file";if(e){var a=new Blob([e]);F()(a,t)}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(G.a)(z.a.mark(function e(){var t,a;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./static/templates/config.template.mst");case 2:return t=e.sent,e.next=5,t.text();case 5:return this.configTemplate=e.sent,e.next=8,fetch("./static/templates/pipeline.template.mst");case 8:return a=e.sent,e.next=11,a.text();case 11:this.pipelineTemplate=e.sent;case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.classes,r=t.usedConfigs,l=t.selectedItems,s=this.state.expanded;return i.a.createElement("div",{className:N()(a,n.root)},i.a.createElement(v.a,{variant:"h2",className:n.heading},"Configurations"),i.a.createElement(E.a,{expanded:"pipeline"===s,onChange:this.handleChange("pipeline")},i.a.createElement(E.c,{expandIcon:i.a.createElement(_.a,null)},i.a.createElement(v.a,{className:n.heading},"Pipeline")),i.a.createElement(E.b,{className:n.details},i.a.createElement("pre",{className:n.code,ref:function(t){return e.pipelineRef=t}},this.pipelineTemplate?X.render(this.pipelineTemplate,{selectedItems:Object.keys(l).map(function(e){return{name:e,commands:l[e].reduce(function(e,t){return Array.isArray(t.Command)?e.concat(t.Command):Object(I.a)(e).concat([t.Command])},[]),libraries:l[e].map(function(e){return e.Library}),isStageVisible:!!l[e]&&l[e].length}})}):null),i.a.createElement(Q.a,{variant:"contained",color:"secondary",size:"small",className:n.btnSave,onClick:function(){e.download(e.pipelineRef.innerText,"pipeline")}},i.a.createElement(K.a,{className:n.btnIcon}),"Save"))),i.a.createElement(E.a,{expanded:"config"===s,onChange:this.handleChange("config")},i.a.createElement(E.c,{expandIcon:i.a.createElement(_.a,null)},i.a.createElement(v.a,{className:n.heading},"Config")),i.a.createElement(E.b,{className:n.details},i.a.createElement("pre",{className:n.code,ref:function(t){return e.configRef=t}},this.configTemplate?X.render(this.configTemplate,{usedConfigs:Array.from(r)}):null),i.a.createElement(Q.a,{variant:"contained",color:"secondary",size:"small",className:n.btnSave,onClick:function(){e.download(e.configRef.innerText,"config")}},i.a.createElement(K.a,{className:n.btnIcon}),"Save"))))}}]),t}(i.a.Component),Z=Object(p.withStyles)(function(e){return{heading:{fontSize:"24px",marginBottom:2*e.spacing.unit,marginTop:2*e.spacing.unit},code:{"flex-basis":"100%"},btnSave:{marginTop:4*e.spacing.unit,marginBottom:2*e.spacing.unit},btnIcon:{marginRight:e.spacing.unit},details:{"flex-wrap":"wrap"}}})(Y),$=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedArchetype:Object.keys(a.props.data)[0],availableItems:a.props.data[Object.keys(a.props.data)[0]],selectedItems:{},usedConfigs:new Set,droppableBucket:null},a.handleChange=function(e){a.setState({selectedArchetype:e.target.value,availableItems:a.props.data[e.target.value],selectedItems:{},usedConfigs:new Set})},a.onDragEnd=function(e){var t=e.source,n=e.destination;if(n){var i,r,l=a.state,s=l.availableItems,c=l.selectedItems,o=t.droppableId.split("-"),u=Object(S.a)(o,2),m=u[0],p=u[1],d=n.droppableId.split("-"),b=Object(S.a)(d,2),g=b[0],f=b[1];if("available"===m?(i=s,r=c):(i=c,r=s),m===g){var h=P(i[p],t.index,n.index);a.setState(function(e){return"available"===m?{availableItems:Object(O.a)({},e.availableItems,Object(j.a)({},p,h)),droppableBucket:null}:{selectedItems:Object(O.a)({},e.selectedItems,Object(j.a)({},p,h)),droppableBucket:null}})}else{var v=V(i[p],r[f],t.index,n.index);a.setState(function(e){var a=new Set(e.usedConfigs);return"available"===m?(a.add(s[p][t.index].Config),{availableItems:Object(O.a)({},e.availableItems,Object(j.a)({},p,v.source)),selectedItems:Object(O.a)({},e.selectedItems,Object(j.a)({},f,v.destination)),droppableBucket:null,usedConfigs:a}):(a.delete(c[p][t.index].Config),{availableItems:Object(O.a)({},e.availableItems,Object(j.a)({},f,v.destination)),selectedItems:Object(O.a)({},e.selectedItems,Object(j.a)({},p,v.source)),droppableBucket:null,usedConfigs:a})})}}},a.onDragStart=function(e){var t=e.source.droppableId.split("-")[1];a.setState({droppableBucket:t})},a.render=function(){var e=a.props,t=e.className,n=e.classes,r=e.data,l=a.state,s=l.selectedArchetype,c=l.availableItems,o=l.selectedItems,u=l.droppableBucket,m=l.usedConfigs,p=Object.keys(r[s]);return i.a.createElement("div",null,i.a.createElement("form",{className:t,autoComplete:"off"},i.a.createElement(E.d,{className:n.formControl},i.a.createElement(E.f,{htmlFor:"arch"},i.a.createElement(E.o,null,"Archetype")),i.a.createElement(E.l,{value:s,onChange:a.handleChange,inputProps:{name:"archetype",id:"arch"}},Object.keys(r).map(function(e){return i.a.createElement(E.j,{key:e,value:e},i.a.createElement(E.o,null,e))})))),i.a.createElement(C.a,{onDragEnd:a.onDragEnd,onDragStart:a.onDragStart},i.a.createElement(E.e,{container:!0,justify:"center",spacing:32},i.a.createElement(E.e,{item:!0,xs:3},i.a.createElement(J,{availableItems:c,droppableBucket:u,stages:p})),i.a.createElement(E.e,{item:!0,xs:3},i.a.createElement(M,{selectedItems:o,droppableBucket:u,stages:p})),i.a.createElement(E.e,{item:!0,xs:3},i.a.createElement(Z,{usedConfigs:m,selectedItems:o})))))},a}return Object(m.a)(t,e),t}(i.a.Component),ee=Object(p.withStyles)(function(e){return{formControl:{minWidth:120,marginTop:e.spacing.unit}}})($),te=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={currentSol:0},a.onTabClick=function(e,t){a.setState({currentSol:t})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.currentSol;return i.a.createElement("div",null,i.a.createElement(y,null),i.a.createElement("div",{className:e.tabs},i.a.createElement(E.n,{value:t,onChange:this.onTabClick},Object.keys(k).map(function(e){return i.a.createElement(E.m,{key:e,label:e})})),Object.keys(k).map(function(e,a){return t===a?i.a.createElement(ee,{key:e,data:k[e]}):null})))}}]),t}(n.Component),ae=Object(p.withStyles)(function(e){return{tabs:{padding:2*e.spacing.unit}}})(te);l.a.render(i.a.createElement(ae,null),document.getElementById("root"))},66:function(e){e.exports={Jenkins:{Java:{"Unit Test":[{Solution:"Jenkins",Archetype:"Java",Name:"SonarQube",Description:"Ability to run Sonar",Command:["Sonarrun","exit"],Stage:"Unit Test","Minimum SolutionVersion":"2.12",Version:"1.0",Tags:"Jenkins, Sonar, SharedLib","Github Repo":"github.com/sonar",Platform:"multi",Dependencies:"pipelineplugin",Library:"sonarqube@master",Config:"pipelines/conf/sonarqube.yaml"}],MavenBuild:[{Solution:"Jenkins",Archetype:"Java",Name:"Maven Java Build",Description:"Creating an build archive for a Java project using Maven as build tool.",Command:"runMavenBuild",Stage:"Build","Minimum SolutionVersion":"2.12",Version:"1.0",Tags:"Jenkins, Maven, Java, Build, Unix_only","Github Repo":"https://github.lbg.eu-gb.bluemix.net/jenkins-shared-library/java-maven-build_nix",Platform:"nix",Dependencies:"workflowLibs",Library:"maven-bulid@master",Config:"pipelines/conf/build.yaml"}]},NodeJS:{NPMBuild:[{Solution:"Jenkins",Archetype:"Java",Name:"NodeJS NPM Build",Description:"Creating an build archive for a NodeJS project using NPM scripts as build tool.",Command:"runNPMBuild",Stage:"Build","Minimum SolutionVersion":"2.12",Version:"1.0",Tags:"Jenkins, NodeJS, NPM, Build, Unix_only","Github Repo":"https://github.lbg.eu-gb.bluemix.net/jenkins-shared-library/build-nodejs_nix",Platform:"nix",Dependencies:"workflowLibs",Library:"npm-bulid@master",Config:"pipelines/conf/build.yaml"}]}},Ansible:{Role:{Rancher:[{Solution:"Ansible",Archetype:"Role",Name:"Rancher",Description:"Role to install Rancher",Command:"ansible-playbook rancher",Stage:"Rancher","Minimum SolutionVersion":"2.12",Version:"1.0",Tags:"Ansible, Roles, Rancher","Github Repo":"github.com/ansible/rancher",Platform:"multi",Dependencies:"rke, docker",Library:"",Config:""}]}}}}},[[241,2,1]]]);
//# sourceMappingURL=main.f7254d90.chunk.js.map