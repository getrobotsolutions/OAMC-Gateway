jQuery(function () {
    jQuery('#myTab a:first').tab('show')
})

$(document).ready(function(){
				//Change to English
              //$('#change-us').click(function(){

           		$('#txt0').text("First Floor");
                $('#txt1').text("Ground Floor");
                $('#txt2').text("Second Floor");

              //});


              	//Change to English
              $('#change-ar').click(function(){

              	$('#txt0').text("قبو");
                $('#txt1').text("الطابق الأرضي");
                $('#txt2').text("الطابق الثاني");

              });

	});