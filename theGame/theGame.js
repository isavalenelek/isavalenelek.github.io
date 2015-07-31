var hasKey = false;
var livingKey = false;
var hasShovel = false;

$(document).ready(function(){
	$("#bedLiving").click(function(){
		if(livingKey) {
			$("#wrapperID").toggleClass("wrapper");
			$("#wrapperID").toggleClass("secondWrapper");
			$(".bed").toggleClass("hidden");
			$(".living").toggleClass("hidden");
		} else {
			alert("It's locked!");
		}
	});
	$("#bedHall").click(function(){
		if(hasKey){
			$("#wrapperID").toggleClass("thirdWrapper");
			$("#wrapperID").toggleClass("wrapper");
			$(".bed").toggleClass("hidden");
			$(".hall").toggleClass("hidden");
		} else {
			var answer = prompt("I turn my head,\nYou are free to go.\nI turn again,\nYou will sit and rot.\nAll I am,\nis my crooked teeth.\nWhat am I?");
			if(answer == "key") {
				alert("Well done! This pass is now open.")
				hasKey = true;
			} else {
				alert("Try again.")
			}

		}


	});
	$("#livingHall").click(function(){
		if(livingKey) {
			$("#wrapperID").toggleClass("thirdWrapper");
			$("#wrapperID").toggleClass("secondWrapper");
			$(".hall").toggleClass("hidden");
			$(".living").toggleClass("hidden");
		} else {
			alert("It's locked!");
		}
	});	

	$("#shovel").click(function() {
		$(this).toggleClass("hidden");
		$(this).toggleClass("hall");
		hasShovel = true;
	});
	$("#key").click(function() {
		$(this).toggleClass("hidden");
		$(this).toggleClass("bed");
		livingKey=true;
	});
	$("#hole").click(function() {
		if(hasShovel) {
			alert("You escaped and found the hidden garden. well done!");
			$(".garden").toggleClass("hidden");
			$("#wrapperID").toggleClass("garden");
			$("#wrapperID").toggleClass("secondWrapper");
		} else {
			alert("The hole is not complete. You can't get through yet.");
		}

	});

});