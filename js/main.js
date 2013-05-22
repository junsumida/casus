$(document).ready(function(){
	var template = $("#template").text();
	var temp = "";
	for(var i=1; i<23; i++){
		var img = null;
		i < 10 ? number = "0" + i : number = i;
		temp += _.template(template, {img:number})
	}
	$("#full_container").append(temp);

	//yabai comment
	$(".yabai").on("click", function(event){
		event.preventDefault();
		var click_count = $(this).data("click");
		click_count += 1;
		$(this).html(click_count + '<span class="ya">ヤ</span>バイ');
		$(this).data("click", click_count);
	});
});
