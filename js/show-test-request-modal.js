 $("document").ready(function(){
      setTimeout(function() {
         $('#testRequestModal').modal('show'); // set command for show 
      }, 5500);
 });
 
 function closeTestRequestModal() {
	$('#testRequestModal').modal('hide');
 }