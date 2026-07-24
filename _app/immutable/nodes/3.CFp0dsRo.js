import{f as J,a as U}from"../chunks/Cc2pYo8y.js";import{o as mn}from"../chunks/DXq1Ax5T.js";import{d as gn,e as yn,au as Ue,l as Ce,h as Y,o as pn,E as kn,B as t,W as bn,G as xn,I as wn,J as Pe,k as Se,m as me,ai as zn,K as Ye,L as Je,M as Tn,av as Ee,al as Qe,Q as In,a8 as Ve,aw as De,ax as qe,ay as Re,a3 as Cn,az as Ke,af as Xe,aA as Sn,aB as En,a9 as An,aC as jn,ao as Mn,aD as Bn,j as Ln,aE as Nn,x as On,P as Dn,O as Ze,aF as Rn,aG as Hn,p as $e,ar as $,Z as en,u as Be,f as pe,s as N,t as ve,a as nn,_ as x,c as A,at as ee,as as Ae,r as C,n as tn}from"../chunks/17DHYPr-.js";import{l as an,d as rn,e as _e,s as oe,r as on}from"../chunks/D57E5ma4.js";import{p as re,i as ge,b as Le}from"../chunks/C7uS2mw1.js";import{a as Fn}from"../chunks/B_1_IEtc.js";function Pn(n,e){return e}function Vn(n,e,a,i){for(var o=[],c=e.length,f=0;f<c;f++)En(e[f].e,o,!0);var m=c>0&&o.length===0&&a!==null;if(m){var j=a.parentNode;An(j),j.append(a),i.clear(),le(n,e[0].prev,e[c-1].next)}jn(o,()=>{for(var I=0;I<c;I++){var k=e[I];m||(i.delete(k.k),le(n,k.prev,k.next)),Mn(k.e,!m)}})}function Ne(n,e,a,i,o,c=null){var f=n,m={flags:e,items:new Map,first:null},j=(e&Ue)!==0;if(j){var I=n;f=Y?Ce(pn(I)):I.appendChild(gn())}Y&&kn();var k=null,y=!1,l=bn(()=>{var v=a();return Xe(v)?v:v==null?[]:Qe(v)});yn(()=>{var v=t(l),s=v.length;if(y&&s===0)return;y=s===0;let z=!1;if(Y){var u=xn(f)===wn;u!==(s===0)&&(f=Pe(),Ce(f),Se(!1),z=!0)}if(Y){for(var S=null,B,E=0;E<s;E++){if(me.nodeType===8&&me.data===zn){f=me,z=!0,Se(!1);break}var h=v[E],b=i(h,E);B=ln(me,m,S,null,h,b,E,o,e,a),m.items.set(b,B),S=B}s>0&&Ce(Pe())}Y||qn(v,m,f,o,e,i,a),c!==null&&(s===0?k?Ye(k):k=Je(()=>c(f)):k!==null&&Tn(k,()=>{k=null})),z&&Se(!0),t(l)}),Y&&(f=me)}function qn(n,e,a,i,o,c,f){var ne,te,G,X;var m=(o&Sn)!==0,j=(o&(De|Re))!==0,I=n.length,k=e.items,y=e.first,l=y,v,s=null,z,u=[],S=[],B,E,h,b;if(m)for(b=0;b<I;b+=1)B=n[b],E=c(B,b),h=k.get(E),h!==void 0&&((ne=h.a)==null||ne.measure(),(z??(z=new Set)).add(h));for(b=0;b<I;b+=1){if(B=n[b],E=c(B,b),h=k.get(E),h===void 0){var K=l?l.e.nodes_start:a;s=ln(K,e,s,s===null?e.first:s.next,B,E,b,i,o,f),k.set(E,s),u=[],S=[],l=s.next;continue}if(j&&Kn(h,B,b,o),(h.e.f&Ee)!==0&&(Ye(h.e),m&&((te=h.a)==null||te.unfix(),(z??(z=new Set)).delete(h))),h!==l){if(v!==void 0&&v.has(h)){if(u.length<S.length){var R=S[0],H;s=R.prev;var se=u[0],Q=u[u.length-1];for(H=0;H<u.length;H+=1)We(u[H],R,a);for(H=0;H<S.length;H+=1)v.delete(S[H]);le(e,se.prev,Q.next),le(e,s,se),le(e,Q,R),l=R,s=Q,b-=1,u=[],S=[]}else v.delete(h),We(h,l,a),le(e,h.prev,h.next),le(e,h,s===null?e.first:s.next),le(e,s,h),s=h;continue}for(u=[],S=[];l!==null&&l.k!==E;)(l.e.f&Ee)===0&&(v??(v=new Set)).add(l),S.push(l),l=l.next;if(l===null)continue;h=l}u.push(h),s=h,l=h.next}if(l!==null||v!==void 0){for(var F=v===void 0?[]:Qe(v);l!==null;)(l.e.f&Ee)===0&&F.push(l),l=l.next;var W=F.length;if(W>0){var ue=(o&Ue)!==0&&I===0?a:null;if(m){for(b=0;b<W;b+=1)(G=F[b].a)==null||G.measure();for(b=0;b<W;b+=1)(X=F[b].a)==null||X.fix()}Vn(e,F,ue,k)}}m&&In(()=>{var P;if(z!==void 0)for(h of z)(P=h.a)==null||P.apply()}),Ve.first=e.first&&e.first.e,Ve.last=s&&s.e}function Kn(n,e,a,i){(i&De)!==0&&qe(n.v,e),(i&Re)!==0?qe(n.i,a):n.i=a}function ln(n,e,a,i,o,c,f,m,j,I){var k=(j&De)!==0,y=(j&Bn)===0,l=k?y?Cn(o):Ke(o):o,v=(j&Re)===0?f:Ke(f),s={i:v,v:l,k:c,a:null,e:null,prev:a,next:i};try{return s.e=Je(()=>m(n,l,v,I),Y),s.e.prev=a&&a.e,s.e.next=i&&i.e,a===null?e.first=s:(a.next=s,a.e.next=s.e),i!==null&&(i.prev=s,i.e.prev=s.e),s}finally{}}function We(n,e,a){for(var i=n.next?n.next.e.nodes_start:a,o=e?e.e.nodes_start:a,c=n.e.nodes_start;c!==i;){var f=Ln(c);o.before(c),c=f}}function le(n,e,a){e===null?n.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const Ge=[...` 	
\r\f \v\uFEFF`];function Wn(n,e,a){var i=n==null?"":""+n;if(e&&(i=i?i+" "+e:e),a){for(var o in a)if(a[o])i=i?i+" "+o:o;else if(i.length)for(var c=o.length,f=0;(f=i.indexOf(o,f))>=0;){var m=f+c;(f===0||Ge.includes(i[f-1]))&&(m===i.length||Ge.includes(i[m]))?i=(f===0?"":i.substring(0,f))+i.substring(m+1):f=m}}return i===""?null:i}function Oe(n,e,a,i,o,c){var f=n.__className;if(Y||f!==a||f===void 0){var m=Wn(a,i,c);(!Y||m!==n.getAttribute("class"))&&(m==null?n.removeAttribute("class"):n.className=m),n.__className=a}else if(c&&o!==c)for(var j in c){var I=!!c[j];(o==null||I!==!!o[j])&&n.classList.toggle(j,I)}return c}function Gn(n,e,a=e){var i=Nn();an(n,"input",o=>{var c=o?n.defaultValue:n.value;if(c=je(n)?Me(c):c,a(c),i&&c!==(c=e())){var f=n.selectionStart,m=n.selectionEnd;n.value=c??"",m!==null&&(n.selectionStart=f,n.selectionEnd=Math.min(m,n.value.length))}}),(Y&&n.defaultValue!==n.value||On(e)==null&&n.value)&&a(je(n)?Me(n.value):n.value),Dn(()=>{var o=e();je(n)&&o===Me(n.value)||n.type==="date"&&!o&&!n.value||o!==n.value&&(n.value=o??"")})}function je(n){var e=n.type;return e==="number"||e==="range"}function Me(n){return n===""?null:+n}function sn(n,e,a){if(n.multiple)return e==null?void 0:Xe(e)?Jn(n,e):Rn();for(var i of n.options){var o=ke(i);if(Hn(o,e)){i.selected=!0;return}}(!a||e!==void 0)&&(n.selectedIndex=-1)}function Un(n,e){Ze(()=>{var a=new MutationObserver(()=>{var i=n.__value;sn(n,i)});return a.observe(n,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{a.disconnect()}})}function Yn(n,e,a=e){var i=!0;an(n,"change",o=>{var c=o?"[selected]":":checked",f;if(n.multiple)f=[].map.call(n.querySelectorAll(c),ke);else{var m=n.querySelector(c)??n.querySelector("option:not([disabled])");f=m&&ke(m)}a(f)}),Ze(()=>{var o=e();if(sn(n,o,i),i&&o===void 0){var c=n.querySelector(":checked");c!==null&&(o=ke(c),a(o))}n.__value=o,i=!1}),Un(n)}function Jn(n,e){for(var a of n.options)a.selected=e.includes(ke(a))}function ke(n){return"__value"in n?n.__value:n.value}var Qn=J('<div class="line-break svelte-yam75z"></div>'),Xn=J('<!> <div class="character svelte-yam75z"><div> </div> <div class="userinputted typedincorrect svelte-yam75z"> </div></div>',1),Zn=J('<div class="line-break svelte-yam75z"></div>'),$n=J('<div class="line-break svelte-yam75z"></div>'),et=J('<!> <div class="character svelte-yam75z"><div class="kana svelte-yam75z"> </div></div>',1),nt=(n,e)=>x(e,!t(e)),tt=J('<div><div class="debug-bar svelte-yam75z"><button class="debug-btn svelte-yam75z"> </button> <button class="debug-btn svelte-yam75z"> </button></div> <textarea class="debug-text svelte-yam75z" readonly=""></textarea></div>'),at=J('<div class="textbox-wrapper svelte-yam75z" role="textbox" tabindex="0"><div class="centered-vertical-crop svelte-yam75z"><!> <!> <div class="character svelte-yam75z"><div class="kana svelte-yam75z"> </div> <input class="invisible-input svelte-yam75z" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" enterkeyhint="next"/> <div class="userinput svelte-yam75z"><span class="svelte-yam75z"> </span> <div aria-hidden="true" class="caret-container svelte-yam75z"><div aria-hidden="true" class="caret svelte-yam75z"></div></div></div></div> <!></div></div> <!>',1);function it(n,e){$e(e,!0);let a=re(e,"maxWordLength",3,null),i=re(e,"lineBreaks",19,()=>new Set),o=re(e,"submitOn",3,"incremental"),c=re(e,"autoMatch",3,()=>!1),f=re(e,"isCorrect",3,(r,p)=>p==e.templateText[r]),m=re(e,"onNext",3,()=>""),j=re(e,"consume",3,()=>[]),I=re(e,"debug",3,!1);function k(r){return r(t(y),t(l))}let y=ee(()=>(e.templateText,0)),l=ee(()=>(e.templateText,o(),"")),v=ee(()=>(e.templateText,o(),"")),s=!1,z=0,u,S=$(en([])),B=$(!1),E=$(!0),h=$(void 0);function b(){const r=t(S).join(`
`);let p=!1;if(t(h)){t(h).focus(),t(h).setSelectionRange(0,r.length);try{p=document.execCommand("copy")}catch{p=!1}}!p&&navigator.clipboard&&navigator.clipboard.writeText(r).catch(()=>{}),x(B,!0),setTimeout(()=>x(B,!1),1500)}function K(r,p=""){if(!I())return;const O=(u==null?void 0:u.value)??"";x(S,[`${r} c${s?1:0} cc${z} i${t(y)} v"${O}" ${p}`,...t(S)].slice(0,30),!0)}let R=ee(()=>Array(e.templateText.length));function H(r){r.preventDefault(),u.focus()}function se(r){x(y,Math.min(e.templateText.length,t(y)+r),!0),Ae().then(()=>{u.scrollIntoView({block:"center"})})}function Q(r){return a()==null?r:r.slice(0,a())}function F(){if(o()!=="incremental"||!u)return;u.value!==t(l)&&(u.value=t(l));const r=t(l).length;(u.selectionStart!==r||u.selectionEnd!==r)&&u.setSelectionRange(r,r)}Be(F);function W(){t(y)!==0&&(x(y,t(y)-1),t(R)[t(y)]=void 0,x(l,""),u&&(u.value=""),Ae().then(()=>u==null?void 0:u.scrollIntoView({block:"center"})))}function ue(r){if(K("key",`k=${r.key} kc=${r.keyCode}`),!(r.isComposing||r.keyCode===229||r.ctrlKey||r.metaKey))switch(r.key){case"ArrowLeft":r.preventDefault();break;case"Backspace":o()==="commit"?u.value===""&&te()&&r.preventDefault():t(l)==""&&t(y)>0&&(r.preventDefault(),W());break;case" ":case"Enter":r.preventDefault(),o()==="incremental"&&X();break}}function ne(r){K("binp",`t=${r.inputType}`),o()==="commit"&&r.inputType==="deleteContentBackward"&&u.value===""&&te()&&r.preventDefault()}function te(){return t(v)!==""?(x(v,t(v).slice(0,-1),!0),z=0,d(),x(l,t(v),!0),!0):t(y)>0?(W(),!0):!1}function G(r){if(o()==="commit"){const T=r;if(K("input",`d="${(T==null?void 0:T.data)??""}" it=${(T==null?void 0:T.inputType)??""} ic${T!=null&&T.isComposing?1:0}`),s){_(u.value);return}w();return}if(t(y)>=e.templateText.length){x(l,""),F();return}const p=u.value,O=p.search(/\s/);if(O>=0){x(l,Q(p.slice(0,O)),!0),X();return}const L=p.length>t(l).length;x(l,Q(p),!0),L&&k(c())?X():F()}function X(){t(R)[t(y)]=k(f())?null:t(l),x(l,k(m()),!0),se(1),F()}function P(){s=!0,z=0,K("cstart")}function be(r){K("cupd",`d="${r.data??""}"`)}function xe(r){if(s=!1,K("cend",`d=${r.data??""}`),o()!=="commit"){G();return}const p=u.value;_(p),x(v,t(v)+p.slice(z)),z=0,d(),x(l,t(v),!0)}function d(){u&&u.value!==""&&(u.value="")}function _(r){const p=t(v)+r.slice(z),O=j()(t(y),p);let L=0;for(let T=0;T<O.length&&t(y)<e.templateText.length&&O[T].correct;T++)t(R)[t(y)]=null,L+=e.templateText[t(y)].length,x(y,Math.min(e.templateText.length,t(y)+1),!0);L<=t(v).length?x(v,t(v).slice(L),!0):(z+=L-t(v).length,x(v,"")),x(l,t(v)+r.slice(z)),L>0&&Ae().then(()=>u==null?void 0:u.scrollIntoView({block:"center"}))}function w(){const r=u.value;r!==""&&(x(v,t(v)+r),d()),z=0,_("")}var g=at(),M=pe(g),D=A(M),V=A(D);Ne(V,17,()=>e.templateText.slice(0,t(y)),Pn,(r,p,O)=>{var L=Xn();const T=ee(()=>t(R)[O]);var fe=pe(L);{var ie=Ie=>{var hn=Qn();U(Ie,hn)};ge(fe,Ie=>{i().has(O)&&Ie(ie)})}var ce=N(fe,2),q=A(ce),Z=A(q,!0);C(q);var de=N(q,2),_n=A(de,!0);C(de),C(ce),ve(()=>{Oe(q,1,`kana ${t(T)==null?"typedcorrect":"typedincorrect"}`,"svelte-yam75z"),oe(Z,t(p)),oe(_n,t(T)==null?"":t(T))}),U(r,L)});var he=N(V,2);{var we=r=>{var p=Zn();U(r,p)};ge(he,r=>{i().has(t(y))&&r(we)})}var ze=N(he,2),Te=A(ze),un=A(Te,!0);C(Te);var ae=N(Te,2);ae.__keydown=ue,ae.__beforeinput=ne,ae.__input=G,Le(ae,r=>u=r,()=>u);var He=N(ae,2),Fe=A(He),cn=A(Fe,!0);C(Fe),tn(2),C(He),C(ze);var fn=N(ze,2);Ne(fn,19,()=>e.templateText.slice(t(y)+1),(r,p)=>p+t(y)+1,(r,p,O)=>{var L=et(),T=pe(L);{var fe=Z=>{var de=$n();U(Z,de)};ge(T,Z=>{i().has(t(O)+t(y)+1)&&Z(fe)})}var ie=N(T,2),ce=A(ie),q=A(ce,!0);C(ce),C(ie),ve(()=>oe(q,t(p))),U(r,L)}),C(D),C(M);var dn=N(M,2);{var vn=r=>{var p=tt();let O;var L=A(p),T=A(L);T.__click=[nt,E];var fe=A(T);C(T);var ie=N(T,2);ie.__click=b;var ce=A(ie,!0);C(ie),C(L);var q=N(L,2);on(q),q.__click=b,Le(q,Z=>x(h,Z),()=>t(h)),C(p),ve((Z,de)=>{O=Oe(p,1,"debug svelte-yam75z",null,O,Z),oe(fe,`${t(E)?"▶":"▼"} debug (${t(S).length??""})`),oe(ce,t(B)?"✓ copied":"⇥ copy"),Fn(q,de)},[()=>({collapsed:t(E)}),()=>t(S).join(`
`)]),U(r,p)};ge(dn,r=>{I()&&r(vn)})}ve(()=>{oe(un,e.templateText[t(y)]),oe(cn,t(l))}),_e("focus",M,H),_e("compositionstart",ae,P),_e("compositionupdate",ae,be),_e("compositionend",ae,xe),U(n,g),nn()}rn(["keydown","beforeinput","input","click"]);const rt=`ユメのめいろ…ユリのめいろ…

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
`,ot=`おどってるだけでたいじょう
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
`,lt=`きょうははれだ
ねこがあるく
`,st=`このカフェにたどりついた ラッキーボーイズアンドガールズ
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
`,ut=`Three,two,one,zero! ここでとうじょう
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
`,ct=`きょうはいいてんきです。コーヒーをのむ。
`,ft=`あらわれたそれははるのまっさなか えもいえぬままかがやいていた
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
`,dt=`あなたはかぜのように
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
`,vt=`「あめのにおいになつかしくなるのはなんでなんでしょうか。
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
`,_t=`そとでたしゅんかん おわったわ
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
`,ht=`まわりにあわせるげんごもしらねえ
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
`,mt={sample:{title:"Everyday weather",description:"A short everyday line about the weather and drinking coffee."},haiku:{title:"Sunny-day haiku",description:"A two-line haiku — clear skies and a cat out walking."},zutomayo_kirakiller:{title:"綺羅キラー (feat. Mori Calliope)",description:"綺羅キラー (feat. Mori Calliope) — ずっと真夜中でいいのに。"},yorushika_hitchcock:{title:"ヒッチコック",description:"ヒッチコック — ヨルシカ"},frederic_oddloop:{title:"オドループ",description:"オドループ — フレデリック"},nishikinomaki_soldiergame:{title:"soldier game",description:"soldier game — 西木野真姫(Pile)"},yukopi_kyoufuuallback:{title:"強風オールバック",description:"強風オールバック — Yukopi feat. 歌愛ユキ"},jp_bokuniinvitation:{title:"ボクにインビテーション",description:"ボクにインビテーション — JP"},eri_nozomi_garasunohanazono:{title:"硝子の花園",description:"硝子の花園 — 絢瀬絵里(南條愛乃)&東條希(楠田亜衣奈)"},yonezukenshi_shunrai:{title:"春雷",description:"春雷 — 米津玄師"},yorushika_haru:{title:"晴る",description:"晴る — ヨルシカ"}},gt=Object.assign({"/corpus/validated/eri_nozomi_garasunohanazono.txt":rt,"/corpus/validated/frederic_oddloop.txt":ot,"/corpus/validated/haiku.txt":lt,"/corpus/validated/jp_bokuniinvitation.txt":st,"/corpus/validated/nishikinomaki_soldiergame.txt":ut,"/corpus/validated/sample.txt":ct,"/corpus/validated/yonezukenshi_shunrai.txt":ft,"/corpus/validated/yorushika_haru.txt":dt,"/corpus/validated/yorushika_hitchcock.txt":vt,"/corpus/validated/yukopi_kyoufuuallback.txt":_t,"/corpus/validated/zutomayo_kirakiller.txt":ht}),ye=Object.entries(gt).map(([n,e])=>{const a=n.split("/").pop().replace(/\.txt$/,""),i=mt[a];return{filename:a,title:(i==null?void 0:i.title)??a,description:(i==null?void 0:i.description)??"",text:e.replace(/\r?\n$/,"")}}).sort((n,e)=>n.title.localeCompare(e.title));function yt(n,e){const a=ye.find(i=>i.filename===n.currentTarget.value);a&&x(e,a.text,!0)}var pt=J("<option> </option>"),kt=J("<label>Preset: <select></select></label> <br/>",1),bt=J('<!> <label>Input: <select><option>Romaji</option><option>かな</option></select></label> <br/> <div><textarea class="svelte-15808i5"></textarea></div> <!>',1);function St(n,e){$e(e,!0);let a=$(!1);const i={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",を:"wo",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"ji",づ:"dzu",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ア:"a",イ:"i",ウ:"u",エ:"e",オ:"o",カ:"ka",キ:"ki",ク:"ku",ケ:"ke",コ:"ko",サ:"sa",シ:"shi",ス:"su",セ:"se",ソ:"so",タ:"ta",チ:"chi",ツ:"tsu",テ:"te",ト:"to",ナ:"na",ニ:"ni",ヌ:"nu",ネ:"ne",ノ:"no",ハ:"ha",ヒ:"hi",フ:"fu",ヘ:"he",ホ:"ho",マ:"ma",ミ:"mi",ム:"mu",メ:"me",モ:"mo",ヤ:"ya",ユ:"yu",ヨ:"yo",ラ:"ra",リ:"ri",ル:"ru",レ:"re",ロ:"ro",ワ:"wa",ヲ:"wo",ン:"n",ガ:"ga",ギ:"gi",グ:"gu",ゲ:"ge",ゴ:"go",ザ:"za",ジ:"ji",ズ:"zu",ゼ:"ze",ゾ:"zo",ダ:"da",ヂ:"ji",ヅ:"dzu",デ:"de",ド:"do",バ:"ba",ビ:"bi",ブ:"bu",ベ:"be",ボ:"bo",パ:"pa",ピ:"pi",プ:"pu",ペ:"pe",ポ:"po",キャ:"kya",キュ:"kyu",キョ:"kyo",ギャ:"gya",ギュ:"gyu",ギョ:"gyo",シャ:"sha",シュ:"shu",ショ:"sho",ジャ:"ja",ジュ:"ju",ジョ:"jo",チャ:"cha",チュ:"chu",チョ:"cho",ヂャ:"ja",ヂュ:"ju",ヂョ:"jo",ニャ:"nya",ニュ:"nyu",ニョ:"nyo",ヒャ:"hya",ヒュ:"hyu",ヒョ:"hyo",ビャ:"bya",ビュ:"byu",ビョ:"byo",ピャ:"pya",ピュ:"pyu",ピョ:"pyo",ミャ:"mya",ミュ:"myu",ミョ:"myo",リャ:"rya",リュ:"ryu",リョ:"ryo",ウァ:"wa",ウィ:"wi",ウェ:"we",ウォ:"wo",ヴァ:"va",ヴィ:"vi",ヴ:"vu",ヴェ:"ve",ヴォ:"vo",シェ:"she",ジェ:"je",チェ:"che",ティ:"ti",テュ:"tyu",ディ:"di",デュ:"dyu",トゥ:"tu",ドゥ:"du",ファ:"fa",フィ:"fi",フュ:"fyu",フェ:"fe",フォ:"fo",キェ:"kye",ギェ:"gye",クァ:"kwa",クィ:"kwi",クェ:"kwe",クォ:"kwo",グァ:"gwa",グィ:"gwi",グェ:"gwe",グォ:"gwo",スィ:"si",ズィ:"zi",ツァ:"tsa",ツィ:"tsi",ツェ:"tse",ツォ:"tso",イェ:"ye",ニェ:"nye",ヒェ:"hye",ビェ:"bye",ピェ:"pye",ミェ:"mye",リェ:"rye"},o=new Set(["kk","ss","tt","pp","cc","ff","mm","rr","gg","zz","dd","bb"]);function c(d){let _=[],w=new Set,g=0;for(;g<d.length;){let M=d.slice(g,g+1),D=d.slice(g,g+2);D in i?(_.push(D),g+=2):M in i||M=="っ"||M=="ッ"||M=="ー"?(_.push(d[g]),g+=1):(M==`
`&&_.length>0&&w.add(_.length),g+=1)}return{tokens:_,lineBreaks:w}}function f(d){let _=[],w=new Set;for(const g of d)g==`
`?_.length>0&&w.add(_.length):/[ぁ-ゖァ-ヺー]/.test(g)&&_.push(g);return{tokens:_,lineBreaks:w}}const m=new Set(Object.values(i));o.forEach(m.add,m);const j=ye.length>0?ye[0].text:"おはようせかいグーダモーニングワールド";let I=$(en(j)),k=$("romaji"),y=ee(()=>(t(k)==="kana"?f:c)(t(I))),l=ee(()=>t(y).tokens),v=ee(()=>t(y).lineBreaks),s,z=$(!1),u=$(!1);const S=120,B=300;function E(){if(!s)return;const d=s.style.height;s.style.height="auto";const _=s.scrollHeight;x(u,_>S);const w=t(z)?Math.min(_,B):Math.min(_,S);s.style.overflowY=t(z)&&_>B?"auto":"hidden",s.style.height=d,s.offsetHeight,s.style.height=w+"px"}Be(()=>{t(I),t(z),E()});function h(d,_){return _=="n"?t(l)[d]=="ん"||t(l)[d]=="ン":m.has(_)}function b(d,_){let w=!1,g=t(l)[d];return g=="っ"||g=="ッ"?o.has(_)&&(w=!0):g=="ー"?(d==0||_==i[t(l)[d-1]].slice(-1))&&(w=!0):_==i[g]&&(w=!0),w}function K(d,_){let w=t(l)[d];return(w=="っ"||w=="ッ")&&o.has(_)?_[0]:""}function R(d){let _="";for(const w of d){const g=w.codePointAt(0);_+=g>=12449&&g<=12534?String.fromCodePoint(g-96):w}return _}function H(d,_){const w=[];let g=0;for(let M=d;M<t(l).length;M++){const D=t(l)[M];if(g+D.length>_.length)break;const V=_.slice(g,g+D.length);w.push({correct:R(V)===R(D),display:V}),g+=D.length}return w}mn(()=>{const d=localStorage.getItem("kana-input-mode");(d==="romaji"||d==="kana")&&x(k,d,!0),x(a,new URLSearchParams(window.location.search).has("debug"),!0)}),Be(()=>{localStorage.setItem("kana-input-mode",t(k))});var se=bt(),Q=pe(se);{var F=d=>{var _=kt(),w=pe(_),g=N(A(w));g.__change=[yt,I],Ne(g,21,()=>ye,M=>M.filename,(M,D)=>{var V=pt(),he={},we=A(V,!0);C(V),ve(()=>{he!==(he=t(D).filename)&&(V.value=(V.__value=t(D).filename)??""),oe(we,t(D).title)}),U(M,V)}),C(g),C(w),tn(2),U(d,_)};ge(Q,d=>{ye.length>0&&d(F)})}var W=N(Q,2),ue=N(A(W)),ne=A(ue);ne.value=ne.__value="romaji";var te=N(ne);te.value=te.__value="kana",C(ue),C(W);var G=N(W,4);let X;var P=A(G);on(P),P.__input=E,Le(P,d=>s=d,()=>s),C(G);var be=N(G,2);const xe=ee(()=>t(k)==="kana"?"commit":"incremental");it(be,{get templateText(){return t(l)},get lineBreaks(){return t(v)},maxWordLength:3,get submitOn(){return t(xe)},autoMatch:h,isCorrect:b,onNext:K,consume:H,get debug(){return t(a)}}),ve(d=>X=Oe(G,1,"textarea-wrap svelte-15808i5",null,X,d),[()=>({faded:!t(z)&&t(u)})]),Yn(ue,()=>t(k),d=>x(k,d)),_e("focus",P,()=>x(z,!0)),_e("blur",P,()=>{document.hasFocus()&&x(z,!1)}),Gn(P,()=>t(I),d=>x(I,d)),U(n,se),nn()}rn(["change","input"]);export{St as component};
