import{c as t,T as e}from"./mobile.d1955994.js";import{k as l,r as i,o as s,c,f as d,i as n}from"./vendor.cc24f590.js";import"./index.176c141b.js";const{createDemo:o}=t("cell");var u=o({setup:()=>({testClick:t=>{e.text("点击事件")},switchChecked:l(!0)})});const a={class:"demo"},r=d("h2",null,"基本用法",-1),h=d("h2",null,"直接使用插槽(slot)",-1),m=d("div",null,"自定义内容",-1),k=d("h2",null,"展示图标",-1),f=d("h2",null,"只展示 desc ，可通过 desc-text-align 调整内容位置",-1);u.render=function(t,e,l,o,u,p){const C=i("nut-cell"),j=i("nut-cell-group"),w=i("nut-switch");return s(),c("div",a,[r,d(C,{title:"我是标题",desc:"描述文字"}),d(C,{title:"我是标题","sub-title":"副标题描述",desc:"描述文字"}),d(C,{title:"点击测试",onClick:t.testClick},null,8,["onClick"]),h,d(C,{title:"我是标题",desc:"描述文字"},{default:n((()=>[m])),_:1}),d(j,{title:"链接 | 分组用法"},{default:n((()=>[d(C,{title:"链接","is-link":""}),d(C,{title:"URL 跳转",desc:"https://jd.com","is-link":"",url:"https://jd.com"}),d(C,{title:"路由跳转 ’/‘ ",to:"/"})])),_:1}),d(j,{title:"自定义右侧箭头区域"},{default:n((()=>[d(C,{title:"Switch"},{link:n((()=>[d(w,{modelValue:t.switchChecked,"onUpdate:modelValue":e[1]||(e[1]=e=>t.switchChecked=e)},null,8,["modelValue"])])),_:1})])),_:1}),k,d(C,{title:"姓名",icon:"my",desc:"张三",isLink:""}),f,d(C,{"desc-text-align":"left",desc:"张三"})])};export default u;
