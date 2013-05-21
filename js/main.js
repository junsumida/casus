$(document).ready(function(){
	var template = $("#template").text();
	var temp = "";
	for(var i=1; i<15; i++){
		var img = null;
		i < 10 ? number = "0" + i : number = i;
		temp += _.template(template, {img:number})
	}
	$("#full_container").append(temp);
});
