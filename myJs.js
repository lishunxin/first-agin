// JavaScript Document

function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]; 
}

function doMove(obj,step,end,attr,endFn){
	clearInterval(obj.timer);
	step = end>parseInt(getStyle(obj,attr)) ? step : -step;
	obj.timer = setInterval(function (){
		var nowLeft = parseInt(getStyle(obj,attr))+step;
		if(nowLeft>=end&&step>0||nowLeft<=end&&step<0){
			nowLeft = end;
		}
		obj.style[attr] = nowLeft+"px";
		if(parseInt(getStyle(obj,attr))==end){
			clearInterval(obj.timer);
			/*if(endFn){
				endFn();
			}*/
			endFn && endFn();
		}
	},30)
}
function mouseScroll(obj,topFn,bottomFn){
	if(window.navigator.userAgent.indexOf("Firefox")>=0){
		obj.addEventListener("DOMMouseScroll",function (ev){
			ev = ev || event;
			where(ev) ? topFn() : bottomFn();
			ev.preventDefault();
		},false);
	}else{
		obj.onmousewheel = function (ev){
			ev = ev || event
			where(ev) ? topFn() : bottomFn();
			return false;
		}
	}
}
function where(ev){
	var b = true;
	if(ev.wheelDelta){
		b = ev.wheelDelta>0 ? true : false;
	}else{
		b = ev.detail<0 ? true : false;
	}
	return b;
}