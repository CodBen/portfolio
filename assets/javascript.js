

(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	
	
	//Switch clair/sombre
	
	$("#switch").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
			$("#switch").removeClass("switched");
			$("#switch-light").html("Passer en mode sombre");
		}
		else {
			$("body").addClass("dark");
			$("#switch").addClass("switched");
			$("#switch-light").html("Passer en mode clair");
		}
	});  
	
  })(jQuery); 



// Porfolio -> Actions boutons

  $(document).ready(function(){
	var zindex = 10;
	
	$("div.card").click(function(e){
	  e.preventDefault();
		
	  var isShowing = false;
  
	  if ($(this).hasClass("show")) {
		isShowing = true
	  }
  
	  if ($("div.cards").hasClass("showing")) {
		$("div.card.show")
		  .removeClass("show");
  
		if (isShowing) {

		  $("div.cards")
			.removeClass("showing");
		} else {

		  $(this)
			.css({zIndex: zindex})
			.addClass("show");
  
		}
  
		zindex++;
  
	  } else {
		$("div.cards")
		  .addClass("showing");
		$(this)
		  .css({zIndex:zindex})
		  .addClass("show");
  
		zindex++;
	  }
	  
	});
  });




var states = ["mettre en place une bdd", "créer un crud en php", "utiliser une api", "animer votre site avec JS", "créer votre site sur symfony 5", "créer un espace client", "rendre votre site responsive", "développer un site vitrine"];
var h = document.querySelector("#writeon");

var typeState = function(s) {
  h.innerHTML += s[0];
  if (s.length > 1) {
    setTimeout(function() {
      typeState(s.substr(1));
    }, 100);
  }
};

var resetState = function() {
  if (h.innerHTML.length < 7) {
    h.innerHTML = "Pour vous, je peux ";
  }
  if (h.innerHTML != "Pour vous, je peux ") {
    h.innerHTML = h.innerHTML.substring(0, h.innerHTML.length - 1);
    setTimeout(function() {
      resetState();
    }, 100);
  }
};

var idle = function(s) {
  if (s % 2 == 0) {
    h.innerHTML += "|";
  } else {
    h.innerHTML = h.innerHTML.substring(0, h.innerHTML.length - 1);
  }
  if (s > 1) {
    setTimeout(function() {
      idle(s - 1);
    }, 500);
  } else {
    resetState();
  }
};

var cState = -1;
var writeon = function() {
  cState = (cState + 1) % states.length;
  typeState(states[cState]);
  setTimeout(function() {
    idle(6);
  }, 100 * states[cState].length + 100);
  setTimeout(function() {
    writeon();
  }, 200 * states[cState].length + 500 * 6);
};

writeon();
