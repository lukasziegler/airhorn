/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-bgsizecover-cssvhunit-cssvwunit-scriptasync !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,l;for(var a in g)if(g.hasOwnProperty(a)){if(e=[],n=g[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],l=s.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),w.push((o?"":"no-")+l.join("-"))}}function i(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(){var e=n.body;return e||(e=s(_?"svg":"body"),e.fake=!0),e}function a(e,t,r,o){var i,a,u,f,d="modernizr",c=s("div"),p=l();if(parseInt(r,10))for(;r--;)u=s("div"),u.id=o?o[r]:d+(r+1),c.appendChild(u);return i=s("style"),i.type="text/css",i.id="s"+d,(p.fake?p:c).appendChild(i),p.appendChild(c),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),a=t(c,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=f,S.offsetHeight):c.parentNode.removeChild(c),!!a}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e,n){return function(){return e.apply(n,arguments)}}function c(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?d(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(n[o])+":"+r+")");return s=s.join(" or "),a("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==i(e,null,"position")})}return t}function h(e,n,o,i){function l(){d&&(delete E.style,delete E.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var a=m(e,o);if(!r(a,"undefined"))return a}for(var d,c,p,h,v,y=["modernizr","tspan","samp"];!E.style&&y.length;)d=!0,E.modElem=s(y.shift()),E.style=E.modElem.style;for(p=e.length,c=0;p>c;c++)if(h=e[c],v=E.style[h],u(h,"-")&&(h=f(h)),E.style[h]!==t){if(i||r(o,"undefined"))return l(),"pfx"==n?h:!0;try{E.style[h]=o}catch(g){}if(E.style[h]!=v)return l(),"pfx"==n?h:!0}return l(),!1}function v(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+b.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?h(l,n,o,i):(l=(e+" "+T.join(s+" ")+s).split(" "),c(l,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],C={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var w=[],S=n.documentElement,_="svg"===S.nodeName.toLowerCase();Modernizr.addTest("scriptasync","async"in s("script"));var z=C.testStyles=a;z("#modernizr { height: 50vh; }",function(n){var t=parseInt(e.innerHeight/2,10),r=parseInt(i(n,null,"height"),10);Modernizr.addTest("cssvhunit",r==t)}),z("#modernizr { width: 50vw; }",function(n){var t=parseInt(e.innerWidth/2,10),r=parseInt(i(n,null,"width"),10);Modernizr.addTest("cssvwunit",r==t)});var x="Moz O ms Webkit",b=C._config.usePrefixes?x.split(" "):[];C._cssomPrefixes=b;var T=C._config.usePrefixes?x.toLowerCase().split(" "):[];C._domPrefixes=T;var P={elem:s("modernizr")};Modernizr._q.push(function(){delete P.elem});var E={style:P.elem.style};Modernizr._q.unshift(function(){delete E.style}),C.testAllProps=v,C.testAllProps=y,Modernizr.addTest("bgsizecover",y("backgroundSize","cover")),o(),delete C.addTest,delete C.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);