// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){

$('#btnvibrar').on ('tap', function() {
	navigator.vibrate(1000);
	
	
});  // tap btn_vibrar

$('#btnbeep').on ('tap' , function() {
	  navigator.notification.beep(2);
	  

}); //tap btnbeep

$('#izquierda').on('swipeleft', function(){
	
	alert("barrio a la izq")
	
});

$('#derecha').on('swiperight', function (){
	
	alert("barrio a la der")
	
});




});
});
