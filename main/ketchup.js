$(document).ready(function (){
	
	$("#choose-section").change(function() {
		var value_chosen = $("#choose-section").val();
		if(value_chosen == "6math") {
			document.location.href = 'http://nlavee.github.io/main/6Math.html';
		} else if(value_chosen == "7math") {
			document.location.href = 'http://nlavee.github.io/main/7Math.html';
		} else if(value_chosen == "8math") {
			document.location.href = 'http://nlavee.github.io/main/8Math.html';
		} else if(value_chosen == "6science") {
			document.location.href = 'http://nlavee.github.io/main/6Science.html';
		}  else if(value_chosen == "7science") {
			document.location.href = 'http://nlavee.github.io/main/7Science.html';
		}  else if(value_chosen == "8science") {
			document.location.href = 'http://nlavee.github.io/main/8Science.html';
		}  else if(value_chosen == "language") {
			document.location.href = 'http://nlavee.github.io/main/678language.html';
		}
	});
	
	$("#back").click(function() {
		document.location.href = 'http://nlavee.github.io/Ketchup/index.html';
	});

	$(".block1").mouseenter (function(){
		$(this).css({
			"background-image": "url(media/block1.gif)"
		});
	}).mouseleave(function() {
		$(this).css({
			"background-image": "url(media/black.jpg)"
		});
	});
    
    $(".block2").mouseenter (function(){
		$(this).css({
			"background-image": "url(media/block1.gif)"
		});
	}).mouseleave(function() {
		$(this).css({
			"background-image": "url(media/black.jpg)"
		});
	});
    
    $(".block3").mouseenter (function(){
		$(this).css({
			"background-image": "url(media/block1.gif)"
		});
	}).mouseleave(function() {
		$(this).css({
			"background-image": "url(media/black.jpg)"
		});
	});
    
    $(".block4").mouseenter (function(){
		$(this).css({
			"background-image": "url(media/block1.gif)"
		});
	}).mouseleave(function() {
		$(this).css({
			"background-image": "url(media/black.jpg)"
		});
	});
    
    $(".block5").mouseenter (function(){
		$(this).css({
			"background-image": "url(media/block1.gif)"
		});
	}).mouseleave(function() {
		$(this).css({
			"background-image": "url(media/black.jpg)"
		});
	});
    
    $(".block6").mouseenter (function(){
		$(this).css({
			"background-image": "url(media/block1.gif)"
		});
	}).mouseleave(function() {
		$(this).css({
			"background-image": "url(media/black.jpg)"
		});
	});
    
    $(".areas").mouseenter (function(){
    	$(this).css({
    		"color": "#FF0000",
    		"background": "rgba(76,76,76,1)"
    	/* Chrome 10+, Saf5.1+ */
    	});
    }).mouseleave(function() {
    	    	$(this).css({
    		"color": "white",
    		"background-image": "url(media/black.jpg)"	
    	});
    });
    
});
