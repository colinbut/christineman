(this.webpackJsonpchristineman=this.webpackJsonpchristineman||[]).push([[0],{100:function(e,t,a){e.exports=a(116)},116:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(45),s=a.n(r),l=(a(24),a(40)),o=a(18),c=a(135),m=a(137),u=a(142),d=a(140),p=a(138),g=a(139),h=a(31);function f(){var e=h.copyright;return i.a.createElement("div",{className:"footer"},i.a.createElement("strong",null,"Copyright"),i.a.createElement("p",null,"\xa9 ",e.text))}var E=i.a.createContext(h),v=Object(c.a)({root:{fontSize:"21px",textAlign:"left"},media:{minHeight:500.38}}),b=function(e){var t=e.data;return i.a.createElement("div",null,i.a.createElement("h3",{className:"description"},t.description),i.a.createElement("div",{className:"link"},i.a.createElement(o.c,{to:"/contact",className:"anchor-item-link"},i.a.createElement("p",{className:"description-link"},"Let's work together."))))},j=function(){var e=Object(n.useContext)(E),t=v(),a=Object(l.g)().url,r=e.projects.projectList.map((function(e,n){return i.a.createElement(m.a,{item:!0,xs:6},i.a.createElement(o.b,{className:"anchor-item-link",to:"".concat(a,"/").concat(e.project_url)},i.a.createElement(u.a,{square:!0},i.a.createElement(d.a,null,i.a.createElement(p.a,{className:t.media,image:"/christineman/img/"+e.gallery[0],title:e.link_title}),i.a.createElement(g.a,{className:t.root},e.link_title)))))}));return i.a.createElement("div",null,i.a.createElement(m.a,{container:!0,spacing:10},r),i.a.createElement(b,{data:e.projects}),i.a.createElement(f,null))},_=function(){var e=i.a.useContext(E).about;return i.a.createElement("div",{className:"about-page-container-wrapper"},i.a.createElement("h1",null,e.heading),i.a.createElement("p",{className:"text-spacing vertical-spacing"},i.a.createElement("em",null,e.subHeading)),i.a.createElement("p",{className:"text-spacing vertical-spacing"},e.summary),i.a.createElement(m.a,{container:!0,spacing:5},i.a.createElement(m.a,{item:!0,xs:6},i.a.createElement("h2",null,"Services"),i.a.createElement("p",{className:"text-spacing"},e.services)),i.a.createElement(m.a,{item:!0,xs:6},i.a.createElement("h2",null,"Clients"),i.a.createElement("p",{className:"text-spacing"},e.clients))),i.a.createElement("div",{className:"additional-description"}),i.a.createElement(f,null))},k=a(96),N=a(13),y=a(44),q=a(95),w=a(58),x=a(97),C=w.a({firstName:w.b().required(),lastName:w.b().required(),email:w.b().email().required(),message:w.b().required()}),L=function(){console.log("Submitting form")},I=function(){var e=Object(n.useState)(!1),t=Object(k.a)(e,2),a=t[0];t[1];return i.a.createElement("div",{className:"contact-page-container-wrapper"},i.a.createElement("h2",{className:"contact-form-heading"},"if you have any work inquiry, or you would like to collaborate, please feel free to email me."),i.a.createElement(q.a,{validationSchema:C,onSubmit:L,initialValues:{firstName:"First Name",lastName:"Last Name",email:"example@email.com"}},(function(e){var t=e.handleSubmit,n=e.handleChange,r=e.handleBlur,s=e.values,l=e.touched,o=(e.isValid,e.errors);return i.a.createElement(N.a,{noValidate:!0,validated:a,onSubmit:t},i.a.createElement(N.a.Row,null,i.a.createElement(N.a.Group,{as:y.a,md:"6",controlId:"firstName"},i.a.createElement(N.a.Label,null,"First Name*"),i.a.createElement(N.a.Control,{required:!0,name:"firstName",value:s.firstName||"",onBlur:r,onChange:n,isValid:l.firstName&&!o.firstName,isInvalid:!!o.firstName,type:"text"})),i.a.createElement(N.a.Group,{as:y.a,md:"6",controlId:"lastName"},i.a.createElement(N.a.Label,null,"Last Name*"),i.a.createElement(N.a.Control,{required:!0,name:"lastName",value:s.lastName,onBlur:r,onChange:n,isValid:l.lastName&&!o.lastName,isInvalid:!!o.lastName,type:"text"}))),i.a.createElement(N.a.Row,null,i.a.createElement(N.a.Group,{as:y.a,md:"12",controlId:"formGridEmail"},i.a.createElement(N.a.Label,null,"Email*"),i.a.createElement(N.a.Control,{required:!0,name:"email",value:s.email,onBlur:r,onChange:n,isValid:l.email&&!o.email,isInvalid:!!o.email,type:"email"}))),i.a.createElement(N.a.Row,null,i.a.createElement(N.a.Group,{as:y.a,md:"12",controlId:"yourMessage.textArea"},i.a.createElement(N.a.Label,null,"Your message*"),i.a.createElement(N.a.Control,{as:"textarea",rows:"8",required:!0}))),i.a.createElement(x.a,{type:"submit",onClick:L},"Submit"))})))};function S(){return i.a.createElement("div",null,i.a.createElement(I,null),i.a.createElement(V,null),i.a.createElement(f,null))}var V=function(){return i.a.createElement("div",{className:"follow"},i.a.createElement("h1",null,"Follow"),i.a.createElement("p",null,i.a.createElement("a",{className:"follow-link",href:h.contact.socialmedia.linkedin},"LinkedIn")))},A=a(70),O=a(71),P=function(){return i.a.createElement("div",{className:"right-icon"},i.a.createElement(A.a,{icon:O.b,size:"2x"}))},H=function(e){var t=e.buttonText;return i.a.createElement("div",{className:"arrow-button"},i.a.createElement(m.a,{container:!0,spacing:1},i.a.createElement(m.a,{item:!0,xs:11},i.a.createElement("p",{className:"right-button-text"},t)),i.a.createElement(m.a,{item:!0,xs:1,className:"project-nav-right-parent"},i.a.createElement(P,null))))},T=function(){return i.a.createElement("div",{className:"left-icon"},i.a.createElement(A.a,{icon:O.a,size:"2x"}))},K=function(e){var t=e.buttonText;return i.a.createElement("div",{className:"arrow-button"},i.a.createElement(m.a,{container:!0,spacing:1},i.a.createElement(m.a,{item:!0,xs:1,className:"project-nav-left-parent"},i.a.createElement(T,null)),i.a.createElement(m.a,{item:!0,xs:11},i.a.createElement("p",{className:"left-button-text"},t))))},R=function(e){return e.images.map((function(e,t){return i.a.createElement("img",{className:"project-gallery",src:"/christineman/img/"+e})}))},B=function(e){var t=e.data.projects,a=e.data.clickedProjectId,n=t.length,r=a-1,s=a+1,l=t[r-1],c=t[s-1];return i.a.createElement("div",{id:"project-catalog-nav"},i.a.createElement(m.a,{container:!0,spacing:1},i.a.createElement(m.a,{item:!0,xs:6},0!==r&&i.a.createElement(o.c,{className:"anchor-item-link",to:"/projects/".concat(l.project_url)},i.a.createElement(K,{buttonText:l.link_title}))),i.a.createElement(m.a,{item:!0,xs:6},s<=n&&i.a.createElement(o.c,{className:"anchor-item-link",to:"/projects/".concat(c.project_url)},i.a.createElement(H,{buttonText:c.link_title})))))},D=function(){var e=Object(n.useContext)(E),t=Object(l.g)().url,a=t.substring(t.lastIndexOf("/")+1),r=e.projects.projectList,s={};for(var o in r){var c=r[o];c.project_url===a&&(s=c)}var u={projects:r,clickedProjectId:parseInt(s.id)};return i.a.createElement("div",null,i.a.createElement("h1",{className:"project-title"},s.title),i.a.createElement("div",{className:"project-summary"},i.a.createElement("p",null,s.summary)),i.a.createElement(m.a,{container:!0,spacing:1},i.a.createElement(m.a,{item:!0,xs:12},i.a.createElement(R,{images:s.gallery}))),i.a.createElement("div",{className:"closing-note"},i.a.createElement("p",null,s.closing_note)),i.a.createElement(B,{data:u}),i.a.createElement(f,null))},M=a(72),W=a(36),F=a(73),z=a(74),G=a(81),U=function(e){function t(){return Object(M.a)(this,t),Object(F.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(W.a)(t,[{key:"render",value:function(){return i.a.createElement(E.Provider,{value:h},this.props.children)}}]),t}(i.a.Component),Y=(a(115),function(e){function t(){return Object(M.a)(this,t),Object(F.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(W.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo({top:0,left:0,behavior:"smooth"})}},{key:"render",value:function(){return this.props.children}}]),t}(i.a.Component)),J=Object(l.h)(Y);var X=function(){return i.a.createElement("div",{id:"announcement-header",className:"announcement-header"},i.a.createElement(m.a,{container:!0,spacing:10,justify:"flex-end"},i.a.createElement(m.a,{item:!0,xs:9},i.a.createElement($,null)),i.a.createElement(m.a,{item:!0,xs:3},i.a.createElement(Q,null))))},$=function(){var e=Object(n.useContext)(E);return i.a.createElement("div",null,i.a.createElement(o.c,{to:"/",className:"site-title anchor-item-link"},e.homepage.site_title))},Q=function(){return i.a.createElement("div",{className:"nav"},i.a.createElement(m.a,{container:!0,spacing:1},i.a.createElement(m.a,{item:!0,xs:4},i.a.createElement(o.c,{to:"/projects",activeClassName:"active",className:"anchor-item-link"},"Projects")),i.a.createElement(m.a,{item:!0,xs:4},i.a.createElement(o.c,{to:"/about",activeClassName:"active",className:"anchor-item-link"},"About")),i.a.createElement(m.a,{item:!0,xs:4},i.a.createElement(o.c,{to:"/contact",activeClassName:"active",className:"anchor-item-link"},"Contact"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement((function(){return console.log("/christineman"),i.a.createElement(U,null,i.a.createElement(o.a,{basename:"/christineman"},i.a.createElement(J,null,i.a.createElement("div",{className:"container-custom"},i.a.createElement(X,null),i.a.createElement(l.d,null,i.a.createElement(l.b,{path:"/projects/:id",component:D}),i.a.createElement(l.b,{path:"/projects",component:j}),i.a.createElement(l.b,{path:"/about",component:_}),i.a.createElement(l.b,{path:"/contact",component:S}),i.a.createElement(l.b,{exact:!0,path:"/"},i.a.createElement(l.a,{to:"/projects"})))))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,t,a){},31:function(e){e.exports=JSON.parse('{"homepage":{"site_title":"Christine Man"},"projects":{"description":"Hollie Beaumont is a photographer and art director based in London. She shoots a diverse range of subjects for commercial and editorial clients, all with a clean and elegant aesthetic.","projectList":[{"id":1,"link_title":"HKPC","project_url":"hkpc","title":"HKPC","summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua. Id leo in vitae turpis. Arcu cursus vitae congue mauris. Risus at ultrices mi tempus imperdiet. Scelerisque felis imperdiet proin fermentum leo vel orci. Velit euismod in pellentesque massa placerat duis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Volutpat blandit aliquam etiam erat velit scelerisque in","gallery":["HKPC.jpeg","HKPC_Portfolio.jpeg"],"closing_note":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua. Id leo in vitae turpis. Arcu cursus vitae congue mauris. Risus at ultrices mi tempus imperdiet. Scelerisque felis imperdiet proin fermentum leo vel orci. Velit euismod in pellentesque massa placerat duis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Volutpat blandit aliquam etiam erat velit scelerisque in."},{"id":2,"title":"Watches","project_url":"watches","link_title":"Watches","summary":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua. Id leo in vitae turpis. Arcu cursus vitae congue mauris. Risus at ultrices mi tempus imperdiet. Scelerisque felis imperdiet proin fermentum leo vel orci. Velit euismod in pellentesque massa placerat duis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Volutpat blandit aliquam etiam erat velit scelerisque in","gallery":["watches.jpg","HKPC_Portfolio.jpeg"],"closing_note":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua. Id leo in vitae turpis. Arcu cursus vitae congue mauris. Risus at ultrices mi tempus imperdiet. Scelerisque felis imperdiet proin fermentum leo vel orci. Velit euismod in pellentesque massa placerat duis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Volutpat blandit aliquam etiam erat velit scelerisque in."},{"id":3,"link_title":"Sun-Kissed Summer","project_url":"sun-kissed-summer","title":"Sun-Kissed Summer - Lipstick Art Exhibition","summary":"Harbour City presented the first lipstick tasting bar in Hong Kong for all shoppers to have an opportunity to try on over 30 different brands of lipsticks. In collaboration with an American lipstick artist - \u201cLipstick Lex\u201d, we have merged some of her key design elements into our design. \\nThe event has successfully raise the public awareness with over many shoppers participated both the interactive psychological test and personalised lipstick sticker. Television Broadcasts, online resources, and local magazines have also reported on this event.","gallery":["sun_kissed_summer/sunkissed1.jpg","sun_kissed_summer/sunkissed2.jpg","sun_kissed_summer/sunkissed3.jpg","sun_kissed_summer/sunkissed4.jpg","sun_kissed_summer/sunkissed5.jpg","sun_kissed_summer/sunkissed6.jpg"],"closing_note":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua. Id leo in vitae turpis. Arcu cursus vitae congue mauris. Risus at ultrices mi tempus imperdiet. Scelerisque felis imperdiet proin fermentum leo vel orci. Velit euismod in pellentesque massa placerat duis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Volutpat blandit aliquam etiam erat velit scelerisque in."},{"id":4,"link_title":"Summer Adventure Kingdom","project_url":"summer-adventure-kingdom","title":"Summer Adventure Kingdom - World Cup","summary":"2018 World Cup is getting close! The shopping malls of Cheung Kong Industrial Estate, Lai Chi Kok Yu Ching Estate, Hung Hom Harbour Plaza, Ho Man Tin Estate, and Tsim Sha Tsui Harbour View Shopping Centre host a series of exciting activities in the summer. \\nWith the theme of tropical forests, the elephant explorer, the greedy lion king and the hippo leader led a group of children into the summer forest, and experienced different experiences through the five senses of sight, hearing, smell, taste and touch. Fantasy forest journey!","gallery":["summer_adventure_kingdom/summerAdvKingdom1.jpg","summer_adventure_kingdom/summerAdvKingdom2.jpg","summer_adventure_kingdom/summerAdvKingdom3.jpg","summer_adventure_kingdom/summerAdvKingdom4.jpg"],"closing_note":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua. Id leo in vitae turpis. Arcu cursus vitae congue mauris. Risus at ultrices mi tempus imperdiet. Scelerisque felis imperdiet proin fermentum leo vel orci. Velit euismod in pellentesque massa placerat duis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Volutpat blandit aliquam etiam erat velit scelerisque in."},{"id":5,"link_title":"Christmas Dream Castle","project_url":"christmas-dream-castle","title":"2018 Christmas Event","summary":"This Christmas, Tai Po Mega Mall, New Jade Shopping Arcade and Yuen Long Plaza has collaborated with a well-known French illustrator, Marie Desbons. The main characters from the illustrator\u2019s book have been brought to life in a Christmas ball scene and dressed up in gorgeous costumes. An incredible stage, huge Christmas tree and the main character have create a dreamy and magnificent French ball to celebrate Christmas with us. \\nWhat\u2019s more, an interactive painting game was designed to further enhance the entire event.","gallery":["christmas_dream_castle/christmas-dream-castle1.jpg","christmas_dream_castle/christmas-dream-castle2.jpg","christmas_dream_castle/christmas-dream-castle3.jpg","christmas_dream_castle/christmas-dream-castle4.jpg","christmas_dream_castle/christmas-dream-castle5.png","christmas_dream_castle/christmas-dream-castle6.jpg","christmas_dream_castle/christmas-dream-castle7.jpg"],"closing_note":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua. Id leo in vitae turpis. Arcu cursus vitae congue mauris. Risus at ultrices mi tempus imperdiet. Scelerisque felis imperdiet proin fermentum leo vel orci. Velit euismod in pellentesque massa placerat duis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Volutpat blandit aliquam etiam erat velit scelerisque in."},{"id":6,"link_title":"Garden of Fortune","project_url":"garden-of-fortune","title":"2019 Lunar New Year Event","summary":"Dedicated to providing memorable and engaging experiences for guests, ifc mall has presented a splendid installation featuring pinwheels to welcome good fortune and celebrating the Year of the Pig. \\nThis year, ifc mall has collaborated with young local calligrapher, Rite Lee, to create a downloadable \u201cfai chuns\u201d for guests to share with family and friends after completing the game. \\nPinwheel embody the meaning of luck and fortune in Chinese belief. Let\u2019s embrace the good fortune tightly and welcome the year of 2019. ","gallery":["garden_of_fortune/garden-of-fortune1.jpg","garden_of_fortune/garden-of-fortune2.jpg","garden_of_fortune/garden-of-fortune3.jpg","garden_of_fortune/garden-of-fortune4.jpg","garden_of_fortune/garden-of-fortune5.jpg","garden_of_fortune/garden-of-fortune6.jpg","garden_of_fortune/garden-of-fortune7.jpg","garden_of_fortune/garden-of-fortune8.1.png","garden_of_fortune/garden-of-fortune8.2.png"],"closing_note":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua. Id leo in vitae turpis. Arcu cursus vitae congue mauris. Risus at ultrices mi tempus imperdiet. Scelerisque felis imperdiet proin fermentum leo vel orci. Velit euismod in pellentesque massa placerat duis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Volutpat blandit aliquam etiam erat velit scelerisque in."}]},"about":{"heading":"UI & UX Designer","subHeading":"based in London and Hong Kong","summary":"I am enthusiastic and passionate about Design Thinking Process. I love working with different clients because there are so many unknown challenges which keeps me motivated and stay curious. I enjoy creating meaningful and delightful digital products through the use of design.","services":"Web Design / Mobile Design / Interactive Prototyping / User Interface / UX Design / Visual Design / Design Research / Interactive Prototyping / Video Editing","clients":"HKPC Academy / Being Sent Travel / TBM The Beauty Medical / Beng Seng / Harbour City / apm"},"contact":{"socialmedia":{"linkedin":"http://www.linkedin.com/christineman"}},"copyright":{"text":"2020 Christine Man"}}')}},[[100,1,2]]]);
//# sourceMappingURL=main.07d83d87.chunk.js.map