﻿/* http://keith-wood.name/svg.html
   SVG attribute animations for jQuery v1.5.0.
   Written by Keith Wood (kbwood{at}iinet.com.au) June 2008.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */
(function($){var h=parseInt($.fn.jquery,10)>1||parseInt($.fn.jquery.substring(2),10)>5;$.each(['x','y','width','height','rx','ry','cx','cy','r','x1','y1','x2','y2','stroke-width','strokeWidth','opacity','fill-opacity','fillOpacity','stroke-opacity','strokeOpacity','stroke-dashoffset','strokeDashOffset','font-size','fontSize','font-weight','fontWeight','letter-spacing','letterSpacing','word-spacing','wordSpacing'],function(i,f){var g=f.charAt(0).toUpperCase()+f.substr(1);if($.cssProps){$.cssProps['svg'+g]=$.cssProps['svg-'+f]=f}$.fx.step['svg'+g]=$.fx.step['svg-'+f]=function(a){var b=$.svg._attrNames[f]||f;var c=a.elem.attributes.getNamedItem(b);if(!a.set){a.start=(c?parseFloat(c.nodeValue):0);var d=(h?'':a.options.curAnim['svg'+g]||a.options.curAnim['svg-'+f]);if(/^[+-]=/.exec(d)){a.end=a.start+parseFloat(d.replace(/=/,''))}$(a.elem).css(b,'');a.set=true}var e=(a.pos*(a.end-a.start)+a.start)+(a.unit==='%'?'%':'');(c?c.nodeValue=e:a.elem.setAttribute(b,e))}});$.fx.step['svgStrokeDashArray']=$.fx.step['svg-strokeDashArray']=$.fx.step['svgStroke-dasharray']=$.fx.step['svg-stroke-dasharray']=function(a){var b=a.elem.attributes.getNamedItem('stroke-dasharray');if(!a.set){a.start=parseDashArray(b?b.nodeValue:'');var c=(h?a.end:a.options.curAnim['svgStrokeDashArray']||a.options.curAnim['svg-strokeDashArray']||a.options.curAnim['svgStroke-dasharray']||a.options.curAnim['svg-stroke-dasharray']);a.end=parseDashArray(c);if(/^[+-]=/.exec(c)){c=c.split(/[, ]+/);if(c.length%2===1){var d=c.length;for(var i=0;i<d;i++){c.push(c[i])}}for(var i=0;i<c.length;i++){if(/^[+-]=/.exec(c[i])){a.end[i]=a.start[i]+parseFloat(c[i].replace(/=/,''))}}}a.set=true}var e=$.map(a.start,function(n,i){return(a.pos*(a.end[i]-n)+n)}).join(',');(b?b.nodeValue=e:a.elem.setAttribute('stroke-dasharray',e))};function parseDashArray(a){var b=a.split(/[, ]+/);for(var i=0;i<b.length;i++){b[i]=parseFloat(b[i]);if(isNaN(b[i])){b[i]=0}}if(b.length%2===1){var c=b.length;for(var i=0;i<c;i++){b.push(b[i])}}return b}$.fx.step['svgViewBox']=$.fx.step['svg-viewBox']=function(a){var b=a.elem.attributes.getNamedItem('viewBox');if(!a.set){a.start=parseViewBox(b?b.nodeValue:'');var c=(h?a.end:a.options.curAnim['svgViewBox']||a.options.curAnim['svg-viewBox']);a.end=parseViewBox(c);if(/^[+-]=/.exec(c)){c=c.split(/[, ]+/);while(c.length<4){c.push('0')}for(var i=0;i<4;i++){if(/^[+-]=/.exec(c[i])){a.end[i]=a.start[i]+parseFloat(c[i].replace(/=/,''))}}}a.set=true}var d=$.map(a.start,function(n,i){return(a.pos*(a.end[i]-n)+n)}).join(' ');(b?b.nodeValue=d:a.elem.setAttribute('viewBox',d))};function parseViewBox(a){var b=a.split(/[, ]+/);for(var i=0;i<b.length;i++){b[i]=parseFloat(b[i]);if(isNaN(b[i])){b[i]=0}}while(b.length<4){b.push(0)}return b}$.fx.step['svgTransform']=$.fx.step['svg-transform']=function(a){var b=a.elem.attributes.getNamedItem('transform');if(!a.set){a.start=parseTransform(b?b.nodeValue:'');a.end=parseTransform(a.end,a.start);a.set=true}var c='';for(var i=0;i<a.end.order.length;i++){switch(a.end.order.charAt(i)){case't':c+=' translate('+(a.pos*(a.end.translateX-a.start.translateX)+a.start.translateX)+','+(a.pos*(a.end.translateY-a.start.translateY)+a.start.translateY)+')';break;case's':c+=' scale('+(a.pos*(a.end.scaleX-a.start.scaleX)+a.start.scaleX)+','+(a.pos*(a.end.scaleY-a.start.scaleY)+a.start.scaleY)+')';break;case'r':c+=' rotate('+(a.pos*(a.end.rotateA-a.start.rotateA)+a.start.rotateA)+','+(a.pos*(a.end.rotateX-a.start.rotateX)+a.start.rotateX)+','+(a.pos*(a.end.rotateY-a.start.rotateY)+a.start.rotateY)+')';break;case'x':c+=' skewX('+(a.pos*(a.end.skewX-a.start.skewX)+a.start.skewX)+')';case'y':c+=' skewY('+(a.pos*(a.end.skewY-a.start.skewY)+a.start.skewY)+')';break;case'm':var d='';for(var j=0;j<6;j++){d+=','+(a.pos*(a.end.matrix[j]-a.start.matrix[j])+a.start.matrix[j])}c+=' matrix('+d.substr(1)+')';break}}(b?b.nodeValue=c:a.elem.setAttribute('transform',c))};function parseTransform(a,b){a=a||'';if(typeof a==='object'){a=a.nodeValue}var c=$.extend({translateX:0,translateY:0,scaleX:0,scaleY:0,rotateA:0,rotateX:0,rotateY:0,skewX:0,skewY:0,matrix:[0,0,0,0,0,0]},b||{});c.order='';var d=/([a-zA-Z]+)\(\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*(?:[\s,]\s*([+-]?[\d\.]+)\s*[\s,]\s*([+-]?[\d\.]+)\s*[\s,]\s*([+-]?[\d\.]+)\s*)?)?)?\)/g;var e=d.exec(a);while(e){switch(e[1]){case'translate':c.order+='t';c.translateX=parseFloat(e[2]);c.translateY=(e[3]?parseFloat(e[3]):0);break;case'scale':c.order+='s';c.scaleX=parseFloat(e[2]);c.scaleY=(e[3]?parseFloat(e[3]):c.scaleX);break;case'rotate':c.order+='r';c.rotateA=parseFloat(e[2]);c.rotateX=(e[3]?parseFloat(e[3]):0);c.rotateY=(e[4]?parseFloat(e[4]):0);break;case'skewX':c.order+='x';c.skewX=parseFloat(e[2]);break;case'skewY':c.order+='y';c.skewY=parseFloat(e[2]);break;case'matrix':c.order+='m';c.matrix=[parseFloat(e[2]),parseFloat(e[3]),parseFloat(e[4]),parseFloat(e[5]),parseFloat(e[6]),parseFloat(e[7])];break}e=d.exec(a)}if(c.order==='m'&&Math.abs(c.matrix[0])===Math.abs(c.matrix[3])&&c.matrix[1]!==0&&Math.abs(c.matrix[1])===Math.abs(c.matrix[2])){var f=Math.acos(c.matrix[0])*180/Math.PI;f=(c.matrix[1]<0?360-f:f);c.order='rt';c.rotateA=f;c.rotateX=c.rotateY=0;c.translateX=c.matrix[4];c.translateY=c.matrix[5]}return c}$.each(['fill','stroke'],function(i,e){var f=e.charAt(0).toUpperCase()+e.substr(1);$.fx.step['svg'+f]=$.fx.step['svg-'+e]=function(a){if(!a.set){a.start=$.svg._getColour(a.elem,e);var b=(a.end==='none');a.end=(b?$.svg._getColour(a.elem.parentNode,e):$.svg._getRGB(a.end));a.end[3]=b;$(a.elem).css(e,'');a.set=true}var c='rgb('+[Math.min(Math.max(parseInt((a.pos*(a.end[0]-a.start[0]))+a.start[0],10),0),255),Math.min(Math.max(parseInt((a.pos*(a.end[1]-a.start[1]))+a.start[1],10),0),255),Math.min(Math.max(parseInt((a.pos*(a.end[2]-a.start[2]))+a.start[2],10),0),255)].join(',')+')';c=(a.end[3]&&a.state===1?'none':c);var d=a.elem.attributes.getNamedItem(e);(d?d.nodeValue=c:a.elem.setAttribute(e,c))}});$.svg._getColour=function(a,b){a=$(a);var c;do{c=a.attr(b)||a.css(b);if((c!==''&&c!=='none')||a.hasClass($.svg.markerClassName)){break}}while(a=a.parent());return $.svg._getRGB(c)};$.svg._getRGB=function(a){var b;if(a&&a.constructor===Array){return(a.length===3||a.length===4?a:k['none'])}if(b=/^rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)$/.exec(a)){return[parseInt(b[1],10),parseInt(b[2],10),parseInt(b[3],10)]}if(b=/^rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)$/.exec(a)){return[parseFloat(b[1])*2.55,parseFloat(b[2])*2.55,parseFloat(b[3])*2.55]}if(b=/^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/.exec(a)){return[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]}if(b=/^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/.exec(a)){return[parseInt(b[1]+b[1],16),parseInt(b[2]+b[2],16),parseInt(b[3]+b[3],16)]}return k[$.trim(a).toLowerCase()]||k['none']};var k={'':[255,255,255,1],none:[255,255,255,1],aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],grey:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}})(jQuery);