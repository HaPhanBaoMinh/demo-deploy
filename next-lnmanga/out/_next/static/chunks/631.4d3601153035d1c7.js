"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[631],{2631:function(t,e,o){o.r(e),o(7294);var r=o(5301),n=o.n(r),i=o(917),a=function(t){return(0,i.tZ)("svg",t,(0,i.tZ)("path",{fillRule:"evenodd",d:"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"}))};a.defaultProps={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-up",viewBox:"0 0 16 16"};var c={name:"1okgp5e",styles:"position:fixed;right:0px;bottom:0px;margin-right:0.5rem;margin-bottom:0.5rem;display:inline-flex;height:2.5rem;width:2.5rem;align-items:center;justify-content:center;border-radius:0.5rem !important;border-width:0px;--tw-bg-opacity:1 !important;background-color:rgb(229 231 235 / var(--tw-bg-opacity)) !important;--tw-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color) !important;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;:active{--tw-bg-opacity:0.2;background-color:rgb(229 231 235 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity));}"};e.default=function(){return(0,i.tZ)(n(),{smooth:!0,component:(0,i.tZ)(a,{width:24,height:24}),style:{borderRadius:2,right:10,bottom:10,display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},css:c})}},5301:function(t,e,o){var r=o(7294),n=r&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var n in e=arguments[o])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};!function(t,e){void 0===e&&(e={});var o=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===o&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}}(".scroll-to-top {\n  background-color: white;\n  right: 40px;\n  bottom: 40px;\n  position: fixed;\n  z-index: 2;\n  cursor: pointer;\n  border-radius: 7px;\n  width: 40px;\n  height: 40px;\n  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);\n  border: none;\n}\n\n.scroll-to-top:active {\n  transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n"),t.exports=function(t){var e=t.top,o=void 0===e?20:e,a=t.className,c=t.color,l=t.smooth,s=void 0!==l&&l,p=t.component,d=t.viewBox,h=t.svgPath,u=t.width,m=t.height,f=function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(o[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(t);n<r.length;n++)0>e.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]]);return o}(t,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),v=r.useState(!1),w=v[0],g=v[1];return r.useEffect(function(){var t=function(){g(document.documentElement.scrollTop>=o)};return t(),document.addEventListener("scroll",t),function(){return document.removeEventListener("scroll",t)}},[o]),n.createElement(n.Fragment,null,w&&n.createElement("button",i({className:"scroll-to-top "+(void 0===a?"":a),onClick:function(){var t;void 0===(t=s)&&(t=!1),t?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0},"aria-label":"Scroll to top"},f),(void 0===p?"":p)||n.createElement("svg",{width:void 0===u?"28":u,height:void 0===m?"28":m,fill:void 0===c?"black":c,viewBox:void 0===d?"0 0 256 256":d},n.createElement("path",{d:void 0===h?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":h}))))}}}]);