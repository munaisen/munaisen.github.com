/*
 Name:yangsen
 Description:
 Version:1.0
 Author: wangzhe
 jason.ys@foxmail.com
*/
jQuery(document).ready(function() {
	inset_wacth_graduation();
	clockmove();
});

function inset_wacth_graduation() {
	var wg = "",
		wh = "";
	for(var i = 1; i <= 60; i++) {
		if(i % 5 == 0) {
			wg = wg + "<li class='watch_graduation watch_graduation_hour' style='-webkit-transform: rotate(" + i * -6 + "deg);-moz-transform: rotate(" + i * -6 + "deg);-o-transform: rotate(" + i * -6 + "deg);'></li>";
		} else {
			wg = wg + "<li class='watch_graduation' style='-webkit-transform: rotate(" + i * -6 + "deg);-moz-transform: rotate(" + i * -6 + "deg);-o-transform: rotate(" + i * -6 + "deg);'></li>";
		};
	};
	for(var i = 12; i >= 1; i--) {
		wh = wh + "<li class='watch_number watch_number" + i + "'>" + i + "</li>";
		//alert(i);
	};
	$("#watch_graduation_box").append(wg);
	$("#watch_number_box").append(wh);
}

function yuan(selector, x, y, a, b, angle) {
	var steps = $(selector).length;
	var i = 0;
	var beta = -angle * (Math.PI / 180);
	var sinbeta = Math.sin(beta);
	var cosbeta = Math.cos(beta);
	$(selector).each(function(index) {
		i += (360 / steps);
		var alpha = i * (Math.PI / 180);
		var sinalpha = Math.sin(alpha);
		var cosalpha = Math.cos(alpha);
		var X = x + (a * cosalpha * cosbeta - b * sinalpha * sinbeta);
		var Y = y + (a * cosalpha * sinbeta + b * sinalpha * cosbeta);
		X = Math.floor(X);
		Y = Math.floor(Y);
		$(this).css('top', X + 'px');
		$(this).css('left', Y + 'px');
	});
};

function clockmove() {
	setInterval(function() {
		var seconds = new Date().getSeconds();
		var sdegree = seconds * 6;
		var srotate = "rotate(" + sdegree + "deg)";

		$("#pointer_seconds").css({
			"-moz-transform": srotate,
			"-webkit-transform": srotate,
			"-o-transform": srotate
		});

		var hours = new Date().getHours();
		var mins = new Date().getMinutes();
		var hdegree = hours * 30 + (mins / 2);
		var hrotate = "rotate(" + hdegree + "deg)";

		$("#pointer_hour").css({
			"-moz-transform": hrotate,
			"-webkit-transform": hrotate,
			"-o-transform": hrotate
		});

		var mins = new Date().getMinutes();
		var mdegree = mins * 6;
		var mrotate = "rotate(" + mdegree + "deg)";

		$("#pointer_minute").css({
			"-moz-transform": mrotate,
			"-webkit-transform": mrotate,
			"-o-transform": mrotate
		});

		var days= new Date().getDate();
		$("#date_box_number").html(days);

	}, 1000);

}