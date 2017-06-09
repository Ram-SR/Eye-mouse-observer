// Mouse followed by eyes

$(function () {
	$('html').mousemove(function (e) {
		// (x1,y2) (x2,y2) are div points and x3,y3(mouse). These are the points of triangle
		var x1, y1, x2, y2, x3, y3, dAB, dBC, dAC; // dAB, dBC, dAC are the distances between points
		var degA, degArad;	// degA holds angle at A and degArad holds angle at A in radians
		x3 = e.pageX;	// mouse x position
		y3 = e.pageY;	// mouse y position
		var pos = $('#retina1').position();
		x1 = x2 = pos.left;	// retina1 div x position
		y1 = pos.top;	// retina1 div y position
		y2 = pos.top + $('#retina1').height();	// retina1 y position + height gives the y2 position
		dAB = Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2)); // calcuate distance b/w points
		dBC = Math.sqrt(Math.pow(x3-x2, 2) + Math.pow(y3-y2, 2));
		dAC = Math.sqrt(Math.pow(x3-x1, 2) + Math.pow(y3-y1, 2));
		degArad = Math.acos((Math.pow(dAB, 2) + Math.pow(dAC, 2) - Math.pow(dBC, 2))/(2 * dAB * dAC)); // find angle in radians
		degA = degArad * 57.2958; // convert angle into degrees
		if (e.pageX >= pos.left) {
			$('#retina1').css({
				"transform":"rotate(" + (180 - degA) + "deg)" // apply to retina1 div
			});
		} else {
			$('#retina1').css({
				"transform":"rotate(" + (180 + degA) + "deg)"
			});				
		}

		// below logic is same as above logic for retina2 div
		var x11, y11, x22, y22, dAB1, dBC1, dAC1;
		var  degA1, degArad1;			
		var pos1 = $('#retina2').position();
		x11 = x22 = pos1.left;
		y11 = pos1.top;
		y22 = pos1.top + $('#retina2').height();
		dAB1 = Math.sqrt(Math.pow(x22-x11, 2) + Math.pow(y22-y11, 2));
		dBC1 = Math.sqrt(Math.pow(x3-x22, 2) + Math.pow(y3-y22, 2));
		dAC1 = Math.sqrt(Math.pow(x3-x11, 2) + Math.pow(y3-y11, 2));
		degArad1 = Math.acos((Math.pow(dAB1, 2) + Math.pow(dAC1, 2) - Math.pow(dBC1, 2))/(2 * dAB1 * dAC1));
		degA1 = degArad1 * 57.2958;				
		if (e.pageX <= pos1.left) {
			$('#retina2').css({
				"transform":"rotate(" + (180 + degA1) + "deg)"
			});
		} else {
			$('#retina2').css({
				"transform":"rotate(" + (180 - degA1) + "deg)"
			});
		}


		// Ignore below properties. these are just applied by css
		if (event.pageX < 550) {
			$(".left-lid, .right-lid").css({
				"margin-left":"-80px",
				"transition":"0.2s linear"
			});
		}
		if (event.pageX < 750 && event.pageX > 600 ) {
			$(".left-lid").css({
				"margin-left":"0px",
				"transition":"0.2s linear"
			});
			$(".right-lid").css({
				"margin-left":"-80px",
				"transition":"0.2s linear"
			});
		}

		if (event.pageX > 750 && event.pageX < 820) {
			$(".right-lid").css({
				"margin-left":"0px",
				"transition":"0.2s linear"
			});
		}
		if (event.pageX > 820) {
			$(".left-lid, .right-lid").css({
				"margin-left":"80px",
				"transition":"0.2s linear"
			});
		}
		if (event.pageY < 200) {
			$(".left-lid, .right-lid").css({
				"margin-top":"-10px",
				"transition":"0.2s linear"
			});
		}
		if (event.pageY < 300 && event.pageY > 200) {
			$(".left-lid, .right-lid").css({
				"margin-top":"0px",
				"transition":"0.2s linear"
			});
		}
		if (event.pageY > 300) {
			$(".left-lid, .right-lid").css({
				"margin-top":"10px",
				"transition":"0.2s linear"
			});
		}
	});
});