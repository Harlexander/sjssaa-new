import{j as i,x as yt,e as hn,r as N}from"./app-CgK7TKDC.js";import{c as Yt}from"./index-o45fFjyu.js";import{B as kn}from"./button-Cdu8HYDj.js";import{c as An}from"./createLucideIcon-4P0dJnm9.js";import{h as wr}from"./moment-C5S46NFB.js";import"./index.es-zCgeU7Gz.js";import{E as Sr}from"./ExecutiveContainer-CjXXzUn1.js";import{I as jr}from"./Navbar-C_qONdBl.js";import"./index-DswxwWLv.js";import"./ChevronDownIcon-jrMj7ZMy.js";import"./transition-BcQZZvoo.js";import"./XMarkIcon-gBIMgCg0.js";import"./dialog-BoWNEdnH.js";const Nr=({title:t,href:e="",additionalClass:n})=>i.jsx(yt,{href:e,children:i.jsx("button",{className:`border-2 border-[#800000] hover:bg-[#800000] hover:text-white px-8 py-1 text-[#800000] ${n}`,children:t})}),gt=({href:t="",onClick:e,title:n,additionalClass:r})=>i.jsx(yt,{href:t,children:i.jsx("button",{onClick:e,className:`bg-[#800000]  px-8 py-1 text-white ${r}`,children:n})});function Cr(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Er(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var $r=function(){function t(n){var r=this;this._insertTag=function(s){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(s,o),r.tags.push(s)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Er(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var o=Cr(s);try{o.insertRule(r,o.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var s;return(s=r.parentNode)==null?void 0:s.removeChild(r)}),this.tags=[],this.ctr=0},t}(),X="-ms-",te="-moz-",k="-webkit-",On="comm",_e="rule",Ye="decl",Ir="@import",Mn="@keyframes",kr="@layer",Ar=Math.abs,ne=String.fromCharCode,Or=Object.assign;function Mr(t,e){return Y(t,0)^45?(((e<<2^Y(t,0))<<2^Y(t,1))<<2^Y(t,2))<<2^Y(t,3):0}function Tn(t){return t.trim()}function Tr(t,e){return(t=e.exec(t))?t[0]:t}function A(t,e,n){return t.replace(e,n)}function Pe(t,e){return t.indexOf(e)}function Y(t,e){return t.charCodeAt(e)|0}function Rt(t,e,n){return t.slice(e,n)}function at(t){return t.length}function Xe(t){return t.length}function Ht(t,e){return e.push(t),t}function Lr(t,e){return t.map(e).join("")}var re=1,$t=1,Ln=0,q=0,V=0,It="";function se(t,e,n,r,s,o,a){return{value:t,root:e,parent:n,type:r,props:s,children:o,line:re,column:$t,length:a,return:""}}function Tt(t,e){return Or(se("",null,null,"",null,null,0),t,{length:-t.length},e)}function Pr(){return V}function Rr(){return V=q>0?Y(It,--q):0,$t--,V===10&&($t=1,re--),V}function K(){return V=q<Ln?Y(It,q++):0,$t++,V===10&&($t=1,re++),V}function lt(){return Y(It,q)}function Wt(){return q}function Xt(t,e){return Rt(It,t,e)}function zt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pn(t){return re=$t=1,Ln=at(It=t),q=0,[]}function Rn(t){return It="",t}function Qt(t){return Tn(Xt(q-1,Re(t===91?t+2:t===40?t+1:t)))}function zr(t){for(;(V=lt())&&V<33;)K();return zt(t)>2||zt(V)>3?"":" "}function Fr(t,e){for(;--e&&K()&&!(V<48||V>102||V>57&&V<65||V>70&&V<97););return Xt(t,Wt()+(e<6&&lt()==32&&K()==32))}function Re(t){for(;K();)switch(V){case t:return q;case 34:case 39:t!==34&&t!==39&&Re(V);break;case 40:t===41&&Re(t);break;case 92:K();break}return q}function Dr(t,e){for(;K()&&t+V!==57;)if(t+V===84&&lt()===47)break;return"/*"+Xt(e,q-1)+"*"+ne(t===47?t:K())}function Vr(t){for(;!zt(lt());)K();return Xt(t,q)}function Br(t){return Rn(Zt("",null,null,null,[""],t=Pn(t),0,[0],t))}function Zt(t,e,n,r,s,o,a,l,c){for(var f=0,h=0,d=a,y=0,v=0,m=0,u=1,g=1,p=1,x=0,w="",C=s,$=o,E=r,S=w;g;)switch(m=x,x=K()){case 40:if(m!=108&&Y(S,d-1)==58){Pe(S+=A(Qt(x),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:S+=Qt(x);break;case 9:case 10:case 13:case 32:S+=zr(m);break;case 92:S+=Fr(Wt()-1,7);continue;case 47:switch(lt()){case 42:case 47:Ht(_r(Dr(K(),Wt()),e,n),c);break;default:S+="/"}break;case 123*u:l[f++]=at(S)*p;case 125*u:case 59:case 0:switch(x){case 0:case 125:g=0;case 59+h:p==-1&&(S=A(S,/\f/g,"")),v>0&&at(S)-d&&Ht(v>32?yn(S+";",r,n,d-1):yn(A(S," ","")+";",r,n,d-2),c);break;case 59:S+=";";default:if(Ht(E=xn(S,e,n,f,h,s,l,w,C=[],$=[],d),o),x===123)if(h===0)Zt(S,e,E,E,C,o,d,l,$);else switch(y===99&&Y(S,3)===110?100:y){case 100:case 108:case 109:case 115:Zt(t,E,E,r&&Ht(xn(t,E,E,0,0,s,l,w,s,C=[],d),$),s,$,d,l,r?C:$);break;default:Zt(S,E,E,E,[""],$,0,l,$)}}f=h=v=0,u=p=1,w=S="",d=a;break;case 58:d=1+at(S),v=m;default:if(u<1){if(x==123)--u;else if(x==125&&u++==0&&Rr()==125)continue}switch(S+=ne(x),x*u){case 38:p=h>0?1:(S+="\f",-1);break;case 44:l[f++]=(at(S)-1)*p,p=1;break;case 64:lt()===45&&(S+=Qt(K())),y=lt(),h=d=at(w=S+=Vr(Wt())),x++;break;case 45:m===45&&at(S)==2&&(u=0)}}return o}function xn(t,e,n,r,s,o,a,l,c,f,h){for(var d=s-1,y=s===0?o:[""],v=Xe(y),m=0,u=0,g=0;m<r;++m)for(var p=0,x=Rt(t,d+1,d=Ar(u=a[m])),w=t;p<v;++p)(w=Tn(u>0?y[p]+" "+x:A(x,/&\f/g,y[p])))&&(c[g++]=w);return se(t,e,n,s===0?_e:l,c,f,h)}function _r(t,e,n){return se(t,e,n,On,ne(Pr()),Rt(t,2,-2),0)}function yn(t,e,n,r){return se(t,e,n,Ye,Rt(t,0,r),Rt(t,r+1,-1),r)}function Et(t,e){for(var n="",r=Xe(t),s=0;s<r;s++)n+=e(t[s],s,t,e)||"";return n}function Yr(t,e,n,r){switch(t.type){case kr:if(t.children.length)break;case Ir:case Ye:return t.return=t.return||t.value;case On:return"";case Mn:return t.return=t.value+"{"+Et(t.children,r)+"}";case _e:t.value=t.props.join(",")}return at(n=Et(t.children,r))?t.return=t.value+"{"+n+"}":""}function Xr(t){var e=Xe(t);return function(n,r,s,o){for(var a="",l=0;l<e;l++)a+=t[l](n,r,s,o)||"";return a}}function Gr(t){return function(e){e.root||(e=e.return)&&t(e)}}function Ur(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var Hr=function(e,n,r){for(var s=0,o=0;s=o,o=lt(),s===38&&o===12&&(n[r]=1),!zt(o);)K();return Xt(e,q)},qr=function(e,n){var r=-1,s=44;do switch(zt(s)){case 0:s===38&&lt()===12&&(n[r]=1),e[r]+=Hr(q-1,n,r);break;case 2:e[r]+=Qt(s);break;case 4:if(s===44){e[++r]=lt()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=ne(s)}while(s=K());return e},Jr=function(e,n){return Rn(qr(Pn(e),n))},gn=new WeakMap,Kr=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,s=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!gn.get(r))&&!s){gn.set(e,!0);for(var o=[],a=Jr(n,o),l=r.props,c=0,f=0;c<a.length;c++)for(var h=0;h<l.length;h++,f++)e.props[f]=o[c]?a[c].replace(/&\f/g,l[h]):l[h]+" "+a[c]}}},Wr=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function zn(t,e){switch(Mr(t,e)){case 5103:return k+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return k+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return k+t+te+t+X+t+t;case 6828:case 4268:return k+t+X+t+t;case 6165:return k+t+X+"flex-"+t+t;case 5187:return k+t+A(t,/(\w+).+(:[^]+)/,k+"box-$1$2"+X+"flex-$1$2")+t;case 5443:return k+t+X+"flex-item-"+A(t,/flex-|-self/,"")+t;case 4675:return k+t+X+"flex-line-pack"+A(t,/align-content|flex-|-self/,"")+t;case 5548:return k+t+X+A(t,"shrink","negative")+t;case 5292:return k+t+X+A(t,"basis","preferred-size")+t;case 6060:return k+"box-"+A(t,"-grow","")+k+t+X+A(t,"grow","positive")+t;case 4554:return k+A(t,/([^-])(transform)/g,"$1"+k+"$2")+t;case 6187:return A(A(A(t,/(zoom-|grab)/,k+"$1"),/(image-set)/,k+"$1"),t,"")+t;case 5495:case 3959:return A(t,/(image-set\([^]*)/,k+"$1$`$1");case 4968:return A(A(t,/(.+:)(flex-)?(.*)/,k+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+k+t+t;case 4095:case 3583:case 4068:case 2532:return A(t,/(.+)-inline(.+)/,k+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(at(t)-1-e>6)switch(Y(t,e+1)){case 109:if(Y(t,e+4)!==45)break;case 102:return A(t,/(.+:)(.+)-([^]+)/,"$1"+k+"$2-$3$1"+te+(Y(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Pe(t,"stretch")?zn(A(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Y(t,e+1)!==115)break;case 6444:switch(Y(t,at(t)-3-(~Pe(t,"!important")&&10))){case 107:return A(t,":",":"+k)+t;case 101:return A(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+k+(Y(t,14)===45?"inline-":"")+"box$3$1"+k+"$2$3$1"+X+"$2box$3")+t}break;case 5936:switch(Y(t,e+11)){case 114:return k+t+X+A(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return k+t+X+A(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return k+t+X+A(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return k+t+X+t+t}return t}var Qr=function(e,n,r,s){if(e.length>-1&&!e.return)switch(e.type){case Ye:e.return=zn(e.value,e.length);break;case Mn:return Et([Tt(e,{value:A(e.value,"@","@"+k)})],s);case _e:if(e.length)return Lr(e.props,function(o){switch(Tr(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Et([Tt(e,{props:[A(o,/:(read-\w+)/,":"+te+"$1")]})],s);case"::placeholder":return Et([Tt(e,{props:[A(o,/:(plac\w+)/,":"+k+"input-$1")]}),Tt(e,{props:[A(o,/:(plac\w+)/,":"+te+"$1")]}),Tt(e,{props:[A(o,/:(plac\w+)/,X+"input-$1")]})],s)}return""})}},Zr=[Qr],ts=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(u){var g=u.getAttribute("data-emotion");g.indexOf(" ")!==-1&&(document.head.appendChild(u),u.setAttribute("data-s",""))})}var s=e.stylisPlugins||Zr,o={},a,l=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(u){for(var g=u.getAttribute("data-emotion").split(" "),p=1;p<g.length;p++)o[g[p]]=!0;l.push(u)});var c,f=[Kr,Wr];{var h,d=[Yr,Gr(function(u){h.insert(u)})],y=Xr(f.concat(s,d)),v=function(g){return Et(Br(g),y)};c=function(g,p,x,w){h=x,v(g?g+"{"+p.styles+"}":p.styles),w&&(m.inserted[p.name]=!0)}}var m={key:n,sheet:new $r({key:n,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:c};return m.sheet.hydrate(l),m},Fn={exports:{}},O={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=typeof Symbol=="function"&&Symbol.for,Ge=_?Symbol.for("react.element"):60103,Ue=_?Symbol.for("react.portal"):60106,oe=_?Symbol.for("react.fragment"):60107,ae=_?Symbol.for("react.strict_mode"):60108,ie=_?Symbol.for("react.profiler"):60114,ce=_?Symbol.for("react.provider"):60109,le=_?Symbol.for("react.context"):60110,He=_?Symbol.for("react.async_mode"):60111,fe=_?Symbol.for("react.concurrent_mode"):60111,ue=_?Symbol.for("react.forward_ref"):60112,de=_?Symbol.for("react.suspense"):60113,es=_?Symbol.for("react.suspense_list"):60120,me=_?Symbol.for("react.memo"):60115,pe=_?Symbol.for("react.lazy"):60116,ns=_?Symbol.for("react.block"):60121,rs=_?Symbol.for("react.fundamental"):60117,ss=_?Symbol.for("react.responder"):60118,os=_?Symbol.for("react.scope"):60119;function W(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ge:switch(t=t.type,t){case He:case fe:case oe:case ie:case ae:case de:return t;default:switch(t=t&&t.$$typeof,t){case le:case ue:case pe:case me:case ce:return t;default:return e}}case Ue:return e}}}function Dn(t){return W(t)===fe}O.AsyncMode=He;O.ConcurrentMode=fe;O.ContextConsumer=le;O.ContextProvider=ce;O.Element=Ge;O.ForwardRef=ue;O.Fragment=oe;O.Lazy=pe;O.Memo=me;O.Portal=Ue;O.Profiler=ie;O.StrictMode=ae;O.Suspense=de;O.isAsyncMode=function(t){return Dn(t)||W(t)===He};O.isConcurrentMode=Dn;O.isContextConsumer=function(t){return W(t)===le};O.isContextProvider=function(t){return W(t)===ce};O.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ge};O.isForwardRef=function(t){return W(t)===ue};O.isFragment=function(t){return W(t)===oe};O.isLazy=function(t){return W(t)===pe};O.isMemo=function(t){return W(t)===me};O.isPortal=function(t){return W(t)===Ue};O.isProfiler=function(t){return W(t)===ie};O.isStrictMode=function(t){return W(t)===ae};O.isSuspense=function(t){return W(t)===de};O.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===oe||t===fe||t===ie||t===ae||t===de||t===es||typeof t=="object"&&t!==null&&(t.$$typeof===pe||t.$$typeof===me||t.$$typeof===ce||t.$$typeof===le||t.$$typeof===ue||t.$$typeof===rs||t.$$typeof===ss||t.$$typeof===os||t.$$typeof===ns)};O.typeOf=W;Fn.exports=O;var as=Fn.exports,Vn=as,is={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cs={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bn={};Bn[Vn.ForwardRef]=is;Bn[Vn.Memo]=cs;var ls=!0;function _n(t,e,n){var r="";return n.split(" ").forEach(function(s){t[s]!==void 0?e.push(t[s]+";"):s&&(r+=s+" ")}),r}var qe=function(e,n,r){var s=e.key+"-"+n.name;(r===!1||ls===!1)&&e.registered[s]===void 0&&(e.registered[s]=n.styles)},Yn=function(e,n,r){qe(e,n,r);var s=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+s:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function fs(t){for(var e=0,n,r=0,s=t.length;s>=4;++r,s-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(s){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var us={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ds=/[A-Z]|^ms/g,ms=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Xn=function(e){return e.charCodeAt(1)===45},bn=function(e){return e!=null&&typeof e!="boolean"},Te=Ur(function(t){return Xn(t)?t:t.replace(ds,"-$&").toLowerCase()}),vn=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(ms,function(r,s,o){return it={name:s,styles:o,next:it},s})}return us[e]!==1&&!Xn(e)&&typeof n=="number"&&n!==0?n+"px":n};function Ft(t,e,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var s=n;if(s.anim===1)return it={name:s.name,styles:s.styles,next:it},s.name;var o=n;if(o.styles!==void 0){var a=o.next;if(a!==void 0)for(;a!==void 0;)it={name:a.name,styles:a.styles,next:it},a=a.next;var l=o.styles+";";return l}return ps(t,e,n)}case"function":{if(t!==void 0){var c=it,f=n(t);return it=c,Ft(t,e,f)}break}}var h=n;if(e==null)return h;var d=e[h];return d!==void 0?d:h}function ps(t,e,n){var r="";if(Array.isArray(n))for(var s=0;s<n.length;s++)r+=Ft(t,e,n[s])+";";else for(var o in n){var a=n[o];if(typeof a!="object"){var l=a;e!=null&&e[l]!==void 0?r+=o+"{"+e[l]+"}":bn(l)&&(r+=Te(o)+":"+vn(o,l)+";")}else if(Array.isArray(a)&&typeof a[0]=="string"&&(e==null||e[a[0]]===void 0))for(var c=0;c<a.length;c++)bn(a[c])&&(r+=Te(o)+":"+vn(o,a[c])+";");else{var f=Ft(t,e,a);switch(o){case"animation":case"animationName":{r+=Te(o)+":"+f+";";break}default:r+=o+"{"+f+"}"}}}return r}var wn=/label:\s*([^\s;{]+)\s*(;|$)/g,it;function Je(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,s="";it=void 0;var o=t[0];if(o==null||o.raw===void 0)r=!1,s+=Ft(n,e,o);else{var a=o;s+=a[0]}for(var l=1;l<t.length;l++)if(s+=Ft(n,e,t[l]),r){var c=o;s+=c[l]}wn.lastIndex=0;for(var f="",h;(h=wn.exec(s))!==null;)f+="-"+h[1];var d=fs(s)+f;return{name:d,styles:s,next:it}}var hs=function(e){return e()},xs=hn.useInsertionEffect?hn.useInsertionEffect:!1,Gn=xs||hs,Un=N.createContext(typeof HTMLElement<"u"?ts({key:"css"}):null);Un.Provider;var Hn=function(e){return N.forwardRef(function(n,r){var s=N.useContext(Un);return e(n,s,r)})},qn=N.createContext({}),he={}.hasOwnProperty,ze="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Jn=function(e,n){var r={};for(var s in n)he.call(n,s)&&(r[s]=n[s]);return r[ze]=e,r},ys=function(e){var n=e.cache,r=e.serialized,s=e.isStringTag;return qe(n,r,s),Gn(function(){return Yn(n,r,s)}),null},gs=Hn(function(t,e,n){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var s=t[ze],o=[r],a="";typeof t.className=="string"?a=_n(e.registered,o,t.className):t.className!=null&&(a=t.className+" ");var l=Je(o,void 0,N.useContext(qn));a+=e.key+"-"+l.name;var c={};for(var f in t)he.call(t,f)&&f!=="css"&&f!==ze&&(c[f]=t[f]);return c.className=a,n&&(c.ref=n),N.createElement(N.Fragment,null,N.createElement(ys,{cache:e,serialized:l,isStringTag:typeof s=="string"}),N.createElement(s,c))}),Kn=gs,bs=i.Fragment,B=function(e,n,r){return he.call(n,"css")?i.jsx(Kn,Jn(e,n),r):i.jsx(e,n,r)},Sn=function(e,n){var r=arguments;if(n==null||!he.call(n,"css"))return N.createElement.apply(void 0,r);var s=r.length,o=new Array(s);o[0]=Kn,o[1]=Jn(e,n);for(var a=2;a<s;a++)o[a]=r[a];return N.createElement.apply(null,o)};(function(t){var e;e||(e=t.JSX||(t.JSX={}))})(Sn||(Sn={}));function Wn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Je(e)}function b(){var t=Wn.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var vs=function t(e){for(var n=e.length,r=0,s="";r<n;r++){var o=e[r];if(o!=null){var a=void 0;switch(typeof o){case"boolean":break;case"object":{if(Array.isArray(o))a=t(o);else{a="";for(var l in o)o[l]&&l&&(a&&(a+=" "),a+=l)}break}default:a=o}a&&(s&&(s+=" "),s+=a)}}return s};function ws(t,e,n){var r=[],s=_n(t,r,n);return r.length<2?n:s+e(r)}var Ss=function(e){var n=e.cache,r=e.serializedArr;return Gn(function(){for(var s=0;s<r.length;s++)Yn(n,r[s],!1)}),null},Le=Hn(function(t,e){var n=[],r=function(){for(var c=arguments.length,f=new Array(c),h=0;h<c;h++)f[h]=arguments[h];var d=Je(f,e.registered);return n.push(d),qe(e,d,!1),e.key+"-"+d.name},s=function(){for(var c=arguments.length,f=new Array(c),h=0;h<c;h++)f[h]=arguments[h];return ws(e.registered,r,vs(f))},o={css:r,cx:s,theme:N.useContext(qn)},a=t.children(o);return N.createElement(N.Fragment,null,N.createElement(Ss,{cache:e,serializedArr:n}),a)}),js=Object.defineProperty,Ns=(t,e,n)=>e in t?js(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,qt=(t,e,n)=>Ns(t,typeof e!="symbol"?e+"":e,n),Fe=new Map,Jt=new WeakMap,jn=0,Cs=void 0;function Es(t){return t?(Jt.has(t)||(jn+=1,Jt.set(t,jn.toString())),Jt.get(t)):"0"}function $s(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?Es(t.root):t[e]}`).toString()}function Is(t){const e=$s(t);let n=Fe.get(e);if(!n){const r=new Map;let s;const o=new IntersectionObserver(a=>{a.forEach(l=>{var c;const f=l.isIntersecting&&s.some(h=>l.intersectionRatio>=h);t.trackVisibility&&typeof l.isVisible>"u"&&(l.isVisible=f),(c=r.get(l.target))==null||c.forEach(h=>{h(f,l)})})},t);s=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:o,elements:r},Fe.set(e,n)}return n}function Qn(t,e,n={},r=Cs){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const c=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:c,intersectionRect:c,rootBounds:c}),()=>{}}const{id:s,observer:o,elements:a}=Is(n),l=a.get(t)||[];return a.has(t)||a.set(t,l),l.push(e),o.observe(t),function(){l.splice(l.indexOf(e),1),l.length===0&&(a.delete(t),o.unobserve(t)),a.size===0&&(o.disconnect(),Fe.delete(s))}}function ks(t){return typeof t.children!="function"}var Nn=class extends N.Component{constructor(t){super(t),qt(this,"node",null),qt(this,"_unobserveCb",null),qt(this,"handleNode",e=>{this.node&&(this.unobserve(),!e&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()}),qt(this,"handleChange",(e,n)=>{e&&this.props.triggerOnce&&this.unobserve(),ks(this.props)||this.setState({inView:e,entry:n}),this.props.onChange&&this.props.onChange(e,n)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:e,rootMargin:n,trackVisibility:r,delay:s,fallbackInView:o}=this.props;this._unobserveCb=Qn(this.node,this.handleChange,{threshold:t,root:e,rootMargin:n,trackVisibility:r,delay:s},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:v,entry:m}=this.state;return t({inView:v,entry:m,ref:this.handleNode})}const{as:e,triggerOnce:n,threshold:r,root:s,rootMargin:o,onChange:a,skip:l,trackVisibility:c,delay:f,initialInView:h,fallbackInView:d,...y}=this.props;return N.createElement(e||"div",{ref:this.handleNode,...y},t)}};function Zn({threshold:t,delay:e,trackVisibility:n,rootMargin:r,root:s,triggerOnce:o,skip:a,initialInView:l,fallbackInView:c,onChange:f}={}){var h;const[d,y]=N.useState(null),v=N.useRef(f),[m,u]=N.useState({inView:!!l,entry:void 0});v.current=f,N.useEffect(()=>{if(a||!d)return;let w;return w=Qn(d,(C,$)=>{u({inView:C,entry:$}),v.current&&v.current(C,$),$.isIntersecting&&o&&w&&(w(),w=void 0)},{root:s,rootMargin:r,threshold:t,trackVisibility:n,delay:e},c),()=>{w&&w()}},[Array.isArray(t)?t.toString():t,d,s,r,o,a,n,c,e]);const g=(h=m.entry)==null?void 0:h.target,p=N.useRef(void 0);!d&&g&&!o&&!a&&p.current!==g&&(p.current=g,u({inView:!!l,entry:void 0}));const x=[y,m.inView,m.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}var tr={exports:{}},M={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke=Symbol.for("react.element"),We=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),ye=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),be=Symbol.for("react.provider"),ve=Symbol.for("react.context"),As=Symbol.for("react.server_context"),we=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),Os=Symbol.for("react.offscreen"),er;er=Symbol.for("react.module.reference");function Z(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ke:switch(t=t.type,t){case xe:case ge:case ye:case Se:case je:return t;default:switch(t=t&&t.$$typeof,t){case As:case ve:case we:case Ce:case Ne:case be:return t;default:return e}}case We:return e}}}M.ContextConsumer=ve;M.ContextProvider=be;M.Element=Ke;M.ForwardRef=we;M.Fragment=xe;M.Lazy=Ce;M.Memo=Ne;M.Portal=We;M.Profiler=ge;M.StrictMode=ye;M.Suspense=Se;M.SuspenseList=je;M.isAsyncMode=function(){return!1};M.isConcurrentMode=function(){return!1};M.isContextConsumer=function(t){return Z(t)===ve};M.isContextProvider=function(t){return Z(t)===be};M.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ke};M.isForwardRef=function(t){return Z(t)===we};M.isFragment=function(t){return Z(t)===xe};M.isLazy=function(t){return Z(t)===Ce};M.isMemo=function(t){return Z(t)===Ne};M.isPortal=function(t){return Z(t)===We};M.isProfiler=function(t){return Z(t)===ge};M.isStrictMode=function(t){return Z(t)===ye};M.isSuspense=function(t){return Z(t)===Se};M.isSuspenseList=function(t){return Z(t)===je};M.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===xe||t===ge||t===ye||t===Se||t===je||t===Os||typeof t=="object"&&t!==null&&(t.$$typeof===Ce||t.$$typeof===Ne||t.$$typeof===be||t.$$typeof===ve||t.$$typeof===we||t.$$typeof===er||t.getModuleId!==void 0)};M.typeOf=Z;tr.exports=M;var Ms=tr.exports;b`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;b`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;b`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;b`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;b`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;b`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;b`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;b`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;b`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;b`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;b`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;b`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;b`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const Ts=b`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Ls=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ps=b`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Rs=b`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,zs=b`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qe=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Fs=b`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ds=b`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Vs=b`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Bs=b`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,_s=b`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ys=b`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Xs=b`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Gs({duration:t=1e3,delay:e=0,timingFunction:n="ease",keyframes:r=Qe,iterationCount:s=1}){return Wn`
    animation-duration: ${t}ms;
    animation-timing-function: ${n};
    animation-delay: ${e}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${s};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function Us(t){return t==null}function Hs(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function nr(t,e){return n=>n?t():e()}function Dt(t){return nr(t,()=>null)}function De(t){return Dt(()=>({opacity:0}))(t)}const Ze=t=>{const{cascade:e=!1,damping:n=.5,delay:r=0,duration:s=1e3,fraction:o=0,keyframes:a=Qe,triggerOnce:l=!1,className:c,style:f,childClassName:h,childStyle:d,children:y,onVisibilityChange:v}=t,m=N.useMemo(()=>Gs({keyframes:a,duration:s}),[s,a]);return Us(y)?null:Hs(y)?B(Js,{...t,animationStyles:m,children:String(y)}):Ms.isFragment(y)?B(rr,{...t,animationStyles:m}):B(bs,{children:N.Children.map(y,(u,g)=>{if(!N.isValidElement(u))return null;const p=r+(e?g*s*n:0);switch(u.type){case"ol":case"ul":return B(Le,{children:({cx:x})=>B(u.type,{...u.props,className:x(c,u.props.className),style:Object.assign({},f,u.props.style),children:B(Ze,{...t,children:u.props.children})})});case"li":return B(Nn,{threshold:o,triggerOnce:l,onChange:v,children:({inView:x,ref:w})=>B(Le,{children:({cx:C})=>B(u.type,{...u.props,ref:w,className:C(h,u.props.className),css:Dt(()=>m)(x),style:Object.assign({},d,u.props.style,De(!x),{animationDelay:p+"ms"})})})});default:return B(Nn,{threshold:o,triggerOnce:l,onChange:v,children:({inView:x,ref:w})=>B("div",{ref:w,className:c,css:Dt(()=>m)(x),style:Object.assign({},f,De(!x),{animationDelay:p+"ms"}),children:B(Le,{children:({cx:C})=>B(u.type,{...u.props,className:C(h,u.props.className),style:Object.assign({},d,u.props.style)})})})})}})})},qs={display:"inline-block",whiteSpace:"pre"},Js=t=>{const{animationStyles:e,cascade:n=!1,damping:r=.5,delay:s=0,duration:o=1e3,fraction:a=0,triggerOnce:l=!1,className:c,style:f,children:h,onVisibilityChange:d}=t,{ref:y,inView:v}=Zn({triggerOnce:l,threshold:a,onChange:d});return nr(()=>B("div",{ref:y,className:c,style:Object.assign({},f,qs),children:h.split("").map((m,u)=>B("span",{css:Dt(()=>e)(v),style:{animationDelay:s+u*o*r+"ms"},children:m},u))}),()=>B(rr,{...t,children:h}))(n)},rr=t=>{const{animationStyles:e,fraction:n=0,triggerOnce:r=!1,className:s,style:o,children:a,onVisibilityChange:l}=t,{ref:c,inView:f}=Zn({triggerOnce:r,threshold:n,onChange:l});return B("div",{ref:c,className:s,css:Dt(()=>e)(f),style:Object.assign({},o,De(!f)),children:a})};b`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;b`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;b`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;b`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;b`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;b`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;b`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;b`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;b`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;b`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const Ks=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Ws=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Qs=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Zs=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,to=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,eo=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,no=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,ro=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,so=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,oo=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,ao=b`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,io=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,co=b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function lo(t,e,n){switch(n){case"bottom-left":return e?Ws:Ls;case"bottom-right":return e?Qs:Ps;case"down":return t?e?to:zs:e?Zs:Rs;case"left":return t?e?no:Fs:e?eo:Qe;case"right":return t?e?so:Vs:e?ro:Ds;case"top-left":return e?oo:Bs;case"top-right":return e?ao:_s;case"up":return t?e?co:Xs:e?io:Ys;default:return e?Ks:Ts}}const ct=t=>{const{big:e=!1,direction:n,reverse:r=!1,...s}=t,o=N.useMemo(()=>lo(e,r,n),[e,n,r]);return B(Ze,{keyframes:o,...s})};b`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;b`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;b`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;b`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;b`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;b`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;b`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;b`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;b`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const fo=b`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,uo=b`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,mo=b`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,po=b`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ho=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,xo=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,yo=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,go=b`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function bo(t,e){switch(e){case"down":return t?ho:fo;case"right":return t?yo:mo;case"up":return t?go:po;case"left":default:return t?xo:uo}}const vo=t=>{const{direction:e,reverse:n=!1,...r}=t,s=N.useMemo(()=>bo(n,e),[e,n]);return B(Ze,{keyframes:s,...r})};b`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;b`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;b`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;b`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;b`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;b`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;b`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const wo=({data:t})=>i.jsx("div",{className:"space-y-9 md:px-60 pt-20 px-5 pb-24 bg-yellow-100",children:i.jsxs(vo,{bottom:!0,children:[i.jsx("p",{className:"text-4xl text-center font-primary",children:"About  Us"}),i.jsx("p",{className:"text-center whitespace-pre-line",children:t.about_us}),i.jsxs("div",{className:"flex justify-center gap-1 md:gap-5",children:[i.jsx(gt,{href:"/constitution.pdf",title:"Constitution",additionalClass:" font-primary md:text-2xl px-8 py-1"}),i.jsx(gt,{href:"/strategic-plan.pdf",title:"Strategic Plan",additionalClass:" font-primary md:text-2xl px-8 py-1"})]})]})}),So=({data:t})=>(console.log({data:t}),i.jsxs("div",{className:"h-[40em] md:h-[50vh] relative",children:[i.jsx("img",{src:t.home_image,alt:"",className:"w-full h-full object-cover absolute top-0 left-0 opacity-50"}),i.jsxs("div",{className:"flex flex-col h-full space-y-10 px-5 md:text-left text-center justify-center md:px-24 bg-black/80 dark:text-white absolute top-0 left-0 w-full h-full",children:[i.jsxs(ct,{children:[i.jsx("p",{className:"font-primary md:text-6xl text-3xl text-pry",children:t.title}),i.jsx("p",{className:"md:text-2xl font-nunito text-white lg:w-3/5",children:t.subtext})]}),i.jsx(ct,{children:i.jsx("div",{className:"flex flex-col md:flex-row gap-5 z-20s",children:i.jsx(gt,{href:"/register",title:"New Member Registration",additionalClass:"bg-pry md:py-3 md:text-lg font-nunito py-3 mx-5 md:mx-0"})})})]})]})),jo=()=>i.jsx("div",{className:"bg-white py-32 text-center space-y-10",children:i.jsxs(ct,{children:[i.jsx("p",{className:"font-primary text-4xl text-center",children:"Any Questions?"}),i.jsx("p",{className:"font-montserrat w-1/2 mx-auto",children:"If you have any questions or suggestions kindly click the button bellow and contact the administrator"}),i.jsx(gt,{href:"/contact",title:"Contact Us",additionalClass:"px-8 py-3 shadow-lg text-black text-2xl font-primary"})]})});function No(t){return Object.prototype.toString.call(t)==="[object Object]"}function Cn(t){return No(t)||Array.isArray(t)}function Co(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function tn(t,e){const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;const s=JSON.stringify(Object.keys(t.breakpoints||{})),o=JSON.stringify(Object.keys(e.breakpoints||{}));return s!==o?!1:n.every(a=>{const l=t[a],c=e[a];return typeof l=="function"?`${l}`==`${c}`:!Cn(l)||!Cn(c)?l===c:tn(l,c)})}function En(t){return t.concat().sort((e,n)=>e.name>n.name?1:-1).map(e=>e.options)}function Eo(t,e){if(t.length!==e.length)return!1;const n=En(t),r=En(e);return n.every((s,o)=>{const a=r[o];return tn(s,a)})}function en(t){return typeof t=="number"}function Ve(t){return typeof t=="string"}function Ee(t){return typeof t=="boolean"}function $n(t){return Object.prototype.toString.call(t)==="[object Object]"}function z(t){return Math.abs(t)}function nn(t){return Math.sign(t)}function Pt(t,e){return z(t-e)}function $o(t,e){if(t===0||e===0||z(t)<=z(e))return 0;const n=Pt(z(t),z(e));return z(n/t)}function Io(t){return Math.round(t*100)/100}function Vt(t){return Bt(t).map(Number)}function tt(t){return t[Gt(t)]}function Gt(t){return Math.max(0,t.length-1)}function rn(t,e){return e===Gt(t)}function In(t,e=0){return Array.from(Array(t),(n,r)=>e+r)}function Bt(t){return Object.keys(t)}function sr(t,e){return[t,e].reduce((n,r)=>(Bt(r).forEach(s=>{const o=n[s],a=r[s],l=$n(o)&&$n(a);n[s]=l?sr(o,a):a}),n),{})}function Be(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function ko(t,e){const n={start:r,center:s,end:o};function r(){return 0}function s(c){return o(c)/2}function o(c){return e-c}function a(c,f){return Ve(t)?n[t](c):t(e,c,f)}return{measure:a}}function _t(){let t=[];function e(s,o,a,l={passive:!0}){let c;if("addEventListener"in s)s.addEventListener(o,a,l),c=()=>s.removeEventListener(o,a,l);else{const f=s;f.addListener(a),c=()=>f.removeListener(a)}return t.push(c),r}function n(){t=t.filter(s=>s())}const r={add:e,clear:n};return r}function Ao(t,e,n,r){const s=_t(),o=1e3/60;let a=null,l=0,c=0;function f(){s.add(t,"visibilitychange",()=>{t.hidden&&m()})}function h(){v(),s.clear()}function d(g){if(!c)return;a||(a=g,n(),n());const p=g-a;for(a=g,l+=p;l>=o;)n(),l-=o;const x=l/o;r(x),c&&(c=e.requestAnimationFrame(d))}function y(){c||(c=e.requestAnimationFrame(d))}function v(){e.cancelAnimationFrame(c),a=null,l=0,c=0}function m(){a=null,l=0}return{init:f,destroy:h,start:y,stop:v,update:n,render:r}}function Oo(t,e){const n=e==="rtl",r=t==="y",s=r?"y":"x",o=r?"x":"y",a=!r&&n?-1:1,l=h(),c=d();function f(m){const{height:u,width:g}=m;return r?u:g}function h(){return r?"top":n?"right":"left"}function d(){return r?"bottom":n?"left":"right"}function y(m){return m*a}return{scroll:s,cross:o,startEdge:l,endEdge:c,measureSize:f,direction:y}}function St(t=0,e=0){const n=z(t-e);function r(f){return f<t}function s(f){return f>e}function o(f){return r(f)||s(f)}function a(f){return o(f)?r(f)?t:e:f}function l(f){return n?f-n*Math.ceil((f-e)/n):f}return{length:n,max:e,min:t,constrain:a,reachedAny:o,reachedMax:s,reachedMin:r,removeOffset:l}}function or(t,e,n){const{constrain:r}=St(0,t),s=t+1;let o=a(e);function a(y){return n?z((s+y)%s):r(y)}function l(){return o}function c(y){return o=a(y),d}function f(y){return h().set(l()+y)}function h(){return or(t,l(),n)}const d={get:l,set:c,add:f,clone:h};return d}function Mo(t,e,n,r,s,o,a,l,c,f,h,d,y,v,m,u,g,p,x){const{cross:w,direction:C}=t,$=["INPUT","SELECT","TEXTAREA"],E={passive:!1},S=_t(),I=_t(),T=St(50,225).constrain(v.measure(20)),F={mouse:300,touch:400},L={mouse:500,touch:600},H=m?43:25;let et=!1,nt=0,rt=0,bt=!1,ht=!1,ft=!1,ut=!1;function kt(j){if(!x)return;function P(U){(Ee(x)||x(j,U))&&Ot(U)}const D=e;S.add(D,"dragstart",U=>U.preventDefault(),E).add(D,"touchmove",()=>{},E).add(D,"touchend",()=>{}).add(D,"touchstart",P).add(D,"mousedown",P).add(D,"touchcancel",G).add(D,"contextmenu",G).add(D,"click",mt,!0)}function st(){S.clear(),I.clear()}function jt(){const j=ut?n:e;I.add(j,"touchmove",J,E).add(j,"touchend",G).add(j,"mousemove",J,E).add(j,"mouseup",G)}function Nt(j){const P=j.nodeName||"";return $.includes(P)}function dt(){return(m?L:F)[ut?"mouse":"touch"]}function At(j,P){const D=d.add(nn(j)*-1),U=h.byDistance(j,!m).distance;return m||z(j)<T?U:g&&P?U*.5:h.byIndex(D.get(),0).distance}function Ot(j){const P=Be(j,r);ut=P,ft=m&&P&&!j.buttons&&et,et=Pt(s.get(),a.get())>=2,!(P&&j.button!==0)&&(Nt(j.target)||(bt=!0,o.pointerDown(j),f.useFriction(0).useDuration(0),s.set(a),jt(),nt=o.readPoint(j),rt=o.readPoint(j,w),y.emit("pointerDown")))}function J(j){if(!Be(j,r)&&j.touches.length>=2)return G(j);const D=o.readPoint(j),U=o.readPoint(j,w),ot=Pt(D,nt),pt=Pt(U,rt);if(!ht&&!ut&&(!j.cancelable||(ht=ot>pt,!ht)))return G(j);const vt=o.pointerMove(j);ot>u&&(ft=!0),f.useFriction(.3).useDuration(.75),l.start(),s.add(C(vt)),j.preventDefault()}function G(j){const D=h.byDistance(0,!1).index!==d.get(),U=o.pointerUp(j)*dt(),ot=At(C(U),D),pt=$o(U,ot),vt=H-10*pt,xt=p+pt/50;ht=!1,bt=!1,I.clear(),f.useDuration(vt).useFriction(xt),c.distance(ot,!m),ut=!1,y.emit("pointerUp")}function mt(j){ft&&(j.stopPropagation(),j.preventDefault(),ft=!1)}function Q(){return bt}return{init:kt,destroy:st,pointerDown:Q}}function To(t,e){let r,s;function o(d){return d.timeStamp}function a(d,y){const m=`client${(y||t.scroll)==="x"?"X":"Y"}`;return(Be(d,e)?d:d.touches[0])[m]}function l(d){return r=d,s=d,a(d)}function c(d){const y=a(d)-a(s),v=o(d)-o(r)>170;return s=d,v&&(r=d),y}function f(d){if(!r||!s)return 0;const y=a(s)-a(r),v=o(d)-o(r),m=o(d)-o(s)>170,u=y/v;return v&&!m&&z(u)>.1?u:0}return{pointerDown:l,pointerMove:c,pointerUp:f,readPoint:a}}function Lo(){function t(n){const{offsetTop:r,offsetLeft:s,offsetWidth:o,offsetHeight:a}=n;return{top:r,right:s+o,bottom:r+a,left:s,width:o,height:a}}return{measure:t}}function Po(t){function e(r){return t*(r/100)}return{measure:e}}function Ro(t,e,n,r,s,o,a){const l=[t].concat(r);let c,f,h=[],d=!1;function y(g){return s.measureSize(a.measure(g))}function v(g){if(!o)return;f=y(t),h=r.map(y);function p(x){for(const w of x){if(d)return;const C=w.target===t,$=r.indexOf(w.target),E=C?f:h[$],S=y(C?t:r[$]);if(z(S-E)>=.5){g.reInit(),e.emit("resize");break}}}c=new ResizeObserver(x=>{(Ee(o)||o(g,x))&&p(x)}),n.requestAnimationFrame(()=>{l.forEach(x=>c.observe(x))})}function m(){d=!0,c&&c.disconnect()}return{init:v,destroy:m}}function zo(t,e,n,r,s,o){let a=0,l=0,c=s,f=o,h=t.get(),d=0;function y(){const E=r.get()-t.get(),S=!c;let I=0;return S?(a=0,n.set(r),t.set(r),I=E):(n.set(t),a+=E/c,a*=f,h+=a,t.add(a),I=h-d),l=nn(I),d=h,$}function v(){const E=r.get()-e.get();return z(E)<.001}function m(){return c}function u(){return l}function g(){return a}function p(){return w(s)}function x(){return C(o)}function w(E){return c=E,$}function C(E){return f=E,$}const $={direction:u,duration:m,velocity:g,seek:y,settled:v,useBaseFriction:x,useBaseDuration:p,useFriction:C,useDuration:w};return $}function Fo(t,e,n,r,s){const o=s.measure(10),a=s.measure(50),l=St(.1,.99);let c=!1;function f(){return!(c||!t.reachedAny(n.get())||!t.reachedAny(e.get()))}function h(v){if(!f())return;const m=t.reachedMin(e.get())?"min":"max",u=z(t[m]-e.get()),g=n.get()-e.get(),p=l.constrain(u/a);n.subtract(g*p),!v&&z(g)<o&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())}function d(v){c=!v}return{shouldConstrain:f,constrain:h,toggleActive:d}}function Do(t,e,n,r,s){const o=St(-e+t,0),a=d(),l=h(),c=y();function f(m,u){return Pt(m,u)<=1}function h(){const m=a[0],u=tt(a),g=a.lastIndexOf(m),p=a.indexOf(u)+1;return St(g,p)}function d(){return n.map((m,u)=>{const{min:g,max:p}=o,x=o.constrain(m),w=!u,C=rn(n,u);return w?p:C||f(g,x)?g:f(p,x)?p:x}).map(m=>parseFloat(m.toFixed(3)))}function y(){if(e<=t+s)return[o.max];if(r==="keepSnaps")return a;const{min:m,max:u}=l;return a.slice(m,u)}return{snapsContained:c,scrollContainLimit:l}}function Vo(t,e,n){const r=e[0],s=n?r-t:tt(e);return{limit:St(s,r)}}function Bo(t,e,n,r){const o=e.min+.1,a=e.max+.1,{reachedMin:l,reachedMax:c}=St(o,a);function f(y){return y===1?c(n.get()):y===-1?l(n.get()):!1}function h(y){if(!f(y))return;const v=t*(y*-1);r.forEach(m=>m.add(v))}return{loop:h}}function _o(t){const{max:e,length:n}=t;function r(o){const a=o-e;return n?a/-n:0}return{get:r}}function Yo(t,e,n,r,s){const{startEdge:o,endEdge:a}=t,{groupSlides:l}=s,c=d().map(e.measure),f=y(),h=v();function d(){return l(r).map(u=>tt(u)[a]-u[0][o]).map(z)}function y(){return r.map(u=>n[o]-u[o]).map(u=>-z(u))}function v(){return l(f).map(u=>u[0]).map((u,g)=>u+c[g])}return{snaps:f,snapsAligned:h}}function Xo(t,e,n,r,s,o){const{groupSlides:a}=s,{min:l,max:c}=r,f=h();function h(){const y=a(o),v=!t||e==="keepSnaps";return n.length===1?[o]:v?y:y.slice(l,c).map((m,u,g)=>{const p=!u,x=rn(g,u);if(p){const w=tt(g[0])+1;return In(w)}if(x){const w=Gt(o)-tt(g)[0]+1;return In(w,tt(g)[0])}return m})}return{slideRegistry:f}}function Go(t,e,n,r,s){const{reachedAny:o,removeOffset:a,constrain:l}=r;function c(m){return m.concat().sort((u,g)=>z(u)-z(g))[0]}function f(m){const u=t?a(m):l(m),g=e.map((x,w)=>({diff:h(x-u,0),index:w})).sort((x,w)=>z(x.diff)-z(w.diff)),{index:p}=g[0];return{index:p,distance:u}}function h(m,u){const g=[m,m+n,m-n];if(!t)return m;if(!u)return c(g);const p=g.filter(x=>nn(x)===u);return p.length?c(p):tt(g)-n}function d(m,u){const g=e[m]-s.get(),p=h(g,u);return{index:m,distance:p}}function y(m,u){const g=s.get()+m,{index:p,distance:x}=f(g),w=!t&&o(g);if(!u||w)return{index:p,distance:m};const C=e[p]-x,$=m+h(C,0);return{index:p,distance:$}}return{byDistance:y,byIndex:d,shortcut:h}}function Uo(t,e,n,r,s,o,a){function l(d){const y=d.distance,v=d.index!==e.get();o.add(y),y&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),v&&(n.set(e.get()),e.set(d.index),a.emit("select"))}function c(d,y){const v=s.byDistance(d,y);l(v)}function f(d,y){const v=e.clone().set(d),m=s.byIndex(v.get(),y);l(m)}return{distance:c,index:f}}function Ho(t,e,n,r,s,o,a,l){const c={passive:!0,capture:!0};let f=0;function h(v){if(!l)return;function m(u){if(new Date().getTime()-f>10)return;a.emit("slideFocusStart"),t.scrollLeft=0;const x=n.findIndex(w=>w.includes(u));en(x)&&(s.useDuration(0),r.index(x,0),a.emit("slideFocus"))}o.add(document,"keydown",d,!1),e.forEach((u,g)=>{o.add(u,"focus",p=>{(Ee(l)||l(v,p))&&m(g)},c)})}function d(v){v.code==="Tab"&&(f=new Date().getTime())}return{init:h}}function Lt(t){let e=t;function n(){return e}function r(c){e=a(c)}function s(c){e+=a(c)}function o(c){e-=a(c)}function a(c){return en(c)?c:c.get()}return{get:n,set:r,add:s,subtract:o}}function ar(t,e){const n=t.scroll==="x"?a:l,r=e.style;let s=null,o=!1;function a(y){return`translate3d(${y}px,0px,0px)`}function l(y){return`translate3d(0px,${y}px,0px)`}function c(y){if(o)return;const v=Io(t.direction(y));v!==s&&(r.transform=n(v),s=v)}function f(y){o=!y}function h(){o||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:h,to:c,toggleActive:f}}function qo(t,e,n,r,s,o,a,l,c){const h=Vt(s),d=Vt(s).reverse(),y=p().concat(x());function v(S,I){return S.reduce((T,F)=>T-s[F],I)}function m(S,I){return S.reduce((T,F)=>v(T,I)>0?T.concat([F]):T,[])}function u(S){return o.map((I,T)=>({start:I-r[T]+.5+S,end:I+e-.5+S}))}function g(S,I,T){const F=u(I);return S.map(L=>{const H=T?0:-n,et=T?n:0,nt=T?"end":"start",rt=F[L][nt];return{index:L,loopPoint:rt,slideLocation:Lt(-1),translate:ar(t,c[L]),target:()=>l.get()>rt?H:et}})}function p(){const S=a[0],I=m(d,S);return g(I,n,!1)}function x(){const S=e-a[0]-1,I=m(h,S);return g(I,-n,!0)}function w(){return y.every(({index:S})=>{const I=h.filter(T=>T!==S);return v(I,e)<=.1})}function C(){y.forEach(S=>{const{target:I,translate:T,slideLocation:F}=S,L=I();L!==F.get()&&(T.to(L),F.set(L))})}function $(){y.forEach(S=>S.translate.clear())}return{canLoop:w,clear:$,loop:C,loopPoints:y}}function Jo(t,e,n){let r,s=!1;function o(c){if(!n)return;function f(h){for(const d of h)if(d.type==="childList"){c.reInit(),e.emit("slidesChanged");break}}r=new MutationObserver(h=>{s||(Ee(n)||n(c,h))&&f(h)}),r.observe(t,{childList:!0})}function a(){r&&r.disconnect(),s=!0}return{init:o,destroy:a}}function Ko(t,e,n,r){const s={};let o=null,a=null,l,c=!1;function f(){l=new IntersectionObserver(m=>{c||(m.forEach(u=>{const g=e.indexOf(u.target);s[g]=u}),o=null,a=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(m=>l.observe(m))}function h(){l&&l.disconnect(),c=!0}function d(m){return Bt(s).reduce((u,g)=>{const p=parseInt(g),{isIntersecting:x}=s[p];return(m&&x||!m&&!x)&&u.push(p),u},[])}function y(m=!0){if(m&&o)return o;if(!m&&a)return a;const u=d(m);return m&&(o=u),m||(a=u),u}return{init:f,destroy:h,get:y}}function Wo(t,e,n,r,s,o){const{measureSize:a,startEdge:l,endEdge:c}=t,f=n[0]&&s,h=m(),d=u(),y=n.map(a),v=g();function m(){if(!f)return 0;const x=n[0];return z(e[l]-x[l])}function u(){if(!f)return 0;const x=o.getComputedStyle(tt(r));return parseFloat(x.getPropertyValue(`margin-${c}`))}function g(){return n.map((x,w,C)=>{const $=!w,E=rn(C,w);return $?y[w]+h:E?y[w]+d:C[w+1][l]-x[l]}).map(z)}return{slideSizes:y,slideSizesWithGaps:v,startGap:h,endGap:d}}function Qo(t,e,n,r,s,o,a,l,c){const{startEdge:f,endEdge:h,direction:d}=t,y=en(n);function v(p,x){return Vt(p).filter(w=>w%x===0).map(w=>p.slice(w,w+x))}function m(p){return p.length?Vt(p).reduce((x,w,C)=>{const $=tt(x)||0,E=$===0,S=w===Gt(p),I=s[f]-o[$][f],T=s[f]-o[w][h],F=!r&&E?d(a):0,L=!r&&S?d(l):0,H=z(T-L-(I+F));return C&&H>e+c&&x.push(w),S&&x.push(p.length),x},[]).map((x,w,C)=>{const $=Math.max(C[w-1]||0);return p.slice($,x)}):[]}function u(p){return y?v(p,n):m(p)}return{groupSlides:u}}function Zo(t,e,n,r,s,o,a){const{align:l,axis:c,direction:f,startIndex:h,loop:d,duration:y,dragFree:v,dragThreshold:m,inViewThreshold:u,slidesToScroll:g,skipSnaps:p,containScroll:x,watchResize:w,watchSlides:C,watchDrag:$,watchFocus:E}=o,S=2,I=Lo(),T=I.measure(e),F=n.map(I.measure),L=Oo(c,f),H=L.measureSize(T),et=Po(H),nt=ko(l,H),rt=!d&&!!x,bt=d||!!x,{slideSizes:ht,slideSizesWithGaps:ft,startGap:ut,endGap:kt}=Wo(L,T,F,n,bt,s),st=Qo(L,H,g,d,T,F,ut,kt,S),{snaps:jt,snapsAligned:Nt}=Yo(L,nt,T,F,st),dt=-tt(jt)+tt(ft),{snapsContained:At,scrollContainLimit:Ot}=Do(H,dt,Nt,x,S),J=rt?At:Nt,{limit:G}=Vo(dt,J,d),mt=or(Gt(J),h,d),Q=mt.clone(),R=Vt(n),j=({dragHandler:Ct,scrollBody:Oe,scrollBounds:Me,options:{loop:Ut}})=>{Ut||Me.constrain(Ct.pointerDown()),Oe.seek()},P=({scrollBody:Ct,translate:Oe,location:Me,offsetLocation:Ut,previousLocation:mr,scrollLooper:pr,slideLooper:hr,dragHandler:xr,animation:yr,eventHandler:ln,scrollBounds:gr,options:{loop:fn}},un)=>{const dn=Ct.settled(),br=!gr.shouldConstrain(),mn=fn?dn:dn&&br,pn=mn&&!xr.pointerDown();pn&&yr.stop();const vr=Me.get()*un+mr.get()*(1-un);Ut.set(vr),fn&&(pr.loop(Ct.direction()),hr.loop()),Oe.to(Ut.get()),pn&&ln.emit("settle"),mn||ln.emit("scroll")},D=Ao(r,s,()=>j(Ae),Ct=>P(Ae,Ct)),U=.68,ot=J[mt.get()],pt=Lt(ot),vt=Lt(ot),xt=Lt(ot),wt=Lt(ot),Mt=zo(pt,xt,vt,wt,y,U),Ie=Go(d,J,dt,G,wt),ke=Uo(D,mt,Q,Mt,Ie,wt,a),on=_o(G),an=_t(),ur=Ko(e,n,a,u),{slideRegistry:cn}=Xo(rt,x,J,Ot,st,R),dr=Ho(t,n,cn,ke,Mt,an,a,E),Ae={ownerDocument:r,ownerWindow:s,eventHandler:a,containerRect:T,slideRects:F,animation:D,axis:L,dragHandler:Mo(L,t,r,s,wt,To(L,s),pt,D,ke,Mt,Ie,mt,a,et,v,m,p,U,$),eventStore:an,percentOfView:et,index:mt,indexPrevious:Q,limit:G,location:pt,offsetLocation:xt,previousLocation:vt,options:o,resizeHandler:Ro(e,a,s,n,L,w,I),scrollBody:Mt,scrollBounds:Fo(G,xt,wt,Mt,et),scrollLooper:Bo(dt,G,xt,[pt,xt,vt,wt]),scrollProgress:on,scrollSnapList:J.map(on.get),scrollSnaps:J,scrollTarget:Ie,scrollTo:ke,slideLooper:qo(L,H,dt,ht,ft,jt,J,xt,n),slideFocus:dr,slidesHandler:Jo(e,a,C),slidesInView:ur,slideIndexes:R,slideRegistry:cn,slidesToScroll:st,target:wt,translate:ar(L,e)};return Ae}function ta(){let t={},e;function n(f){e=f}function r(f){return t[f]||[]}function s(f){return r(f).forEach(h=>h(e,f)),c}function o(f,h){return t[f]=r(f).concat([h]),c}function a(f,h){return t[f]=r(f).filter(d=>d!==h),c}function l(){t={}}const c={init:n,emit:s,off:a,on:o,clear:l};return c}const ea={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function na(t){function e(o,a){return sr(o,a||{})}function n(o){const a=o.breakpoints||{},l=Bt(a).filter(c=>t.matchMedia(c).matches).map(c=>a[c]).reduce((c,f)=>e(c,f),{});return e(o,l)}function r(o){return o.map(a=>Bt(a.breakpoints||{})).reduce((a,l)=>a.concat(l),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:n,optionsMediaQueries:r}}function ra(t){let e=[];function n(o,a){return e=a.filter(({options:l})=>t.optionsAtMedia(l).active!==!1),e.forEach(l=>l.init(o,t)),a.reduce((l,c)=>Object.assign(l,{[c.name]:c}),{})}function r(){e=e.filter(o=>o.destroy())}return{init:n,destroy:r}}function ee(t,e,n){const r=t.ownerDocument,s=r.defaultView,o=na(s),a=ra(o),l=_t(),c=ta(),{mergeOptions:f,optionsAtMedia:h,optionsMediaQueries:d}=o,{on:y,off:v,emit:m}=c,u=L;let g=!1,p,x=f(ea,ee.globalOptions),w=f(x),C=[],$,E,S;function I(){const{container:R,slides:j}=w;E=(Ve(R)?t.querySelector(R):R)||t.children[0];const D=Ve(j)?E.querySelectorAll(j):j;S=[].slice.call(D||E.children)}function T(R){const j=Zo(t,E,S,r,s,R,c);if(R.loop&&!j.slideLooper.canLoop()){const P=Object.assign({},R,{loop:!1});return T(P)}return j}function F(R,j){g||(x=f(x,R),w=h(x),C=j||C,I(),p=T(w),d([x,...C.map(({options:P})=>P)]).forEach(P=>l.add(P,"change",L)),w.active&&(p.translate.to(p.location.get()),p.animation.init(),p.slidesInView.init(),p.slideFocus.init(Q),p.eventHandler.init(Q),p.resizeHandler.init(Q),p.slidesHandler.init(Q),p.options.loop&&p.slideLooper.loop(),E.offsetParent&&S.length&&p.dragHandler.init(Q),$=a.init(Q,C)))}function L(R,j){const P=st();H(),F(f({startIndex:P},R),j),c.emit("reInit")}function H(){p.dragHandler.destroy(),p.eventStore.clear(),p.translate.clear(),p.slideLooper.clear(),p.resizeHandler.destroy(),p.slidesHandler.destroy(),p.slidesInView.destroy(),p.animation.destroy(),a.destroy(),l.clear()}function et(){g||(g=!0,l.clear(),H(),c.emit("destroy"),c.clear())}function nt(R,j,P){!w.active||g||(p.scrollBody.useBaseFriction().useDuration(j===!0?0:w.duration),p.scrollTo.index(R,P||0))}function rt(R){const j=p.index.add(1).get();nt(j,R,-1)}function bt(R){const j=p.index.add(-1).get();nt(j,R,1)}function ht(){return p.index.add(1).get()!==st()}function ft(){return p.index.add(-1).get()!==st()}function ut(){return p.scrollSnapList}function kt(){return p.scrollProgress.get(p.offsetLocation.get())}function st(){return p.index.get()}function jt(){return p.indexPrevious.get()}function Nt(){return p.slidesInView.get()}function dt(){return p.slidesInView.get(!1)}function At(){return $}function Ot(){return p}function J(){return t}function G(){return E}function mt(){return S}const Q={canScrollNext:ht,canScrollPrev:ft,containerNode:G,internalEngine:Ot,destroy:et,off:v,on:y,emit:m,plugins:At,previousScrollSnap:jt,reInit:u,rootNode:J,scrollNext:rt,scrollPrev:bt,scrollProgress:kt,scrollSnapList:ut,scrollTo:nt,selectedScrollSnap:st,slideNodes:mt,slidesInView:Nt,slidesNotInView:dt};return F(e,n),setTimeout(()=>c.emit("init"),0),Q}ee.globalOptions=void 0;function sn(t={},e=[]){const n=N.useRef(t),r=N.useRef(e),[s,o]=N.useState(),[a,l]=N.useState(),c=N.useCallback(()=>{s&&s.reInit(n.current,r.current)},[s]);return N.useEffect(()=>{tn(n.current,t)||(n.current=t,c())},[t,c]),N.useEffect(()=>{Eo(r.current,e)||(r.current=e,c())},[e,c]),N.useEffect(()=>{if(Co()&&a){ee.globalOptions=sn.globalOptions;const f=ee(a,n.current,r.current);return o(f),()=>f.destroy()}else o(void 0)},[a,o]),[l,s]}sn.globalOptions=void 0;/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=An("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.427.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=An("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),ir=N.createContext(null);function $e(){const t=N.useContext(ir);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const cr=N.forwardRef(({orientation:t="horizontal",opts:e,setApi:n,plugins:r,className:s,children:o,...a},l)=>{const[c,f]=sn({...e,axis:t==="horizontal"?"x":"y"},r),[h,d]=N.useState(!1),[y,v]=N.useState(!1),m=N.useCallback(x=>{x&&(d(x.canScrollPrev()),v(x.canScrollNext()))},[]),u=N.useCallback(()=>{f==null||f.scrollPrev()},[f]),g=N.useCallback(()=>{f==null||f.scrollNext()},[f]),p=N.useCallback(x=>{x.key==="ArrowLeft"?(x.preventDefault(),u()):x.key==="ArrowRight"&&(x.preventDefault(),g())},[u,g]);return N.useEffect(()=>{!f||!n||n(f)},[f,n]),N.useEffect(()=>{if(f)return m(f),f.on("reInit",m),f.on("select",m),()=>{f==null||f.off("select",m)}},[f,m]),i.jsx(ir.Provider,{value:{carouselRef:c,api:f,opts:e,orientation:t||((e==null?void 0:e.axis)==="y"?"vertical":"horizontal"),scrollPrev:u,scrollNext:g,canScrollPrev:h,canScrollNext:y},children:i.jsx("div",{ref:l,onKeyDownCapture:p,className:Yt("relative",s),role:"region","aria-roledescription":"carousel",...a,children:o})})});cr.displayName="Carousel";const lr=N.forwardRef(({className:t,...e},n)=>{const{carouselRef:r,orientation:s}=$e();return i.jsx("div",{ref:r,className:"overflow-hidden",children:i.jsx("div",{ref:n,className:Yt("flex",s==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...e})})});lr.displayName="CarouselContent";const fr=N.forwardRef(({className:t,...e},n)=>{const{orientation:r}=$e();return i.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:Yt("min-w-0 shrink-0 grow-0 basis-full",r==="horizontal"?"pl-4":"pt-4",t),...e})});fr.displayName="CarouselItem";const aa=N.forwardRef(({className:t,variant:e="outline",size:n="icon",...r},s)=>{const{orientation:o,scrollPrev:a,canScrollPrev:l}=$e();return i.jsxs(kn,{ref:s,variant:e,size:n,className:Yt("absolute  h-8 w-8 rounded-full",o==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!l,onClick:a,...r,children:[i.jsx(sa,{className:"h-4 w-4"}),i.jsx("span",{className:"sr-only",children:"Previous slide"})]})});aa.displayName="CarouselPrevious";const ia=N.forwardRef(({className:t,variant:e="outline",size:n="icon",...r},s)=>{const{orientation:o,scrollNext:a,canScrollNext:l}=$e();return i.jsxs(kn,{ref:s,variant:e,size:n,className:Yt("absolute h-8 w-8 rounded-full",o==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!l,onClick:a,...r,children:[i.jsx(oa,{className:"h-4 w-4"}),i.jsx("span",{className:"sr-only",children:"Next slide"})]})});ia.displayName="CarouselNext";const ca=({events:t=[]})=>(console.log({events:t}),i.jsxs("div",{id:"events",className:"flex flex-col space-y-28 items-center py-16 justify-center  md:py-28 bg-white",children:[i.jsx(ct,{children:i.jsx("p",{className:"text-3xl md:text-5xl font-primary text-center px-10",children:"SJSSAA Upcoming Events"})}),i.jsx(cr,{className:"w-full",children:i.jsx(lr,{children:t.map((e,n)=>i.jsx(fr,{children:i.jsxs("div",{className:"md:grid grid-cols-5 gap-10 sm:px-16 px-5",children:[i.jsx("div",{className:"col-span-2 md:h-full md:w-full relative",children:i.jsx("div",{className:"h-full md:flex items-center",children:i.jsx("img",{className:"shadow-lg",src:`${e.image}`})})}),i.jsxs("div",{className:"col-span-3 space-y-5 pt-10 md:py-10 md:px-10",children:[i.jsx("p",{className:"font-primary text-4xl",children:e.title}),i.jsx("p",{className:"font-nunito",children:e.description}),i.jsxs("div",{className:"flex justify-between hidden",children:[i.jsxs("div",{children:[i.jsx("div",{className:"bg-[#800000] text-white p-3 shadow-sm",children:i.jsx("p",{className:"font-primary text-2xl md:text-3xl",children:"00"})}),i.jsx("p",{className:"font-primary text-md md:text-xl",children:"Days"})]}),i.jsxs("div",{children:[i.jsx("div",{className:"bg-[#800000] text-white p-3 shadow-sm",children:i.jsx("p",{className:"font-primary text-2xl md:text-3xl",children:"00"})}),i.jsx("p",{className:"font-primary text-md md:text-xl",children:"Hours"})]}),i.jsxs("div",{children:[i.jsx("div",{className:"bg-[#800000] text-white p-3 shadow-sm",children:i.jsx("p",{className:"font-primary text-2xl md:text-3xl",children:"00"})}),i.jsx("p",{className:"font-primary text-md md:text-xl",children:"Mins"})]}),i.jsxs("div",{children:[i.jsx("div",{className:"bg-[#800000] text-white p-3 shadow-sm",children:i.jsx("p",{className:"font-primary text-2xl md:text-3xl",children:"00"})}),i.jsx("p",{className:"font-primary text-md md:text-xl",children:"Secs"})]})]}),i.jsx("p",{className:"font-primary text-2xl",children:wr(e.date).format("dd, Do MMM YYYY")}),i.jsxs("div",{className:"flex gap-3 hidden",children:[i.jsx(gt,{title:"Register",additionalClass:"font-primary w-full py-2 "}),i.jsx(Nr,{title:"Join Event",additionalClass:"font-primary w-full py-2"})]})]})]})},n))})})]})),la=({executives:t})=>i.jsxs("div",{className:"relative bg-yellow-50 px-5 py-20",children:[i.jsx("div",{className:"md:text-left text-center py-20 font-primary",children:i.jsx("p",{className:"flex-1 h-full text-center text-3xl leading-10 text-3xl md:text-5xl",children:"National Executives"})}),i.jsx("div",{className:"w-full md:px-32 space-y-12",children:t.map((e,n)=>n<=2&&i.jsxs(i.Fragment,{children:[i.jsx(Sr,{...e,img:e.image?e.image:"/user.webp"}),i.jsx("div",{className:"h-[0.1px] md:h-[0.5px] bg-yellow-900 bg-opacity-20"})]}))}),i.jsx("div",{className:"flex justify-center py-10",children:i.jsx(gt,{href:"/excos/national-executives",title:"Meet All Excos",additionalClass:"px-6 md:text-2xl shadow-xl text-black font-primary"})})]}),fa=()=>i.jsxs("div",{className:"bg-gray-300 py-32 text-center space-y-10",children:[i.jsx("p",{className:"font-primary text-4xl text-center",children:"Set Representative"}),i.jsx(gt,{href:"/excos/set-representative",title:"Meet Your Set Representative",additionalClass:"px-8 py-3 text-black shadow-xl font-primary"})]}),ua=({trustees:t})=>i.jsxs("div",{className:"md:px-40 px-5 py-24 space-y-20 bg-yellow-400",children:[i.jsx("p",{className:"font-primary text-4xl text-center",children:"Board Of Trustees"}),i.jsx("div",{className:"flex flex-col md:flex-row justify-between text-center",children:t.map((e,n)=>n<=2&&i.jsxs("div",{children:[i.jsx("img",{src:e.image,style:{objectFit:"contain"},className:"object-fit md:h-72 h-52 w-52 mx-auto md:w-72 rounded-full"}),i.jsxs("div",{className:"text-center py-7",children:[i.jsx("p",{className:"font-primary text-3xl",children:e.name}),i.jsx("p",{className:"text-xl font-nunito",children:e.position})]})]}))}),i.jsx("div",{className:"flex  justify-center",children:i.jsx(yt,{href:"/excos/board-of-trustees",children:i.jsx("button",{className:"font-primary px-7 text-2xl py-3 bg-white text-black shadow-xl hover:bg-pry hover:text-white hover:border-2",children:"Meet All Trustees"})})})]}),da=({data:{executives:t,trustees:e}})=>i.jsxs("div",{children:[i.jsx(la,{executives:t}),i.jsx(ua,{trustees:e}),i.jsx(fa,{})]}),ma=({data:t})=>i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"bg-yellow-500 px-5 md:px-32 py-24",children:i.jsxs("div",{className:"md:grid grid-cols-12",children:[i.jsxs("div",{className:"col-span-6",children:[i.jsxs("div",{className:"flex gap-4",children:[i.jsx("img",{src:"logo.png",className:"h-24"}),i.jsx("img",{src:"logo-1.png",className:"h-24"})]}),i.jsx("p",{className:"uppercase font-italic text-md text-white font-primary",children:"Motto : First or with the First"}),i.jsxs("div",{className:"md:w-3/4 py-4 text-gray-900",children:[i.jsx("p",{className:"font-primary text-2xl text-black mb-4",children:"St. Joseph Secondary School Alumni Association"}),i.jsx("p",{className:"font-montserrat",children:t.footerText})]})]}),i.jsxs("div",{className:"col-span-6 flex  md:flex-row flex-col gap-4 md:gap-0 justify-between mt-10 md:mt-24 py-4",children:[i.jsxs("div",{className:"col-1",children:[i.jsx("p",{className:"font-montserrat font-bold text-black pb-5 text-xl",children:"Contact Us"}),i.jsxs("ul",{className:"text-gray-900 font-montserrat text-sm space-y-2",children:[i.jsx("li",{children:i.jsx("a",{href:`tel:${t.mobile1}`,className:"hover:text-yellow-900 hover:font-bold",children:t.mobile1})}),i.jsx("li",{children:i.jsx("a",{href:`tel:${t.mobile2}`,className:"hover:text-yellow-900 hover:font-bold",children:t.mobile2})}),i.jsx("li",{children:i.jsx("a",{href:`mailto:${t.email1}`,className:"hover:text-yellow-900 hover:font-bold",children:t.email1})}),i.jsx("li",{children:i.jsx("a",{href:`mailto:${t.email2}`,className:"hover:text-yellow-900 hover:font-bold",children:t.email2})})]})]}),i.jsxs("div",{className:"col-1",children:[i.jsx("p",{className:"font-montserrat font-bold text-black pb-5 text-xl",children:"Quick Links"}),i.jsxs("ul",{className:"text-gray-800 font-montserrat text-sm space-y-2",children:[i.jsx("li",{children:i.jsx(yt,{href:"/",children:i.jsx("a",{className:"hover:text-yellow-900 hover:font-bold",children:"Home"})})}),i.jsx("li",{children:i.jsx(yt,{href:"/about",children:i.jsx("a",{className:"hover:text-yellow-900 hover:font-bold",children:"About Sjsss"})})}),i.jsx("li",{children:i.jsx(yt,{href:"/gallery",children:i.jsx("a",{className:"hover:text-yellow-900 hover:font-bold",children:"Gallery"})})}),i.jsx("li",{children:i.jsx(yt,{href:"/excos/national-executives",children:i.jsx("a",{className:"hover:text-yellow-900 hover:font-bold",children:"Executives"})})}),i.jsx("li",{children:i.jsx(yt,{href:"/members",children:i.jsx("a",{className:"hover:text-yellow-900 hover:font-bold",children:"Search Member"})})})]})]}),i.jsxs("div",{className:"col-1",children:[i.jsx("p",{className:"font-montserrat font-bold text-black pb-5 text-xl",children:"Follow Us"}),i.jsxs("ul",{className:"text-gray-800 font-montserrat text-sm space-y-2",children:[t.facebook&&i.jsx("li",{children:i.jsx("a",{href:t.facebook,className:"hover:text-yellow-900 hover:font-bold",children:"Facebook"})}),t.instagram&&i.jsx("li",{children:i.jsx("a",{href:t.instagram,className:"hover:text-yellow-900 hover:font-bold",children:"Instagram"})}),t.linkedin&&i.jsx("li",{children:i.jsx("a",{href:t.linkedin,className:"hover:text-yellow-900 hover:font-bold",children:"Linkedin"})}),t.youtube&&i.jsx("li",{children:i.jsx("a",{href:t.youtube,className:"hover:text-yellow-900 hover:font-bold",children:"Youtube"})})]}),i.jsxs("div",{className:"flex gap-2 py-6",children:[i.jsx("div",{className:"bg-white p-2",children:i.jsx("img",{src:"mobile.svg",className:"h-6"})}),i.jsx("div",{className:"p-2 flex items-center bg-white",children:i.jsx("img",{src:"whatsapp.svg",className:"h-6"})}),i.jsx("div",{className:"p-2 flex items-center bg-white",children:i.jsx("img",{src:"instagram.svg",className:"h-6"})}),i.jsx("div",{className:"p-2 flex items-center bg-white",children:i.jsx("img",{src:"facebook.svg",className:"h-6"})})]})]})]})]})}),i.jsx("div",{className:"text-center py-5 font-montserrat bg-yellow-500 bg-opacity-70",children:i.jsx("a",{href:"https://www.peachy.com.ng",children:"Designed by Peachy ©"})})]}),pa=({src:t,caption:e})=>i.jsxs("div",{children:[i.jsx("img",{src:t,className:"w-full md:h-80 object-cover"}),i.jsx("p",{className:"font-nunito capitalize",children:e})]}),ha=({data:{gallery:t}})=>i.jsxs("div",{className:"flex flex-col space-y-14 items-center justify-center  pt-20 pb-24 bg-white",children:[i.jsx(ct,{children:i.jsx("p",{className:"text-3xl md:text-4xl font-primary px-10 mx-auto text-center",children:"Gallery and Photo News"})}),i.jsx("div",{className:"md:grid grid-cols-3 gap-2 md:px-14 px-5",children:t.map(e=>{var n;return i.jsx("div",{className:"col-1 md:pt-20",children:i.jsx(pa,{src:(n=e.images[0])==null?void 0:n.image_path,caption:e.name})})})}),i.jsx(gt,{title:"View All",href:"/gallery",additionalClass:"font-primary text-black text-2xl px-10"})]}),Kt=({src:t,title:e,content:n})=>i.jsxs("div",{className:"space-y-2 md:space-y-5",children:[i.jsx("img",{src:t,className:"w-full"}),i.jsx("p",{className:"font-primary text-2xl",children:e}),i.jsx("p",{className:"font-nunito"})]}),xa=()=>i.jsxs("div",{className:"flex flex-col space-y-20 items-center justify-center  pt-20 pb-24 bg-[#800000] text-white",children:[i.jsx(ct,{direction:"up",children:i.jsx("p",{className:"text-4xl font-primary",children:"Our Responsibility"})}),i.jsxs("div",{className:"grid md:grid-cols-4 gap-14 px-5 space-y-10 md:space-y-0 md:px-36",children:[i.jsx(ct,{direction:"up",children:i.jsx(Kt,{src:"apply.png",title:"Scholarship and Empowerment",content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,"})}),i.jsx(ct,{direction:"up",children:i.jsx(Kt,{src:"awards.png",title:"Help Current Students/Awards",content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,"})}),i.jsx(ct,{direction:"up",children:i.jsx(Kt,{src:"dues.png",title:"Subscription and Dues",content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,"})}),i.jsx(ct,{direction:"up",children:i.jsx(Kt,{src:"community.png",title:"Grow Our Community",content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,"})})]})]});function Aa({data:t}){return console.log(t),i.jsxs(i.Fragment,{children:[i.jsx(jr,{}),i.jsx(So,{data:t}),i.jsx(wo,{data:t}),i.jsx(ha,{data:t}),i.jsx(xa,{data:t}),i.jsx(ca,{events:t.events}),i.jsx(da,{data:t}),i.jsx(jo,{data:t}),i.jsx(ma,{data:t})]})}export{Aa as default};
