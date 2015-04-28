// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){

$('#btnvibrar').on ('tap', function() {
	navigator.vibrate(1000);
	
	
});  // tap btn_vibrar

$('#btnbeep').on ('tap' , function() {
	  navigator.beep(1);

}); //tap btnbeep

$('#izquierda').on('swipeleft', function(){
	
	alert("barrio a la izq")
	
});

$('#derecha').on('swipright', function (){
	
	alert("barrio a la der")
	
});




});
});
