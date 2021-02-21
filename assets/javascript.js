

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


//   API STEAM

const url = 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=381210&key=90FD73BE9E7FC2FEECB97258E9C79786&steamid=76561198036456872';
// Je stocke l'url de l'api

    function recupererSucess() {
        let requete = new XMLHttpRequest();
        // Je crée l'objet qui récupère les infos 

        requete.open('GET', url);
        // j'ouvre l'url

        requete.responseType = 'json';
        // Je précise quel est le format de l'url

        requete.send();
        // J'envoie ma demande

        requete.onload = function() {
            if (requete.readyState === XMLHttpRequest.DONE) {
                if (requete.status === 200) {
                    let reponse = requete.response;
                    let success = reponse.playerstats.achievements;
                    console.log(success)
                    document.querySelector('#sucess').textContent = success;
                } else {
                    alert('un problème est survenu');
            }
        }
    }
	console.log('prix actualisé');
}
recupererSucess();