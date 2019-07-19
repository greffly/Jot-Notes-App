(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},105:function(e,t,a){},209:function(e,t,a){},211:function(e,t,a){},213:function(e,t,a){},217:function(e,t,a){},219:function(e,t,a){},221:function(e,t,a){},223:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(79),u=a.n(o),r=a(20),s=a(21),l=a(226),m=(a(91),a(93),a(40)),d=a(5),c=a(6),f=a(8),p=a(7),b=a(9),v=a(224),q=a(102),h=a(225),E=a(11),N=a(82),g=a(29);a(97);function O(e){e.tag,e.className,e.childrenm;var t=Object(g.a)(e,["tag","className","childrenm"]);return n.a.createElement(e.tag,Object(N.a)({className:["NavCircleButton",e.className].join(" ")},t),e.children)}O.defaultProps={tag:"a"};var y=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(p.a)(t).call(this,e))).state={hasError:!1},a}return Object(b.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.hasError?n.a.createElement("h2",null,"Could not display this folder."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(i.Component),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(function(e){return e.id===t})},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.filter(function(e){return e.folderId===t}).length};a(99);function _(e){return n.a.createElement("div",{className:"NoteListNav"},n.a.createElement(y,null,n.a.createElement("ul",{className:"NoteListNav__list"},e.folders.map(function(t){return n.a.createElement("li",{key:t.id},n.a.createElement(h.a,{className:"NoteListNav__folder-link",to:"/folder/".concat(t.id)},n.a.createElement("span",{className:"NoteListNav__num-notes"},j(e.notes,t.id)),t.name))}))),n.a.createElement("div",{className:"NoteListNav__button-wrapper"},n.a.createElement(O,{tag:q.a,to:"/add-folder",type:"button",className:"NoteListNav__add-folder-button"},n.a.createElement(E.a,{icon:"plus"}),n.a.createElement("br",null),"Folder")))}_.defaultProps={folders:[]};a(103);function C(e){var t=e.className,a=Object(g.a)(e,["className"]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",Object.assign({className:["Noteful-form",t].join(" "),action:"#"},a)))}a(105);function x(e){return n.a.createElement("div",{className:"NotePageNav"},n.a.createElement(O,{tag:"button",role:"link",onClick:function(){return e.history.goBack()},className:"NotePageNav__back-button"},n.a.createElement(E.a,{icon:"chevron-left"}),n.a.createElement("br",null),"Back"),n.a.createElement(C,null),e.folder&&n.a.createElement("h3",{className:"NotePageNav__folder-name"},e.folder.name))}x.defaultProps={history:{goBack:function(){}}};var A=a(81);a(209);function k(e){return n.a.createElement("div",{className:"Note"},n.a.createElement("h2",{className:"Note__title"},n.a.createElement(q.a,{to:"/note/".concat(e.id)},e.name)),n.a.createElement("button",{className:"Note__delete",type:"button"},n.a.createElement(E.a,{icon:"trash-alt"})," ","remove"),n.a.createElement("div",{className:"Note__dates"},n.a.createElement("div",{className:"Note__dates-modified"},"Modified"," ",n.a.createElement("span",{className:"Date"},Object(A.format)(e.modified,"Do MMM YYYY")))))}var D=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(f.a)(this,Object(p.a)(t).call(this,e))).state={hasError:!1},a}return Object(b.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.hasError?n.a.createElement("h2",null,"Could not display this note."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(i.Component);a(211);function F(e){return n.a.createElement("section",{className:"NoteListMain"},n.a.createElement(D,null,n.a.createElement("ul",null,e.notes.map(function(e){return n.a.createElement("li",{key:e.id},n.a.createElement(k,{id:e.id,name:e.name,modified:e.modified}))}))),n.a.createElement("div",{className:"NoteListMain__button-container"},n.a.createElement(O,{tag:q.a,to:"/add-note",type:"button",className:"NoteListMain__add-note-button"},n.a.createElement(E.a,{icon:"plus"}),n.a.createElement("br",null),"Note")))}F.defaultProps={notes:[]};a(213);function S(e){return n.a.createElement("section",{className:"NotePageMain"},n.a.createElement(k,{id:e.note.id,name:e.note.name,modified:e.note.modified}),n.a.createElement("div",{className:"NotePageMain__content"},e.note.content.split(/\n \r|\n/).map(function(e,t){return n.a.createElement("p",{key:t},e)})))}S.defaultProps={note:{content:""}};var M=a(27),Q=a.n(M),T=(a(217),function(e){function t(){var e,a;Object(d.a)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={folderName:""},a.submitForm=function(e){e.preventDefault(),a.props.addFolder({id:Q()(),name:a.state.folderName})},a}return Object(b.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"addFolder"},n.a.createElement("h1",null,"Add a Folder"),n.a.createElement("form",{action:"",className:"newFolder",onSubmit:this.submitForm},n.a.createElement("input",{type:"text",placeholder:"My New Folder",value:this.state.folderName,onChange:function(t){return e.setState({folderName:t.target.value})}}),n.a.createElement("button",{type:"submit"},"Add!")))}}]),t}(i.Component));function P(e){return console.log(e.message),e.message?n.a.createElement("div",{className:"error"},e.message):n.a.createElement(n.a.Fragment,null)}a(219);var V=function(e){function t(){var e,a;Object(d.a)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={noteName:{value:"",touched:!1},noteContent:"",folderId:""},a.submitForm=function(e){e.preventDefault(),a.props.addNote({id:Q()(),name:a.state.noteName.value,content:a.state.noteContent,folderId:a.state.folderId,modified:(new Date).toISOString()})},a}return Object(b.a)(t,e),Object(c.a)(t,[{key:"selectFolder",value:function(e){if("None"===e)this.props.changeHandler(null);else{this.setState({folderId:e});var t=this.props.folders.find(function(t){return t.name===e});this.props.changeHandler(t)}}},{key:"validateName",value:function(e){e.noteName;var t=this.state.noteName.value;if(console.log("name",t),0===t.length)return"Note name is required"}},{key:"render",value:function(){var e=this,t=new Date,a=this.props.folders.map(function(e,t){return n.a.createElement("option",{value:e.id,key:e.id},e.name)});return n.a.createElement("div",{className:"AddNote"},n.a.createElement("h1",null,"Add a Note"),n.a.createElement("form",{action:"",className:"newNote",onSubmit:this.submitForm},n.a.createElement("input",{type:"text",placeholder:"My New Note",value:this.state.noteName.value,onChange:function(t){return e.setState({noteName:{value:t.target.value,touched:!0}})}}),this.state.noteName.touched&&n.a.createElement(P,{message:this.validateName(this.state.noteName.value)}),n.a.createElement("textarea",{type:"text",placeholder:"Note Content",value:this.state.noteContent,onChange:function(t){return e.setState({noteContent:t.target.value})}}),n.a.createElement("select",{id:"folder",name:"folder",value:this.state.folderId,onChange:function(t){return e.selectFolder(t.target.value)}},n.a.createElement("option",{value:""},"Select a Folder..."),a),n.a.createElement("div",{className:"Note__dates",value:t}),n.a.createElement("button",{type:"submit",disabled:this.validateName(this.state.noteName),onClick:function(){return e.props.history.goBack()}},"Add!")))}}]),t}(i.Component),w={folders:[{id:"b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Important"},{id:"b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Super"},{id:"b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Spangley"}],notes:[{id:"cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Dogs",modified:"2019-01-03T00:00:00.000Z",folderId:"b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Corporis accusamus placeat quas non voluptas. Harum fugit molestias qui. Velit ex animi reiciendis quasi. Suscipit totam delectus ut voluptas aut qui rerum. Non veniam eius molestiae rerum quam.\n \rUnde qui aperiam praesentium alias. Aut temporibus id quidem recusandae voluptatem ut eum. Consequatur asperiores et in quisquam corporis maxime dolorem soluta. Et officiis id est quia sunt qui iste reiciendis saepe. Ut aut doloribus minus non nisi vel corporis. Veritatis mollitia et molestias voluptas neque aspernatur reprehenderit.\n \rMaxime aut reprehenderit mollitia quia eos sit fugiat exercitationem. Minima dolore soluta. Quidem fuga ut sit voluptas nihil sunt aliquam dignissimos. Ex autem nemo quisquam voluptas consequuntur et necessitatibus minima velit. Consequatur quia quis tempora minima. Aut qui dolor et dignissimos ut repellat quas ad."},{id:"d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Cats",modified:"2018-08-15T23:00:00.000Z",folderId:"b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Eos laudantium quia ab blanditiis temporibus necessitatibus. Culpa et voluptas ut sed commodi. Est qui ducimus id. Beatae sint aspernatur error ullam quae illum sint eum. Voluptas corrupti praesentium soluta cumque illo impedit vero omnis nisi.\n \rNam sunt reprehenderit soluta quis explicabo impedit id. Repudiandae eligendi libero ad ut dolores. Laborum nihil sint et labore iusto reiciendis cum. Repellat quos recusandae natus nobis ullam autem veniam id.\n \rEsse blanditiis neque tempore ex voluptate commodi nemo. Velit sapiente at placeat eveniet ut rem. Quidem harum ut dignissimos. Omnis pariatur quas aperiam. Quasi voluptas qui nulla. Iure quas veniam aut quia et."},{id:"d26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Pigs",modified:"2018-03-01T00:00:00.000Z",folderId:"b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Occaecati dignissimos quam qui facere deserunt quia. Quaerat aut eos laudantium dolor odio officiis illum. Velit vel qui dolorem et.\n \rQui ut vel excepturi in at. Ut accusamus cumque quia sapiente ut ipsa nesciunt. Dolorum quod eligendi qui aliquid sint.\n \rAt id deserunt voluptatem et rerum. Voluptatem fuga tempora aut dignissimos est odio maiores illo. Fugiat in ad expedita voluptas voluptatum nihil."},{id:"d26e0570-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Birds",modified:"2019-01-04T00:00:00.000Z",folderId:"b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Eum culpa odit. Veniam porro molestiae dolores sunt reiciendis culpa. Atque accusamus dolore eos odio facilis. Dolores reprehenderit et provident dolores possimus mollitia.\n \rAdipisci dolor necessitatibus nihil quod quia vel veniam. Placeat qui vero. Cum cum amet at nisi. Distinctio rerum similique explicabo atque ratione. Recusandae omnis earum est. Quas iusto nihil itaque architecto ea.\n \rPerferendis neque doloremque quibusdam accusantium ut dolor illum dolorum. Vero et similique nihil beatae. In repellendus dolores praesentium. Optio alias rerum culpa placeat maiores natus sed. Ipsa et qui cum ex maiores."},{id:"d26e0714-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Bears",modified:"2018-07-12T23:00:00.000Z",folderId:"b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Distinctio dolor nihil ad iure quo tempore id ipsum. Doloremque sunt dicta odit. Id veritatis aut et doloremque natus.\n \rDeleniti temporibus repellendus molestias nemo. Cupiditate quae consectetur. Reiciendis corporis maxime consequatur qui quaerat cum aut. Quia officiis aut.\n \rAsperiores aut culpa voluptatem amet accusantium officia. Et et et adipisci ullam nesciunt eum magni totam. Quae repellendus suscipit animi vel laudantium sed enim nulla esse. Cupiditate quos minus laudantium autem eum quas tempore. Eos quibusdam quibusdam. Voluptatem molestiae qui accusamus blanditiis voluptates quia."},{id:"d26e0854-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Horses",modified:"2018-08-20T23:00:00.000Z",folderId:"b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Aliquid magnam ut quis quas impedit molestiae laudantium adipisci et. Officiis ut dolor rerum molestiae. Natus rerum libero aperiam. Rem aut consequatur. Quas soluta modi rerum id qui quis et voluptatem perferendis.\n \rIpsum quod sed minima rerum. Voluptatem pariatur voluptatem iure. Voluptatem perferendis qui doloremque distinctio nobis praesentium corrupti unde sed.\n \rPlaceat deleniti in praesentium aut tenetur. Recusandae debitis sint voluptates quam sed eum et quos qui. Atque esse nostrum et architecto qui perspiciatis odit aut. Aut quis corrupti ut. Maiores ratione sit dolor consectetur eius iusto illo sequi. Mollitia fugit dolores."},{id:"d26e0980-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Tigers",modified:"2018-03-03T00:00:00.000Z",folderId:"b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Eaque aliquid sit. Ducimus consequatur nam. Corporis ut dolorum amet molestiae minima ut quasi nesciunt. Ad omnis et. Dolorem nemo id non voluptatem mollitia sit laudantium. Consequatur quia consequuntur praesentium perferendis alias molestiae voluptatem qui temporibus.\n \rRerum tempore sed eum delectus excepturi odio. Ipsam omnis occaecati qui. Ut aspernatur et et est consequatur architecto laboriosam. Voluptates ullam beatae vero.\n \rAmet magnam neque temporibus totam aperiam aut dignissimos. Voluptas aut est ut quisquam totam. Dolor quibusdam nesciunt voluptatem cum sit harum in dicta. Sed nostrum et veniam id hic voluptatem inventore quo. Ipsam officiis unde dolor eum est dolores qui itaque aspernatur. Magnam aliquam qui qui."},{id:"d26e0aac-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Wolves",modified:"2018-05-16T23:00:00.000Z",folderId:"b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Expedita mollitia et. Voluptates optio expedita. Esse ullam numquam quae rem. Cum esse itaque et. Corrupti nam illum debitis ipsa excepturi neque rem totam. Repellendus consequatur qui itaque distinctio ut esse ut est.\n \rCulpa a impedit dignissimos. Eos nam totam delectus tempora autem nulla. Id nobis dolores. Minima autem vel provident quo temporibus.\n \rQuis modi eius voluptas fugit dolorem est reiciendis blanditiis. Labore minus qui ab dolorem eos repellat deleniti. Omnis assumenda non. Distinctio voluptas ea fugit corporis. Maiores et occaecati."},{id:"d26e0bce-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Elephants",modified:"2018-04-11T23:00:00.000Z",folderId:"b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Rem enim voluptatem autem fuga possimus. Perferendis voluptatem labore vero veritatis laborum aspernatur molestiae. Enim et quibusdam harum ab velit ad occaecati. Incidunt repellendus quidem rem quia quasi veritatis reiciendis. Quas omnis nam. Quo quisquam occaecati deleniti reiciendis quo temporibus cupiditate consequatur.\n \rSit ullam aut harum sunt rerum error. Quod omnis asperiores sed illum molestiae. Doloremque perspiciatis voluptas vel. Vel esse architecto ut quibusdam laudantium ut et.\n \rRecusandae quo sed quis ratione voluptates nam dolorem consequatur id. Dolores nesciunt illo possimus impedit. Perferendis ea sequi pariatur cumque. Iste nisi perspiciatis. Cumque repellendus optio voluptas maiores nobis. Accusantium sit hic eius occaecati veritatis qui asperiores illum."},{id:"d26e0f48-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Lions",modified:"2018-04-26T23:00:00.000Z",folderId:"b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Occaecati qui magni blanditiis. Et animi quas. Harum quo dolore quia nam amet numquam. Omnis et ex numquam et nostrum dolores voluptatibus. Ut dolores qui voluptatibus. Debitis fuga similique sapiente est perspiciatis.\n \rQuis magni quod iusto ipsum laboriosam suscipit excepturi. Dignissimos praesentium eum explicabo recusandae voluptates. Aliquid laboriosam aperiam sapiente aspernatur mollitia tempore deleniti.\n \rDolor ratione nam ut. Ad eum vel. Eos iusto modi praesentium. Nihil eos libero rerum expedita. Corrupti aut exercitationem eveniet sunt."},{id:"d26e1074-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Monkeys",modified:"2018-02-05T00:00:00.000Z",folderId:"b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Tenetur deleniti vero. Qui et sit voluptatem et dolor voluptas. Aut adipisci autem dolorem ad excepturi ut facere.\n \rQuos recusandae vitae earum minima quidem sapiente repellat. Veniam inventore ut. Ad quibusdam aliquam id in nihil iste qui nobis. Quidem distinctio eos explicabo.\n \rEa enim rerum deleniti quo earum. Provident fugit eum dolore sequi nobis. Architecto molestias odio et doloremque pariatur facere modi. Eum et est blanditiis delectus at est maiores vel velit. Eligendi velit dicta enim omnis."},{id:"d26e11a0-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Bats",modified:"2018-12-01T00:00:00.000Z",folderId:"b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Tempore aliquam nobis amet dolor laborum aspernatur aspernatur. Non porro est mollitia nobis. Eveniet possimus non et mollitia non.\n \rNecessitatibus dolor eaque consectetur ullam quia ad vero. Dolores dolore minus consequatur itaque a corporis sit provident dicta. Ad in tempora ex consequuntur autem accusantium veritatis. Quia a odit qui autem repellendus et perspiciatis harum. Molestias iste at dicta optio vel nulla enim.\n \rAliquid recusandae optio numquam tempora totam voluptatum inventore. Minus ipsum vel officiis consectetur repudiandae unde necessitatibus in. Occaecati voluptatibus commodi et. Delectus suscipit saepe est reiciendis. Cupiditate laborum voluptatem autem explicabo voluptate. Quae et distinctio sequi dolorem temporibus aliquid."},{id:"d26e12c2-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Turtles",modified:"2018-09-11T23:00:00.000Z",folderId:"b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Fugiat dolores et nostrum laborum id delectus sint reiciendis. Recusandae nulla repellendus. Labore eum hic nesciunt enim corporis necessitatibus. Iusto pariatur aut qui blanditiis.\n \rTempore et vel ut maxime et reprehenderit deleniti esse officia. Laboriosam et reiciendis distinctio qui enim. Amet suscipit sit.\n \rVitae id impedit reprehenderit eveniet nesciunt et soluta. Labore aliquam sed dolores voluptatibus est omnis quo molestias aut. Dolor optio sed alias excepturi delectus aut consequuntur veniam nemo."},{id:"d26e1452-ffaf-11e8-8eb2-f2801f1b9fd1",name:"Zebras",modified:"2018-08-13T23:00:00.000Z",folderId:"b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",content:"Veritatis porro minima perspiciatis. Repellat veniam quo iste ut. Iusto voluptas quae quibusdam. Odit neque iusto cupiditate iste quam. Fuga itaque aut praesentium ullam saepe ut et vero.\n \rQuisquam doloremque molestiae. Enim rerum dolorem et velit itaque magnam laborum. Aut officiis porro.\n \rQuae eum eaque error. Sed itaque ipsam nam provident aut voluptate. Perferendis repudiandae sequi laudantium est est animi eum. Unde alias et doloribus est hic et. Sed distinctio incidunt maiores aut voluptatibus et omnis mollitia fugit."}]},R=(a(221),function(e){function t(){var e,a;Object(d.a)(this,t);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={notes:[],folders:[],selected:null},a.addFolder=function(e){a.setState({folders:Object(m.a)(a.state.folders).concat([e])})},a.addNote=function(e){a.setState({notes:Object(m.a)(a.state.notes).concat([e])})},a}return Object(b.a)(t,e),Object(c.a)(t,[{key:"setSelected",value:function(e){this.setState({selected:e})}},{key:"setFolders",value:function(e){this.setState({folders:e})}},{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.setState(w)},600)}},{key:"renderNavRoutes",value:function(){var e=this.state,t=e.notes,a=e.folders;return n.a.createElement(n.a.Fragment,null,["/","/folder/:folderId","/add-folder","/add-note"].map(function(e){return n.a.createElement(v.a,{exact:!0,key:e,path:e,render:function(e){return n.a.createElement(_,Object.assign({folders:a,notes:t},e))}})}),n.a.createElement(v.a,{path:"/note/:noteId",render:function(e){var i=e.match.params.noteId,o=I(t,i)||{},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(function(e){return e.id===t})}(a,o.folderId);return n.a.createElement(x,Object.assign({},e,{folder:u}))}}))}},{key:"renderMainRoutes",value:function(){var e=this,t=this.state.notes;return n.a.createElement(n.a.Fragment,null,["/","/folder/:folderId"].map(function(e){return n.a.createElement(v.a,{exact:!0,key:e,path:e,render:function(e){var a=e.match.params.folderId,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t?e.filter(function(e){return e.folderId===t}):e}(t,a);return n.a.createElement(F,Object.assign({},e,{notes:i}))}})}),n.a.createElement(v.a,{path:"/note/:noteId",render:function(e){var a=e.match.params.noteId,i=I(t,a);return n.a.createElement(S,Object.assign({},e,{note:i}))}}),n.a.createElement(v.a,{path:"/add-folder",render:function(t){return n.a.createElement(T,Object.assign({addFolder:e.addFolder},t,{changeHandler:function(t){return e.setFolders(t)}}))}}),n.a.createElement(v.a,{path:"/add-note",render:function(t){return n.a.createElement(V,Object.assign({addNote:e.addNote},t,{folders:e.state.folders,changeHandler:function(t){return e.setSelected(t)}}))}}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("nav",{className:"App__nav"},this.renderNavRoutes()),n.a.createElement("header",{className:"App__header"},n.a.createElement("h1",{className:"siteTitle"},n.a.createElement(q.a,{to:"/"},"Jot"))),n.a.createElement("main",{className:"App__main"},this.renderMainRoutes()))}}]),t}(i.Component));r.b.add(s.c,s.b,s.d,s.a),u.a.render(n.a.createElement(l.a,null,n.a.createElement(R,null)),document.getElementById("root"))},83:function(e,t,a){e.exports=a(223)},93:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){}},[[83,2,1]]]);
//# sourceMappingURL=main.44bc8c07.chunk.js.map