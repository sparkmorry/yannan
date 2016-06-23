var bgRadio = 1070/584.0;
var jQcanvas = $("#j-canvas");

var calBgSize = function(){
	var w = $(window).width(),
		h = $(window).height();
	var width = Math.min(w*0.8, h*bgRadio);
	var height = width / bgRadio;
	return [width, height]
}
var size = calBgSize();
jQcanvas.css({'height': size[1], 'width': size[0]});

(function(start, interval){
	$(".d500").delay(start).fadeIn(interval);
	$(".pc").delay(start+interval/1.2).fadeIn(interval);
	$(".mobile").delay(start+interval*2/1.2).fadeIn(interval);
	$('.bird').delay(start+interval*3/1.2).fadeIn().animate({'margin-left': '-30%', 'top': '30%'}, 800);
	$('.text').delay(start+interval*4/1.2).fadeIn(interval);
})(200, 1000);