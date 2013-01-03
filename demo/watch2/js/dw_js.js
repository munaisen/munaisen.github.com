/*
 Name:yangsen
 Description:
 Version:1.0
 Author: wangzhe
 jason.ys@foxmail.com
*/
jQuery(document).ready(function() {
	clockmove();
});

function clockmove() {
	setInterval(function() {
		var seconds = new Date().getSeconds();
		var hours = new Date().getHours();
		var mins = new Date().getMinutes();
		var h1,h2,m1,m2;
		if(hours<10){
			$("#hours_1").attr("class","dw_box_n_box dw_number0");
			$("#hours_2").attr("class","dw_box_n_box dw_number"+hours);
		}
		else{
			//h1=Math.floor(hours/10);
			$("#hours_1").attr("class","dw_box_n_box dw_number"+Math.floor(hours/10));
			$("#hours_2").attr("class","dw_box_n_box dw_number"+hours%10);
		}
		if(hours<10){
			$("#mins_1").attr("class","dw_box_n_box dw_number0");
			$("#mins_2").attr("class","dw_box_n_box dw_number"+mins);
		}
		else{
			$("#mins_1").attr("class","dw_box_n_box dw_number"+Math.floor(mins/10));
			$("#mins_2").attr("class","dw_box_n_box dw_number"+mins%10);
		}
 		//alert(h1);
		//var days= new Date().getDate();

	}, 1000);

}