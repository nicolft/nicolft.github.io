import{f as K,a as C}from"../chunks/CqUntxwt.js";import{o as Vn}from"../chunks/Dh_e33yK.js";import{b as On,aj as Jn,aH as Yn,aI as Un,p as An,a0 as rn,a8 as y,A as Z,f as yn,a as Tn,s as w,a1 as u,G as n,r as _,c as k,t as nn,a9 as L,aG as Nn,u as $n,n as Xn}from"../chunks/BRSNaumR.js";import{l as Qn,d as Rn,e as un,s as H}from"../chunks/NLEswu2d.js";import{p as U,i as cn}from"../chunks/BSLF_jox.js";import{e as kn,s as zn,i as Zn,a as ne}from"../chunks/Cf4uW0LP.js";import{r as Ln}from"../chunks/bGiG5R6W.js";import{b as dn}from"../chunks/DL97Dl5Y.js";import{s as ee}from"../chunks/CmxJSX-z.js";function Pn(i,a,p){if(i.multiple)return a==null?void 0:Jn(a)?ie(i,a):Yn();for(var f of i.options){var m=hn(f);if(Un(m,a)){f.selected=!0;return}}(!p||a!==void 0)&&(i.selectedIndex=-1)}function te(i,a){On(()=>{var p=new MutationObserver(()=>{var f=i.__value;Pn(i,f)});return p.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{p.disconnect()}})}function ae(i,a,p=a){var f=!0;Qn(i,"change",m=>{var A=m?"[selected]":":checked",j;if(i.multiple)j=[].map.call(i.querySelectorAll(A),hn);else{var b=i.querySelector(A)??i.querySelector("option:not([disabled])");j=b&&hn(b)}p(j)}),On(()=>{var m=a();if(Pn(i,m,f),f&&m===void 0){var A=i.querySelector(":checked");A!==null&&(m=hn(A),p(m))}i.__value=m,f=!1}),te(i)}function ie(i,a){for(var p of i.options)p.selected=a.includes(hn(p))}function hn(i){return"__value"in i?i.__value:i.value}function re(i,a,p,f,m){var A,j;if(i.target===a()&&(p("key",`k=${i.key} kc=${i.keyCode}`),!(i.isComposing||i.keyCode===229||i.ctrlKey||i.metaKey)))switch(i.key){case"ArrowLeft":case"ArrowRight":i.preventDefault();break;case"Backspace":(((A=a())==null?void 0:A.value)??"")===""&&(i.preventDefault(),f()());break;case" ":case"Enter":i.preventDefault(),m()(((j=a())==null?void 0:j.value)??"");break}}function oe(i,a,p,f){var m;i.target===a()&&(p("binp",`t=${i.inputType}`),i.inputType==="deleteContentBackward"&&(((m=a())==null?void 0:m.value)??"")===""&&(i.preventDefault(),f()()))}var se=K('<input class="invisible-input svelte-jdasr6" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" enterkeyhint="next"/>'),le=(i,a)=>u(a,!n(a)),ue=K('<div class="debug-warn svelte-jdasr6"> </div>'),ce=K('<div><div class="debug-bar svelte-jdasr6"><button class="debug-btn svelte-jdasr6"> </button> <button class="debug-btn svelte-jdasr6"> </button></div> <!> <textarea class="debug-text svelte-jdasr6" readonly=""></textarea></div>'),de=K('<span class="input-anchor svelte-jdasr6"></span> <!>',1);function ve(i,a){An(a,!0);let p=U(a,"onInput",3,()=>{}),f=U(a,"onSubmit",3,()=>{}),m=U(a,"onBackspaceEmpty",3,()=>{}),A=U(a,"debug",3,!1),j=rn([void 0,void 0]),b=y(0),P=!1,d="";const g=()=>j[n(b)];function B(r=""){const t=n(b)===0?1:0,s=j[t];u(b,t,!0),P=!1,d=r,s&&(s.value=r,s.focus(),s.setSelectionRange(r.length,r.length)),I("reset",`seed="${r}"`)}function vn(){for(const r of j)r&&(r.value="");u(b,0),P=!1,d="",I("clear")}function fn(r){const t=g();t&&(t.value!==r&&(t.value=r),t.setSelectionRange(r.length,r.length),d=r,I("setValue",`"${r}"`))}function $(){var r;(r=g())==null||r.focus()}function on(){const r=g();if(!r)return;const t=r.value.length;(r.selectionStart!==t||r.selectionEnd!==t)&&r.setSelectionRange(t,t)}function gn(r){var v;if(r.target!==g())return;const t=((v=g())==null?void 0:v.value)??"",s=r;I("input",`d="${s.data??""}" it=${s.inputType??""} ic${s.isComposing?1:0}`),t!==d&&(d=t,s.isComposing||on(),p()(t))}function sn(r){r.target===g()&&(P=!0,I("cstart"))}function ln(r){r.target===g()&&I("cupd",`d="${r.data??""}"`)}function T(r){var s;if(r.target!==g())return;P=!1;const t=((s=g())==null?void 0:s.value)??"";I("cend",`d="${r.data??""}"`),t!==d&&(d=t,p()(t)),on()}let O=y(rn([])),N=y(!1),E=y(!0),M=y(void 0);function G(){const r=n(O).join(`
`);let t=!1;if(n(M)){n(M).focus(),n(M).setSelectionRange(0,r.length);try{t=document.execCommand("copy")}catch{t=!1}}!t&&navigator.clipboard&&navigator.clipboard.writeText(r).catch(()=>{}),u(N,!0),setTimeout(()=>u(N,!1),1500)}function I(r,t=""){if(!A())return;const s=g(),v=(s==null?void 0:s.value)??"",h=s?`${s.selectionStart},${s.selectionEnd}`:"?";u(O,[`${r} c${P?1:0} s${n(b)} sel${h} v"${v}" ${t}`,...n(O)].slice(0,30),!0)}let V=y("");Z(()=>{const r=g();r&&requestAnimationFrame(()=>{const t=r.getBoundingClientRect();if(t.width>0&&t.height>0){u(V,"");return}u(V,`!! hidden input is ${t.width}x${t.height} — IME composition will break`)})});var W=de(),X=yn(W);kn(X,20,()=>[0,1],r=>r,(r,t)=>{var s=se();s.__keydown=[re,g,I,m,f],s.__beforeinput=[oe,g,I,m],s.__input=gn,dn(s,(v,h)=>j[h]=v,v=>j==null?void 0:j[v],()=>[t]),un("compositionstart",s,sn),un("compositionupdate",s,ln),un("compositionend",s,T),C(r,s)}),_(X);var Q=w(X,2);{var en=r=>{var t=ce();let s;var v=k(t),h=k(v);h.__click=[le,E];var S=k(h);_(h);var D=w(h,2);D.__click=G;var J=k(D,!0);_(D),_(v);var F=w(v,2);{var q=z=>{var Y=ue(),tn=k(Y,!0);_(Y),nn(()=>H(tn,n(V))),C(z,Y)};cn(F,z=>{n(V)&&z(q)})}var R=w(F,2);Ln(R),R.__click=G,dn(R,z=>u(M,z),()=>n(M)),_(t),nn((z,Y)=>{s=zn(t,1,"debug svelte-jdasr6",null,s,z),H(S,`${n(E)?"▶":"▼"} debug (${n(O).length??""})`),H(J,n(N)?"✓ copied":"⇥ copy"),ee(R,Y)},[()=>({collapsed:n(E)}),()=>n(O).join(`
`)]),C(r,t)};cn(Q,r=>{A()&&r(en)})}return C(i,W),Tn({reset:B,clear:vn,setValue:fn,focus:$})}Rn(["keydown","beforeinput","input","click"]);var fe=K('<div class="line-break svelte-19e57xn"></div>'),ge=K('<!> <div class="character svelte-19e57xn"><div> </div> <div class="userinputted typedincorrect svelte-19e57xn"> </div></div>',1),pe=K('<div class="line-break svelte-19e57xn"></div>'),he=K('<div class="line-break svelte-19e57xn"></div>'),me=K('<!> <div class="character svelte-19e57xn"><div class="kana svelte-19e57xn"> </div></div>',1),_e=K('<div class="textbox-wrapper svelte-19e57xn" role="textbox" tabindex="0"><div class="centered-vertical-crop svelte-19e57xn"><!> <!> <div class="character svelte-19e57xn"><div class="kana svelte-19e57xn"> </div> <!> <div class="userinput svelte-19e57xn"><span class="svelte-19e57xn"> </span> <div aria-hidden="true" class="caret-container svelte-19e57xn"><div aria-hidden="true" class="caret svelte-19e57xn"></div></div></div></div> <!></div></div>');function ye(i,a){An(a,!0);let p=U(a,"lineBreaks",19,()=>new Set),f=U(a,"maxWordLength",3,null),m=U(a,"resetKey",3,""),A=U(a,"onAdvance",3,()=>{}),j=U(a,"debug",3,!1),b=y(void 0),P=y(void 0),d=L(()=>(m(),0)),g=L(()=>(m(),"")),B=y(rn([]));Z(()=>{m(),u(B,[],!0),$n(()=>{var t;return(t=n(b))==null?void 0:t.clear()})}),Z(()=>{A()(n(d),n(B))});function vn(t,s){var h;const v=Math.max(0,Math.min(t,a.templateText.length));u(B,s.slice(0,v),!0),u(d,v,!0),u(g,""),(h=n(b))==null||h.reset(""),$()}function fn(t){var s;t.preventDefault(),(s=n(b))==null||s.focus()}function $(){Nn().then(()=>{var t;return(t=n(P))==null?void 0:t.scrollIntoView({block:"center"})})}function on(t){sn(a.policy.evaluate({targets:a.templateText,index:n(d),value:t,prev:n(g),trigger:"input"}),t)}function gn(t){sn(a.policy.evaluate({targets:a.templateText,index:n(d),value:t,prev:n(g),trigger:"submit"}),t)}function sn(t,s){var v,h;if(t.commits.length>0){for(const S of t.commits)n(B)[n(d)]=S.correct?null:S.display,u(d,Math.min(a.templateText.length,n(d)+1),!0);u(g,t.residual,!0),(v=n(b))==null||v.reset(t.residual),$()}else{const S=f()==null?s:s.slice(0,f());u(g,S,!0),S!==s&&((h=n(b))==null||h.setValue(S))}}function ln(){var t;a.policy.stepBackOnBackspace!==!1&&n(d)!==0&&(u(d,n(d)-1),n(B)[n(d)]=void 0,u(g,""),(t=n(b))==null||t.reset(""),$())}var T=_e(),O=k(T),N=k(O);kn(N,17,()=>a.templateText.slice(0,n(d)),Zn,(t,s,v)=>{var h=ge();const S=L(()=>n(B)[v]);var D=yn(h);{var J=tn=>{var bn=fe();C(tn,bn)};cn(D,tn=>{p().has(v)&&tn(J)})}var F=w(D,2),q=k(F),R=k(q,!0);_(q);var z=w(q,2),Y=k(z,!0);_(z),_(F),nn(()=>{zn(q,1,`kana ${n(S)==null?"typedcorrect":"typedincorrect"}`,"svelte-19e57xn"),H(R,n(s)),H(Y,n(S)==null?"":n(S))}),C(t,h)});var E=w(N,2);{var M=t=>{var s=pe();C(t,s)};cn(E,t=>{p().has(n(d))&&t(M)})}var G=w(E,2),I=k(G),V=k(I,!0);_(I);var W=w(I,2);dn(ve(W,{onInput:on,onSubmit:gn,onBackspaceEmpty:ln,get debug(){return j()}}),t=>u(b,t,!0),()=>n(b));var X=w(W,2),Q=k(X),en=k(Q,!0);_(Q),Xn(2),_(X),_(G),dn(G,t=>u(P,t),()=>n(P));var r=w(G,2);return kn(r,19,()=>a.templateText.slice(n(d)+1),(t,s)=>s+n(d)+1,(t,s,v)=>{var h=me(),S=yn(h);{var D=R=>{var z=he();C(R,z)};cn(S,R=>{p().has(n(v)+n(d)+1)&&R(D)})}var J=w(S,2),F=k(J),q=k(F,!0);_(F),_(J),nn(()=>H(q,n(s))),C(t,h)}),_(O),_(T),nn(()=>{H(V,a.templateText[n(d)]),H(en,n(g))}),un("focus",T,fn),C(i,T),Tn({restore:vn})}const Dn="kana-session-v1",ke=5e4;function be(){try{const i=localStorage.getItem(Dn);if(!i)return null;const a=JSON.parse(i);return!a||typeof a!="object"||a.mode!=="romaji"&&a.mode!=="kana"||(typeof a.katakana!="boolean"&&(a.katakana=!1),typeof a.sourceId!="string"||typeof a.templatestring!="string")||typeof a.curIndex!="number"||a.curIndex<0||!Array.isArray(a.marks)||a.stream!==null&&!Array.isArray(a.stream)?null:a}catch{return null}}function xe(i){try{const a=i.stream&&i.stream.length>ke?null:i.stream;localStorage.setItem(Dn,JSON.stringify({...i,stream:a}))}catch{}}const we=`ユメのめいろ…ユリのめいろ…

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
`,je=`おどってるだけでたいじょう
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
`,Se=`きょうははれだ
ねこがあるく
`,Ie=`このカフェにたどりついた ラッキーボーイズアンドガールズ
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
`,Ae=`Three,two,one,zero! ここでとうじょう
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
`,Te=`きょうはいいてんきです。コーヒーをのむ。
`,ze=`あらわれたそれははるのまっさなか えもいえぬままかがやいていた
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
`,Be=`あなたはかぜのように
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
`,Ee=`「あめのにおいになつかしくなるのはなんでなんでしょうか。
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
`,Me=`そとでたしゅんかん おわったわ
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
`,Ce=`まわりにあわせるげんごもしらねえ
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
`,Ke={sample:{title:"Everyday weather",description:"A short everyday line about the weather and drinking coffee."},haiku:{title:"Sunny-day haiku",description:"A two-line haiku — clear skies and a cat out walking."},zutomayo_kirakiller:{title:"綺羅キラー (feat. Mori Calliope)",description:"綺羅キラー (feat. Mori Calliope) — ずっと真夜中でいいのに。"},yorushika_hitchcock:{title:"ヒッチコック",description:"ヒッチコック — ヨルシカ"},frederic_oddloop:{title:"オドループ",description:"オドループ — フレデリック"},nishikinomaki_soldiergame:{title:"soldier game",description:"soldier game — 西木野真姫(Pile)"},yukopi_kyoufuuallback:{title:"強風オールバック",description:"強風オールバック — Yukopi feat. 歌愛ユキ"},jp_bokuniinvitation:{title:"ボクにインビテーション",description:"ボクにインビテーション — JP"},eri_nozomi_garasunohanazono:{title:"硝子の花園",description:"硝子の花園 — 絢瀬絵里(南條愛乃)&東條希(楠田亜衣奈)"},yonezukenshi_shunrai:{title:"春雷",description:"春雷 — 米津玄師"},yorushika_haru:{title:"晴る",description:"晴る — ヨルシカ"}},Oe=Object.assign({"/corpus/validated/eri_nozomi_garasunohanazono.txt":we,"/corpus/validated/frederic_oddloop.txt":je,"/corpus/validated/haiku.txt":Se,"/corpus/validated/jp_bokuniinvitation.txt":Ie,"/corpus/validated/nishikinomaki_soldiergame.txt":Ae,"/corpus/validated/sample.txt":Te,"/corpus/validated/yonezukenshi_shunrai.txt":ze,"/corpus/validated/yorushika_haru.txt":Be,"/corpus/validated/yorushika_hitchcock.txt":Ee,"/corpus/validated/yukopi_kyoufuuallback.txt":Me,"/corpus/validated/zutomayo_kirakiller.txt":Ce}),an=Object.entries(Oe).map(([i,a])=>{const p=i.split("/").pop().replace(/\.txt$/,""),f=Ke[p];return{filename:p,title:(f==null?void 0:f.title)??p,description:(f==null?void 0:f.description)??"",text:a.replace(/\r?\n$/,"")}}).sort((i,a)=>i.title.localeCompare(a.title));var Ne=K("<option> </option>"),Re=(i,a)=>u(a,n(a)==="kana"?"romaji":"kana",!0),Le=(i,a)=>u(a,!n(a)),Pe=K('<div><textarea class="svelte-1f1vg63"></textarea></div>'),De=K('<label>Source: <select><!><option>Random kana (∞)</option><option>あ-row only (∞)</option></select></label> <button type="button" class="mode-toggle svelte-1f1vg63"> </button> <button type="button" class="mode-toggle svelte-1f1vg63"> </button> <br/> <!> <!>',1);function $e(i,a){An(a,!0);let p=y(!1);const f={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",を:"wo",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"ji",づ:"dzu",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ア:"a",イ:"i",ウ:"u",エ:"e",オ:"o",カ:"ka",キ:"ki",ク:"ku",ケ:"ke",コ:"ko",サ:"sa",シ:"shi",ス:"su",セ:"se",ソ:"so",タ:"ta",チ:"chi",ツ:"tsu",テ:"te",ト:"to",ナ:"na",ニ:"ni",ヌ:"nu",ネ:"ne",ノ:"no",ハ:"ha",ヒ:"hi",フ:"fu",ヘ:"he",ホ:"ho",マ:"ma",ミ:"mi",ム:"mu",メ:"me",モ:"mo",ヤ:"ya",ユ:"yu",ヨ:"yo",ラ:"ra",リ:"ri",ル:"ru",レ:"re",ロ:"ro",ワ:"wa",ヲ:"wo",ン:"n",ガ:"ga",ギ:"gi",グ:"gu",ゲ:"ge",ゴ:"go",ザ:"za",ジ:"ji",ズ:"zu",ゼ:"ze",ゾ:"zo",ダ:"da",ヂ:"ji",ヅ:"dzu",デ:"de",ド:"do",バ:"ba",ビ:"bi",ブ:"bu",ベ:"be",ボ:"bo",パ:"pa",ピ:"pi",プ:"pu",ペ:"pe",ポ:"po",キャ:"kya",キュ:"kyu",キョ:"kyo",ギャ:"gya",ギュ:"gyu",ギョ:"gyo",シャ:"sha",シュ:"shu",ショ:"sho",ジャ:"ja",ジュ:"ju",ジョ:"jo",チャ:"cha",チュ:"chu",チョ:"cho",ヂャ:"ja",ヂュ:"ju",ヂョ:"jo",ニャ:"nya",ニュ:"nyu",ニョ:"nyo",ヒャ:"hya",ヒュ:"hyu",ヒョ:"hyo",ビャ:"bya",ビュ:"byu",ビョ:"byo",ピャ:"pya",ピュ:"pyu",ピョ:"pyo",ミャ:"mya",ミュ:"myu",ミョ:"myo",リャ:"rya",リュ:"ryu",リョ:"ryo",ウァ:"wa",ウィ:"wi",ウェ:"we",ウォ:"wo",ヴァ:"va",ヴィ:"vi",ヴ:"vu",ヴェ:"ve",ヴォ:"vo",シェ:"she",ジェ:"je",チェ:"che",ティ:"ti",テュ:"tyu",ディ:"di",デュ:"dyu",トゥ:"tu",ドゥ:"du",ファ:"fa",フィ:"fi",フュ:"fyu",フェ:"fe",フォ:"fo",キェ:"kye",ギェ:"gye",クァ:"kwa",クィ:"kwi",クェ:"kwe",クォ:"kwo",グァ:"gwa",グィ:"gwi",グェ:"gwe",グォ:"gwo",スィ:"si",ズィ:"zi",ツァ:"tsa",ツィ:"tsi",ツェ:"tse",ツォ:"tso",イェ:"ye",ニェ:"nye",ヒェ:"hye",ビェ:"bye",ピェ:"pye",ミェ:"mye",リェ:"rye"},m=new Set(["kk","ss","tt","pp","cc","ff","mm","rr","gg","zz","dd","bb"]);function A(e){let o=[],l=new Set,c=0;for(;c<e.length;){let x=e.slice(c,c+1),pn=e.slice(c,c+2);pn in f?(o.push(pn),c+=2):x in f||x=="っ"||x=="ッ"||x=="ー"?(o.push(e[c]),c+=1):(x==`
`&&o.length>0&&l.add(o.length),c+=1)}return{tokens:o,lineBreaks:l}}function j(e){let o=[],l=new Set;for(const c of e)c==`
`?o.length>0&&l.add(o.length):/[ぁ-ゖァ-ヺー]/.test(c)&&o.push(c);return{tokens:o,lineBreaks:l}}const b=new Set(Object.values(f));m.forEach(b.add,b);const P=an.length>0?an[0].text:"おはようせかいグーダモーニングワールド";let d=y(rn(P)),g=y("romaji"),B=y(!1);const vn=[..."あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん"],fn=[..."あかさたなはまやらわ"],$={"inf-random":vn,"inf-a":fn},on=80,gn=40,sn=30,ln=e=>e[Math.floor(Math.random()*e.length)];let T=y(rn(an.length>0?an[0].filename:"inf-random")),O=L(()=>$[n(T)]),N=L(()=>n(O)!==void 0),E=y(rn([])),M=y(0);function G(e){let o="";for(const l of e){const c=l.codePointAt(0);o+=c>=12353&&c<=12438?String.fromCodePoint(c+96):l}return o}let I=L(()=>(n(g)==="kana"?j:A)(n(d))),V=L(()=>n(N)?n(E):n(I).tokens),W=L(()=>n(B)?n(V).map(G):n(V)),X=L(()=>n(N)?new Set:n(I).lineBreaks),Q=L(()=>`${n(g)} ${n(N)?n(T):n(d)}`),en=null;Z(()=>{const e=n(T);if(en===e)return;en=e;const o=an.find(l=>l.filename===e);o&&u(d,o.text,!0)});let r=null;Z(()=>{const e=n(Q),o=n(O);!o||r===e||(r=e,u(E,Array.from({length:on},()=>ln(o)),!0),u(M,0))}),Z(()=>{const e=n(O);if(e&&n(M)>n(E).length-sn){const o=Array.from({length:gn},()=>ln(e));u(E,[...n(E),...o],!0)}});let t=y(rn([]));function s(e,o){u(M,e,!0),u(t,o.slice(),!0)}let v=y(void 0),h=y(!1),S=y(!1);const D=120,J=300;function F(){if(!n(v))return;const e=n(v).style.height;n(v).style.height="auto";const o=n(v).scrollHeight;u(S,o>D);const l=n(h)?Math.min(o,J):Math.min(o,D);n(v).style.overflowY=n(h)&&o>J?"auto":"hidden",n(v).style.height=e,n(v).offsetHeight,n(v).style.height=l+"px"}Z(()=>{n(d),n(h),F()});function q(e,o){let l=!1,c=n(W)[e];if(c=="っ"||c=="ッ")m.has(o)&&(l=!0);else if(c=="ー"){const x=f[n(W)[e-1]];(e==0||x!=null&&o==x.slice(-1))&&(l=!0)}else o==f[c]&&(l=!0);return l}function R(e,o){let l=n(W)[e];return(l=="っ"||l=="ッ")&&m.has(o)?o[0]:""}function z(e){let o="";for(const l of e){const c=l.codePointAt(0);o+=c>=12449&&c<=12534?String.fromCodePoint(c-96):l}return o}const Y={evaluate(e){if(e.index>=e.targets.length||e.value==="")return{commits:[],residual:e.value};const o=e.value.length>e.prev.length,l=e.value!=="n"&&b.has(e.value);return e.trigger==="submit"||e.trigger==="input"&&o&&l?{commits:[{correct:q(e.index,e.value),display:e.value}],residual:R(e.index,e.value)}:{commits:[],residual:e.value}}},tn={stepBackOnBackspace:!1,evaluate(e){if(e.trigger!=="input")return{commits:[],residual:e.value};const o=[];let l=0;for(let c=e.index;c<e.targets.length;c++){const x=e.targets[c];if(l+x.length>e.value.length)break;const pn=e.value.slice(l,l+x.length);if(z(pn)!==z(x))break;o.push({correct:!0,display:pn}),l+=x.length}return{commits:o,residual:e.value.slice(l)}}};let bn=L(()=>n(g)==="kana"?tn:Y),xn=y(void 0),wn=y(!1);Vn(()=>{u(p,new URLSearchParams(window.location.search).has("debug"),!0);const e=be(),o=e!==null&&(an.some(l=>l.filename===e.sourceId)||e.sourceId in $);if(!e||!o){u(wn,!0);return}u(g,e.mode,!0),u(B,e.katakana,!0),u(T,e.sourceId,!0),u(d,e.templatestring,!0),e.stream&&u(E,e.stream,!0),en=n(T),r=n(Q),Nn().then(()=>{var l;(l=n(xn))==null||l.restore(e.curIndex,e.marks),u(wn,!0)})});let Bn;Z(()=>{if(!n(wn))return;const e={mode:n(g),katakana:n(B),sourceId:n(T),templatestring:n(d),stream:n(N)?n(E):null,curIndex:n(M),marks:n(t).slice(0,n(M)).map(o=>o===void 0?null:o)};clearTimeout(Bn),Bn=setTimeout(()=>xe(e),400)});var En=De(),jn=yn(En),Sn=w(k(jn)),Mn=k(Sn);kn(Mn,17,()=>an,e=>e.filename,(e,o)=>{var l=Ne(),c={},x=k(l,!0);_(l),nn(()=>{c!==(c=n(o).filename)&&(l.value=(l.__value=n(o).filename)??""),H(x,n(o).title)}),C(e,l)});var In=w(Mn);In.value=In.__value="inf-random";var Cn=w(In);Cn.value=Cn.__value="inf-a",_(Sn),_(jn);var mn=w(jn,2);mn.__click=[Re,g];var Fn=k(mn);_(mn);var _n=w(mn,2);_n.__click=[Le,B];var Hn=k(_n);_(_n);var Kn=w(_n,4);{var Wn=e=>{var o=Pe();let l;var c=k(o);Ln(c),c.__input=F,dn(c,x=>u(v,x),()=>n(v)),_(o),nn(x=>l=zn(o,1,"textarea-wrap svelte-1f1vg63",null,l,x),[()=>({faded:!n(h)&&n(S)})]),un("focus",c,()=>u(h,!0)),un("blur",c,()=>{document.hasFocus()&&u(h,!1)}),ne(c,()=>n(d),x=>u(d,x)),C(e,o)};cn(Kn,e=>{n(N)||e(Wn)})}var qn=w(Kn,2);const Gn=L(()=>n(g)==="kana"?null:3);dn(ye(qn,{get templateText(){return n(W)},get lineBreaks(){return n(X)},get maxWordLength(){return n(Gn)},get policy(){return n(bn)},get resetKey(){return n(Q)},onAdvance:s,get debug(){return n(p)}}),e=>u(xn,e,!0),()=>n(xn)),nn(()=>{H(Fn,`Mode: ${n(g)??""}`),H(Hn,`Script: ${n(B)?"katakana":"as written"}`)}),ae(Sn,()=>n(T),e=>u(T,e)),C(i,En),Tn()}Rn(["click","input"]);export{$e as component};
