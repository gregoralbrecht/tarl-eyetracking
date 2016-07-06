(function(undefined){"use strict";function Supervisor(sigInst,options){var _this=this,workerFn=sigInst.getForceAtlas2Worker&&sigInst.getForceAtlas2Worker();if(options=options||{},_root.URL=_root.URL||_root.webkitURL,this.sigInst=sigInst,this.graph=this.sigInst.graph,this.ppn=10,this.ppe=3,this.config={},this.shouldUseWorker=options.worker===!1?!1:webWorkers,this.workerUrl=options.workerUrl,this.started=!1,this.running=!1,this.shouldUseWorker){if(this.workerUrl)this.worker=new Worker(this.workerUrl);else{var blob=this.makeBlob(workerFn);this.worker=new Worker(URL.createObjectURL(blob))}this.worker.postMessage=this.worker.webkitPostMessage||this.worker.postMessage}else eval(workerFn);this.msgName=this.worker?"message":"newCoords",this.listener=function(t){_this.nodesByteArray=new Float32Array(t.data.nodes),_this.running&&(_this.applyLayoutChanges(),_this.sendByteArrayToWorker(),_this.sigInst.refresh())},(this.worker||document).addEventListener(this.msgName,this.listener),this.graphToByteArrays(),sigInst.bind("kill",function(){sigInst.killForceAtlas2()})}if("undefined"==typeof sigma)throw"sigma is not declared";var _root=this,webWorkers="Worker"in _root;Supervisor.prototype.makeBlob=function(t){var e;try{e=new Blob([t],{type:"application/javascript"})}catch(s){_root.BlobBuilder=_root.BlobBuilder||_root.WebKitBlobBuilder||_root.MozBlobBuilder,e=new BlobBuilder,e.append(t),e=e.getBlob()}return e},Supervisor.prototype.graphToByteArrays=function(){var t,e,s,r=this.graph.nodes(),i=this.graph.edges(),o=r.length*this.ppn,n=i.length*this.ppe,a={};for(this.nodesByteArray=new Float32Array(o),this.edgesByteArray=new Float32Array(n),t=e=0,s=r.length;s>t;t++)a[r[t].id]=e,this.nodesByteArray[e]=r[t].x,this.nodesByteArray[e+1]=r[t].y,this.nodesByteArray[e+2]=0,this.nodesByteArray[e+3]=0,this.nodesByteArray[e+4]=0,this.nodesByteArray[e+5]=0,this.nodesByteArray[e+6]=1+this.graph.degree(r[t].id),this.nodesByteArray[e+7]=1,this.nodesByteArray[e+8]=r[t].size,this.nodesByteArray[e+9]=0,e+=this.ppn;for(t=e=0,s=i.length;s>t;t++)this.edgesByteArray[e]=a[i[t].source],this.edgesByteArray[e+1]=a[i[t].target],this.edgesByteArray[e+2]=i[t].weight||0,e+=this.ppe},Supervisor.prototype.applyLayoutChanges=function(){for(var t=this.graph.nodes(),e=0,s=0,r=this.nodesByteArray.length;r>s;s+=this.ppn)t[e].x=this.nodesByteArray[s],t[e].y=this.nodesByteArray[s+1],e++},Supervisor.prototype.sendByteArrayToWorker=function(t){var e={action:t||"loop",nodes:this.nodesByteArray.buffer},s=[this.nodesByteArray.buffer];"start"===t&&(e.config=this.config||{},e.edges=this.edgesByteArray.buffer,s.push(this.edgesByteArray.buffer)),this.shouldUseWorker?this.worker.postMessage(e,s):_root.postMessage(e,"*")},Supervisor.prototype.start=function(){if(!this.running){this.running=!0;var t,e;for(t in this.sigInst.cameras)e=this.sigInst.cameras[t],e.edgequadtree._enabled=!1;this.started?this.sendByteArrayToWorker():(this.sendByteArrayToWorker("start"),this.started=!0)}},Supervisor.prototype.stop=function(){if(this.running){var t,e,s;for(t in this.sigInst.cameras)e=this.sigInst.cameras[t],e.edgequadtree._enabled=!0,s=sigma.utils.getBoundaries(this.graph,e.readPrefix),e.settings("drawEdges")&&e.settings("enableEdgeHovering")&&e.edgequadtree.index(this.sigInst.graph,{prefix:e.readPrefix,bounds:{x:s.minX,y:s.minY,width:s.maxX-s.minX,height:s.maxY-s.minY}});this.running=!1}},Supervisor.prototype.killWorker=function(){this.worker?this.worker.terminate():(_root.postMessage({action:"kill"},"*"),document.removeEventListener(this.msgName,this.listener))},Supervisor.prototype.configure=function(t){if(this.config=t,this.started){var e={action:"config",config:this.config};this.shouldUseWorker?this.worker.postMessage(e):_root.postMessage(e,"*")}},sigma.prototype.startForceAtlas2=function(t){return this.supervisor||(this.supervisor=new Supervisor(this,t)),t&&this.supervisor.configure(t),this.supervisor.start(),this},sigma.prototype.stopForceAtlas2=function(){return this.supervisor?(this.supervisor.stop(),this):this},sigma.prototype.killForceAtlas2=function(){return this.supervisor?(this.supervisor.stop(),this.supervisor.killWorker(),this.supervisor=null,this):this},sigma.prototype.configForceAtlas2=function(t){return this.supervisor||(this.supervisor=new Supervisor(this,t)),this.supervisor.configure(t),this},sigma.prototype.isForceAtlas2Running=function(){return!!this.supervisor&&this.supervisor.running}}).call(this),function(undefined){"use strict";function no_crush(t){var e,s,r,i=["x","y","dx","dy","old_dx","old_dy","mass","convergence","size","fixed"],o=["source","target","weight"],n=["node","centerX","centerY","size","nextSibling","firstChild","mass","massCenterX","massCenterY"];for(s=0,r=n.length;r>s;s++)e=new RegExp("rp\\(([^,]*), '"+n[s]+"'\\)","g"),t=t.replace(e,0===s?"$1":"$1 + "+s);for(s=0,r=i.length;r>s;s++)e=new RegExp("np\\(([^,]*), '"+i[s]+"'\\)","g"),t=t.replace(e,0===s?"$1":"$1 + "+s);for(s=0,r=o.length;r>s;s++)e=new RegExp("ep\\(([^,]*), '"+o[s]+"'\\)","g"),t=t.replace(e,0===s?"$1":"$1 + "+s);return t}function getWorkerFn(){var t=crush?crush(Worker.toString()):Worker.toString();return";("+t+").call(this);"}var _root=this,inWebWorker=!("document"in _root),Worker=function(){function t(){var t,e,s={},r=arguments.length;for(t=r-1;t>=0;t--)for(e in arguments[t])s[e]=arguments[t][e];return s}function e(t){var e;for(e in t)"hasOwnProperty"in t&&!t.hasOwnProperty(e)||delete t[e];return t}function s(t,e,s){s=s||{},n=t,a=e,g.nodesLength=n.length,g.edgesLength=a.length,r(s)}function r(e){g.settings=t(e,g.settings)}function i(){var t,e,s,r,i,o,p,u,d,l,c,f,y,w,v;for(s=0;s<g.nodesLength;s+=g.ppn)n[s+4]=n[s+2],n[s+5]=n[s+3],n[s+2]=0,n[s+3]=0;if(g.settings.outboundAttractionDistribution){for(d=0,s=0;s<g.nodesLength;s+=g.ppn)d+=n[s+6];d/=g.nodesLength}if(g.settings.barnesHutOptimize){var k,m,b=1/0,M=-1/0,A=1/0,B=-1/0;for(h=[],s=0;s<g.nodesLength;s+=g.ppn)b=Math.min(b,n[s]),M=Math.max(M,n[s]),A=Math.min(A,n[s+1]),B=Math.max(B,n[s+1]);for(h[0]=-1,h[1]=(b+M)/2,h[2]=(A+B)/2,h[3]=Math.max(M-b,B-A),h[4]=-1,h[5]=-1,h[6]=0,h[7]=0,h[8]=0,t=1,s=0;s<g.nodesLength;s+=g.ppn)for(e=0;;)if(h[e+5]>=0)k=n[s]<h[e+1]?n[s+1]<h[e+2]?h[e+5]:h[e+5]+g.ppr:n[s+1]<h[e+2]?h[e+5]+2*g.ppr:h[e+5]+3*g.ppr,h[e+7]=(h[e+7]*h[e+6]+n[s]*n[s+6])/(h[e+6]+n[s+6]),h[e+8]=(h[e+8]*h[e+6]+n[s+1]*n[s+6])/(h[e+6]+n[s+6]),h[e+6]+=n[s+6],e=k;else{if(h[e]<0){h[e]=s;break}if(h[e+5]=t*g.ppr,p=h[e+3]/2,u=h[e+5],h[u]=-1,h[u+1]=h[e+1]-p,h[u+2]=h[e+2]-p,h[u+3]=p,h[u+4]=u+g.ppr,h[u+5]=-1,h[u+6]=0,h[u+7]=0,h[u+8]=0,u+=g.ppr,h[u]=-1,h[u+1]=h[e+1]-p,h[u+2]=h[e+2]+p,h[u+3]=p,h[u+4]=u+g.ppr,h[u+5]=-1,h[u+6]=0,h[u+7]=0,h[u+8]=0,u+=g.ppr,h[u]=-1,h[u+1]=h[e+1]+p,h[u+2]=h[e+2]-p,h[u+3]=p,h[u+4]=u+g.ppr,h[u+5]=-1,h[u+6]=0,h[u+7]=0,h[u+8]=0,u+=g.ppr,h[u]=-1,h[u+1]=h[e+1]+p,h[u+2]=h[e+2]+p,h[u+3]=p,h[u+4]=h[e+4],h[u+5]=-1,h[u+6]=0,h[u+7]=0,h[u+8]=0,t+=4,k=n[h[e]]<h[e+1]?n[h[e]+1]<h[e+2]?h[e+5]:h[e+5]+g.ppr:n[h[e]+1]<h[e+2]?h[e+5]+2*g.ppr:h[e+5]+3*g.ppr,h[e+6]=n[h[e]+6],h[e+7]=n[h[e]],h[e+8]=n[h[e]+1],h[k]=h[e],h[e]=-1,m=n[s]<h[e+1]?n[s+1]<h[e+2]?h[e+5]:h[e+5]+g.ppr:n[s+1]<h[e+2]?h[e+5]+2*g.ppr:h[e+5]+3*g.ppr,k!==m){h[m]=s;break}e=k}}if(g.settings.barnesHutOptimize)for(l=g.settings.scalingRatio,s=0;s<g.nodesLength;s+=g.ppn)for(e=0;;)if(h[e+5]>=0){if(w=Math.sqrt(Math.pow(n[s]-h[e+7],2)+Math.pow(n[s+1]-h[e+8],2)),2*h[e+3]/w<g.settings.barnesHutTheta){if(c=n[s]-h[e+7],f=n[s+1]-h[e+8],g.settings.adjustSizes?w>0?(v=l*n[s+6]*h[e+6]/w/w,n[s+2]+=c*v,n[s+3]+=f*v):0>w&&(v=-l*n[s+6]*h[e+6]/w,n[s+2]+=c*v,n[s+3]+=f*v):w>0&&(v=l*n[s+6]*h[e+6]/w/w,n[s+2]+=c*v,n[s+3]+=f*v),h[e+4]<0)break;e=h[e+4];continue}e=h[e+5]}else{if(h[e]>=0&&h[e]!==s&&(c=n[s]-n[h[e]],f=n[s+1]-n[h[e]+1],w=Math.sqrt(c*c+f*f),g.settings.adjustSizes?w>0?(v=l*n[s+6]*n[h[e]+6]/w/w,n[s+2]+=c*v,n[s+3]+=f*v):0>w&&(v=-l*n[s+6]*n[h[e]+6]/w,n[s+2]+=c*v,n[s+3]+=f*v):w>0&&(v=l*n[s+6]*n[h[e]+6]/w/w,n[s+2]+=c*v,n[s+3]+=f*v)),h[e+4]<0)break;e=h[e+4]}else for(l=g.settings.scalingRatio,r=0;r<g.nodesLength;r+=g.ppn)for(i=0;r>i;i+=g.ppn)c=n[r]-n[i],f=n[r+1]-n[i+1],g.settings.adjustSizes?(w=Math.sqrt(c*c+f*f)-n[r+8]-n[i+8],w>0?(v=l*n[r+6]*n[i+6]/w/w,n[r+2]+=c*v,n[r+3]+=f*v,n[i+2]+=c*v,n[i+3]+=f*v):0>w&&(v=100*l*n[r+6]*n[i+6],n[r+2]+=c*v,n[r+3]+=f*v,n[i+2]-=c*v,n[i+3]-=f*v)):(w=Math.sqrt(c*c+f*f),w>0&&(v=l*n[r+6]*n[i+6]/w/w,n[r+2]+=c*v,n[r+3]+=f*v,n[i+2]-=c*v,n[i+3]-=f*v));for(u=g.settings.gravity/g.settings.scalingRatio,l=g.settings.scalingRatio,s=0;s<g.nodesLength;s+=g.ppn)v=0,c=n[s],f=n[s+1],w=Math.sqrt(Math.pow(c,2)+Math.pow(f,2)),g.settings.strongGravityMode?w>0&&(v=l*n[s+6]*u):w>0&&(v=l*n[s+6]*u/w),n[s+2]-=c*v,n[s+3]-=f*v;for(l=1*(g.settings.outboundAttractionDistribution?d:1),o=0;o<g.edgesLength;o+=g.ppe)r=a[o],i=a[o+1],p=a[o+2],y=Math.pow(p,g.settings.edgeWeightInfluence),c=n[r]-n[i],f=n[r+1]-n[i+1],g.settings.adjustSizes?(w=Math.sqrt(Math.pow(c,2)+Math.pow(f,2)-n[r+8]-n[i+8]),g.settings.linLogMode?g.settings.outboundAttractionDistribution?w>0&&(v=-l*y*Math.log(1+w)/w/n[r+6]):w>0&&(v=-l*y*Math.log(1+w)/w):g.settings.outboundAttractionDistribution?w>0&&(v=-l*y/n[r+6]):w>0&&(v=-l*y)):(w=Math.sqrt(Math.pow(c,2)+Math.pow(f,2)),g.settings.linLogMode?g.settings.outboundAttractionDistribution?w>0&&(v=-l*y*Math.log(1+w)/w/n[r+6]):w>0&&(v=-l*y*Math.log(1+w)/w):g.settings.outboundAttractionDistribution?(w=1,v=-l*y/n[r+6]):(w=1,v=-l*y)),w>0&&(n[r+2]+=c*v,n[r+3]+=f*v,n[i+2]-=c*v,n[i+3]-=f*v);var W,L,F,_;if(g.settings.adjustSizes)for(s=0;s<g.nodesLength;s+=g.ppn)n[s+9]||(W=Math.sqrt(Math.pow(n[s+2],2)+Math.pow(n[s+3],2)),W>g.maxForce&&(n[s+2]=n[s+2]*g.maxForce/W,n[s+3]=n[s+3]*g.maxForce/W),L=n[s+6]*Math.sqrt((n[s+4]-n[s+2])*(n[s+4]-n[s+2])+(n[s+5]-n[s+3])*(n[s+5]-n[s+3])),F=Math.sqrt((n[s+4]+n[s+2])*(n[s+4]+n[s+2])+(n[s+5]+n[s+3])*(n[s+5]+n[s+3]))/2,_=.1*Math.log(1+F)/(1+Math.sqrt(L)),n[s]=n[s]+n[s+2]*(_/g.settings.slowDown),n[s+1]=n[s+1]+n[s+3]*(_/g.settings.slowDown));else for(s=0;s<g.nodesLength;s+=g.ppn)n[s+9]||(L=n[s+6]*Math.sqrt((n[s+4]-n[s+2])*(n[s+4]-n[s+2])+(n[s+5]-n[s+3])*(n[s+5]-n[s+3])),F=Math.sqrt((n[s+4]+n[s+2])*(n[s+4]+n[s+2])+(n[s+5]+n[s+3])*(n[s+5]+n[s+3]))/2,_=n[s+7]*Math.log(1+F)/(1+Math.sqrt(L)),n[s+7]=Math.min(1,Math.sqrt(_*(Math.pow(n[s+2],2)+Math.pow(n[s+3],2))/(1+Math.sqrt(L)))),n[s]=n[s]+n[s+2]*(_/g.settings.slowDown),n[s+1]=n[s+1]+n[s+3]*(_/g.settings.slowDown));g.iterations++}function o(t){for(var e=0;t>e;e++)i();p()}var n,a,h,p,g={ppn:10,ppe:3,ppr:9,maxForce:10,iterations:0,converged:!1,settings:{linLogMode:!1,outboundAttractionDistribution:!1,adjustSizes:!1,edgeWeightInfluence:0,scalingRatio:1,strongGravityMode:!1,gravity:1,slowDown:1,barnesHutOptimize:!1,barnesHutTheta:.5,startingIterations:1,iterationsPerRender:1}};p="undefined"!=typeof window&&window.document?function(){var t;document.createEvent?(t=document.createEvent("Event"),t.initEvent("newCoords",!0,!1)):(t=document.createEventObject(),t.eventType="newCoords"),t.eventName="newCoords",t.data={nodes:n.buffer},requestAnimationFrame(function(){document.dispatchEvent(t)})}:function(){self.postMessage({nodes:n.buffer},[n.buffer])};var u=function(t){switch(t.data.action){case"start":s(new Float32Array(t.data.nodes),new Float32Array(t.data.edges),t.data.config),o(g.settings.startingIterations);break;case"loop":n=new Float32Array(t.data.nodes),o(g.settings.iterationsPerRender);break;case"config":r(t.data.config);break;case"kill":e(g),n=null,a=null,h=null,self.removeEventListener("message",u)}};self.addEventListener("message",u)},crush=null;if(inWebWorker)eval(getWorkerFn());else{if("undefined"==typeof sigma)throw"sigma is not declared";sigma.prototype.getForceAtlas2Worker=getWorkerFn}}.call(this);