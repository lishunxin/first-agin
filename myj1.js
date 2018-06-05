
var oDiv=document.getElementById('box')	;
var aImg=document.getElementsByTagName('img');

 var i=0;
 var timer;
timer=setInterval(function (){
	doMove(oDiv,0,-400,"left");
	
	setTimeout(function (){
		i++;
		oDiv.style.left = "0px";
		aImg[0].src = "img/"+i%10+".jpg";
		aImg[1].src = "img/"+(i+10)%10+".jpg";
		aImg[2].src = "img/"+(i+20)%10+".jpg";
		aImg[3].src = "img/"+(i+30)%10+".jpg";
		aImg[4].src = "img/"+(i+4)%10+".jpg";
		
		
	},2000)
},2000)
