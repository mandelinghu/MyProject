$(".tabb>#tab>li").click(function(){
    $("div[style]").removeAttr("style");
    $("#content"+this.value).attr("style","z-index:1");
})
$(".tabb>#tab>li").on('click',function(event){
	event.preventDefault();
	$('#tab li').removeClass('active');
	$(this).addClass('active');
	$('#tab li').removeClass('acti');
	$('this').addClass('active');
});
$("img").mouseover(function(e){
	var target=e.target;
	$(target).removeClass('fh')
	$(this).addClass("active_m");
});
$("img").mouseout(function(){
	$(this).addClass("fh");
})
