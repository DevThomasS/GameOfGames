import{D as V}from"./Expansions-74147265.js";import{_ as P,i as w,o,c as v,w as t,a as e,b as h,F as x,r as y,f as s,t as p,d as S,a7 as I,e as u,a6 as D,p as $,j as E}from"./index-54b8ed82.js";import{b as A,c as T,V as k,a as i,d as C,e as r,f as c,g as R}from"./VListItem-40fb1b5f.js";import{V as F}from"./VDivider-8a4b37b0.js";const B={data(){return{gameComponents:V.getDefaultComponents()}},methods:{getColumnComponents(a){const f=(a-1)*4,g=a*4;return this.gameComponents.slice(f,g)}}};function L(a,l,f,g,q,_){const d=w("router-link");return o(),v(R,{class:"panel-with-padding"},{default:t(()=>[e(A,{title:"deFault cOmpOnents",class:"transparent-panel h2-text"},{default:t(()=>[e(T,null,{default:t(()=>[e(k,null,{default:t(()=>[(o(!0),h(x,null,y(_.getColumnComponents(1),(n,b)=>(o(),v(i,{cols:"4",key:b},{default:t(()=>[e(C,{class:"item"},{default:t(()=>[e(r,null,{default:t(()=>[e(d,{to:{name:"duneComponentId",params:{id:n.component_id}},class:"link p-text"},{default:t(()=>[s(p(n.component_name),1)]),_:2},1032,["to"])]),_:2},1024),e(c,{class:"subtitle-text"},{default:t(()=>[s(p(n.expansion),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(o(!0),h(x,null,y(_.getColumnComponents(2),(n,b)=>(o(),v(i,{cols:"4",key:b},{default:t(()=>[e(C,{class:"item"},{default:t(()=>[e(r,null,{default:t(()=>[e(d,{to:{name:"duneComponentId",params:{id:n.component_id}},class:"link p-text"},{default:t(()=>[s(p(n.component_name),1)]),_:2},1032,["to"])]),_:2},1024),e(c,{class:"subtitle-text"},{default:t(()=>[s(p(n.expansion),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),(o(!0),h(x,null,y(_.getColumnComponents(3),(n,b)=>(o(),v(i,{cols:"4",key:b},{default:t(()=>[e(C,{class:"item"},{default:t(()=>[e(r,null,{default:t(()=>[e(d,{to:{name:"duneComponentId",params:{id:n.component_id}},class:"link p-text"},{default:t(()=>[s(p(n.component_name),1)]),_:2},1032,["to"])]),_:2},1024),e(c,{class:"subtitle-text"},{default:t(()=>[s(p(n.expansion),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})}const N=P(B,[["render",L],["__scopeId","data-v-ba3ec407"]]),M=S({methods:{redirectToComponent(a){const l=`/dune-components/${a}`;I.push(l)},redirectToFAQ(a){const l=`/dune-faq/${a}`;I.push(l)}}});function Q(a,l,f,g,q,_){return o(),h(x,null,[e(k,{class:"p-text"},{default:t(()=>[e(i,{cols:"1"}),e(i,{cols:"4"},{default:t(()=>[e(r,null,{default:t(()=>[s("• No Increased Spice Flow •")]),_:1}),e(c,null,{default:t(()=>[s(" The unofficial expansion 2 component, "),u("span",{class:"link",onClick:l[0]||(l[0]=d=>a.redirectToComponent(17))},"Double Spice Blow Cards,"),s(" will be used in place of drawing two spice cards per turn. ")]),_:1})]),_:1}),e(i,{cols:"1"}),e(i,{cols:"5"},{default:t(()=>[e(r,null,{default:t(()=>[s("• Modified Atreides Bidding Advantage •")]),_:1}),e(c,null,{default:t(()=>[s(" The player may only look at each Treachery card AFTER it has been purchased (instead of before bidding has begun). Check the "),u("span",{class:"link",onClick:l[1]||(l[1]=d=>a.redirectToFAQ(1))},"Atreides FAQ"),s(" for favorable ruling to help offset this disadvantage. ")]),_:1})]),_:1}),e(i,{cols:"1"})]),_:1}),e(k,{class:"p-text"},{default:t(()=>[e(i,{cols:"1"}),e(i,{cols:"4"},{default:t(()=>[e(r,null,{default:t(()=>[s("• First Turn Spice Card Must Be A Spice Blow •")]),_:1}),e(c,null,{default:t(()=>[s(" Any non-spice blow card, such as a sandworm, special, or spice stock, must be set aside and shuffled back into the spice deck once the first spice blow has been drawn. ")]),_:1})]),_:1}),e(i,{cols:"1"}),e(i,{cols:"5"},{default:t(()=>[e(r,null,{default:t(()=>[s("• Additional Rule: Bidding Phase Ante •")]),_:1}),e(c,null,{default:t(()=>[s(" When the bidding of each Treachery card begins, in storm order, the first player who has spice does not have a full hand of Treachery cards must bid exactly one spice. ")]),_:1})]),_:1}),e(i,{cols:"1"})]),_:1})],64)}const j=P(M,[["render",Q],["__scopeId","data-v-d922100c"]]),U=S({components:{DuneComponentPanel:N,DuneRulesExceptionList:j}});const m=a=>($("data-v-7bd701b9"),a=a(),E(),a),O={class:"default-page"},W={class:"dune-box"},G=m(()=>u("h1",{class:"h1-text"}," DUNE RulEs ",-1)),z=m(()=>u("h2",{class:"h2-text"}," exhibition RulEs ",-1)),H=m(()=>u("p",{class:"p-text"}," When playing a one-off game, players are free to agree to use any component; however, it is assumed the following components will be used with the Gale Force Nine edition of Dune (2019), unless otherwise agreed upon by the players: ",-1)),J=D('<p class="p-text" data-v-7bd701b9> Both faction and seating selections are determined by the players. Players are allowed to scheme with one another before the game begins, but no agreement made between players before the game begins is binding. </p><br data-v-7bd701b9><p class="p-text" data-v-7bd701b9> Binding agreements are made only when: </p><ul class="p-text tabbed-list" data-v-7bd701b9><li data-v-7bd701b9>Player announces the terms to all other players at the table (including players not directly involved in the deal).</li><li data-v-7bd701b9>All players (including those not directly involved) acknowledge their understanding of the terms.</li><li data-v-7bd701b9>All directly involved players accept the terms by shaking hands.</li></ul><br data-v-7bd701b9><p class="p-text" data-v-7bd701b9> In case of a dispute over the terms of a binding agreement between directly involved players, the resolution will be determined by a plurality vote of all players (not just the players involved in the dispute). </p><br data-v-7bd701b9><p class="p-text" data-v-7bd701b9> Every rule - notably all Advanced rules - inside the core rule book &amp; all six core factions, as well as each expansion rule book and factions, will be in play with the following exceptions (unless otherwise agreed): </p><br data-v-7bd701b9>',9),K=m(()=>u("br",null,null,-1)),X=m(()=>u("h2",{class:"h2-text"}," touRnamEnt RulEs ",-1)),Y=m(()=>u("p",{class:"p-text"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. ",-1));function Z(a,l,f,g,q,_){const d=w("DuneComponentPanel"),n=w("DuneRulesExceptionList");return o(),h("div",O,[u("div",W,[G,e(F,{thickness:6,class:"dune-divider"}),z,H,e(d),J,e(n),K,X,Y])])}const ne=P(U,[["render",Z],["__scopeId","data-v-7bd701b9"]]);export{ne as default};