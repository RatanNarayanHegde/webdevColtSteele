//strike off lists
$("ul").on("click", "li",function () {
	$(this).toggleClass("completed");
});

//to delete

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();

});

//add listener

$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		var text=$(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+text+"</li>");
		$(this).val("");

	}
});

$("input[type='text']").fadeToggle(10);
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});