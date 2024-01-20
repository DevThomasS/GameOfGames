var Q=Object.defineProperty;var V=(e,t,a)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var u=(e,t,a)=>(V(e,typeof t!="symbol"?t+"":t,a),a);import{F as d}from"./Factions-d3b9fb41.js";import{D as R}from"./Expansions-94880303.js";import{d as F,_ as $,o as m,c as A,w as n,a as o,b,F as L,r as O,n as T,e as p,t as v,f as w,g as W,v as N,h as P,i as B,p as Z,j}from"./index-f653aaf1.js";import{V as D,a as z,b as J,c as K,d as S,e as y,f as G,g as X}from"./VListItem-61fe442e.js";import{V as C}from"./VCard-449d8f0e.js";class g{constructor(t,a,s){u(this,"faction");u(this,"loaded");u(this,"color");u(this,"image_url");u(this,"data");this.faction=t,this.loaded=!1,this.color=a,this.image_url=s,this.data=new k(t,f.Unknown,0,0,f.Unknown,0,f.Unknown,d.Unknown,[])}static getFactions(){return[new g(d.Atreides,"rgba( 0, 255, 0, 0.05 )",new URL("/GameOfGames/assets/Atreides-559fab5c.png",self.location).href),new g(d.BeneGesserit,"rgba( 0, 0, 255, 0.05 )",new URL("/GameOfGames/assets/BeneGesserit-a70f6147.png",self.location).href),new g(d.Emperor,"rgba( 255, 0, 0, 0.05 )",new URL("/GameOfGames/assets/Emperor-e85c38c2.png",self.location).href),new g(d.Fremen,"rgba( 255, 255, 0, 0.05 )",new URL("/GameOfGames/assets/Fremen-bedc8e68.png",self.location).href),new g(d.Harkonnen,"rgba( 0, 0, 0, 0.05 )",new URL("/GameOfGames/assets/Harkonnen-8980669d.png",self.location).href),new g(d.SpacingGuild,"rgba( 255, 110, 0, 0.05 )",new URL("/GameOfGames/assets/SpacingGuild-1948f1ca.png",self.location).href),new g(d.Ixians,"rgba( 200, 190, 120, 0.05 )",new URL("/GameOfGames/assets/Ixians-fd33647c.png",self.location).href),new g(d.Tleilaxu,"rgba( 130, 0, 200, 0.05 )",new URL("/GameOfGames/assets/Tleilaxu-b169d45b.png",self.location).href),new g(d.CHOAM,"rgba( 0, 0, 0, 0 )",new URL("/GameOfGames/assets/CHOAM-38777541.png",self.location).href),new g(d.Richese,"rgba( 255, 255, 255, 0.05 )",new URL("/GameOfGames/assets/Richese-8e49c515.png",self.location).href),new g(d.Ecaz,"rgba( 200, 0, 130, 0.05 )",new URL("/GameOfGames/assets/Ecaz-9fa8b699.png",self.location).href),new g(d.Moritani,"rgba( 0, 180, 255, 0.05 )",new URL("/GameOfGames/assets/Moritani-97fc141c.png",self.location).href)]}}class k{constructor(t,a,s,c,r,l,h,U,E){u(this,"faction");u(this,"person");u(this,"usage_rate");u(this,"win_rate");u(this,"champion");u(this,"average_game_length");u(this,"adversary");u(this,"rival_house");u(this,"seat_rates");this.faction=t,this.person=a,this.usage_rate=s,this.win_rate=c,this.champion=r,this.average_game_length=l,this.adversary=h,this.rival_house=U,this.seat_rates=E}static getFactionStatistics(t,a){const s=t.filter(l=>l.players.find(h=>h.faction===a)),c=this.getFactionWins(s,a),r=this.getFactionDefeats(s,a);return new k(a,f.Unknown,(s.length||0)/(t.length||1),(c.length||0)/(s.length||1),this.getMaxPerson(c),(s.reduce((l,h)=>l+h.end_turn,0)||0)/(s.length||1),this.getMaxPerson(r),this.getMaxFaction(r),[])}static getPersonStatistics(t,a){if(a===f.Unknown)return this.getUnknownPersonStatistics(t);const s=t.filter(l=>l.players.find(h=>h.person===a)),c=this.getPersonWins(s,a),r=this.getPersonDefeats(s,a);return new k(d.Unknown,a,s.length,(c.length||0)/(s.length||1),this.getMaxFaction(c),(s.reduce((l,h)=>l+h.end_turn,0)||0)/(s.length||1),this.getMaxPerson(r),this.getMaxFaction(r),[])}static getUnknownPersonStatistics(t){return new k(d.Unknown,f.Unknown,t.length,0,this.getMaxFaction(t),(t.reduce((a,s)=>a+s.end_turn,0)||0)/(t.length||1),f.Unknown,d.Unknown,this.getSeatRates(t))}static getFactionWins(t,a){const s=[i.Alliance,i.MultiAlliance,i.Solo,i.SpecialFremen,i.SpecialSpacingGuild];return t.filter(c=>c.players.find(r=>s.includes(r.victory_type)&&r.faction===a))}static getFactionDefeats(t,a){const s=[i.Alliance,i.MultiAlliance,i.Solo,i.SpecialFremen,i.SpecialSpacingGuild];return t.filter(c=>c.players.find(r=>!s.includes(r.victory_type)&&r.faction===a))}static getMaxPerson(t){const a=[i.Alliance,i.MultiAlliance,i.Solo,i.SpecialFremen,i.SpecialSpacingGuild],s=[{person:f.Unknown,victories:0}];for(const c of t){const r=c.players.filter(l=>a.includes(l.victory_type));for(const l of r){const h=s.find(U=>U.person===l.person);h?h.victories++:s.push({person:l.person,victories:1})}}return s.reduce((c,r)=>r.victories>c.victories?r:c).person}static getMaxFaction(t){const a=[i.Alliance,i.MultiAlliance,i.Solo,i.SpecialFremen,i.SpecialSpacingGuild],s=[{faction:d.Unknown,victories:0}];for(const c of t){const r=c.players.filter(l=>a.includes(l.victory_type));for(const l of r){const h=s.find(U=>U.faction===l.faction);h?h.victories++:s.push({faction:l.faction,victories:1})}}return s.reduce((c,r)=>r.victories>c.victories?r:c).faction}static getPersonWins(t,a){const s=[i.Alliance,i.MultiAlliance,i.Solo,i.SpecialFremen,i.SpecialSpacingGuild];return t.filter(c=>c.players.find(r=>s.includes(r.victory_type)&&r.person===a))}static getPersonDefeats(t,a){const s=[i.Alliance,i.MultiAlliance,i.Solo,i.SpecialFremen,i.SpecialSpacingGuild];return t.filter(c=>c.players.find(r=>!s.includes(r.victory_type)&&r.person===a))}static getSeatRates(t){const a=[i.Alliance,i.MultiAlliance,i.Solo,i.SpecialFremen,i.SpecialSpacingGuild],s=[0,0,0,0,0,0];for(const c of t){const r=c.players.filter(l=>a.includes(l.victory_type));for(const l of r)s[l.seat_position-1]++}return s}}class x{constructor(t,a,s,c,r,l){u(this,"game_id");u(this,"end_turn");u(this,"players");u(this,"components");u(this,"duration");u(this,"location");this.game_id=t,this.end_turn=a,this.players=s,this.components=c,this.duration=r,this.location=l}static getGameByGameId(t){const a=this.getAllGames().find(s=>s.game_id===t);return a||new x(-1,-1,[],[],-1,M.Unknown)}static getGamesByLocation(t){return this.getAllGames().filter(a=>a.location===t)}static getGamesByNumberOfPlayers(t){return this.getAllGames().filter(a=>a.players.length===t)}static getAllGames(){return[new x(0,10,_.getPlayersByGameId(0),R.getComponentsByQuery([],[4,11,15]),8,M.Chicago),new x(1,5,_.getPlayersByGameId(1),R.getComponentsByQuery([2,51],[]),3,M.Chicago)]}}class I{constructor(t){u(this,"person");u(this,"loaded");u(this,"data");this.person=t,this.loaded=!1,this.data=new k(d.Unknown,f.Unknown,0,0,f.Unknown,0,f.Unknown,d.Unknown,[])}static getPeople(){const t=[];for(const a of Object.values(f))t.push(new I(a));return t}}class _{constructor(t,a,s,c,r){u(this,"person");u(this,"game_id");u(this,"faction");u(this,"seat_position");u(this,"victory_type");this.game_id=t,this.seat_position=a,this.person=s,this.faction=c,this.victory_type=r}static getPlayersByGameId(t){return this.getAllPlayers().filter(a=>a.game_id===t)}static getPlayersByPersonId(t){return this.getAllPlayers().filter(a=>a.person===t)}static getAllPlayers(){return[new _(0,1,f.ThomasS,d.Moritani,i.Defeat),new _(0,2,f.ChrisS,d.Harkonnen,i.Solo),new _(0,3,f.AmandaS,d.Fremen,i.Defeat),new _(0,4,f.TomS,d.Emperor,i.Defeat),new _(0,5,f.AliciaS,d.Atreides,i.Defeat),new _(0,6,f.KenS,d.SpacingGuild,i.Defeat),new _(1,1,f.JackI,d.SpacingGuild,i.Alliance),new _(1,2,f.Zak,d.Atreides,i.Defeat),new _(1,3,f.Teddy,d.Fremen,i.Alliance),new _(1,4,f.Zach,d.BeneGesserit,i.Defeat),new _(1,5,f.Logan,d.Harkonnen,i.Defeat)]}}var M=(e=>(e.Lincoln="Lincoln, NE",e.Chicago="Chicago, IL",e.Madison="Madison, WI",e.Unknown="Unknown",e))(M||{}),f=(e=>(e.AliciaS="Alicia S",e.AmandaS="Amanda S",e.ChrisS="Chris S",e.KenS="Ken S",e.ThomasS="Thomas S",e.TomS="Tom S",e.JackI="Jack i",e.Teddy="Teddy i",e.Zach="Zach H",e.Zak="Zak Ben A",e.Logan="Logan R",e.Unknown="n/a",e))(f||{}),i=(e=>(e.Alliance="Alliance",e.BetrayedDefeat="Betrayed Defeat",e.BetrayalVictory="Betrayal Victory",e.Defeat="Defeat",e.MultiAlliance="MultiAlliance",e.PredictedDefeat="Predicted Defeat",e.Solo="Solo",e.SpecialBeneGesserit="Special Bene Gesserit",e.SpecialFremen="Special Fremen",e.SpecialSpacingGuild="Special Spacing Guild",e))(i||{});const q=F({data(){return{factionData:g.getFactions(),allGames:x.getAllGames()}},methods:{loadFactionData(e){const t=this.factionData.findIndex(a=>a.faction===e);t!==-1&&(this.factionData[t].data=k.getFactionStatistics(this.allGames,e),this.factionData[t].loaded=!0)}}});const Y={class:"faction-content"},ee={class:"panel-container"},te={class:"icon-container"},ae=["src"];function ne(e,t,a,s,c,r){return m(),A(X,{multiple:""},{default:n(()=>[o(D,null,{default:n(()=>[(m(!0),b(L,null,O(e.factionData,l=>(m(),A(z,{key:l.faction,cols:"6"},{default:n(()=>[o(C,{color:l.color,class:T({"choam-card":l.faction==="CHOAM"})},{default:n(()=>[p("div",Y,[p("div",ee,[o(J,{title:l.faction,class:"transparent-panel h2-text",onClick:h=>l.loaded?null:e.loadFactionData(l.faction)},{default:n(()=>[o(K,{class:"panel-text"},{default:n(()=>[o(D,null,{default:n(()=>[o(S,null,{default:n(()=>[o(y,null,{default:n(()=>[p("div",null,v(Math.round(l.data.usage_rate*100))+"%",1)]),_:2},1024),o(G,{class:"subtitle-text"},{default:n(()=>[w("Usage Rate")]),_:1})]),_:2},1024),o(S,null,{default:n(()=>[o(y,null,{default:n(()=>[p("div",null,v(Math.round(l.data.win_rate*100))+"%",1)]),_:2},1024),o(G,{class:"subtitle-text"},{default:n(()=>[w("Win Rate")]),_:1})]),_:2},1024),o(S,null,{default:n(()=>[o(y,null,{default:n(()=>[p("div",null,v(l.data.champion),1)]),_:2},1024),o(G,{class:"subtitle-text"},{default:n(()=>[w("Champion")]),_:1})]),_:2},1024),o(S,null,{default:n(()=>[o(y,null,{default:n(()=>[p("div",null,v(l.data.average_game_length!==0?"Turn "+l.data.average_game_length:"n/a"),1)]),_:2},1024),o(G,{class:"subtitle-text"},{default:n(()=>[w("Average Game Length")]),_:1})]),_:2},1024),o(S,null,{default:n(()=>[o(y,null,{default:n(()=>[p("div",null,v(l.data.adversary),1)]),_:2},1024),o(G,{class:"subtitle-text"},{default:n(()=>[w("Adversary")]),_:1})]),_:2},1024),o(S,null,{default:n(()=>[o(y,null,{default:n(()=>[p("div",null,v(l.data.rival_house),1)]),_:2},1024),o(G,{class:"subtitle-text"},{default:n(()=>[w("Rival House")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["title","onClick"])]),p("div",te,[p("img",{src:l.image_url,class:"faction-icon"},null,8,ae)])])]),_:2},1032,["color","class"])]),_:2},1024))),128))]),_:1})]),_:1})}const se=$(q,[["render",ne],["__scopeId","data-v-11068212"]]),le=F({data(){return{searchQuery:"",peopleData:I.getPeople(),selectedPerson:new I(f.Unknown),allGames:x.getAllGames()}},mounted(){const e=this.peopleData.findIndex(t=>t.person==="n/a");this.peopleData[e].data=k.getPersonStatistics(this.allGames,this.peopleData[e].person),this.selectedPerson=this.peopleData[e]},computed:{filteredPlayers(){const e=this.peopleData.filter(t=>t.person.toLowerCase().includes(this.searchQuery.toLowerCase()));return e.length<Object.values(f).length?e:[]}},methods:{searchPlayer(e){const t=this.peopleData.find(a=>a.person===e);if(t===void 0){const a=this.peopleData.findIndex(s=>s.person==="n/a");this.selectedPerson=this.peopleData[a]}else{const a=this.peopleData.findIndex(s=>s.person.includes(t.person));a!==-1?this.peopleData[a].loaded?this.selectedPerson===this.peopleData[a]?this.clearSearch():(this.selectedPerson=this.peopleData[a],this.searchQuery=this.peopleData[a].person):(this.peopleData[a].data=k.getPersonStatistics(this.allGames,this.peopleData[a].person),this.peopleData[a].loaded=!0,this.selectedPerson=this.peopleData[a],this.searchQuery=this.peopleData[a].person):this.clearSearch()}},clearSearch(){this.searchQuery="";const e=this.peopleData.findIndex(t=>t.person==="n/a");this.selectedPerson=this.peopleData[e]}}});const ie={class:"search-panel"},oe={key:0},re={key:0},ce={key:0},de={class:"selected-person"};function ue(e,t,a,s,c,r){return m(),A(C,{class:"player-card h2-text"},{default:n(()=>[p("div",ie,[W(p("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>e.searchQuery=l),placeholder:"Search player..."},null,512),[[N,e.searchQuery]]),e.selectedPerson?(m(),b("div",oe,[e.filteredPlayers.length>0?(m(),b("div",re,[o(D,null,{default:n(()=>[(m(!0),b(L,null,O(e.filteredPlayers,l=>(m(),A(C,{class:"filtered-person h2-text",key:l.person,onClick:h=>e.searchPlayer(l.person)},{default:n(()=>[e.selectedPerson.person!=="n/a"&&e.searchQuery!==""?(m(),b("button",ce," X ")):P("",!0),o(S,null,{default:n(()=>[o(y,null,{default:n(()=>[w(v(l.person),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})])):P("",!0)])):P("",!0)]),p("div",de,[o(D,null,{default:n(()=>[o(S,null,{default:n(()=>[o(y,null,{default:n(()=>[p("div",null,v(e.selectedPerson.data.usage_rate),1)]),_:1}),o(G,{class:"subtitle-text"},{default:n(()=>[w("Number of Games")]),_:1})]),_:1}),e.selectedPerson.person!=="n/a"?(m(),A(S,{key:0},{default:n(()=>[o(y,null,{default:n(()=>[p("div",null,v(Math.round(e.selectedPerson.data.win_rate*100))+"%",1)]),_:1}),o(G,{class:"subtitle-text"},{default:n(()=>[w("Win Rate")]),_:1})]),_:1})):P("",!0),o(S,null,{default:n(()=>[o(y,null,{default:n(()=>[p("div",null,v(e.selectedPerson.data.champion),1)]),_:1}),o(G,{class:"subtitle-text"},{default:n(()=>[w("Best Faction")]),_:1})]),_:1}),o(S,null,{default:n(()=>[o(y,null,{default:n(()=>[p("div",null,v(e.selectedPerson.data.average_game_length!==0?"Turn "+e.selectedPerson.data.average_game_length:"n/a"),1)]),_:1}),o(G,{class:"subtitle-text"},{default:n(()=>[w("Average Game Length")]),_:1})]),_:1}),e.selectedPerson.person!=="n/a"?(m(),A(S,{key:1},{default:n(()=>[o(y,null,{default:n(()=>[p("div",null,v(e.selectedPerson.data.adversary),1)]),_:1}),o(G,{class:"subtitle-text"},{default:n(()=>[w("Adversary")]),_:1})]),_:1})):P("",!0),e.selectedPerson.person!=="n/a"?(m(),A(S,{key:2},{default:n(()=>[o(y,null,{default:n(()=>[p("div",null,v(e.selectedPerson.data.rival_house),1)]),_:1}),o(G,{class:"subtitle-text"},{default:n(()=>[w("Rival House")]),_:1})]),_:1})):P("",!0),e.selectedPerson.person==="n/a"?(m(),A(S,{key:3},{default:n(()=>[o(y,null,{default:n(()=>[p("div",null,v(e.selectedPerson.data.seat_rates),1)]),_:1}),o(G,{class:"subtitle-text"},{default:n(()=>[w("Seat Win Rate")]),_:1})]),_:1})):P("",!0)]),_:1})])]),_:1})}const fe=$(le,[["render",ue],["__scopeId","data-v-e31a558f"]]),pe=F({components:{FactionStatistics:se,SearchPanel:fe}});const H=e=>(Z("data-v-014fcabe"),e=e(),j(),e),he={class:"default-page"},ge={class:"dune-box"},_e=H(()=>p("h2",{class:"h2-text"}," Player Standings ",-1)),me=H(()=>p("h2",{class:"h2-text"}," House Standings ",-1));function ve(e,t,a,s,c,r){const l=B("SearchPanel"),h=B("FactionStatistics");return m(),b("div",he,[p("div",ge,[o(D,{class:"centered-row"},{default:n(()=>[_e,o(l),me,o(h)]),_:1})])])}const Pe=$(pe,[["render",ve],["__scopeId","data-v-014fcabe"]]);export{Pe as default};