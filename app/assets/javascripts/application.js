// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// $(document).ready(function(){
// 	$(".title,.egg").click(function(){
// 		$(".title").fadeOut(500);
// 	  if ($(".egg").css("transform") == "none"){
// 	  	$(".egg").css("transform","rotate(-95deg)");
// 	  	$(".egg").css("width","200vw");
// 	  	$(".egg").css("height","200vh");
// 	  	$(".egg").css("top","-40%");
// 	  	$(".egg").css("left","-45%");
// 	  	$(".egg").css("position","absolute");
// 	  }else{
// 	  	$(".egg").css("transform","");
// 	  }
// 	});
// });

$(document).ready(function(){
	$(".title,.egg").click(function(){
		$(".title").fadeOut(500);
		$(".egg").fadeOut(1000);
		$(".newegg,.answer").fadeIn(1000);
		$(".newegg,.answer").click(function(){
			$(this).fadeOut(500,function(){
				$(this).fadeIn(500);
			});
		});
	});
});

