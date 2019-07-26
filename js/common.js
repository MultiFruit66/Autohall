$(function() {

$("#map").click(function() {
	$(".icon_map").addClass("active");
	$(".dark_bg").addClass("active");
	$(".dark_bg").click(function(){
		$(".icon_map").removeClass("active");
		$(".dark_bg").removeClass("active");
	});
});

$(".sorry").click(function() {
	$(".icon_sorry").addClass("active");
	$(".dark_bg").addClass("active");
	$(".dark_bg").click(function(){
		$(".icon_sorry").removeClass("active");
		$(".dark_bg").removeClass("active");
	});
});

$(".call").click(function() {
	$(".icon_call").addClass("active");
	$(".dark_bg").addClass("active");
	$(".dark_bg").click(function(){
		$(".icon_call").removeClass("active");
		$(".dark_bg").removeClass("active");
	});
	$(".icon_call_button").click(function(){
		$(".icon_call").removeClass("active");
		$(".dark_bg").removeClass("active");
	});
});

$(".application").click(function() {
	$(".icon_button_foto").addClass("active");
	$(".dark_bg").addClass("active");
	$(".dark_bg").click(function(){
		$(".icon_button_foto").removeClass("active");
		$(".dark_bg").removeClass("active");
	});
	$(".icon_call_button").click(function(){
		$(".icon_button_foto").removeClass("active");
		$(".dark_bg").removeClass("active");
	});
});

$(".price_b").click(function() {
	$(".icon_price").addClass("active");
	$(".dark_bg").addClass("active");
	$(".dark_bg").click(function(){
		$(".icon_price").removeClass("active");
		$(".dark_bg").removeClass("active");
	});
});

$("#converter").on("input", function() {
	var valNum = $("#converter").val();
	var usd =valNum * 0.015;
	var eur =valNum * 0.013;
	usd =parseFloat(usd.toFixed(3));
	eur =parseFloat(eur.toFixed(3));
	$("#converterOutUsd").html("usd: "+usd);
	$("#converterOutEur").html("eur: "+eur);
});

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
	e.preventDefault(); 
var target = this.hash,
	$target = $(target);
$('html, body').stop().animate({
	'scrollTop': $target.offset().top
	}, 500, 'swing', function () {
	window.location.hash = target;
	});
	});

$(".services_bottom").click(function() {
	//$(".list").slideToggle("slow");
	$(".services_bottom:not(this)").removeClass("active_b");
	$(this).toggleClass("active_b");
	$(".services_bottom:not(this)").children(".diamond").css({"display" : "none"});
	$(".active_b").children(".diamond").css({"display" : "block"});
});
});

document.body.onload = function() {
	setTimeout(function() {
		var preloader = document.getElementById("page-preloader");
		if ( !preloader.classList.contains('done')) {
			preloader.classList.add("done");
		}
	}, 100);
}
