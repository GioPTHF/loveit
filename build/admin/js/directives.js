(function(){
	angular.module('therappyPanel.directives', [])
	.directive('topNav', function(){
		return{
			restrict: 'E',
			templateUrl: './../partials/top-nav.php',
			controller: function($document){
				var open = true;
				$(window).resize(function(){
					open = true;
					if($(window).width()>1366){
						$('.menu-nav').css({'margin-left' : '0%'});
						$('.panel-cont').css({'width' : '85%', 'left' : '15%'});
					}else{
						if($(window).width()>768){
							$('.menu-nav').css({'margin-left' : '0%'});
							$('.panel-cont').css({'width' : '80%','left' : '20%'});
						}else{
							if($(window).width()>640){
								$('.menu-nav').css({ 'margin-left' : '0%'});
								$('.panel-cont').css({ 'width' : '75%', 'left' : '25%'});
							}
						}
					}
				});
				$('#menuha').click(function(){
					if(open){
						if($(window).width()>1366){
							$('.menu-nav').css({'margin-left' : '-15%'});
							$('.panel-cont').css({'width' : '100%', 'left' : '0'});
						}else{
							if($(window).width()>768){
								$('.menu-nav').css({'margin-left' : '-20%'});
								$('.panel-cont').css({'width' : '100%','left' : '0'});
							}else{
								if($(window).width()>640){
									$('.menu-nav').css({ 'margin-left' : '-25%'});
									$('.panel-cont').css({ 'width' : '100%', 'left' : '0'});
								}
							}
						}
					}else{
						if($(window).width()>1366){
							$('.menu-nav').css({'margin-left' : '0%'});
							$('.panel-cont').css({'width' : '85%', 'left' : '15%'});
						}else{
							if($(window).width()>768){
								$('.menu-nav').css({'margin-left' : '0%'});
								$('.panel-cont').css({'width' : '80%','left' : '20%'});
							}else{
								if($(window).width()>640){
									$('.menu-nav').css({ 'margin-left' : '0%'});
									$('.panel-cont').css({ 'width' : '75%', 'left' : '25%'});
								}
							}
						}
					}
					open = !open;
				});
				$('.logout').click(function(){
					var namefunction = 'sessionDestroy';
					$.ajax({
						beforeSend: function(){
						},
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction : namefunction
						},
						success: function(result){
							location.reload();
						},
						error: function(error){
						},
						complete: function(){
						},
						timeout: 10000
					});
				});
			}
		};
	})
	.directive('menuNav', function(){
		return{
			restrict: 'E',
			templateUrl: './../partials/menu-nav.php',
			controller: function($document){
				$(window).resize(function(){
					if($(window).width()>1366){
						$('.menu-nav').css({'margin-left' : '0%'});
						$('.panel-cont').css({'width' : '85%', 'left' : '15%'});
					}else{
						if($(window).width()>768){
							$('.menu-nav').css({'margin-left' : '0%'});
							$('.panel-cont').css({'width' : '80%','left' : '20%'});
						}else{
							if($(window).width()>640){
								$('.menu-nav').css({ 'margin-left' : '0%'});
								$('.panel-cont').css({ 'width' : '75%', 'left' : '25%'});
							}
						}
					}
				});
			}
		};
	})
	.directive('listHomeSlider', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/list-home-slider.html',
			controller: function($document){
				$(document).on('click', '.deleteAmenidad', function(){
					var idAme = $(this).attr('data-id');
					var namefunction = 'removeAmenidad';
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							idAme: idAme
						},
						success: function(result){
							$('.clickUpdate').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#setAmenidad').submit(function(){
					var ajaxData = new FormData();
					ajaxData.append("namefunction","addNewAmenidad");
					ajaxData.append("data",$(this).serialize());
					$.each($("#setAmenidad input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
							$('.clickUpdate').trigger('click');
							$('#setAmenidad')[0].reset();
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})
	.directive('listProducts', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/list-products.html',
			controller: function($document){
				$(document).on('click', '.deleteProduct', function(){
					var idProduct = $(this).attr('data-id');
					var namefunction = 'removeProduct';
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							idProduct: idProduct
						},
						success: function(result){
							$('.clickUpdate').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#setProduct').submit(function(){
					var ajaxData = new FormData();
					ajaxData.append("namefunction","addNewProduct");
					ajaxData.append("data",$(this).serialize());
					$.each($("#setProduct input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
							$('.clickUpdate').trigger('click');
							$('#setProduct')[0].reset();
						},
						error: function(error){
							alert(error);
						}
					});
				});			
			}
		}
	})
	.directive('listEspacio', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/list-espacio.html',
			controller: function($document){
				$(document).on('click', '.deleteEspacio', function(){
					var idEspacio = $(this).attr('data-id');
					var namefunction = 'removeEspacios';
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							idEspacio: idEspacio
						},
						success: function(result){
							$('.clickUpdate').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#setEspacio').submit(function(){
					var ajaxData = new FormData();
					ajaxData.append("namefunction","addNewEspacios");
					ajaxData.append("data",$(this).serialize());
					$.each($("#setEspacio input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
							$('.clickUpdate').trigger('click');
							$('#setEspacio')[0].reset();
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})	
	.directive('detailProduct', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/detail-product.html',
			controller: function($document){
				function readURL(input){
					if (input.files && input.files[0]) {
						var reader = new FileReader();
						reader.onload = function (e) {
					 		$('#imageSelector').attr('src', e.target.result);
			 			}
						reader.readAsDataURL(input.files[0]);
	 				}
				}
				$('#setImage').change(function(){
					readURL(this);
				});
				$('#changeImage').submit(function(){
					var productId = $('#productId').val();
					var ajaxData = new FormData();
					ajaxData.append("productId",productId);
					ajaxData.append("namefunction","modifyProductImage");
					$.each($("#changeImage input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
							location.href = "#/habitaciones";
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#changeProduct').submit(function(){
					var data = $(this).serialize();
					var namefunction = "modifyProduct";
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							data: data,
							namefunction: namefunction
						},
						success: function(result){
							location.href = "#/habitaciones";
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})
	.directive('detailProduct2', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/detail-product2.html',
			controller: function($document){
				$(document).on('click', '.deleteProduct', function(){
					var idProduct = $(this).attr('data-id');
					var namefunction = 'removeProductimg';
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							idProduct: idProduct
						},
						success: function(result){
							$('.actualizarimg').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#setProductimg').submit(function(){
					var ajaxData = new FormData();
					ajaxData.append("namefunction","addNewProductimg");
					ajaxData.append("data",$(this).serialize());
					$.each($("#setProductimg input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});

					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
							$('.actualizarimg').trigger('click');
							$('#setProductimg')[0].reset();
						},
						error: function(error){
							alert(error);
						}
					});
				});			
			}
		}
	})	
	.directive('detailAmenidad', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/detail-amenidad.html',
			controller: function($document){
				function readURL(input){
					if (input.files && input.files[0]) {
						var reader = new FileReader();
						reader.onload = function (e) {
					 		$('#imageSelector').attr('src', e.target.result);
			 			}
						reader.readAsDataURL(input.files[0]);
	 				}
				}
				$('#setImage').change(function(){
					readURL(this);
				});
				$('#changeImage').submit(function(){
					var productId = $('#productId').val();
					var ajaxData = new FormData();
					ajaxData.append("productId",productId);
					ajaxData.append("namefunction","modifyProductImage");
					$.each($("#changeImage input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
							location.href = "#/amenidad";
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#changeAmenidad').submit(function(){
					var data = $(this).serialize();
					var namefunction = "modifyAmenidad";
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							data: data,
							namefunction: namefunction
						},
						success: function(result){
							location.href = "#/amenidad";
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})	
	.directive('detailAmenidad2', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/detail-amenidad2.html',
			controller: function($document){
				$(document).on('click', '.deleteAmenidad', function(){
					var idAmenidad = $(this).attr('data-id');
					var namefunction = 'removeAmenidadimg';
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							idAmenidad: idAmenidad
						},
						success: function(result){
							$('.actualizarimg').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#setAmenidadimg').submit(function(){
					var ajaxData = new FormData();
					ajaxData.append("namefunction","addNewAmenidadimg");
					ajaxData.append("data",$(this).serialize());
					$.each($("#setAmenidadimg input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});

					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
							$('.actualizarimg').trigger('click');
							$('#setAmenidadimg')[0].reset();
						},
						error: function(error){
							alert(error);
						}
					});
				});			
			}
		}
	})
	.directive('detailEspacio', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/detail-espacio.html',
			controller: function($document){
				function readURL(input){
					if (input.files && input.files[0]) {
						var reader = new FileReader();
						reader.onload = function (e) {
					 		$('#imageSelector').attr('src', e.target.result);
			 			}
						reader.readAsDataURL(input.files[0]);
	 				}
				}
				$('#setImage').change(function(){
					readURL(this);
				});
				$('#changeImage').submit(function(){
					var productId = $('#productId').val();
					var ajaxData = new FormData();
					ajaxData.append("productId",productId);
					ajaxData.append("namefunction","modifyProductImage");
					$.each($("#changeImage input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
							location.href = "#/amenidad";
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#changeEspacio').submit(function(){
					var data = $(this).serialize();
					var namefunction = "modifyEspacios";
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							data: data,
							namefunction: namefunction
						},
						success: function(result){
							location.href = "#/espacios";
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})	
	.directive('detailEspacio2', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/detail-espacio2.html',
			controller: function($document){
				$(document).on('click', '.deleteEspacio', function(){
					var idEspacio = $(this).attr('data-id');
					var namefunction = 'removeEspaciosimg';
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							idEspacio: idEspacio
						},
						success: function(result){
							$('.actualizarimg').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#setEspaciosimg').submit(function(){
					var ajaxData = new FormData();
					ajaxData.append("namefunction","addNewEspaciosimg");
					ajaxData.append("data",$(this).serialize());
					$.each($("#setEspaciosimg input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});

					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
							$('.actualizarimg').trigger('click');
							$('#setEspaciosimg')[0].reset();
						},
						error: function(error){
							alert(error);
						}
					});
				});			
			}
		}
	})
	.directive('listCategory', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/list-category.html',
			controller: function($document){
				$(document).on('click', '.deleteCategory', function(){
					var idCategory = $(this).attr('data-id');
					var namefunction = 'removeCategory';
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							idCategory: idCategory
						},
						success: function(result){
							if(result.length>0){
								$('.alertDeleteCat').css({'display' : 'block'});
								setTimeout(function(){
									$('.alertDeleteCat').css({'display' : 'none'});
								},5000);
							}else{
								$('.clickUpdate').trigger('click');
							}
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#addCategory').submit(function(){
					var data = $(this).serialize();
					var namefunction = "addCategory";
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							data: data,
							namefunction: namefunction
						},
						success: function(result){
							$('.clickUpdate').trigger('click');
							$('#addCategory')[0].reset();
						},
						error: function(error){
							alert(error);
						}
					});
				});
			}
		}
	})
	.directive('listSlider', function(){
		return {
			restrict: 'E',
			templateUrl: './../partials/list-slider.html',
			controller: function($document){
				$(document).on('click', '.deleteSlider', function(){
					var idSlider = $(this).attr('data-id');
					var namefunction = 'removeSlider';
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: {
							namefunction: namefunction,
							idSlider: idSlider
						},
						success: function(result){
							$('.clickUpdate').trigger('click');
						},
						error: function(error){
							alert(error);
						}
					});
				});
				$('#setSlider').submit(function(){
					var ajaxData = new FormData();
					ajaxData.append("namefunction","addSlider");
					ajaxData.append("data",$(this).serialize());
					$.each($("#setSlider input[type=file]"), function(i,obj){
						$.each(obj.files, function(j, file){
							ajaxData.append('setImage['+j+']', file);
						})
					});
					$.ajax({
						url: "../php/functions.php",
						type: "POST",
						data: ajaxData,
						processData: false,  // tell jQuery not to process the data
						contentType: false,   // tell jQuery not to set contentType
						success: function(result){
						$('.clickUpdate').trigger('click');
						$('#setSlider')[0].reset();
						},
						error: function(error){
							alert(error);
						}
					});
				});			
			}
		}
	})		
})();
