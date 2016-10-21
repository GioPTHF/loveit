(function(){
  angular.module('loveitSite.directives', [])
  .directive('headerTop', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/header-top.html',
      controller: function($document){

        $('li.submenu ul').slideUp(0);
        $('.servicesOptions').hover(function(){
          $('li.submenu ul').slideDown();
        }, function(){
          $('li.submenu ul').slideUp();
        });

        var status = false;
        var tam = 0;
        function verifySize(){
          tam = $(window).width();
          if(tam<767){
            $('.headerNav').slideUp();
            status = false;
          }else{
            $('.headerNav').slideDown();
          }
        }
        $(window).resize(function(){
          verifySize();
        });
        verifySize();
        $(document).on('click', '.menu label#hamburger input', function(){
          if(status){
            $('.headerNav').slideUp();
          }else{
            $('.headerNav').slideDown();
          }
          status = !status;
        });
      }
    }
  })
  .directive('tableInformation', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/table-information.html',
      controller: function($document){

      }
    }
  })
  .directive('swiperSlider', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/swiper-slider.html',
      controller: function($document){
        setTimeout(function(){
          var mySwiper = new Swiper('.swiper-home',{
            pagination: '.home-pagination',
            loop:true,
            grabCursor: false,
            paginationClickable: true,
            autoplay:false
          });
        },80);
      }
    };
  })
  .directive('nosotrosContent', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/nosotros-content.html'
    };
  })
  .directive('amenidadesContent', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/amenidades-content.html',
      controller: function($document){
        $('.top-left-top,.top-left-bottom,.top-right-box,.mid-left-bottom,.bottom-left,.bottom-right-bottom').click(function(){
          var idAmenidad = $(this).attr('data-id');
          var namefunction = 'sliderGalleryAmenidades';
          $.ajax({
            url: "./admin/php/functions.php",
            type: "POST",
            data: {
              idAmenidad: idAmenidad,
              namefunction: namefunction
            },
            success: function(result){
              // alert(result);
              $('.swiper-wrapper').html(result);
            },
            error: function(error){
              alert(error);
            }
          });

          $("html, body").animate({
            'scrollTop' : '0'
          }, 500, function(){});
          $('.amenidades-wrapper').removeClass('fadeIn');
          $('.amenidades-wrapper').addClass('fadeOut');
          $('.amenidades-wrapper').css({'display' : 'none'});
          $('#informationShow').removeClass('fadeOut');
          $('#informationShow').css({'display' : 'flex'});
          $('#informationShow').addClass('fadeIn');
          
          setTimeout(function(){
            var mySwiper2 = new Swiper('.swiper-container',{
              pagination: '.swiper-pagination',
              loop:true,
              grabCursor: false,
              paginationClickable: true,
              autoplay:false
            });
          },80);

        });
      }
    };
  })
  .directive('serviciosContent', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/servicios-content.html',
      controller: function($document){

      }
    };
  })
  .directive('serviciosPremiumContent', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/servicios-premium-content.html',
      controller: function($document){

      }
    };
  })
  .directive('footerStyle1', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/footer-style-1.html',
      controller: function($document){

      }
    };
  })
  .directive('gridPhotos', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/grid-photos.html',
      controller: function($document){
        $('.topImage,.bottomImage,.leftBox').click(function(){
          var idEspacio = $(this).attr('data-id');
          var namefunction = 'sliderGallerySpaces';
          $.ajax({
            url: "./admin/php/functions.php",
            type: "POST",
            data: {
              idEspacio: idEspacio,
              namefunction: namefunction
            },
            success: function(result){
              $('.swiper-wrapper').html(result);
            },
            error: function(error){
              alert(error);
            }
          });

          $("html, body").animate({
            'scrollTop' : '0'
          }, 500, function(){});
          $('#sectionSpaces').removeClass('fadeIn');
          $('#sectionSpaces').addClass('fadeOut');
          $('#sectionSpaces').css({'display' : 'none'});
          $('#informationShow').removeClass('fadeOut');
          $('#informationShow').css({'display' : 'flex'});
          $('#informationShow').addClass('fadeIn');

          setTimeout(function(){
            var mySwiper2 = new Swiper('.swiper-container',{
              pagination: '.swiper-pagination',
              loop:true,
              grabCursor: false,
              paginationClickable: true,
              autoplay:false
            });
          },80);

        });
        $('.closeDescriptionAmenidades').click(function(){
          alert('ok');
          $("html, body").animate({
            'scrollTop' : '0'
          }, 500, function(){});
          $('#informationShow').removeClass('fadeIn');
          $('#informationShow').addClass('fadeOut');
          $('#informationShow').css({'display' : 'none'});
          $('#sectionSpaces').removeClass('fadeOut');
          $('#sectionSpaces').css({'display' : 'flex'});
          $('#sectionSpaces').addClass('fadeIn');
        });
      }
    }
  })
  .directive('gridPhotosHabitaciones', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/grid-photos-habitaciones.html',
      controller: function($document){
        $('.topImage,.bottomImage,.leftBox').click(function(){
          var idHabitacion = $(this).attr('data-id');
          var namefunction = 'sliderGalleryRooms';
          $.ajax({
            url: "./admin/php/functions.php",
            type: "POST",
            data: {
              idHabitacion: idHabitacion,
              namefunction: namefunction
            },
            success: function(result){
              $('.swiper-wrapper').html(result);
            },
            error: function(error){
              alert(error);
            }
          });

          $("html, body").animate({
            'scrollTop' : '0'
          }, 500, function(){});
          $('#sectionSpaces').removeClass('fadeIn');
          $('#sectionSpaces').addClass('fadeOut');
          $('#sectionSpaces').css({'display' : 'none'});
          $('#informationShow').removeClass('fadeOut');
          $('#informationShow').css({'display' : 'flex'});
          $('#informationShow').addClass('fadeIn');
          
          setTimeout(function(){
            var mySwiper2 = new Swiper('.swiper-container',{
              pagination: '.swiper-pagination',
              loop:true,
              grabCursor: false,
              paginationClickable: true,
              autoplay:false
            });
          },80);

        });
        $('.closeDescriptionAmenidades').click(function(){
          alert('ok');
          $("html, body").animate({
            'scrollTop' : '0'
          }, 500, function(){});
          $('#informationShow').removeClass('fadeIn');
          $('#informationShow').addClass('fadeOut');
          $('#informationShow').css({'display' : 'none'});
          $('#sectionSpaces').removeClass('fadeOut');
          $('#sectionSpaces').css({'display' : 'flex'});
          $('#sectionSpaces').addClass('fadeIn');
        });
      }
    }
  })        
  .directive('roomDescription', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/room-description.html',
      controller: function($document){
        $('.closeDescription').click(function(){
          $("html, body").animate({
            'scrollTop' : '0'
          }, 500, function(){});
          $('#informationShow').removeClass('fadeIn');
          $('#informationShow').addClass('fadeOut');
          $('#informationShow').css({'display' : 'none'});
          $('#sectionHabitaciones').removeClass('fadeOut');
          $('#sectionHabitaciones').css({'display' : 'flex'});
          $('#sectionHabitaciones').addClass('fadeIn');
        });
      }
    }
  })
  .directive('footerBottomContact', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/footer-bottom-contact.html',
      controller: function($document){
				$('#formContact').submit(function(e){
					var data = $(this).serialize();
					$.ajax({
						type: 'POST',
						url: 'php/sendEmail.php',
						data: data,
						success : function(result){
              console.log("Enviado.");
							setTimeout(function(){
								$('#formContact')[0].reset();
							}, 1500);
						},
						error: function(){
							console.log('error');
						},
						timeout: 10000
					});
					e.preventDefault();
				});
			}
    }
  })
  .directive('swiperSliderRoom', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/swiper-slider-room.html',
      controller: function($document){

        $( ".selectHover" ).click(function() {
          var mySwiper3 = new Swiper('.swiper-room',{
            pagination: '.swipper-pagination-room',
            loop:true,
            grabCursor: false,
            paginationClickable: true,
            autoplay:false
          });
        });

      }
    };
  })
  .directive('gridRestaurant', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/grid-restaurant.html'
    }
  })
  .directive('galleryDescription', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/gallery-description.html',
      controller: function($document){
        $('.closeDescriptionAmenidades').click(function(){
          $("html, body").animate({
            'scrollTop' : '0'
          }, 500, function(){});
          $('#informationShow').removeClass('fadeIn');
          $('#informationShow').addClass('fadeOut');
          $('#informationShow').css({'display' : 'none'});
          $('.amenidades-wrapper').removeClass('fadeOut');
          $('.amenidades-wrapper').css({'display' : 'block'});
          $('.amenidades-wrapper').addClass('fadeIn');
        });

      }
    }
  })
  .directive('galleryDescriptionSpaces', function(){
    return {
      restrict: 'E',
      templateUrl: './partials/gallery-description-spaces.html',
      controller: function($document){
        $('.closeDescriptionSpaces').click(function(){
          $("html, body").animate({
            'scrollTop' : '0'
          }, 500, function(){});
          $('#informationShow').removeClass('fadeIn');
          $('#informationShow').addClass('fadeOut');
          $('#informationShow').css({'display' : 'none'});
          $('#sectionSpaces').removeClass('fadeOut');
          $('#sectionSpaces').css({'display' : 'block'});
          $('#sectionSpaces').addClass('fadeIn');
        });

      }
    }
  })
})();
