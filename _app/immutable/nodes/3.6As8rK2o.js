import{f as j,a as x,t as Ln}from"../chunks/DPlvkFm0.js";import{o as je}from"../chunks/KAbdqWM9.js";import{b as ae,aj as Ae,aH as Te,aI as Ee,p as qn,K as hn,M as w,A as cn,f as Cn,a as Un,s as A,O as d,G as n,r as k,c as b,t as Q,P as z,aE as oe,u as Gn,n as re}from"../chunks/BdTgY9eL.js";import{l as Ce,d as ie,e as xn,s as H}from"../chunks/C47bpkFX.js";import{p as tn,i as G,_ as Oe}from"../chunks/KtMjZMst.js";import{e as Sn,s as Jn,i as ze,a as Me}from"../chunks/BnN2SeId.js";import{r as se}from"../chunks/9dwx9m8B.js";import{b as jn}from"../chunks/C76N4Jfz.js";import{s as Be}from"../chunks/B_vuz94t.js";function le(e,t,i){if(e.multiple)return t==null?void 0:Ae(t)?Ke(e,t):Te();for(var o of e.options){var f=En(o);if(Ee(f,t)){o.selected=!0;return}}(!i||t!==void 0)&&(e.selectedIndex=-1)}function Pe(e,t){ae(()=>{var i=new MutationObserver(()=>{var o=e.__value;le(e,o)});return i.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{i.disconnect()}})}function Re(e,t,i=t){var o=!0;Ce(e,"change",f=>{var p=f?"[selected]":":checked",y;if(e.multiple)y=[].map.call(e.querySelectorAll(p),En);else{var M=e.querySelector(p)??e.querySelector("option:not([disabled])");y=M&&En(M)}i(y)}),ae(()=>{var f=t();if(le(e,f,o),o&&f===void 0){var p=e.querySelector(":checked");p!==null&&(f=En(p),i(f))}e.__value=f,o=!1}),Pe(e)}function Ke(e,t){for(var i of e.options)i.selected=t.includes(En(i))}function En(e){return"__value"in e?e.__value:e.value}function Le(e,t,i,o,f){var p,y;if(e.target===t()&&(i("key",`k=${e.key} kc=${e.keyCode}`),!(e.isComposing||e.keyCode===229||e.ctrlKey||e.metaKey)))switch(e.key){case"ArrowLeft":case"ArrowRight":e.preventDefault();break;case"Backspace":(((p=t())==null?void 0:p.value)??"")===""&&(e.preventDefault(),o()());break;case" ":case"Enter":e.preventDefault(),f()(((y=t())==null?void 0:y.value)??"");break}}function Ne(e,t,i,o){var f;e.target===t()&&(i("binp",`t=${e.inputType}`),e.inputType==="deleteContentBackward"&&(((f=t())==null?void 0:f.value)??"")===""&&(e.preventDefault(),o()()))}var De=j('<input class="invisible-input svelte-jdasr6" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" enterkeyhint="next"/>'),He=(e,t)=>d(t,!n(t)),Ge=j('<div class="debug-warn svelte-jdasr6"> </div>'),Fe=j('<div><div class="debug-bar svelte-jdasr6"><button class="debug-btn svelte-jdasr6"> </button> <button class="debug-btn svelte-jdasr6"> </button></div> <!> <textarea class="debug-text svelte-jdasr6" readonly=""></textarea></div>'),We=j('<span class="input-anchor svelte-jdasr6"></span> <!>',1);function Ve(e,t){qn(t,!0);let i=tn(t,"onInput",3,()=>{}),o=tn(t,"onSubmit",3,()=>{}),f=tn(t,"onBackspaceEmpty",3,()=>{}),p=tn(t,"debug",3,!1),y=hn([void 0,void 0]),M=w(0),I=!1,B="";const g=()=>y[n(M)];function R(s=""){const c=n(M)===0?1:0,v=y[c];d(M,c,!0),I=!1,B=s,v&&(v.value=s,v.focus(),v.setSelectionRange(s.length,s.length)),W("reset",`seed="${s}"`)}function C(){for(const s of y)s&&(s.value="");d(M,0),I=!1,B="",W("clear")}function Y(s){const c=g();c&&(c.value!==s&&(c.value=s),c.setSelectionRange(s.length,s.length),B=s,W("setValue",`"${s}"`))}function Z(){var s;(s=g())==null||s.focus()}function K(){const s=g();if(!s)return;const c=s.value.length;(s.selectionStart!==c||s.selectionEnd!==c)&&s.setSelectionRange(c,c)}function $(s){var l;if(s.target!==g())return;const c=((l=g())==null?void 0:l.value)??"",v=s;W("input",`d="${v.data??""}" it=${v.inputType??""} ic${v.isComposing?1:0}`),c!==B&&(B=c,v.isComposing||K(),i()(c))}function q(s){s.target===g()&&(I=!0,W("cstart"))}function fn(s){s.target===g()&&W("cupd",`d="${s.data??""}"`)}function _n(s){var v;if(s.target!==g())return;I=!1;const c=((v=g())==null?void 0:v.value)??"";W("cend",`d="${s.data??""}"`),c!==B&&(B=c,i()(c)),K()}let F=w(hn([])),U=w(!1),an=w(!0),L=w(void 0);function mn(){const s=n(F).join(`
`);let c=!1;if(n(L)){n(L).focus(),n(L).setSelectionRange(0,s.length);try{c=document.execCommand("copy")}catch{c=!1}}!c&&navigator.clipboard&&navigator.clipboard.writeText(s).catch(()=>{}),d(U,!0),setTimeout(()=>d(U,!1),1500)}function W(s,c=""){if(!p())return;const v=g(),l=(v==null?void 0:v.value)??"",m=v?`${v.selectionStart},${v.selectionEnd}`:"?";d(F,[`${s} c${I?1:0} s${n(M)} sel${m} v"${l}" ${c}`,...n(F)].slice(0,30),!0)}let J=w("");cn(()=>{const s=g();s&&requestAnimationFrame(()=>{const c=s.getBoundingClientRect();if(c.width>0&&c.height>0){d(J,"");return}d(J,`!! hidden input is ${c.width}x${c.height} — IME composition will break`)})});var nn=We(),on=Cn(nn);Sn(on,20,()=>[0,1],s=>s,(s,c)=>{var v=De();v.__keydown=[Le,g,W,f,o],v.__beforeinput=[Ne,g,W,f],v.__input=$,jn(v,(l,m)=>y[m]=l,l=>y==null?void 0:y[l],()=>[c]),xn("compositionstart",v,q),xn("compositionupdate",v,fn),xn("compositionend",v,_n),x(s,v)}),k(on);var rn=A(on,2);{var pn=s=>{var c=Fe();let v;var l=b(c),m=b(l);m.__click=[He,an];var T=b(m);k(m);var S=A(m,2);S.__click=mn;var E=b(S,!0);k(S),k(l);var sn=A(l,2);{var gn=P=>{var O=Ge(),N=b(O,!0);k(O),Q(()=>H(N,n(J))),x(P,O)};G(sn,P=>{n(J)&&P(gn)})}var X=A(sn,2);se(X),X.__click=mn,jn(X,P=>d(L,P),()=>n(L)),k(c),Q((P,O)=>{v=Jn(c,1,"debug svelte-jdasr6",null,v,P),H(T,`${n(an)?"▶":"▼"} debug (${n(F).length??""})`),H(E,n(U)?"✓ copied":"⇥ copy"),Be(X,O)},[()=>({collapsed:n(an)}),()=>n(F).join(`
`)]),x(s,c)};G(rn,s=>{p()&&s(pn)})}return x(e,nn),Un({reset:R,clear:C,setValue:Y,focus:Z})}ie(["keydown","beforeinput","input","click"]);var Ye=j('<div class="line-break svelte-141pnu7"></div>'),qe=j('<div class="word-gap svelte-141pnu7"></div>'),Ue=j('<!> <div class="character svelte-141pnu7"><div> </div> <div class="userinputted typedincorrect svelte-141pnu7"> </div></div>',1),Je=j('<div class="line-break svelte-141pnu7"></div>'),Xe=j('<div class="word-gap svelte-141pnu7"></div>'),Qe=j('<div class="line-break svelte-141pnu7"></div>'),Ze=j('<div class="word-gap svelte-141pnu7"></div>'),$e=j('<!> <div class="character svelte-141pnu7"><div class="kana svelte-141pnu7"> </div></div>',1),nt=j('<div class="textbox-wrapper svelte-141pnu7" role="textbox" tabindex="0"><div class="centered-vertical-crop svelte-141pnu7"><!> <!> <div class="character svelte-141pnu7"><div class="kana svelte-141pnu7"> </div> <!> <div class="userinput svelte-141pnu7"><span class="svelte-141pnu7"> </span> <div aria-hidden="true" class="caret-container svelte-141pnu7"><div aria-hidden="true" class="caret svelte-141pnu7"></div></div></div></div> <!></div></div>');function et(e,t){qn(t,!0);let i=tn(t,"lineBreaks",19,()=>new Set),o=tn(t,"wordGaps",19,()=>new Set),f=tn(t,"maxWordLength",3,null),p=tn(t,"resetKey",3,""),y=tn(t,"onAdvance",3,()=>{}),M=tn(t,"debug",3,!1),I=w(void 0),B=w(void 0),g=z(()=>(p(),0)),R=z(()=>(p(),"")),C=w(hn([]));cn(()=>{p(),d(C,[],!0),Gn(()=>{var l;return(l=n(I))==null?void 0:l.clear()})}),cn(()=>{y()(n(g),n(C))});function Y(l,m){var S;const T=Math.max(0,Math.min(l,t.templateText.length));d(C,m.slice(0,T),!0),d(g,T,!0),d(R,""),(S=n(I))==null||S.reset(""),K()}function Z(l){var m;l.preventDefault(),(m=n(I))==null||m.focus()}function K(){oe().then(()=>{var l;return(l=n(B))==null?void 0:l.scrollIntoView({block:"center"})})}function $(l){fn(t.policy.evaluate({targets:t.templateText,index:n(g),value:l,prev:n(R),trigger:"input"}),l)}function q(l){fn(t.policy.evaluate({targets:t.templateText,index:n(g),value:l,prev:n(R),trigger:"submit"}),l)}function fn(l,m){var T,S;if(l.commits.length>0){for(const E of l.commits)n(C)[n(g)]=E.correct?null:E.display,d(g,Math.min(t.templateText.length,n(g)+1),!0);d(R,l.residual,!0),(T=n(I))==null||T.reset(l.residual),K()}else{const E=f()==null?m:m.slice(0,f());d(R,E,!0),E!==m&&((S=n(I))==null||S.setValue(E))}}function _n(){var l;t.policy.stepBackOnBackspace!==!1&&n(g)!==0&&(d(g,n(g)-1),n(C)[n(g)]=void 0,d(R,""),(l=n(I))==null||l.reset(""),K())}var F=nt(),U=b(F),an=b(U);Sn(an,17,()=>t.templateText.slice(0,n(g)),ze,(l,m,T)=>{var S=Ue();const E=z(()=>n(C)[T]);var sn=Cn(S);{var gn=D=>{var un=Ye();x(D,un)},X=(D,un)=>{{var On=An=>{var Tn=qe();x(An,Tn)};G(D,An=>{o().has(T)&&An(On)},un)}};G(sn,D=>{i().has(T)?D(gn):D(X,!1)})}var P=A(sn,2),O=b(P),N=b(O,!0);k(O);var ln=A(O,2),kn=b(ln,!0);k(ln),k(P),Q(()=>{Jn(O,1,`kana ${n(E)==null?"typedcorrect":"typedincorrect"}`,"svelte-141pnu7"),H(N,n(m)),H(kn,n(E)==null?"":n(E))}),x(l,S)});var L=A(an,2);{var mn=l=>{var m=Je();x(l,m)},W=(l,m)=>{{var T=S=>{var E=Xe();x(S,E)};G(l,S=>{o().has(n(g))&&S(T)},m)}};G(L,l=>{i().has(n(g))?l(mn):l(W,!1)})}var J=A(L,2),nn=b(J),on=b(nn,!0);k(nn);var rn=A(nn,2);jn(Ve(rn,{onInput:$,onSubmit:q,onBackspaceEmpty:_n,get debug(){return M()}}),l=>d(I,l,!0),()=>n(I));var pn=A(rn,2),s=b(pn),c=b(s,!0);k(s),re(2),k(pn),k(J),jn(J,l=>d(B,l),()=>n(B));var v=A(J,2);return Sn(v,19,()=>t.templateText.slice(n(g)+1),(l,m)=>m+n(g)+1,(l,m,T)=>{var S=$e(),E=Cn(S);{var sn=N=>{var ln=Qe();x(N,ln)},gn=(N,ln)=>{{var kn=D=>{var un=Ze();x(D,un)};G(N,D=>{o().has(n(T)+n(g)+1)&&D(kn)},ln)}};G(E,N=>{i().has(n(T)+n(g)+1)?N(sn):N(gn,!1)})}var X=A(E,2),P=b(X),O=b(P,!0);k(P),k(X),Q(()=>H(O,n(m))),x(l,S)}),k(U),k(F),Q(()=>{H(on,t.templateText[n(g)]),H(c,n(R))}),xn("focus",F,Z),x(e,F),Un({restore:Y})}const ue="kana-session-v1",tt=5e4;function at(){try{const e=localStorage.getItem(ue);if(!e)return null;const t=JSON.parse(e);return!t||typeof t!="object"||t.mode!=="romaji"&&t.mode!=="kana"||(typeof t.katakana!="boolean"&&(t.katakana=!1),typeof t.sourceId!="string"||typeof t.templatestring!="string")||typeof t.curIndex!="number"||t.curIndex<0||!Array.isArray(t.marks)||t.stream!==null&&!Array.isArray(t.stream)?null:t}catch{return null}}function ot(e){try{const t=e.stream&&e.stream.length>tt?null:e.stream;localStorage.setItem(ue,JSON.stringify({...e,stream:t}))}catch{}}const dn={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",を:"wo",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"ji",づ:"dzu",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ア:"a",イ:"i",ウ:"u",エ:"e",オ:"o",カ:"ka",キ:"ki",ク:"ku",ケ:"ke",コ:"ko",サ:"sa",シ:"shi",ス:"su",セ:"se",ソ:"so",タ:"ta",チ:"chi",ツ:"tsu",テ:"te",ト:"to",ナ:"na",ニ:"ni",ヌ:"nu",ネ:"ne",ノ:"no",ハ:"ha",ヒ:"hi",フ:"fu",ヘ:"he",ホ:"ho",マ:"ma",ミ:"mi",ム:"mu",メ:"me",モ:"mo",ヤ:"ya",ユ:"yu",ヨ:"yo",ラ:"ra",リ:"ri",ル:"ru",レ:"re",ロ:"ro",ワ:"wa",ヲ:"wo",ン:"n",ガ:"ga",ギ:"gi",グ:"gu",ゲ:"ge",ゴ:"go",ザ:"za",ジ:"ji",ズ:"zu",ゼ:"ze",ゾ:"zo",ダ:"da",ヂ:"ji",ヅ:"dzu",デ:"de",ド:"do",バ:"ba",ビ:"bi",ブ:"bu",ベ:"be",ボ:"bo",パ:"pa",ピ:"pi",プ:"pu",ペ:"pe",ポ:"po",キャ:"kya",キュ:"kyu",キョ:"kyo",ギャ:"gya",ギュ:"gyu",ギョ:"gyo",シャ:"sha",シュ:"shu",ショ:"sho",ジャ:"ja",ジュ:"ju",ジョ:"jo",チャ:"cha",チュ:"chu",チョ:"cho",ヂャ:"ja",ヂュ:"ju",ヂョ:"jo",ニャ:"nya",ニュ:"nyu",ニョ:"nyo",ヒャ:"hya",ヒュ:"hyu",ヒョ:"hyo",ビャ:"bya",ビュ:"byu",ビョ:"byo",ピャ:"pya",ピュ:"pyu",ピョ:"pyo",ミャ:"mya",ミュ:"myu",ミョ:"myo",リャ:"rya",リュ:"ryu",リョ:"ryo",ウァ:"wa",ウィ:"wi",ウェ:"we",ウォ:"wo",ヴァ:"va",ヴィ:"vi",ヴ:"vu",ヴェ:"ve",ヴォ:"vo",シェ:"she",ジェ:"je",チェ:"che",ティ:"ti",テュ:"tyu",ディ:"di",デュ:"dyu",トゥ:"tu",ドゥ:"du",ファ:"fa",フィ:"fi",フュ:"fyu",フェ:"fe",フォ:"fo",キェ:"kye",ギェ:"gye",クァ:"kwa",クィ:"kwi",クェ:"kwe",クォ:"kwo",グァ:"gwa",グィ:"gwi",グェ:"gwe",グォ:"gwo",スィ:"si",ズィ:"zi",ツァ:"tsa",ツィ:"tsi",ツェ:"tse",ツォ:"tso",イェ:"ye",ニェ:"nye",ヒェ:"hye",ビェ:"bye",ピェ:"pye",ミェ:"mye",リェ:"rye"},Fn=new Set(["kk","ss","tt","pp","cc","ff","mm","rr","gg","zz","dd","bb"]),Wn=new Set(Object.values(dn));Fn.forEach(Wn.add,Wn);function ce(e){const t=[],i=new Set;let o=0;for(;o<e.length;){const f=e.slice(o,o+1),p=e.slice(o,o+2);p in dn?(t.push(p),o+=2):f in dn||f=="っ"||f=="ッ"||f=="ー"?(t.push(e[o]),o+=1):(f==`
`&&t.length>0&&i.add(t.length),o+=1)}return{tokens:t,lineBreaks:i}}function rt(e){const t=[],i=new Set;for(const o of e)o==`
`?t.length>0&&i.add(t.length):/[ぁ-ゖァ-ヺー]/.test(o)&&t.push(o);return{tokens:t,lineBreaks:i}}function Pn(e){let t="";for(const i of e){const o=i.codePointAt(0);t+=o>=12449&&o<=12534?String.fromCodePoint(o-96):i}return t}function de(e){let t="";for(const i of e){const o=i.codePointAt(0);t+=o>=12353&&o<=12438?String.fromCodePoint(o+96):i}return t}const it=Object.assign({"/corpus/words/common.tsv":()=>Oe(()=>import("../chunks/Bggu50it.js"),[],import.meta.url).then(e=>e.default)}),fe=new Map(Object.entries(it).map(([e,t])=>[e.split("/").pop().replace(/\.tsv$/,""),t])),ve=[...fe.keys()].sort();function st(e){const t=[];for(const i of e.split(/\r?\n/)){if(i.trim()===""||i.startsWith("#"))continue;const[o="",f="",p=""]=i.split("	").map(y=>y.trim());t.push({reading:o,surface:f,gloss:p})}return t}const Nn=new Map;function lt(e){let t=Nn.get(e);if(!t){const i=fe.get(e);t=i?i().then(st):Promise.resolve([]),t.catch(()=>Nn.delete(e)),Nn.set(e,t)}return t}const Vn=e=>e[Math.floor(Math.random()*e.length)],pe=Object.keys(dn),ut=e=>/^[ぁ-ゖ]+$/.test(e),ct=e=>/^[ァ-ヺ]+$/.test(e),Rn=[..."あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわを"],dt=[..."あかさたなはまやらわ"],Xn=[..."がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ"],ge=pe.filter(e=>[...e].length===2&&ut(e)),ft=pe.filter(e=>ct(e)&&!(Pn(e)in dn)),vt=.35,pt=.12,gt=.15,ht=.12,Dn=[[2,.25],[3,.35],[4,.25],[5,.15]];function _t(){let e=Math.random();for(const[t,i]of Dn)if((e-=i)<0)return t;return Dn[Dn.length-1][0]}function mt(e){const t=dn[e]??dn[Pn(e)]??"";return/^[kstpcf]/.test(t)}function bn(e){const t=e.script==="kata",i=e.focus&&e.focus.length>0?e.focus:void 0,o=Array.from({length:_t()},()=>i&&Math.random()<vt?Vn(i):Vn(e.pool));let f="";return o.forEach((p,y)=>{f+=p;const M=o[y+1],I=[];e.n&&I.push([t?"ン":"ん",pt]),e.sokuon&&M!==void 0&&mt(M)&&I.push([t?"ッ":"っ",gt]),e.choon&&I.push(["ー",ht]);let B=Math.random();for(const[g,R]of I)if((B-=R)<0){f+=g;break}}),f}const kt={pool:Rn,script:"hira",n:!0},yt={pool:Rn,focus:Xn,script:"hira",n:!0},$n={pool:[...Rn,...Xn],focus:ge,script:"hira",n:!0,sokuon:!0},ne={pool:[...Rn,...Xn,...ge].map(de),focus:ft,script:"kata",n:!0,sokuon:!0,choon:!0};function wn(e,t,i){return{id:e,title:t,group:"kana",next:o=>Array.from({length:o},i)}}const bt=[wn("inf-a","あ-row only",()=>bn({pool:dt,script:"hira"})),wn("inf-random","Basic kana",()=>bn(kt)),wn("inf-voiced","Kana + dakuten",()=>bn(yt)),wn("inf-yoon","All hiragana",()=>bn($n)),wn("inf-foreign","Katakana sounds",()=>bn(ne)),wn("inf-all","Everything",()=>bn(Math.random()<.5?$n:ne))];function wt(e){const t=new Map;for(const f of e)for(const p of f)p.reading===""||t.has(p.reading)||ce(p.reading).tokens.join("")===p.reading&&t.set(p.reading,p);const i=[...t.keys()],o=i.filter(f=>/^[ァ-ヺー]+$/.test(f));return{readings:i,katakana:o,byReading:t}}let In,Hn;function xt(){return Hn??(Hn=Promise.all(ve.map(lt)).then(e=>{In=wt(e)},e=>{throw Hn=void 0,e})),Hn}function St(e){const t=In==null?void 0:In.byReading.get(e);return t&&[t.surface!==t.reading?t.surface:"",t.gloss].filter(o=>o!=="").join(" · ")||void 0}function ee(e,t,i){return{id:e,title:t,group:"words",load:xt,next(o){const f=In?i(In):[];return f.length===0?[]:Array.from({length:o},()=>Vn(f))},hint:St}}const It=ve.length>0?[ee("words-common","Common words",e=>e.readings),ee("words-katakana","Katakana words",e=>e.katakana)]:[],Yn=[...bt,...It];function te(e){return Yn.find(t=>t.id===e)}const jt=`ユメのめいろ…ユリのめいろ…

あこがれをかたるめが
とおくをさがしてるとき
さびしくなる
わたしはここにいるといいたいの

Ah! ふたりきりでがらすのはなぞのへと
だれもいない だれもいらない
そっとこわれそうにさきたい

ひみつのブランコ
あなたとゆれながらいま
ただやさしくみつめあうの
こいにこいするしょうじょのしずかなためいきは
Lonely…みちたりたLonely

とじこめたいこころを
どこにもいかないように
さびしいのよ
わたしとここにいてよいつまでも

Ah! ユメのめいろ がらすのちょうちょたちは
さそいながら さそわれてる
ゆびでこわれそうなはばたき

ないしょのロマンス
あなたをかんじたいのに
まだせつなくみつめるだけ
こいをこいするしょうじょでいられないきもちに
なぜ…くるしくなるの?

ふたりきりのはなぞのでねむりにつく
かみをなでるそのてがすき もっと…

ないしょのロマンス
あなたをかんじたいのに
まだせつなくみつめるだけ
こいをこいするしょうじょでいられないきもちに
なぜ…くるしくなるの?
ひみつのブランコ
あなたとゆれながらいま
ただやさしくみつめあうの
こいにこいするしょうじょのしずかなためいきは
Lonely…みちたりたLonely

ユメのめいろ…ユリのめいろ…
`,At=`おどってるだけでたいじょう
それをそっかそっかっていって
おしあわせについてとうろん
なにがせいぎなんかっておもう
なまいきそうにガムかんで
それもいいないいなっておもう
テレスコープごしのかんじょう
ロッカーにぜんぶつめこんだ

おどってないよるをしらない
おどってないよるがきにいらない
おどってないよるをしらない
おどってないよるがきにいらないよ
きにいらないよるなんてもうぼくはしらない
おどってないよるがないよるなんて
とってもとってもたいくつです

おもってるだけでこうどう
きっとNIGHTおんがくもおどる
タンスでダンスするげんじょう
これはチャンスなんかっておもう
カスタネットがほらたんたん
たたたたんたたんたんたたんたん
おどってないよるをしらないひととか
このよにひとりもございません

おどってないよるをしらない
おどってないよるがきにいらない
おどってないよるをしらない
おどってないよるがきにいらないよ
きにいらないよるなんてもうぼくはしらない
おどってないよるがないよるなんて
とってもとってもたいくつです

いつもまってる ダンスホールはまってる
かわってく かわってく きずだらけでもまってる
ほらおどってる ダンスホールのみらいに
いろをぬっていきるのは あなた あなた
「ダンスはえがおでまってる」

おどってないよるをしらない
おどってないよるがきにいらない
おどってないよるをしらない
おどってないよるがきにいらないよ
きにいらないよるなんてもうぼくはしらない
おどってないよるがないよるなんて

おどってたいよるをしりたい
おどってたいよるをきにいりたい
おどってたいよるをしりたい
おどってないよるがきにいらないよ
きにいらないよるなんてもうぼくはしらない
おどってたいよるにないてるなんて
とってもとってもたいくつです
おどってたいよるがたいせつなんです
とってもとってもとってもたいせつです
`,Tt=`きょうははれだ
ねこがあるく
`,Et=`このカフェにたどりついた ラッキーボーイズアンドガールズ
とびきりのメニューでおもてなし オージャストフォーユー
ぜひぜひ おこしくださいね
おあいできるひを マ・マ・マハロ

けっきょく なんきょく ほっきょく でもなくテルミー
せかいのどこかにきっと ある
わだいのカフェがどこなのかをリサーチ

きょうもBBSネットをひらい ティータイム
モア モア モア うわさがとびかう だけ
ライアー ライアー ライアー だけじゃギブアップ!
おてあげ!

そんなとき ポストにしろいレター
なかにはヒミツの かれのレシピ

キタ――(゜∀゜)――!!!!! ボクにインビテーション
せかいがきたい カンバセーション

このカフェにたどりついた ラッキーボーイズアンドガールズ
とびきりのメニューでおもてなし オージャストフォーユー
ぜひぜひ ひごろのつかれを
いやしえがおだけ マ・マ・マハロ

のもう モカ ラテ オレ チャイ
さらに アイスに パンケーキ
のもう ストロベリー マンゴー シェイク
たまに ささだけ ダイエット
マ・マ・マ・マ・マハロ

やっぱり ロンドン おフランスでボンジュール
せかいをよりみちしまグッデイ
あおいそらのしたねころんで

スマホ GPSマップをひらい テイクオフ
OMGバッテリーぎれてんじゃん
ノー ノー ノー これじゃキープオン
おてあげ

そんなとき ポケットのしろいレター
よくみて アドレスはっけん! いざカマクラ!

キタ――(゜∀゜)――!!!!! ボクにナビゲーション
せかいがきたい モチベーション

このカフェのじょうれんになった ラッキーボーイズアンドガールズ
とくべつうらメニューを おしえましょ サプライズフォーユー
ぜがひでも ためしたらDO?
ただし クレーム おことわりします!

のもう モカ ラテ オレ チャイ
さらに アイスに パンケーキ
のもう ストロベリー マンゴー シェイク
たまに ささだけ ダイエット

キタ――(゜∀゜)――!!!!! ボクにインビテーション
せかいがきたい カンバセーション

このカフェにたどりついた ラッキーボーイズアンドガールズ
とびきりのメニューでおもてなし オージャストフォーユー
ぜひぜひ ひごろのつかれを
いやしえがおだけ マ・マ・マハロ

このカフェのじょうれんになった ラッキーボーイズアンドガールズ
とくべつうらメニューをおしえましょ サプライズフォーユー
ぜがひでも ためしたらDO?
ただし クレーム おことわりします!

のもう モカ ラテ オレ チャイ
さらに アイスに パンケーキ
のもう ストロベリー マンゴー シェイク
たまに ささだけ ダイエット
マハロ
`,Ct=`Three,two,one,zero! ここでとうじょう
みてなさい わたしのほんき
スリルとびいしきでかつのよかならず

やさしげなことばささやく
にせのかわいさじゃなくて
つめたくつよくまもらなきゃ
たいせつなモノたち よわきモノたち

わたしはだれでしょ? しりたくなったでしょう?
ならばこいかも
わたしのなかにはひみつがあるとして
それをきみはどうするの
It's soldier game
またあえたとき きこうかな

Three,two,one,zero! つぎのさくせん
みてなさい わたしはほんき
シグナルうけとめてみらいをいただく

ほほえみよりもあまいのは
うそがまねいたなみだよ
はかなさもろさかくしてる
たいせつなモノなの よわきモノなの

わたしとくるでしょ? ふれたくなったでしょう?
すでにこいだよ
わたしといつかはたたかうべきあいて
それはきみのりせいかも
I'm soldier heart
まけないからね It's soldier game

いまがしょうぶよ!
わたしはだれでしょ? しりたくなったでしょう?
ならばこいかも
わたしのなかにはひみつがあるとして
それをきみは?

わたしとくるでしょ? ふれたくなったでしょう?
すでにこいだよ
わたしといつかはたたかうべきあいて
それはきみのりせいかも
It's soldier game
またあえたのに I'm soldier heart
`,Ot=`きょうはいいてんきです。コーヒーをのむ。
`,zt=`あらわれたそれははるのまっさなか えもいえぬままかがやいていた
どんなことばもどんなてぶりもたりやしないみたいだ
そのひからぼくのむねにはあらしが すみついたままはなれないんだ
ひとのこえをかりた あおいまなこのらくらいだ

ゆれながらおどるそのかみのくろが ほかのどれよりたおやかでした
すっときえそうな まっしろいはだによくにあってました
あなたにはこのせかいのいろどりが どうみえるのかしりたくていま
ほおにてをのばした こわれそうでただこわかった

すべてはあなたのおもいどおり かなしくってちらばったおもいもすべて
あなたがくれたプレゼント
ゆらゆらふかれてふかいまどい いたみ うれい こいしい

ことばにするのも かたちにするのも そのどれもがおぼつかなくって
ただめをみつめた するとあなたはふっとやさしくわらったんだ
しゃがれたこころも さざめくひみつも きがつけばこなごなになって
せつなのあいだに いたみににたこいがからだをはしったんだ

ふかいまどいいたみうれいくりかえし いつのまにかはるになった
あまいかおりのこしかげりこいこがし ふかくふかくまよいこんだ

はなびらがちればあなたとおさらば それならぼくとおどりませんか
ちゅうをまうはながどうもあなたみたいでまいりました
やがてまためぐりくるはるのさなか そこはゆたかなひだまりでした
みをやつしてやまない あんなあらしはどこへやら

まだまだこころはかえれない そのほそいこえでどうかだましておくれ
カラカラにかれはてるまで
ふらふらゆられてあまいかおり のこし かげり まぼろし

ききたいことばも いいたいおもいも わらうくらいやまほどあって
それでもあなたをまえにすると なんにもでてはこないなんて
こげつくいたみも さしこむしびれも くちをつぐんだこいとわかって
あなたのこころに はしをかけるだいじならいうだとしったんだ

どうかだましておくれ 「あい」とわらっておくれ
いつかきえるひまで そのままでいて

ことばにするのも かたちにするのも そのどれもがおぼつかなくって
ただめをみつめた するとあなたはふっとやさしくわらったんだ
しゃがれたこころも さざめくひみつも きがつけばこなごなになって
せつなのあいだに いたみににたこいがからだをはしったんだ
`,Mt=`あなたはかぜのように
めをとじてはゆうぐれ
なにをおもっているんだろうか

まぶたをひらいていた
あなたのめはビイドロ
すこしだけはるのにおいがした

はれにはれ、はなよさけ
さいてはるのせい
ふりやめばあめでさえ
あなたをかざるはる

むねをうつおとよなげ
ぼくらはるかぜ
あのくももこえてゆけ
とおくまだとおくまで

あなたははれもように
めをとじてはあおいろ
なにがかなしいのだろうか

まぶたをひらいている
あなたのめにビイドロ
いますこしあめのにおいがした

なきになけ、そらよなけ
ないてあめのせい
ふりしきるあめでさえ
くものうえでははる

つちをうつおとよなれ
ぼくらはるあれ
あのうみもこえてゆく
とおくまだとおくまで

とおりあめ くさをなびかせ
ひつじぐも あれもはるのせい
かぜのよう むねにはるのせ
はるをまつ

はれにはれ、そらよさけ
さいてはるのせい
ふりやめばあめでさえ
あなたをかざるはる

むねをうつおとかなで
ぼくらはるかぜ
おとにきくはるのかぜ
さぁこのうたよなげ!

はれにはれ、はなよさけ
さいてはるのせい
あのくももこえてゆけ
とおくまだとおくまで
`,Bt=`「あめのにおいになつかしくなるのはなんでなんでしょうか。
なつがちかづくとむねがざわめくのはなんでなんでしょうか。
ひとにわらわれたらなみだがでるのはなんでなんでしょうか。
それでもいつかむくわれるからとおもえばいいんでしょうか。」

さよならってことばでこんなにむねをさいて
いまもたったすうしゅんのゆうやけにあしがとまっていた

「せんせい、じんせいそうだんです。
このさきどうなららくですか。
そんなのだれもわかりはしないよなんていわれますか。
ほら、くるしさなんてほしいわけない。
なにもしないでいきていたい。
あおぞらだけがみたいのはわがままですか。」

「むねがいたんでもうそがつけるのはなんでなんでしょうか。
わるいひとばかりがとくをしてるのはなんでなんでしょうか。
しあわせのもじがおかねをふくむのはなんでなんでしょうか。
ひとつせんをぬけばつらさになるのはわざとなんでしょうか。」

せいしゅんってねふだがせなかにはられていて
ヒッチコックみたいなサスペンスをどこかきたいしていた

「せんせい、どうでもいいんですよ。
いきてるだけでいたいんですよ。
ニーチェもフロイトもこのあなのうめかたはかかないんだ。

ただなつのにおいにめをつぶって、
くものたかさをゆびでかこう。
おもいでだけがみたいのはわがままですか。」

「ドラマチックにひとがしぬストーリーってうれるじゃないですか。
はなのちりぎわにすらねがつくのもいやになりました。

せんせいのゆめはなんだったんですか。
おとなになるとわすれちゃうものなんですか。」

「せんせい、じんせいそうだんです。
このさきどうなららくですか。
なみだがひとをつよくするなんてぜんぶきべんでした。

あぁ、このさきどうでもいいわけなくて、げんじつだけがちらついて、
なつがとおくて。

これでもほんとうにいいんですか。
このままいきてもいいんですか。
そんなのきみにしかわからないよなんていわれますか。

ただなつのにおいにめをつぶりたい。
いつまでもかぜにふかれたい。
あおぞらだけがみたいのはわがままですか。」

あなただけをしりたいのはわがままですか
`,Pt=`そとでたしゅんかん おわったわ
てんきはいいのに すすめない
かぜ つよすぎて おなくなり
ていき ていき てきにオールバック

ちかにもぐりたいな って おもいました
かぜさえなくなれば あったかいのに
ずっとすわりたいな って おもいました
いやいや と そとでたら
ハト ハト ハト ハト だいらんとう

そとでたしゅんかん おわったわ
てんきはいいのに すすめない
かぜ つよすぎて おなくなり
ていき ていき てきにオールバック

そとでたしゅんかん おわったわ
てんきはいいのに すすめない
かぜ つよすぎて おなくなり
ていき ていき てきにオールバック

そっ とでたしゅんかん おわったわ
てんきはいいのに すすめない
かぜ つよすぎて おなくなり
ていき ていき てきにオールバック
かみのけ きょうふうオールバック
`,Rt=`まわりにあわせるげんごもしらねえ
しゅびりょくはよわいけどかんはえい
いったんすすめられたらとまれ
いったんもめんみたいに
まがれまだうえ ゆらゆらゆらして
すぐとらぶるぜ ブレスとこころえ
ってげんざいじんせい たてとほこで かっとうのかつどうがマスト

しめきられなきゃことばがぞうしょく
No thoughts, head empty きょむでえんじん
Brought to you in chaos and serenity
やめたいことをやらなきゃみたされないぼく
Shockin', isn't it?
"Dream life?" You're livin' it
"バイトだったらどこでもよくない?"

きらキラー
きらいなんてじょのくち そうおもうとらくだし
3.2.1でいがみあった
きみのそのくち シガレットからくち
わりきったけど
(しるか? しるなら drink up we're still tough)
さいていなコンプだし さいこうのこんぶだし
そろってるだけじゃつまらんし
つないだってほころぶし しょっぱいなかつおぶし
もっとあまえたいけどー?

ぞんざいでアップダウンなげんじょうがいまヒットちゅう
おちこんでるほうが すすめるセオリー
うpダウンなせいちょうが いまひとつ
ていへんのてっぺんのあじで みたされたいわ

I don't wanna write, or hold a mic
Feedback stopped me
I fell off, I gotta buy brand coffee
Figured the days of genre were long gone
Thanks a lot きみのsongがすきそう
Though I'm washed up いまだたりない
Throwin' lyrics like expired canned food stuff
Average kid got too big, I'm toast
Litter the internet with bitter sentiment and move the goal post
ぐずぐず おセンチな マイナスしこうだ
Nobody's coming and still I'm crying "Red Rover"
(What?)
Not every line hits
Moments of "I miss…"
Being nobody cuz nobody owns kindness
Should let myself
slack OFF みんなのまえで
Might go back to being unknown. Know what?
Fine
In the grand scheme, man dreams, never needing sleep aid
"しょっぱいゆめ" さよなら
あえてよかった

キラキラ
きらいなんてじょのくち そうおもうとらくだし
3.2.1でいがみあった
きみのそのくち シガレットからくち
わりきったけど
(しるか しるなら drink up we're still tough)
さいていなコンプだし さいこうのこんぶだし
そろってるだけじゃつまらんし
つないだってほころぶし しょっぱいなかつおぶし
もっとあまえたいけどー?

ぶらーーんぶらーーん

でだしのあらけずりしょうどう ここにある
まなんでるようで まなんでないこえしてる
きげんぎれ らいか ろんりねす うけいれるよ
すがおをきみにおくりたいけど
あきられてしまうから かてにする
ヤミー(やみ)エネルギーは いつもたすかってるんだよ

きらきら
らきらき
きらーーいなんてじょのくち そうおもうとらくだし
3.2.1でいがみあった
きみーーのそのくち シガレットからくち
わりきったけど
(しるか しるなら drink up we're still tough)
いつだってけんしゅうせい かちがしょうわくせい
のりこなすひつようもないし
きみときょうかんがち かめばおとの だち
もっとあまえたいけどーー?

ぶらーーんぶらーーん
`,Kt={sample:{title:"Everyday weather",description:"A short everyday line about the weather and drinking coffee."},haiku:{title:"Sunny-day haiku",description:"A two-line haiku — clear skies and a cat out walking."},zutomayo_kirakiller:{title:"綺羅キラー (feat. Mori Calliope)",description:"綺羅キラー (feat. Mori Calliope) — ずっと真夜中でいいのに。"},yorushika_hitchcock:{title:"ヒッチコック",description:"ヒッチコック — ヨルシカ"},frederic_oddloop:{title:"オドループ",description:"オドループ — フレデリック"},nishikinomaki_soldiergame:{title:"soldier game",description:"soldier game — 西木野真姫(Pile)"},yukopi_kyoufuuallback:{title:"強風オールバック",description:"強風オールバック — Yukopi feat. 歌愛ユキ"},jp_bokuniinvitation:{title:"ボクにインビテーション",description:"ボクにインビテーション — JP"},eri_nozomi_garasunohanazono:{title:"硝子の花園",description:"硝子の花園 — 絢瀬絵里(南條愛乃)&東條希(楠田亜衣奈)"},yonezukenshi_shunrai:{title:"春雷",description:"春雷 — 米津玄師"},yorushika_haru:{title:"晴る",description:"晴る — ヨルシカ"}},Lt=Object.assign({"/corpus/validated/eri_nozomi_garasunohanazono.txt":jt,"/corpus/validated/frederic_oddloop.txt":At,"/corpus/validated/haiku.txt":Tt,"/corpus/validated/jp_bokuniinvitation.txt":Et,"/corpus/validated/nishikinomaki_soldiergame.txt":Ct,"/corpus/validated/sample.txt":Ot,"/corpus/validated/yonezukenshi_shunrai.txt":zt,"/corpus/validated/yorushika_haru.txt":Mt,"/corpus/validated/yorushika_hitchcock.txt":Bt,"/corpus/validated/yukopi_kyoufuuallback.txt":Pt,"/corpus/validated/zutomayo_kirakiller.txt":Rt}),vn=Object.entries(Lt).map(([e,t])=>{const i=e.split("/").pop().replace(/\.txt$/,""),o=Kt[i];return{filename:i,title:(o==null?void 0:o.title)??i,description:(o==null?void 0:o.description)??"",text:t.replace(/\r?\n$/,"")}}).sort((e,t)=>e.title.localeCompare(t.title));var Nt=j("<option> </option>"),Dt=j('<optgroup label="Presets"></optgroup>'),Ht=j("<option> </option>"),Gt=j("<option> </option>"),Ft=j('<optgroup label="Random words ∞"></optgroup>'),Wt=(e,t)=>d(t,n(t)==="kana"?"romaji":"kana",!0),Vt=(e,t)=>d(t,!n(t)),Yt=j('<div><textarea class="svelte-1yvkloy"></textarea></div>'),qt=j('<p class="word-hint svelte-1yvkloy"><!></p> <p class="credit svelte-1yvkloy">Word list from <a href="https://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project" class="svelte-1yvkloy">JMdict</a> (EDRDG), CC BY-SA 4.0.</p>',1),Ut=j('<label>Source: <select><!><optgroup label="Random kana ∞"></optgroup><!></select></label> <button type="button" class="mode-toggle svelte-1yvkloy"> </button> <button type="button" class="mode-toggle svelte-1yvkloy"> </button> <br/> <!> <!> <!>',1);function oa(e,t){qn(t,!0);let i=w(!1);const o=vn.length>0?vn[0].text:"おはようせかいグーダモーニングワールド";let f=w(hn(o)),p=w("romaji"),y=w(!1);const M=30,I=15,B=30,g=Yn.filter(a=>a.group==="kana"),R=Yn.filter(a=>a.group==="words");let C=w(hn(vn.length>0?vn[0].filename:"inf-random")),Y=z(()=>te(n(C))),Z=z(()=>n(Y)!==void 0),K=w(hn([])),$=w(0),q=w(!1),fn=w(!1),_n=z(()=>n(p)==="kana"?rt:ce),F=z(()=>n(_n)(n(f))),U=z(()=>{const a=[],r=new Set,u=[],h=[];for(const _ of n(K)){const V=n(_n)(_).tokens;V.length!==0&&(a.length>0&&r.add(a.length),u.push(_),h.push(a.length),a.push(...V))}return{tokens:a,wordGaps:r,chunks:u,chunkStarts:h}}),an=z(()=>n(Z)?n(U).tokens:n(F).tokens),L=z(()=>n(y)?n(an).map(de):n(an)),mn=z(()=>n(Z)?new Set:n(F).lineBreaks),W=z(()=>n(Z)?n(U).wordGaps:new Set),J=z(()=>{n(q);const a=n(Y);if(!(a!=null&&a.hint))return;const r=n(U).chunkStarts.findLastIndex(u=>u<=n($));return r<0?void 0:a.hint(n(U).chunks[r])}),nn=z(()=>`${n(p)} ${n(Z)?n(C):n(f)}`),on=null;cn(()=>{const a=n(C);if(on===a)return;on=a;const r=vn.find(u=>u.filename===a);r&&d(f,r.text,!0)}),cn(()=>{const a=n(Y);if(d(fn,!1),!(a!=null&&a.load)){d(q,!1);return}d(q,!0),a.load().then(()=>{Gn(()=>n(Y))===a&&d(q,!1)},()=>{Gn(()=>n(Y))===a&&(d(q,!1),d(fn,!0))})});let rn=null;cn(()=>{const a=n(nn),r=n(Y);if(!r||rn===a)return;rn=a,d($,0),d(K,[],!0);const u=()=>{rn===a&&d(K,r.next(M),!0)};r.load?r.load().then(u,()=>{}):u()}),cn(()=>{const a=n(Y);if(!a||n(q)||n($)<=n(L).length-B)return;const r=a.next(I);r.length>0&&d(K,[...n(K),...r],!0)});let pn=w(hn([]));function s(a,r){d($,a,!0),d(pn,r.slice(),!0)}let c=w(void 0),v=w(!1),l=w(!1);const m=120,T=300;function S(){if(!n(c))return;const a=n(c).style.height;n(c).style.height="auto";const r=n(c).scrollHeight;d(l,r>m);const u=n(v)?Math.min(r,T):Math.min(r,m);n(c).style.overflowY=n(v)&&r>T?"auto":"hidden",n(c).style.height=a,n(c).offsetHeight,n(c).style.height=u+"px"}cn(()=>{n(f),n(v),S()});function E(a,r){let u=!1,h=n(L)[a];if(h=="っ"||h=="ッ")Fn.has(r)&&(u=!0);else if(h=="ー"){const _=dn[n(L)[a-1]];(a==0||_!=null&&r==_.slice(-1))&&(u=!0)}else r==dn[h]&&(u=!0);return u}function sn(a,r){let u=n(L)[a];return(u=="っ"||u=="ッ")&&Fn.has(r)?r[0]:""}const gn={evaluate(a){if(a.index>=a.targets.length||a.value==="")return{commits:[],residual:a.value};const r=a.value.length>a.prev.length,u=a.value!=="n"&&Wn.has(a.value);return a.trigger==="submit"||a.trigger==="input"&&r&&u?{commits:[{correct:E(a.index,a.value),display:a.value}],residual:sn(a.index,a.value)}:{commits:[],residual:a.value}}},X={stepBackOnBackspace:!1,evaluate(a){if(a.trigger!=="input")return{commits:[],residual:a.value};const r=[];let u=0;for(let h=a.index;h<a.targets.length;h++){const _=a.targets[h];if(u+_.length>a.value.length)break;const V=a.value.slice(u,u+_.length);if(Pn(V)!==Pn(_))break;r.push({correct:!0,display:V}),u+=_.length}return{commits:r,residual:a.value.slice(u)}}};let P=z(()=>n(p)==="kana"?X:gn),O=w(void 0),N=w(!1);je(()=>{d(i,new URLSearchParams(window.location.search).has("debug"),!0);const a=at(),r=a!==null&&(vn.some(u=>u.filename===a.sourceId)||te(a.sourceId)!==void 0);if(!a||!r){d(N,!0);return}d(p,a.mode,!0),d(y,a.katakana,!0),d(C,a.sourceId,!0),d(f,a.templatestring,!0),a.stream&&d(K,a.stream,!0),on=n(C),rn=n(nn),oe().then(()=>{var u;(u=n(O))==null||u.restore(a.curIndex,a.marks),d(N,!0)})});let ln;cn(()=>{if(!n(N))return;const a={mode:n(p),katakana:n(y),sourceId:n(C),templatestring:n(f),stream:n(Z)?n(K):null,curIndex:n($),marks:n(pn).slice(0,n($)).map(r=>r===void 0?null:r)};clearTimeout(ln),ln=setTimeout(()=>ot(a),400)});var kn=Ut(),D=Cn(kn),un=A(b(D)),On=b(un);{var An=a=>{var r=Dt();Sn(r,21,()=>vn,u=>u.filename,(u,h)=>{var _=Nt(),V={},en=b(_,!0);k(_),Q(()=>{V!==(V=n(h).filename)&&(_.value=(_.__value=n(h).filename)??""),H(en,n(h).title)}),x(u,_)}),k(r),x(a,r)};G(On,a=>{vn.length>0&&a(An)})}var Tn=A(On);Sn(Tn,21,()=>g,a=>a.id,(a,r)=>{var u=Ht(),h={},_=b(u,!0);k(u),Q(()=>{h!==(h=n(r).id)&&(u.value=(u.__value=n(r).id)??""),H(_,n(r).title)}),x(a,u)}),k(Tn);var he=A(Tn);{var _e=a=>{var r=Ft();Sn(r,21,()=>R,u=>u.id,(u,h)=>{var _=Gt(),V={},en=b(_,!0);k(_),Q(()=>{V!==(V=n(h).id)&&(_.value=(_.__value=n(h).id)??""),H(en,n(h).title)}),x(u,_)}),k(r),x(a,r)};G(he,a=>{R.length>0&&a(_e)})}k(un),k(D);var zn=A(D,2);zn.__click=[Wt,p];var me=b(zn);k(zn);var Mn=A(zn,2);Mn.__click=[Vt,y];var ke=b(Mn);k(Mn);var Qn=A(Mn,4);{var ye=a=>{var r=Yt();let u;var h=b(r);se(h),h.__input=S,jn(h,_=>d(c,_),()=>n(c)),k(r),Q(_=>u=Jn(r,1,"textarea-wrap svelte-1yvkloy",null,u,_),[()=>({faded:!n(v)&&n(l)})]),xn("focus",h,()=>d(v,!0)),xn("blur",h,()=>{document.hasFocus()&&d(v,!1)}),Me(h,()=>n(f),_=>d(f,_)),x(a,r)};G(Qn,a=>{n(Z)||a(ye)})}var Zn=A(Qn,2);const be=z(()=>n(p)==="kana"?null:3);jn(et(Zn,{get templateText(){return n(L)},get lineBreaks(){return n(mn)},get wordGaps(){return n(W)},get maxWordLength(){return n(be)},get policy(){return n(P)},get resetKey(){return n(nn)},onAdvance:s,get debug(){return n(i)}}),a=>d(O,a,!0),()=>n(O));var we=A(Zn,2);{var xe=a=>{var r=qt(),u=Cn(r),h=b(u);{var _=en=>{var Kn=Ln("Loading word list…");x(en,Kn)},V=(en,Kn)=>{{var Se=yn=>{var Bn=Ln("Couldn't load the word list. Reload to retry.");x(yn,Bn)},Ie=yn=>{var Bn=Ln();Q(()=>H(Bn,n(J)??" ")),x(yn,Bn)};G(en,yn=>{n(fn)?yn(Se):yn(Ie,!1)},Kn)}};G(h,en=>{n(q)?en(_):en(V,!1)})}k(u),re(2),x(a,r)};G(we,a=>{var r;((r=n(Y))==null?void 0:r.group)==="words"&&a(xe)})}Q(()=>{H(me,`Mode: ${n(p)??""}`),H(ke,`Script: ${n(y)?"katakana":"as written"}`)}),Re(un,()=>n(C),a=>d(C,a)),x(e,kn),Un()}ie(["click","input"]);export{oa as component};
