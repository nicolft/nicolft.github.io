import{f as F,a as R}from"../chunks/C76I1A01.js";import{b as Sn,d as Bn,au as pn,j as an,h as O,l as Dn,C as Ln,z as i,R as On,D as Hn,F as Rn,G as hn,i as rn,k as U,af as Fn,I as bn,J as xn,K as Wn,av as ln,ai as wn,N as Kn,a5 as _n,aw as cn,ax as yn,ay as fn,a0 as Pn,az as mn,ac as Vn,aA as Yn,aB as Gn,a6 as qn,aC as Jn,ap as Un,aD as Xn,g as Qn,aE as Zn,v as $n,M as ne,p as Tn,an as V,s as D,t as Z,a as zn,X as H,am as ee,c as C,r as j,n as En,f as en,al as sn,W as te,u as ae}from"../chunks/B8fJHZe-.js";import{l as ie,d as An,e as dn,s as G,r as re}from"../chunks/Cm6hqZ-M.js";import{p as X,i as nn,b as Mn}from"../chunks/pI_02JzU.js";function le(e,n){return n}function se(e,n,t,a){for(var l=[],s=n.length,o=0;o<s;o++)Gn(n[o].e,l,!0);var d=s>0&&l.length===0&&t!==null;if(d){var f=t.parentNode;qn(f),f.append(t),a.clear(),W(e,n[0].prev,n[s-1].next)}Jn(l,()=>{for(var y=0;y<s;y++){var p=n[y];d||(a.delete(p.k),W(e,p.prev,p.next)),Un(p.e,!d)}})}function vn(e,n,t,a,l,s=null){var o=e,d={flags:n,items:new Map,first:null},f=(n&pn)!==0;if(f){var y=e;o=O?an(Dn(y)):y.appendChild(Sn())}O&&Ln();var p=null,b=!1,v=On(()=>{var k=t();return Vn(k)?k:k==null?[]:wn(k)});Bn(()=>{var k=i(v),u=k.length;if(b&&u===0)return;b=u===0;let z=!1;if(O){var x=Hn(o)===Rn;x!==(u===0)&&(o=hn(),an(o),rn(!1),z=!0)}if(O){for(var E=null,M,T=0;T<u;T++){if(U.nodeType===8&&U.data===Fn){o=U,z=!0,rn(!1);break}var c=k[T],_=a(c,T);M=jn(U,d,E,null,c,_,T,l,n,t),d.items.set(_,M),E=M}u>0&&an(hn())}O||oe(k,d,o,l,n,a,t),s!==null&&(u===0?p?bn(p):p=xn(()=>s(o)):p!==null&&Wn(p,()=>{p=null})),z&&rn(!0),i(v)}),O&&(o=U)}function oe(e,n,t,a,l,s,o){var g,w,A,S;var d=(l&Yn)!==0,f=(l&(cn|fn))!==0,y=e.length,p=n.items,b=n.first,v=b,k,u=null,z,x=[],E=[],M,T,c,_;if(d)for(_=0;_<y;_+=1)M=e[_],T=s(M,_),c=p.get(T),c!==void 0&&((g=c.a)==null||g.measure(),(z??(z=new Set)).add(c));for(_=0;_<y;_+=1){if(M=e[_],T=s(M,_),c=p.get(T),c===void 0){var q=v?v.e.nodes_start:t;u=jn(q,n,u,u===null?n.first:u.next,M,T,_,a,l,o),p.set(T,u),x=[],E=[],v=u.next;continue}if(f&&ue(c,M,_,l),(c.e.f&ln)!==0&&(bn(c.e),d&&((w=c.a)==null||w.unfix(),(z??(z=new Set)).delete(c))),c!==v){if(k!==void 0&&k.has(c)){if(x.length<E.length){var I=E[0],N;u=I.prev;var B=x[0],K=x[x.length-1];for(N=0;N<x.length;N+=1)gn(x[N],I,t);for(N=0;N<E.length;N+=1)k.delete(E[N]);W(n,B.prev,K.next),W(n,u,B),W(n,K,I),v=I,u=K,_-=1,x=[],E=[]}else k.delete(c),gn(c,v,t),W(n,c.prev,c.next),W(n,c,u===null?n.first:u.next),W(n,u,c),u=c;continue}for(x=[],E=[];v!==null&&v.k!==T;)(v.e.f&ln)===0&&(k??(k=new Set)).add(v),E.push(v),v=v.next;if(v===null)continue;c=v}x.push(c),u=c,v=c.next}if(v!==null||k!==void 0){for(var h=k===void 0?[]:wn(k);v!==null;)(v.e.f&ln)===0&&h.push(v),v=v.next;var r=h.length;if(r>0){var m=(l&pn)!==0&&y===0?t:null;if(d){for(_=0;_<r;_+=1)(A=h[_].a)==null||A.measure();for(_=0;_<r;_+=1)(S=h[_].a)==null||S.fix()}se(n,h,m,p)}}d&&Kn(()=>{var L;if(z!==void 0)for(c of z)(L=c.a)==null||L.apply()}),_n.first=n.first&&n.first.e,_n.last=u&&u.e}function ue(e,n,t,a){(a&cn)!==0&&yn(e.v,n),(a&fn)!==0?yn(e.i,t):e.i=t}function jn(e,n,t,a,l,s,o,d,f,y){var p=(f&cn)!==0,b=(f&Xn)===0,v=p?b?Pn(l):mn(l):l,k=(f&fn)===0?o:mn(o),u={i:k,v,k:s,a:null,e:null,prev:t,next:a};try{return u.e=xn(()=>d(e,v,k,y),O),u.e.prev=t&&t.e,u.e.next=a&&a.e,t===null?n.first=u:(t.next=u,t.e.next=u.e),a!==null&&(a.prev=u,a.e.prev=u.e),u}finally{}}function gn(e,n,t){for(var a=e.next?e.next.e.nodes_start:t,l=n?n.e.nodes_start:t,s=e.e.nodes_start;s!==a;){var o=Qn(s);l.before(s),s=o}}function W(e,n,t){n===null?e.first=t:(n.next=t,n.e.next=t&&t.e),t!==null&&(t.prev=n,t.e.prev=n&&n.e)}const kn=[...` 	
\r\f \v\uFEFF`];function de(e,n,t){var a=e==null?"":""+e;if(n&&(a=a?a+" "+n:n),t){for(var l in t)if(t[l])a=a?a+" "+l:l;else if(a.length)for(var s=l.length,o=0;(o=a.indexOf(l,o))>=0;){var d=o+s;(o===0||kn.includes(a[o-1]))&&(d===a.length||kn.includes(a[d]))?a=(o===0?"":a.substring(0,o))+a.substring(d+1):o=d}}return a===""?null:a}function In(e,n,t,a,l,s){var o=e.__className;if(O||o!==t||o===void 0){var d=de(t,a,s);(!O||d!==e.getAttribute("class"))&&(d==null?e.removeAttribute("class"):e.className=d),e.__className=t}else if(s&&l!==s)for(var f in s){var y=!!s[f];(l==null||y!==!!l[f])&&e.classList.toggle(f,y)}return s}function ve(e,n,t=n){var a=Zn();ie(e,"input",l=>{var s=l?e.defaultValue:e.value;if(s=on(e)?un(s):s,t(s),a&&s!==(s=n())){var o=e.selectionStart,d=e.selectionEnd;e.value=s??"",d!==null&&(e.selectionStart=o,e.selectionEnd=Math.min(d,e.value.length))}}),(O&&e.defaultValue!==e.value||$n(n)==null&&e.value)&&t(on(e)?un(e.value):e.value),ne(()=>{var l=n();on(e)&&l===un(e.value)||e.type==="date"&&!l&&!e.value||l!==e.value&&(e.value=l??"")})}function on(e){var n=e.type;return n==="number"||n==="range"}function un(e){return e===""?null:+e}function ce(e,n,t,a,l,s,o,d,f){if(!(e.isComposing||e.ctrlKey||e.metaKey))switch(e.key){case"ArrowLeft":e.preventDefault();break;case"Backspace":i(n)==""&&i(t)>0?a(-1):H(n,i(n).slice(0,-1),!0);break;case" ":case"Enter":e.preventDefault(),l();break;default:e.key.length==1&&i(t)<s.templateText.length&&(o()==null||i(n).length<o())&&(H(n,i(n)+e.key),d(f())&&l())}}var fe=F('<div class="line-break svelte-1m9ksyd"></div>'),he=F('<!> <div class="character svelte-1m9ksyd"><div> </div> <div class="userinputted typedincorrect svelte-1m9ksyd"> </div></div>',1),_e=F('<div class="line-break svelte-1m9ksyd"></div>'),ye=(e,n)=>{n()},me=F('<div class="line-break svelte-1m9ksyd"></div>'),ge=F('<!> <div class="character svelte-1m9ksyd"><div class="kana svelte-1m9ksyd"> </div></div>',1),ke=F('<div class="textbox-wrapper svelte-1m9ksyd" role="textbox" tabindex="0"><div class="centered-vertical-crop svelte-1m9ksyd"><!> <!> <div class="character svelte-1m9ksyd"><div class="kana svelte-1m9ksyd"> </div> <input class="invisible-input svelte-1m9ksyd" maxlength="0"/> <div class="userinput svelte-1m9ksyd"><span class="svelte-1m9ksyd"> </span> <div aria-hidden="true" class="caret-container svelte-1m9ksyd"><div aria-hidden="true" class="caret svelte-1m9ksyd"></div></div></div></div> <!></div></div>');function pe(e,n){Tn(n,!0);let t=X(n,"maxWordLength",3,null),a=X(n,"lineBreaks",19,()=>new Set),l=X(n,"autoMatch",3,()=>!1),s=X(n,"isCorrect",3,(r,m)=>m==n.templateText[r]),o=X(n,"onNext",3,()=>"");function d(r){return r(i(f),i(y))}let f=V(()=>(n.templateText,0)),y=V(()=>(n.templateText,"")),p,b=V(()=>Array(n.templateText.length));function v(r){r.preventDefault(),p.focus()}function k(r){r<0?H(f,Math.max(0,i(f)+r),!0):H(f,Math.min(n.templateText.length,i(f)+r),!0),ee().then(()=>{p.scrollIntoView({block:"center"})})}function u(){i(b)[i(f)]=d(s())?null:i(y),H(y,d(o()),!0),k(1)}var z=ke(),x=C(z),E=C(x);vn(E,17,()=>n.templateText.slice(0,i(f)),le,(r,m,g)=>{var w=he();const A=V(()=>i(b)[g]);var S=en(w);{var L=tn=>{var Cn=fe();R(tn,Cn)};nn(S,tn=>{a().has(g)&&tn(L)})}var P=D(S,2),Y=C(P),J=C(Y,!0);j(Y);var $=D(Y,2),Nn=C($,!0);j($),j(P),Z(()=>{In(Y,1,`kana ${i(A)==null?"typedcorrect":"typedincorrect"}`,"svelte-1m9ksyd"),G(J,i(m)),G(Nn,i(A)==null?"":i(A))}),R(r,w)});var M=D(E,2);{var T=r=>{var m=_e();R(r,m)};nn(M,r=>{a().has(i(f))&&r(T)})}var c=D(M,2),_=C(c),q=C(_,!0);j(_);var I=D(_,2);I.__keydown=[ce,y,f,k,u,n,t,d,l],I.__input=[ye,u],Mn(I,r=>p=r,()=>p);var N=D(I,2),B=C(N),K=C(B,!0);j(B),En(2),j(N),j(c);var h=D(c,2);vn(h,19,()=>n.templateText.slice(i(f)+1),(r,m)=>m+i(f)+1,(r,m,g)=>{var w=ge(),A=en(w);{var S=J=>{var $=me();R(J,$)};nn(A,J=>{a().has(i(g)+i(f)+1)&&J(S)})}var L=D(A,2),P=C(L),Y=C(P,!0);j(P),j(L),Z(()=>G(Y,i(m))),R(r,w)}),j(x),j(z),Z(()=>{G(q,n.templateText[i(f)]),G(K,i(y))}),dn("focus",z,v),R(e,z),zn()}An(["keydown","input"]);const be=`ユメのめいろ…ユリのめいろ…

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
`,xe=`おどってるだけでたいじょう
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
`,we=`きょうははれだ
ねこがあるく
`,Te=`このカフェにたどりついた ラッキーボーイズアンドガールズ
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
`,ze=`Three,two,one,zero! ここでとうじょう
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
`,Ee=`きょうはいいてんきです。コーヒーをのむ。
`,Ae=`あらわれたそれははるのまっさなか えもいえぬままかがやいていた
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
`,Me=`あなたはかぜのように
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
`,je=`「あめのにおいになつかしくなるのはなんでなんでしょうか。
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
`,Ie=`そとでたしゅんかん おわったわ
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
`,Ne=`まわりにあわせるげんごもしらねえ
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
`,Ce={sample:{title:"Everyday weather",description:"A short everyday line about the weather and drinking coffee."},haiku:{title:"Sunny-day haiku",description:"A two-line haiku — clear skies and a cat out walking."},zutomayo_kirakiller:{title:"綺羅キラー (feat. Mori Calliope)",description:"綺羅キラー (feat. Mori Calliope) — ずっと真夜中でいいのに。"},yorushika_hitchcock:{title:"ヒッチコック",description:"ヒッチコック — ヨルシカ"},frederic_oddloop:{title:"オドループ",description:"オドループ — フレデリック"},nishikinomaki_soldiergame:{title:"soldier game",description:"soldier game — 西木野真姫(Pile)"},yukopi_kyoufuuallback:{title:"強風オールバック",description:"強風オールバック — Yukopi feat. 歌愛ユキ"},jp_bokuniinvitation:{title:"ボクにインビテーション",description:"ボクにインビテーション — JP"},eri_nozomi_garasunohanazono:{title:"硝子の花園",description:"硝子の花園 — 絢瀬絵里(南條愛乃)&東條希(楠田亜衣奈)"},yonezukenshi_shunrai:{title:"春雷",description:"春雷 — 米津玄師"},yorushika_haru:{title:"晴る",description:"晴る — ヨルシカ"}},Se=Object.assign({"/corpus/validated/eri_nozomi_garasunohanazono.txt":be,"/corpus/validated/frederic_oddloop.txt":xe,"/corpus/validated/haiku.txt":we,"/corpus/validated/jp_bokuniinvitation.txt":Te,"/corpus/validated/nishikinomaki_soldiergame.txt":ze,"/corpus/validated/sample.txt":Ee,"/corpus/validated/yonezukenshi_shunrai.txt":Ae,"/corpus/validated/yorushika_haru.txt":Me,"/corpus/validated/yorushika_hitchcock.txt":je,"/corpus/validated/yukopi_kyoufuuallback.txt":Ie,"/corpus/validated/zutomayo_kirakiller.txt":Ne}),Q=Object.entries(Se).map(([e,n])=>{const t=e.split("/").pop().replace(/\.txt$/,""),a=Ce[t];return{filename:t,title:(a==null?void 0:a.title)??t,description:(a==null?void 0:a.description)??"",text:n.replace(/\r?\n$/,"")}}).sort((e,n)=>e.title.localeCompare(n.title));function Be(e,n){const t=Q.find(a=>a.filename===e.currentTarget.value);t&&H(n,t.text,!0)}var De=F("<option> </option>"),Le=F("<label>Preset: <select></select></label> <br/>",1),Oe=F('<!> <div><textarea class="svelte-15808i5"></textarea></div> <!>',1);function Ke(e,n){Tn(n,!0);const t={あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",を:"wo",ん:"n",が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",だ:"da",ぢ:"ji",づ:"dzu",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",きゃ:"kya",きゅ:"kyu",きょ:"kyo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",しゃ:"sha",しゅ:"shu",しょ:"sho",じゃ:"ja",じゅ:"ju",じょ:"jo",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",みゃ:"mya",みゅ:"myu",みょ:"myo",りゃ:"rya",りゅ:"ryu",りょ:"ryo",ア:"a",イ:"i",ウ:"u",エ:"e",オ:"o",カ:"ka",キ:"ki",ク:"ku",ケ:"ke",コ:"ko",サ:"sa",シ:"shi",ス:"su",セ:"se",ソ:"so",タ:"ta",チ:"chi",ツ:"tsu",テ:"te",ト:"to",ナ:"na",ニ:"ni",ヌ:"nu",ネ:"ne",ノ:"no",ハ:"ha",ヒ:"hi",フ:"fu",ヘ:"he",ホ:"ho",マ:"ma",ミ:"mi",ム:"mu",メ:"me",モ:"mo",ヤ:"ya",ユ:"yu",ヨ:"yo",ラ:"ra",リ:"ri",ル:"ru",レ:"re",ロ:"ro",ワ:"wa",ヲ:"wo",ン:"n",ガ:"ga",ギ:"gi",グ:"gu",ゲ:"ge",ゴ:"go",ザ:"za",ジ:"ji",ズ:"zu",ゼ:"ze",ゾ:"zo",ダ:"da",ヂ:"ji",ヅ:"dzu",デ:"de",ド:"do",バ:"ba",ビ:"bi",ブ:"bu",ベ:"be",ボ:"bo",パ:"pa",ピ:"pi",プ:"pu",ペ:"pe",ポ:"po",キャ:"kya",キュ:"kyu",キョ:"kyo",ギャ:"gya",ギュ:"gyu",ギョ:"gyo",シャ:"sha",シュ:"shu",ショ:"sho",ジャ:"ja",ジュ:"ju",ジョ:"jo",チャ:"cha",チュ:"chu",チョ:"cho",ヂャ:"ja",ヂュ:"ju",ヂョ:"jo",ニャ:"nya",ニュ:"nyu",ニョ:"nyo",ヒャ:"hya",ヒュ:"hyu",ヒョ:"hyo",ビャ:"bya",ビュ:"byu",ビョ:"byo",ピャ:"pya",ピュ:"pyu",ピョ:"pyo",ミャ:"mya",ミュ:"myu",ミョ:"myo",リャ:"rya",リュ:"ryu",リョ:"ryo",ウァ:"wa",ウィ:"wi",ウェ:"we",ウォ:"wo",ヴァ:"va",ヴィ:"vi",ヴ:"vu",ヴェ:"ve",ヴォ:"vo",シェ:"she",ジェ:"je",チェ:"che",ティ:"ti",テュ:"tyu",ディ:"di",デュ:"dyu",トゥ:"tu",ドゥ:"du",ファ:"fa",フィ:"fi",フュ:"fyu",フェ:"fe",フォ:"fo",キェ:"kye",ギェ:"gye",クァ:"kwa",クィ:"kwi",クェ:"kwe",クォ:"kwo",グァ:"gwa",グィ:"gwi",グェ:"gwe",グォ:"gwo",スィ:"si",ズィ:"zi",ツァ:"tsa",ツィ:"tsi",ツェ:"tse",ツォ:"tso",イェ:"ye",ニェ:"nye",ヒェ:"hye",ビェ:"bye",ピェ:"pye",ミェ:"mye",リェ:"rye"},a=new Set(["kk","ss","tt","pp","cc","ff","mm","rr","gg","zz","dd","bb"]);function l(h){let r=[],m=new Set,g=0;for(;g<h.length;){let w=h.slice(g,g+1),A=h.slice(g,g+2);A in t?(r.push(A),g+=2):w in t||w=="っ"||w=="ッ"||w=="ー"?(r.push(h[g]),g+=1):(w==`
`&&r.length>0&&m.add(r.length),g+=1)}return{tokens:r,lineBreaks:m}}const s=new Set(Object.values(t));a.forEach(s.add,s);const o=Q.length>0?Q[0].text:"おはようせかいグーダモーニングワールド";let d=sn(te(o)),f=V(()=>l(i(d))),y=V(()=>i(f).tokens),p=V(()=>i(f).lineBreaks),b,v=sn(!1),k=sn(!1);const u=120,z=300;function x(){if(!b)return;const h=b.style.height;b.style.height="auto";const r=b.scrollHeight;H(k,r>u);const m=i(v)?Math.min(r,z):Math.min(r,u);b.style.overflowY=i(v)&&r>z?"auto":"hidden",b.style.height=h,b.offsetHeight,b.style.height=m+"px"}ae(()=>{i(d),i(v),x()});function E(h,r){return r=="n"?i(y)[h]=="ん"||i(y)[h]=="ン":s.has(r)}function M(h,r){let m=!1,g=i(y)[h];return g=="っ"||g=="ッ"?a.has(r)&&(m=!0):g=="ー"?(h==0||r==t[i(y)[h-1]].slice(-1))&&(m=!0):r==t[g]&&(m=!0),m}function T(h,r){let m=i(y)[h];return(m=="っ"||m=="ッ")&&a.has(r)?r[0]:""}var c=Oe(),_=en(c);{var q=h=>{var r=Le(),m=en(r),g=D(C(m));g.__change=[Be,d],vn(g,21,()=>Q,w=>w.filename,(w,A)=>{var S=De(),L={},P=C(S,!0);j(S),Z(()=>{L!==(L=i(A).filename)&&(S.value=(S.__value=i(A).filename)??""),G(P,i(A).title)}),R(w,S)}),j(g),j(m),En(2),R(h,r)};nn(_,h=>{Q.length>0&&h(q)})}var I=D(_,2);let N;var B=C(I);re(B),B.__input=x,Mn(B,h=>b=h,()=>b),j(I);var K=D(I,2);pe(K,{get templateText(){return i(y)},get lineBreaks(){return i(p)},maxWordLength:3,autoMatch:E,isCorrect:M,onNext:T}),Z(h=>N=In(I,1,"textarea-wrap svelte-15808i5",null,N,h),[()=>({faded:!i(v)&&i(k)})]),dn("focus",B,()=>H(v,!0)),dn("blur",B,()=>{document.hasFocus()&&H(v,!1)}),ve(B,()=>i(d),h=>H(d,h)),R(e,c),zn()}An(["change","input"]);export{Ke as component};
