import{f as B,a as M}from"../chunks/CqUntxwt.js";import{o as Fn}from"../chunks/Dh_e33yK.js";import{b as Mn,aj as Hn,aH as Wn,aI as qn,p as jn,a0 as on,a8 as b,A as Z,f as yn,a as Sn,s as S,a1 as u,G as n,r as _,c as x,t as nn,a9 as P,aG as Bn,u as Gn,n as Vn}from"../chunks/BRSNaumR.js";import{l as Jn,d as Cn,e as un,s as Y}from"../chunks/NLEswu2d.js";import{p as X,i as cn}from"../chunks/BSLF_jox.js";import{e as kn,s as In,i as Yn,a as Un}from"../chunks/Cf4uW0LP.js";import{r as Kn}from"../chunks/bGiG5R6W.js";import{b as dn}from"../chunks/DL97Dl5Y.js";import{s as $n}from"../chunks/CmxJSX-z.js";function Nn(i,a,h){if(i.multiple)return a==null?void 0:Hn(a)?Zn(i,a):Wn();for(var v of i.options){var m=mn(v);if(qn(m,a)){v.selected=!0;return}}(!h||a!==void 0)&&(i.selectedIndex=-1)}function Xn(i,a){Mn(()=>{var h=new MutationObserver(()=>{var v=i.__value;Nn(i,v)});return h.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{h.disconnect()}})}function Qn(i,a,h=a){var v=!0;Jn(i,"change",m=>{var I=m?"[selected]":":checked",w;if(i.multiple)w=[].map.call(i.querySelectorAll(I),mn);else{var y=i.querySelector(I)??i.querySelector("option:not([disabled])");w=y&&mn(y)}h(w)}),Mn(()=>{var m=a();if(Nn(i,m,v),v&&m===void 0){var I=i.querySelector(":checked");I!==null&&(m=mn(I),h(m))}i.__value=m,v=!1}),Xn(i)}function Zn(i,a){for(var h of i.options)h.selected=a.includes(mn(h))}function mn(i){return"__value"in i?i.__value:i.value}function ne(i,a,h,v,m){var I,w;if(i.target===a()&&(h("key",`k=${i.key} kc=${i.keyCode}`),!(i.isComposing||i.keyCode===229||i.ctrlKey||i.metaKey)))switch(i.key){case"ArrowLeft":case"ArrowRight":i.preventDefault();break;case"Backspace":(((I=a())==null?void 0:I.value)??"")===""&&(i.preventDefault(),v()());break;case" ":case"Enter":i.preventDefault(),m()(((w=a())==null?void 0:w.value)??"");break}}function ee(i,a,h,v){var m;i.target===a()&&(h("binp",`t=${i.inputType}`),i.inputType==="deleteContentBackward"&&(((m=a())==null?void 0:m.value)??"")===""&&(i.preventDefault(),v()()))}var te=B('<input class="invisible-input svelte-jdasr6" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" enterkeyhint="next"/>'),ae=(i,a)=>u(a,!n(a)),re=B('<div class="debug-warn svelte-jdasr6"> </div>'),ie=B('<div><div class="debug-bar svelte-jdasr6"><button class="debug-btn svelte-jdasr6"> </button> <button class="debug-btn svelte-jdasr6"> </button></div> <!> <textarea class="debug-text svelte-jdasr6" readonly=""></textarea></div>'),oe=B('<span class="input-anchor svelte-jdasr6"></span> <!>',1);function se(i,a){jn(a,!0);let h=X(a,"onInput",3,()=>{}),v=X(a,"onSubmit",3,()=>{}),m=X(a,"onBackspaceEmpty",3,()=>{}),I=X(a,"debug",3,!1),w=on([void 0,void 0]),y=b(0),O=!1,d="";const f=()=>w[n(y)];function F(r=""){const t=n(y)===0?1:0,s=w[t];u(y,t,!0),O=!1,d=r,s&&(s.value=r,s.focus(),s.setSelectionRange(r.length,r.length)),A("reset",`seed="${r}"`)}function vn(){for(const r of w)r&&(r.value="");u(y,0),O=!1,d="",A("clear")}function sn(r){const t=f();t&&(t.value!==r&&(t.value=r),t.setSelectionRange(r.length,r.length),d=r,A("setValue",`"${r}"`))}function en(){var r;(r=f())==null||r.focus()}function ln(){const r=f();if(!r)return;const t=r.value.length;(r.selectionStart!==t||r.selectionEnd!==t)&&r.setSelectionRange(t,t)}function fn(r){var g;if(r.target!==f())return;const t=((g=f())==null?void 0:g.value)??"",s=r;A("input",`d="${s.data??""}" it=${s.inputType??""} ic${s.isComposing?1:0}`),t!==d&&(d=t,s.isComposing||ln(),h()(t))}function tn(r){r.target===f()&&(O=!0,A("cstart"))}function C(r){r.target===f()&&A("cupd",`d="${r.data??""}"`)}function H(r){var s;if(r.target!==f())return;O=!1;const t=((s=f())==null?void 0:s.value)??"";A("cend",`d="${r.data??""}"`),t!==d&&(d=t,h()(t)),ln()}let T=b(on([])),z=b(!1),K=b(!0),W=b(void 0);function N(){const r=n(T).join(`
`);let t=!1;if(n(W)){n(W).focus(),n(W).setSelectionRange(0,r.length);try{t=document.execCommand("copy")}catch{t=!1}}!t&&navigator.clipboard&&navigator.clipboard.writeText(r).catch(()=>{}),u(z,!0),setTimeout(()=>u(z,!1),1500)}function A(r,t=""){if(!I())return;const s=f(),g=(s==null?void 0:s.value)??"",p=s?`${s.selectionStart},${s.selectionEnd}`:"?";u(T,[`${r} c${O?1:0} s${n(y)} sel${p} v"${g}" ${t}`,...n(T)].slice(0,30),!0)}let q=b("");Z(()=>{const r=f();r&&requestAnimationFrame(()=>{const t=r.getBoundingClientRect();if(t.width>0&&t.height>0){u(q,"");return}u(q,`!! hidden input is ${t.width}x${t.height} — IME composition will break`)})});var U=oe(),G=yn(U);kn(G,20,()=>[0,1],r=>r,(r,t)=>{var s=te();s.__keydown=[ne,f,A,m,v],s.__beforeinput=[ee,f,A,m],s.__input=fn,dn(s,(g,p)=>w[p]=g,g=>w==null?void 0:w[g],()=>[t]),un("compositionstart",s,tn),un("compositionupdate",s,C),un("compositionend",s,H),M(r,s)}),_(G);var an=S(G,2);{var hn=r=>{var t=ie();let s;var g=x(t),p=x(g);p.__click=[ae,K];var j=x(p);_(p);var V=S(p,2);V.__click=N;var Q=x(V,!0);_(V),_(g);var L=S(g,2);{var J=E=>{var D=re(),$=x(D,!0);_(D),nn(()=>Y($,n(q))),M(E,D)};cn(L,E=>{n(q)&&E(J)})}var R=S(L,2);Kn(R),R.__click=N,dn(R,E=>u(W,E),()=>n(W)),_(t),nn((E,D)=>{s=In(t,1,"debug svelte-jdasr6",null,s,E),Y(j,`${n(K)?"▶":"▼"} debug (${n(T).length??""})`),Y(Q,n(z)?"✓ copied":"⇥ copy"),$n(R,D)},[()=>({collapsed:n(K)}),()=>n(T).join(`
`)]),M(r,t)};cn(an,r=>{I()&&r(hn)})}return M(i,U),Sn({reset:F,clear:vn,setValue:sn,focus:en})}Cn(["keydown","beforeinput","input","click"]);var le=B('<div class="line-break svelte-19e57xn"></div>'),ue=B('<!> <div class="character svelte-19e57xn"><div> </div> <div class="userinputted typedincorrect svelte-19e57xn"> </div></div>',1),ce=B('<div class="line-break svelte-19e57xn"></div>'),de=B('<div class="line-break svelte-19e57xn"></div>'),ve=B('<!> <div class="character svelte-19e57xn"><div class="kana svelte-19e57xn"> </div></div>',1),fe=B('<div class="textbox-wrapper svelte-19e57xn" role="textbox" tabindex="0"><div class="centered-vertical-crop svelte-19e57xn"><!> <!> <div class="character svelte-19e57xn"><div class="kana svelte-19e57xn"> </div> <!> <div class="userinput svelte-19e57xn"><span class="svelte-19e57xn"> </span> <div aria-hidden="true" class="caret-container svelte-19e57xn"><div aria-hidden="true" class="caret svelte-19e57xn"></div></div></div></div> <!></div></div>');function he(i,a){jn(a,!0);let h=X(a,"lineBreaks",19,()=>new Set),v=X(a,"maxWordLength",3,null),m=X(a,"resetKey",3,""),I=X(a,"onAdvance",3,()=>{}),w=X(a,"debug",3,!1),y=b(void 0),O=b(void 0),d=P(()=>(m(),0)),f=P(()=>(m(),"")),F=b(on([]));Z(()=>{m(),u(F,[],!0),Gn(()=>{var t;return(t=n(y))==null?void 0:t.clear()})}),Z(()=>{I()(n(d),n(F))});function vn(t,s){var p;const g=Math.max(0,Math.min(t,a.templateText.length));u(F,s.slice(0,g),!0),u(d,g,!0),u(f,""),(p=n(y))==null||p.reset(""),en()}function sn(t){var s;t.preventDefault(),(s=n(y))==null||s.focus()}function en(){Bn().then(()=>{var t;return(t=n(O))==null?void 0:t.scrollIntoView({block:"center"})})}function ln(t){tn(a.policy.evaluate({targets:a.templateText,index:n(d),value:t,prev:n(f),trigger:"input"}),t)}function fn(t){tn(a.policy.evaluate({targets:a.templateText,index:n(d),value:t,prev:n(f),trigger:"submit"}),t)}function tn(t,s){var g,p;if(t.commits.length>0){for(const j of t.commits)n(F)[n(d)]=j.correct?null:j.display,u(d,Math.min(a.templateText.length,n(d)+1),!0);u(f,t.residual,!0),(g=n(y))==null||g.reset(t.residual),en()}else{const j=v()==null?s:s.slice(0,v());u(f,j,!0),j!==s&&((p=n(y))==null||p.setValue(j))}}function C(){var t;n(d)!==0&&(u(d,n(d)-1),n(F)[n(d)]=void 0,u(f,""),(t=n(y))==null||t.reset(""),en())}var H=fe(),T=x(H),z=x(T);kn(z,17,()=>a.templateText.slice(0,n(d)),Yn,(t,s,g)=>{var p=ue();const j=P(()=>n(F)[g]);var V=yn(p);{var Q=$=>{var pn=le();M($,pn)};cn(V,$=>{h().has(g)&&$(Q)})}var L=S(V,2),J=x(L),R=x(J,!0);_(J);var E=S(J,2),D=x(E,!0);_(E),_(L),nn(()=>{In(J,1,`kana ${n(j)==null?"typedcorrect":"typedincorrect"}`,"svelte-19e57xn"),Y(R,n(s)),Y(D,n(j)==null?"":n(j))}),M(t,p)});var K=S(z,2);{var W=t=>{var s=ce();M(t,s)};cn(K,t=>{h().has(n(d))&&t(W)})}var N=S(K,2),A=x(N),q=x(A,!0);_(A);var U=S(A,2);dn(se(U,{onInput:ln,onSubmit:fn,onBackspaceEmpty:C,get debug(){return w()}}),t=>u(y,t,!0),()=>n(y));var G=S(U,2),an=x(G),hn=x(an,!0);_(an),Vn(2),_(G),_(N),dn(N,t=>u(O,t),()=>n(O));var r=S(N,2);return kn(r,19,()=>a.templateText.slice(n(d)+1),(t,s)=>s+n(d)+1,(t,s,g)=>{var p=ve(),j=yn(p);{var V=R=>{var E=de();M(R,E)};cn(j,R=>{h().has(n(g)+n(d)+1)&&R(V)})}var Q=S(j,2),L=x(Q),J=x(L,!0);_(L),_(Q),nn(()=>Y(J,n(s))),M(t,p)}),_(T),_(H),nn(()=>{Y(q,a.templateText[n(d)]),Y(hn,n(f))}),un("focus",H,sn),M(i,H),Sn({restore:vn})}const Rn="kana-session-v1",ge=5e4;function me(){try{const i=localStorage.getItem(Rn);if(!i)return null;const a=JSON.parse(i);return!a||typeof a!="object"||a.mode!=="romaji"&&a.mode!=="kana"||typeof a.sourceId!="string"||typeof a.templatestring!="string"||typeof a.curIndex!="number"||a.curIndex<0||!Array.isArray(a.marks)||a.stream!==null&&!Array.isArray(a.stream)?null:a}catch{return null}}function pe(i){try{const a=i.stream&&i.stream.length>ge?null:i.stream;localStorage.setItem(Rn,JSON.stringify({...i,stream:a}))}catch{}}const _e=`ユメのめいろ…ユリのめいろ…

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
`,ye=`おどってるだけでたいじょう
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
`,ke=`きょうははれだ
ねこがあるく
`,be=`このカフェにたどりついた ラッキーボーイズアンドガールズ
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
`,xe=`Three,two,one,zero! ここでとうじょう
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
`,we=`きょうはいいてんきです。コーヒーをのむ。
`,je=`あらわれたそれははるのまっさなか えもいえぬままかがやいていた
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
`,Se=`あなたはかぜのように
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
`,Ie=`「あめのにおいになつかしくなるのはなんでなんでしょうか。
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
`,Ae=`そとでたしゅんかん おわったわ
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
`,Te=`まわりにあわせるげんごもしらねえ
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
`,ze={sample:{title:"Everyday weather",description:"A short everyday line about the weather and drinking coffee."},haiku:{title:"Sunny-day haiku",description:"A two-line haiku — clear skies and a cat out walking."},zutomayo_kirakiller:{title:"綺羅キラー (feat. Mori Calliope)",description:"綺羅キラー (feat. Mori Calliope) — ずっと真夜中でいいのに。"},yorushika_hitchcock:{title:"ヒッチコック",description:"ヒッチコック — ヨルシカ"},frederic_oddloop:{title:"オドループ",description:"オドループ — フレデリック"},nishikinomaki_soldiergame:{title:"soldier game",description:"soldier game — 西木野真姫(Pile)"},yukopi_kyoufuuallback:{title:"強風オールバック",description:"強風オールバック — Yukopi feat. 歌愛ユキ"},jp_bokuniinvitation:{title:"ボクにインビテーション",description:"ボクにインビテーション — JP"},eri_nozomi_garasunohanazono:{title:"硝子の花園",description:"硝子の花園 — 絢瀬絵里(南條愛乃)&東條希(楠田亜衣奈)"},yonezukenshi_shunrai:{title:"春雷",description:"春雷 — 米津玄師"},yorushika_haru:{title:"晴る",description:"晴る — ヨルシカ"}},Ee=Object.assign({"/corpus/validated/eri_nozomi_garasunohanazono.txt":_e,"/corpus/validated/frederic_oddloop.txt":ye,"/corpus/validated/haiku.txt":ke,"/corpus/validated/jp_bokuniinvitation.txt":be,"/corpus/validated/nishikinomaki_soldiergame.txt":xe,"/corpus/validated/sample.txt":we,"/corpus/validated/yonezukenshi_shunrai.txt":je,"/corpus/validated/yorushika_haru.txt":Se,"/corpus/validated/yorushika_hitchcock.txt":Ie,"/corpus/validated/yukopi_kyoufuuallback.txt":Ae,"/corpus/validated/zutomayo_kirakiller.txt":Te}),rn=Object.entries(Ee).map(([i,a])=>{const h=i.split("/").pop().replace(/\.txt$/,""),v=ze[h];return{filename:h,title:(v==null?void 0:v.title)??h,description:(v==null?void 0:v.description)??"",text:a.replace(/\r?\n$/,"")}}).sort((i,a)=>i.title.localeCompare(a.title));var Me=B("<option> </option>"),Be=(i,a)=>u(a,n(a)==="kana"?"romaji":"kana",!0),Ce=B('<div><textarea class="svelte-rry9na"></textarea></div>'),Ke=B('<label>Source: <select><!><option>Random kana (∞)</option><option>あ-row only (∞)</option></select></label> <button type="button" class="mode-toggle svelte-rry9na"> </button> <br/> <!> <!>',1);function qe(i,a){jn(a,!0);let h=b(!1);const v={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",を:"wo",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"ji",づ:"dzu",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ア:"a",イ:"i",ウ:"u",エ:"e",オ:"o",カ:"ka",キ:"ki",ク:"ku",ケ:"ke",コ:"ko",サ:"sa",シ:"shi",ス:"su",セ:"se",ソ:"so",タ:"ta",チ:"chi",ツ:"tsu",テ:"te",ト:"to",ナ:"na",ニ:"ni",ヌ:"nu",ネ:"ne",ノ:"no",ハ:"ha",ヒ:"hi",フ:"fu",ヘ:"he",ホ:"ho",マ:"ma",ミ:"mi",ム:"mu",メ:"me",モ:"mo",ヤ:"ya",ユ:"yu",ヨ:"yo",ラ:"ra",リ:"ri",ル:"ru",レ:"re",ロ:"ro",ワ:"wa",ヲ:"wo",ン:"n",ガ:"ga",ギ:"gi",グ:"gu",ゲ:"ge",ゴ:"go",ザ:"za",ジ:"ji",ズ:"zu",ゼ:"ze",ゾ:"zo",ダ:"da",ヂ:"ji",ヅ:"dzu",デ:"de",ド:"do",バ:"ba",ビ:"bi",ブ:"bu",ベ:"be",ボ:"bo",パ:"pa",ピ:"pi",プ:"pu",ペ:"pe",ポ:"po",キャ:"kya",キュ:"kyu",キョ:"kyo",ギャ:"gya",ギュ:"gyu",ギョ:"gyo",シャ:"sha",シュ:"shu",ショ:"sho",ジャ:"ja",ジュ:"ju",ジョ:"jo",チャ:"cha",チュ:"chu",チョ:"cho",ヂャ:"ja",ヂュ:"ju",ヂョ:"jo",ニャ:"nya",ニュ:"nyu",ニョ:"nyo",ヒャ:"hya",ヒュ:"hyu",ヒョ:"hyo",ビャ:"bya",ビュ:"byu",ビョ:"byo",ピャ:"pya",ピュ:"pyu",ピョ:"pyo",ミャ:"mya",ミュ:"myu",ミョ:"myo",リャ:"rya",リュ:"ryu",リョ:"ryo",ウァ:"wa",ウィ:"wi",ウェ:"we",ウォ:"wo",ヴァ:"va",ヴィ:"vi",ヴ:"vu",ヴェ:"ve",ヴォ:"vo",シェ:"she",ジェ:"je",チェ:"che",ティ:"ti",テュ:"tyu",ディ:"di",デュ:"dyu",トゥ:"tu",ドゥ:"du",ファ:"fa",フィ:"fi",フュ:"fyu",フェ:"fe",フォ:"fo",キェ:"kye",ギェ:"gye",クァ:"kwa",クィ:"kwi",クェ:"kwe",クォ:"kwo",グァ:"gwa",グィ:"gwi",グェ:"gwe",グォ:"gwo",スィ:"si",ズィ:"zi",ツァ:"tsa",ツィ:"tsi",ツェ:"tse",ツォ:"tso",イェ:"ye",ニェ:"nye",ヒェ:"hye",ビェ:"bye",ピェ:"pye",ミェ:"mye",リェ:"rye"},m=new Set(["kk","ss","tt","pp","cc","ff","mm","rr","gg","zz","dd","bb"]);function I(e){let o=[],l=new Set,c=0;for(;c<e.length;){let k=e.slice(c,c+1),gn=e.slice(c,c+2);gn in v?(o.push(gn),c+=2):k in v||k=="っ"||k=="ッ"||k=="ー"?(o.push(e[c]),c+=1):(k==`
`&&o.length>0&&l.add(o.length),c+=1)}return{tokens:o,lineBreaks:l}}function w(e){let o=[],l=new Set;for(const c of e)c==`
`?o.length>0&&l.add(o.length):/[ぁ-ゖァ-ヺー]/.test(c)&&o.push(c);return{tokens:o,lineBreaks:l}}const y=new Set(Object.values(v));m.forEach(y.add,y);const O=rn.length>0?rn[0].text:"おはようせかいグーダモーニングワールド";let d=b(on(O)),f=b("romaji");const F=[..."あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん"],vn=[..."あかさたなはまやらわ"],sn={"inf-random":F,"inf-a":vn},en=80,ln=40,fn=30,tn=e=>e[Math.floor(Math.random()*e.length)];let C=b(on(rn.length>0?rn[0].filename:"inf-random")),H=P(()=>sn[n(C)]),T=P(()=>n(H)!==void 0),z=b(on([])),K=b(0),W=P(()=>(n(f)==="kana"?w:I)(n(d))),N=P(()=>n(T)?n(z):n(W).tokens),A=P(()=>n(T)?new Set:n(W).lineBreaks),q=P(()=>`${n(f)} ${n(T)?n(C):n(d)}`),U=null;Z(()=>{const e=n(C);if(U===e)return;U=e;const o=rn.find(l=>l.filename===e);o&&u(d,o.text,!0)});let G=null;Z(()=>{const e=n(q),o=n(H);!o||G===e||(G=e,u(z,Array.from({length:en},()=>tn(o)),!0),u(K,0))}),Z(()=>{const e=n(H);if(e&&n(K)>n(z).length-fn){const o=Array.from({length:ln},()=>tn(e));u(z,[...n(z),...o],!0)}});let an=b(on([]));function hn(e,o){u(K,e,!0),u(an,o.slice(),!0)}let r=b(void 0),t=b(!1),s=b(!1);const g=120,p=300;function j(){if(!n(r))return;const e=n(r).style.height;n(r).style.height="auto";const o=n(r).scrollHeight;u(s,o>g);const l=n(t)?Math.min(o,p):Math.min(o,g);n(r).style.overflowY=n(t)&&o>p?"auto":"hidden",n(r).style.height=e,n(r).offsetHeight,n(r).style.height=l+"px"}Z(()=>{n(d),n(t),j()});function V(e,o){let l=!1,c=n(N)[e];if(c=="っ"||c=="ッ")m.has(o)&&(l=!0);else if(c=="ー"){const k=v[n(N)[e-1]];(e==0||k!=null&&o==k.slice(-1))&&(l=!0)}else o==v[c]&&(l=!0);return l}function Q(e,o){let l=n(N)[e];return(l=="っ"||l=="ッ")&&m.has(o)?o[0]:""}function L(e){let o="";for(const l of e){const c=l.codePointAt(0);o+=c>=12449&&c<=12534?String.fromCodePoint(c-96):l}return o}const J={evaluate(e){if(e.index>=e.targets.length||e.value==="")return{commits:[],residual:e.value};const o=e.value.length>e.prev.length,l=e.value!=="n"&&y.has(e.value);return e.trigger==="submit"||e.trigger==="input"&&o&&l?{commits:[{correct:V(e.index,e.value),display:e.value}],residual:Q(e.index,e.value)}:{commits:[],residual:e.value}}},R={evaluate(e){if(e.trigger!=="input")return{commits:[],residual:e.value};const o=[];let l=0;for(let c=e.index;c<e.targets.length;c++){const k=e.targets[c];if(l+k.length>e.value.length)break;const gn=e.value.slice(l,l+k.length);if(L(gn)!==L(k))break;o.push({correct:!0,display:gn}),l+=k.length}return{commits:o,residual:e.value.slice(l)}}};let E=P(()=>n(f)==="kana"?R:J),D=b(void 0),$=b(!1);Fn(()=>{u(h,new URLSearchParams(window.location.search).has("debug"),!0);const e=me(),o=e!==null&&(rn.some(l=>l.filename===e.sourceId)||e.sourceId in sn);if(!e||!o){u($,!0);return}u(f,e.mode,!0),u(C,e.sourceId,!0),u(d,e.templatestring,!0),e.stream&&u(z,e.stream,!0),U=n(C),G=n(q),Bn().then(()=>{var l;(l=n(D))==null||l.restore(e.curIndex,e.marks),u($,!0)})});let pn;Z(()=>{if(!n($))return;const e={mode:n(f),sourceId:n(C),templatestring:n(d),stream:n(T)?n(z):null,curIndex:n(K),marks:n(an).slice(0,n(K)).map(o=>o===void 0?null:o)};clearTimeout(pn),pn=setTimeout(()=>pe(e),400)});var An=Ke(),bn=yn(An),xn=S(x(bn)),Tn=x(xn);kn(Tn,17,()=>rn,e=>e.filename,(e,o)=>{var l=Me(),c={},k=x(l,!0);_(l),nn(()=>{c!==(c=n(o).filename)&&(l.value=(l.__value=n(o).filename)??""),Y(k,n(o).title)}),M(e,l)});var wn=S(Tn);wn.value=wn.__value="inf-random";var zn=S(wn);zn.value=zn.__value="inf-a",_(xn),_(bn);var _n=S(bn,2);_n.__click=[Be,f];var On=x(_n);_(_n);var En=S(_n,4);{var Ln=e=>{var o=Ce();let l;var c=x(o);Kn(c),c.__input=j,dn(c,k=>u(r,k),()=>n(r)),_(o),nn(k=>l=In(o,1,"textarea-wrap svelte-rry9na",null,l,k),[()=>({faded:!n(t)&&n(s)})]),un("focus",c,()=>u(t,!0)),un("blur",c,()=>{document.hasFocus()&&u(t,!1)}),Un(c,()=>n(d),k=>u(d,k)),M(e,o)};cn(En,e=>{n(T)||e(Ln)})}var Dn=S(En,2);const Pn=P(()=>n(f)==="kana"?null:3);dn(he(Dn,{get templateText(){return n(N)},get lineBreaks(){return n(A)},get maxWordLength(){return n(Pn)},get policy(){return n(E)},get resetKey(){return n(q)},onAdvance:hn,get debug(){return n(h)}}),e=>u(D,e,!0),()=>n(D)),nn(()=>Y(On,`Mode: ${n(f)??""}`)),Qn(xn,()=>n(C),e=>u(C,e)),M(i,An),Sn()}Cn(["click","input"]);export{qe as component};
