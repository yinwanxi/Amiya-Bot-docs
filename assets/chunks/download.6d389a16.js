import{a as i}from"./index.ea617db1.js";import{_ as c,o as l,c as _,d as p,t,b as m}from"../app.cf68ed47.js";const s="https://cos.amiyabot.com/package/release",g={name:"download",props:{version:String,text:String},data(){return{latest:""}},methods:{download:function(){window.open(`${s}/AmiyaBot-${this.latest}-${this.version}.zip`)}},mounted(){i.get(`${s}/latest-V6-${this.version}.txt`).then(e=>{this.latest=e.data.toString().replace(/\r\n/g,"").replace(/\n/g,"")})}};function u(e,o,a,x,r,n){return l(),_("div",null,[p(t(a.text)+"\uFF1A",1),m("a",{onClick:o[0]||(o[0]=(...d)=>n.download&&n.download(...d))},t(r.latest)+"-"+t(a.version)+".zip",1)])}const f=c(g,[["render",u],["__scopeId","data-v-20901795"]]);export{f as d};