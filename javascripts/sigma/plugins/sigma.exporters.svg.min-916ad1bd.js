(function(){"use strict";function e(e){return new Blob([e],{type:"image/svg+xml;charset=utf-8"})}function t(t,s){var i=e(t),a={};a.anchor=document.createElement("a"),a.anchor.setAttribute("href",r.createObjectURL(i)),a.anchor.setAttribute("download",s);var l=document.createEvent("MouseEvent");l.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.revokeObjectURL(i),a.anchor.dispatchEvent(l),delete a.anchor}function s(e,t,s){var r,i,l,o,n,d={},c={},u=0,h="";s.classes&&(i=document.createElementNS(a,"style"),e.insertBefore(i,e.firstChild));var g=e.querySelectorAll('[id="'+t+'-group-nodes"] > [class="'+t+'-node"]');for(o=0,n=g.length,l=!0;n>o;o++)r=g[o].getAttribute("fill"),s.data||g[o].removeAttribute("data-node-id"),s.classes&&(r in d||(d[r]=l?t+"-node":"c-"+u++,h+="."+d[r]+"{fill: "+r+"}"),d[r]!==t+"-node"&&g[o].setAttribute("class",g[o].getAttribute("class")+" "+d[r]),g[o].removeAttribute("fill")),l=!1;var v=e.querySelectorAll('[id="'+t+'-group-edges"] > [class="'+t+'-edge"]');for(o=0,n=v.length,l=!0;n>o;o++)r=v[o].getAttribute("stroke"),s.data||v[o].removeAttribute("data-edge-id"),s.classes&&(r in c||(c[r]=l?t+"-edge":"c-"+u++,h+="."+c[r]+"{stroke: "+r+"}"),c[r]!==t+"-edge"&&v[o].setAttribute("class",v[o].getAttribute("class")+" "+c[r]),v[o].removeAttribute("stroke")),l=!1;s.classes&&i.appendChild(document.createTextNode(h))}if("undefined"==typeof sigma)throw"sigma.renderers.snapshot: sigma not in scope.";var r=this.URL||this.webkitURL||this,i={size:"1000",width:"1000",height:"1000",classes:!0,labels:!0,data:!1,download:!1,filename:"graph.svg"},a="http://www.w3.org/2000/svg";sigma.prototype.toSVG=function(e){e=e||{};var r=this.settings("classPrefix"),a=e.size||e.width||i.size,l=e.size||e.height||i.size,o=document.createElement("div");o.setAttribute("width",a),o.setAttribute("height",l),o.setAttribute("style","position:absolute; top: 0px; left:0px; width: "+a+"px; height: "+l+"px;");var n=this.addCamera(),d=this.addRenderer({camera:n,container:o,type:"svg",forceLabels:!!e.labels});d.resize(a,l),this.refresh(),this.killRenderer(d),this.killCamera(n);var c=o.querySelector("svg");if(c.removeAttribute("style"),c.setAttribute("width",a+"px"),c.setAttribute("height",l+"px"),c.setAttribute("x","0px"),c.setAttribute("y","0px"),!e.labels){var u=c.querySelector('[id="'+r+'-group-labels"]');c.removeChild(u)}var h=c.querySelector('[id="'+r+'-group-hovers"]');c.removeChild(h),e.classes=e.classes!==!1,(!e.data||e.classes)&&s(c,r,e);var g=c.outerHTML;o=null;var v='<?xml version="1.0" encoding="utf-8"?>\n';return v+='<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n',v+=g,e.download&&t(v,e.filename||i.filename),v}}).call(this);