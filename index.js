$(document).ready(function() {
	$('#my_form').keydown(function(e) {
		var name=$("#name").val();
		var email=$("#email").val();
		var message=$("#message").val();
		var key = e.which;
		 if (key == 13) {		
			if (name ==""){
				alert("Name is Missing");
				}
			else if (email ==""){
				alert("Email Id is missing");
				}
			else if (message ==""){
				alert("Message is missing");
				}
			else{	
				//alert("Form Submitting ...!!");
				$('#my_form').submit();
				a1();

				}
			return false;
		}

	 });
	  $("#v1").click(function(){
	 	$("#v").slideToggle(500);
	 });
	 		
});