import{c as e}from"./mobile.32969f1d.js";import{m as l,r as n,o as s,e as r,j as t,k as a,g as u}from"./vendor.6bc94963.js";import"./index.d8e175d8.js";const{createDemo:d}=e("price");var o=d({setup(){const e=l(0);return setInterval((()=>{e.value=1e7*Math.random()}),1e3),{price:e}}});const i={class:"demo"},c=u("h2",null,"基本用法",-1),m=u("h2",null,"有人民币符号，无千位分隔",-1),p=u("h2",null,"带人民币符号，有千位分隔，保留小数点后三位",-1),f=u("h2",null,"异步随机变更",-1);o.render=function(e,l,u,d,o,h){const b=n("nut-price"),v=n("nut-cell");return s(),r("div",i,[c,t(v,null,{default:a((()=>[t(b,{price:0,"need-symbol":!1,thousands:!0})])),_:1}),m,t(v,null,{default:a((()=>[t(b,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])])),_:1}),p,t(v,null,{default:a((()=>[t(b,{price:15213.1221,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1}),f,t(v,null,{default:a((()=>[t(b,{price:e.price,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1})])};export{o as default};
