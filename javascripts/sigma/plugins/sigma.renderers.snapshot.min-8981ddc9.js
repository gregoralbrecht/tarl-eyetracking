(function(){function e(e,t,n){var a=document.createElement("a");a.setAttribute("href",e),a.setAttribute("download",n||"graph."+t);var i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),a.dispatchEvent(i),delete a}function t(t){if(t=t||{},t.format&&!(t.format in a))throw Error('sigma.renderers.snaphot: unsupported format "'+t.format+'".');var i=this,r=this instanceof sigma.renderers.webgl,o=[],s=document.createElement("canvas"),d=s.getContext("2d"),g=!1;n.forEach(function(e){if(i.contexts[e]&&(t.labels!==!1||"labels"!==e)){var n=i.domElements[e]||i.domElements.scene,a=i.contexts[e];~o.indexOf(a)||(g||(s.width=r&&a instanceof WebGLRenderingContext?n.width/2:n.width,s.height=r&&a instanceof WebGLRenderingContext?n.height/2:n.height,g=!0,t.background&&(d.rect(0,0,s.width,s.height),d.fillStyle=t.background,d.fill())),a instanceof WebGLRenderingContext?d.drawImage(n,0,0,n.width/2,n.height/2):d.drawImage(n,0,0),o.push(a))}});var f=s.toDataURL(a[t.format||"png"]);return t.download&&e(f,t.format||"png",t.filename),delete d,delete s,delete o,f}if("undefined"==typeof sigma)throw"sigma.renderers.snapshot: sigma not in scope.";var n=["scene","edges","nodes","labels"],a={png:"image/png",jpg:"image/jpeg",gif:"image/gif",tiff:"image/tiff"};sigma.renderers.canvas.prototype.snapshot=t,sigma.renderers.webgl.prototype.snapshot=t}).call(this);