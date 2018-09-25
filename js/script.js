
$(document).ready(function(){
   $('#menu-button').click(function(){
      $('#menu').stop().slideToggle(700);
   }); 
   
   
  
		$( "#right-control" ).click(function() {
			 if (!$("div.green_box").hasClass("overlayed")) {
					$("div.green_box").addClass("overlayed");
				$("#overlay").css({"right":"0", "width":"63.8%"});
			}
			console.log("dupa");
		});

		$( "#left-control" ).click(function() {
			 if ($("div.green_box").hasClass("overlayed")) {
					$("div.green_box").removeClass("overlayed");
				$("#overlay").css({"right":"63.8%", "width":"38%"});
			}
		});
	
});  


