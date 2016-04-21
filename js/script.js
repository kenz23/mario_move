$(function(){
	var i=0;
	var saut=50;
	var x=0;
	$(this).keydown(function(event){
		switch( event.which ){

			case 39://mario move right
			if(i<750){i+=20;}
			$(".mario").css("margin-left", i+"px");
			$(".mario").removeClass("switch"); //change the class(remove)switch direction
			
			if(i>=750){
				if (x<2500){x+=10;}
				$(".background").css("right", x+"px");	//background passing			
			}
			break;
				 
			case 37://mario move left
			if(i>0){i-=20;}
			$(".mario").css("margin-left", i+"px");
			$(".mario").addClass("switch");//change the class(add) switch direction
			break;
				
			case 38://mario jamp
				$('#audio')[0].play();
				$(".mario").animate({marginTop:"-="+saut+"px"}, 100).animate({marginTop:"+="+saut+"px"}, 100);
			break;
		} 
	});
});


