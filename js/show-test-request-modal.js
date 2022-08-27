 var isTested = false;
 
 $("document").ready(function(){
      setTimeout(function() {
		  if (!isTested) {
			$('#testRequestModal').modal('show'); // set command for show 
		  }
      }, 5500);
 });
 
 function closeTestRequestModal() {
	$('#testRequestModal').modal('hide');
 }
 
 function alreadyTested() {
	isTested = true;
 }