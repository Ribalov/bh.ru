$(document).ready(function(){

/*$(window).load(function () {
	var wHeight = $(window).height();
	var navHeight = $('.navbar').height();
	var queryHeight = $('.queryH').height();
	var filterHeight = $('.filterHeight').height();	
	var tableMain = wHeight - navHeight - queryHeight - filterHeight-65;
	$('.tableHeight').height(tableMain);
}); */

$(window).load(function () {
	$('.tableHeight').height($(window).height() - $(".tableHeight").offset().top);
}); 

	
$(window).resize(function () {
	$('.tableHeight').height($(window).height() - $(".tableHeight").offset().top);
}); 	


/*scroll	
$(window).scroll(function(){
    var aTop = $(".tableHeight").offset().top;
    if($(this).scrollTop() <=aTop){
		$('.tableHeight').height($(window).height())-aTop;
    }	
});	
end scroll*/	
	 
});