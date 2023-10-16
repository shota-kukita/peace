// スクロールされるたびに実行されるイベントハンドラを設定
$(window).on("scroll", function() {
	let scrollPos = $(window).scrollTop();

	// Object 1
	if (scrollPos > $("#obj1").offset().top - $(window).height() + 100 && scrollPos < $("#obj1").offset().top + $("#obj1").height()) {
		$("#obj1").css("opacity", "1");
		$("#obj1").css("transform", "translateX(0)");
	} else {
		$("#obj1").css("opacity", "0");
		$("#obj1").css("transform", "translateX(-100%)");
	}


	// Object 2
	if (scrollPos > $("#obj2").offset().top - $(window).height() / 2) {
		$("#obj2").css("opacity", "1");
		$("#obj2").css("transform", "translateX(0)");
	} else {
		$("#obj2").css("opacity", "0");
		$("#obj2").css("transform", "translateX(100%)");
	}

	// Object 3
	if (scrollPos > $("#obj3").offset().top - $(window).height() / 2) {
		$("#obj3").css("opacity", "1");
		$("#obj3").css("transform", "translateX(0)");
	} else {
		$("#obj3").css("opacity", "0");
		$("#obj3").css("transform", "translateX(-100%)");
	}

});
