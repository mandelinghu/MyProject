/*导航显示*/
$("#nav_bg>ul>li").hover(function(){
	$(this).children("ul").slideDown("fast");
},function(){
	$(this).children("ul").slideUp("fast");
	console.log(2);
});
/*无缝滚动*/
var speed1=10; 
var tab=document.getElementById("demo"); 
var tab1=document.getElementById("demo1"); 
//var tab2=document.getElementById("demo2"); 
tab1.innerHTML=tab1.innerHTML+tab1.innerHTML; 
function Marquee(){
	tab1.style.left=tab1.offsetLeft-1+'px';
	if(tab1.offsetLeft<=-tab1.offsetWidth/2){
		tab1.style.left=0;}
} 
var MyMar=setInterval(Marquee,speed1); 
tab.onmouseover=function() {clearInterval(MyMar)}; 
tab.onmouseout=function() {MyMar=setInterval(Marquee,speed1)}; 
/*滚动*/
window.onscroll=function(){
	var t=document.documentElement.scrollTop||document.body.scrollTop;
	var bac=document.getElementById('bac');
	if(t>=300){
		bac.style.display='inline';
	}else{
		bac.style.display='none';
	}
}
$("#bac").click(function(){
	$(this).scrollTop(0);
});
$(".codepic").hover(function(){
	$(this).children(".codepic-logo")[0].style.display="block";
},function(){
	$(this).children(".codepic-logo")[0].style.display="none";
});
//按钮轮播
$(function () {
  //Slideshow 4
  $("#slider4").responsiveSlides({
	auto: true,
	pager: false,
	nav: true,
	speed:500,
	namespace: "callbacks",
	before: function () {
	  $('.events').append("<li>before event fired.</li>");
	},
	after: function () {
	  $('.events').append("<li>after event fired.</li>");
	}
  });

});

